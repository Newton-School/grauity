#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  add-icon-pair.sh <Type> <name> <normal.svg> <filled.svg>

Required environment:
  - SLACK_BOT_TOKEN

Behavior:
  1) Initialize/sync iconland submodule first.
  2) Add icon pair to iconland/seeds and push to iconland/main.
  3) Run npm run build-icons and npm run lint.
  4) Create a grauity branch, commit, push, and open a PR to main.
  5) Post this Slack message in #developement as rich_text with real mention:
     @core-dev Please review and merge
     <pr_link>
USAGE
}

die() {
  echo "Error: $*" >&2
  exit 1
}

ensure_cmd() {
  local cmd="$1"
  command -v "$cmd" >/dev/null 2>&1 || die "Missing required command: $cmd"
}

validate_collection() {
  local value="$1"
  [[ "$value" =~ ^[A-Z][A-Za-z0-9]*$ ]] || die "Invalid Type '$value'. Expected PascalCase."
}

validate_icon_name() {
  local value="$1"
  [[ "$value" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]] || die "Invalid name '$value'. Expected kebab-case."
}

ensure_iconland_submodule() {
  git submodule sync -- iconland
  git submodule update --init --recursive iconland
}

ensure_clean_repo() {
  local target="$1"
  local status
  status="$(git -C "$target" status --porcelain)"
  [[ -z "$status" ]] || die "$target has uncommitted changes. Commit/stash them first."
}

ensure_iconland_origin_access() {
  local origin_url
  local https_url

  origin_url="$(git -C iconland remote get-url origin)"
  if git -C iconland ls-remote --exit-code origin HEAD >/dev/null 2>&1; then
    return 0
  fi

  if [[ "$origin_url" =~ ^git@github\.com:(.+)\.git$ ]]; then
    https_url="https://github.com/${BASH_REMATCH[1]}.git"
    git -C iconland remote set-url origin "$https_url"
    git -C iconland ls-remote --exit-code origin HEAD >/dev/null 2>&1 && return 0
  fi

  die "Cannot access iconland origin."
}

prepare_grauity_main() {
  git fetch origin main
  if git show-ref --verify --quiet refs/heads/main; then
    git switch main
  else
    git switch --track -c main origin/main
  fi
  git pull --ff-only origin main
}

prepare_iconland_main() {
  git -C iconland fetch origin main
  if git -C iconland show-ref --verify --quiet refs/heads/main; then
    git -C iconland switch main
  else
    git -C iconland switch --track -c main origin/main
  fi
  git -C iconland pull --ff-only origin main
}

slack_api() {
  local endpoint="$1"
  local payload="$2"
  curl -fsS -X POST "https://slack.com/api/${endpoint}" \
    -H "Authorization: Bearer ${SLACK_BOT_TOKEN}" \
    -H 'Content-type: application/json; charset=utf-8' \
    --data "$payload"
}

resolve_channel_id() {
  local response
  local channel_id

  response="$(slack_api "conversations.list" '{"types":"public_channel,private_channel","exclude_archived":true,"limit":1000}')"
  [[ "$(echo "$response" | jq -r '.ok')" == "true" ]] || die "Slack conversations.list failed: $(echo "$response" | jq -r '.error // "unknown_error"')"

  channel_id="$(
    echo "$response" | jq -r '
      .channels[]
      | select((.name // "" | ascii_downcase) == "developement")
      | .id
    ' | head -n 1
  )"
  [[ -n "$channel_id" ]] || die "Slack channel #developement not found."
  echo "$channel_id"
}

resolve_core_dev_usergroup_id() {
  local response
  local group_id

  response="$(slack_api "usergroups.list" '{}')"
  [[ "$(echo "$response" | jq -r '.ok')" == "true" ]] || die "Slack usergroups.list failed: $(echo "$response" | jq -r '.error // "unknown_error"')"

  group_id="$(
    echo "$response" | jq -r '
      .usergroups[]
      | select((.handle // "" | ascii_downcase) == "core-dev")
      | .id
    ' | head -n 1
  )"
  [[ -n "$group_id" ]] || die "Slack user group @core-dev not found."
  echo "$group_id"
}

send_slack_message() {
  local pr_url="$1"
  local channel_id
  local core_dev_group_id
  local payload
  local response

  channel_id="$(resolve_channel_id)"
  core_dev_group_id="$(resolve_core_dev_usergroup_id)"

  payload="$(
    jq -n \
      --arg channel "$channel_id" \
      --arg usergroup_id "$core_dev_group_id" \
      --arg pr_url "$pr_url" \
      --arg fallback "@core-dev Please review and merge ${pr_url}" '
      {
        channel: $channel,
        text: $fallback,
        blocks: [
          {
            type: "rich_text",
            elements: [
              {
                type: "rich_text_section",
                elements: [
                  {type: "usergroup", usergroup_id: $usergroup_id},
                  {type: "text", text: " Please review and merge"}
                ]
              },
              {
                type: "rich_text_section",
                elements: [
                  {type: "text", text: "\n"},
                  {type: "link", url: $pr_url, text: $pr_url}
                ]
              }
            ]
          }
        ]
      }'
  )"

  response="$(slack_api "chat.postMessage" "$payload")"
  [[ "$(echo "$response" | jq -r '.ok')" == "true" ]] || die "Slack chat.postMessage failed: $(echo "$response" | jq -r '.error // "unknown_error"')"
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

[[ $# -eq 4 ]] || {
  usage
  die "Expected 4 args: <Type> <name> <normal.svg> <filled.svg>"
}

COLLECTION="$1"
ICON_NAME="$2"
NORMAL_SRC="$3"
FILLED_SRC="$4"

validate_collection "$COLLECTION"
validate_icon_name "$ICON_NAME"
[[ -f "$NORMAL_SRC" ]] || die "File not found: $NORMAL_SRC"
[[ -f "$FILLED_SRC" ]] || die "File not found: $FILLED_SRC"

ensure_cmd git
ensure_cmd npm
ensure_cmd gh
ensure_cmd curl
ensure_cmd jq
[[ -n "${SLACK_BOT_TOKEN:-}" ]] || die "SLACK_BOT_TOKEN is required."

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
[[ -n "$REPO_ROOT" ]] || die "Run this command inside the grauity repository"
cd "$REPO_ROOT"

ensure_iconland_submodule
[[ -d "iconland/seeds" ]] || die "Expected iconland submodule at iconland/seeds"

ensure_clean_repo "."
ensure_clean_repo "iconland"

prepare_grauity_main
ensure_iconland_origin_access
prepare_iconland_main

ICON_KEY="${COLLECTION}_${ICON_NAME}"
NORMAL_DEST="iconland/seeds/${ICON_KEY}.svg"
FILLED_DEST="iconland/seeds/${ICON_KEY}-filled.svg"

[[ ! -e "$NORMAL_DEST" ]] || die "Destination already exists: $NORMAL_DEST"
[[ ! -e "$FILLED_DEST" ]] || die "Destination already exists: $FILLED_DEST"

cp "$NORMAL_SRC" "$NORMAL_DEST"
cp "$FILLED_SRC" "$FILLED_DEST"

git -C iconland add "seeds/${ICON_KEY}.svg" "seeds/${ICON_KEY}-filled.svg"
git -C iconland commit -m "feat(icons): add ${ICON_KEY} icon pair"
git -C iconland push origin main

npm run build-icons
npm run lint

BRANCH_SUFFIX="$(printf '%s-%s' "$COLLECTION" "$ICON_NAME" | tr '[:upper:]_' '[:lower:]-')"
PR_BRANCH="iconland-${BRANCH_SUFFIX}-$(date +%Y%m%d%H%M%S)"
git switch -c "$PR_BRANCH"

git add -A
git diff --cached --quiet && die "No grauity changes detected after build/lint."

git commit -m "feat(icons): add ${ICON_KEY} icon pair"
git push -u origin "$PR_BRANCH"

PR_URL="$(
  gh pr create \
    --base main \
    --head "$PR_BRANCH" \
    --title "feat(icons): add ${ICON_KEY} icon pair" \
    --body $'Adds `'"${ICON_KEY}"$'` icon pair to iconland and updates generated grauity icon artifacts.\n\nValidation:\n- npm run build-icons\n- npm run lint'
)"

send_slack_message "$PR_URL"
echo "PR: $PR_URL"
