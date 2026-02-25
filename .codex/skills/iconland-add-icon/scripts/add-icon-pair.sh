#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  add-icon-pair.sh <Type> <name> <normal.svg> <filled.svg>
  add-icon-pair.sh <Type_name.svg> <Type_name-filled.svg>   # legacy mode

Behavior:
  1) Uses provided <Type> and <name> to rename/copy uploaded SVGs into iconland.
  2) Copies both SVGs into iconland/seeds.
  3) Commits and pushes in the iconland submodule.
  4) Updates submodule pointer in grauity.
  5) Runs: npm run build-icons
  6) Runs: npm run lint
USAGE
}

die() {
  echo "Error: $*" >&2
  exit 1
}

parse_icon_filename() {
  local file_name="$1"

  if [[ "$file_name" =~ ^([A-Z][A-Za-z0-9]*)_([a-z0-9]+(-[a-z0-9]+)*)\.svg$ ]]; then
    echo "normal:${BASH_REMATCH[1]}:${BASH_REMATCH[2]}:$file_name"
    return 0
  fi

  if [[ "$file_name" =~ ^([A-Z][A-Za-z0-9]*)_([a-z0-9]+(-[a-z0-9]+)*)-filled\.svg$ ]]; then
    echo "filled:${BASH_REMATCH[1]}:${BASH_REMATCH[2]}:$file_name"
    return 0
  fi

  die "Invalid SVG filename '$file_name'. Expected Type_name.svg or Type_name-filled.svg"
}

validate_collection() {
  local value="$1"
  [[ "$value" =~ ^[A-Z][A-Za-z0-9]*$ ]] || die "Invalid Type '$value'. Expected PascalCase (example: Alert, Media, Docs)"
}

validate_icon_name() {
  local value="$1"
  [[ "$value" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]] || die "Invalid name '$value'. Expected kebab-case (example: exclamation-circle)"
}

ensure_iconland_branch() {
  local current_branch
  local remote_head
  local target_branch

  current_branch="$(git -C iconland branch --show-current)"

  if [[ -n "$current_branch" ]]; then
    git -C iconland pull --ff-only origin "$current_branch"
    echo "$current_branch"
    return 0
  fi

  remote_head="$(git -C iconland symbolic-ref --quiet --short refs/remotes/origin/HEAD || true)"
  [[ -n "$remote_head" ]] || die "Could not determine iconland default remote branch"

  target_branch="${remote_head#origin/}"

  if git -C iconland show-ref --verify --quiet "refs/heads/$target_branch"; then
    git -C iconland switch "$target_branch"
  else
    git -C iconland switch --track -c "$target_branch" "origin/$target_branch"
  fi

  git -C iconland pull --ff-only origin "$target_branch"
  echo "$target_branch"
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
    echo "origin is SSH and not accessible; switching iconland remote to HTTPS: $https_url"
    git -C iconland remote set-url origin "$https_url"

    if git -C iconland ls-remote --exit-code origin HEAD >/dev/null 2>&1; then
      return 0
    fi
  fi

  die "Cannot access iconland origin. Ensure this environment has permission to read the iconland repository."
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

[[ $# -eq 2 || $# -eq 4 ]] || {
  usage
  die "Expected either 2 args (legacy mode) or 4 args (<Type> <name> <normal.svg> <filled.svg>)"
}

if [[ $# -eq 4 ]]; then
  COLLECTION="$1"
  ICON_NAME="$2"
  NORMAL_SRC="$3"
  FILLED_SRC="$4"

  validate_collection "$COLLECTION"
  validate_icon_name "$ICON_NAME"
else
  NORMAL_OR_FILLED_A="$1"
  NORMAL_OR_FILLED_B="$2"

  [[ -f "$NORMAL_OR_FILLED_A" ]] || die "File not found: $NORMAL_OR_FILLED_A"
  [[ -f "$NORMAL_OR_FILLED_B" ]] || die "File not found: $NORMAL_OR_FILLED_B"

  PARSED_A="$(parse_icon_filename "$(basename "$NORMAL_OR_FILLED_A")")"
  PARSED_B="$(parse_icon_filename "$(basename "$NORMAL_OR_FILLED_B")")"

  IFS=':' read -r VARIANT_A COLLECTION_A NAME_A _ <<<"$PARSED_A"
  IFS=':' read -r VARIANT_B COLLECTION_B NAME_B _ <<<"$PARSED_B"

  [[ "$VARIANT_A" != "$VARIANT_B" ]] || die "Provide one normal and one filled SVG"
  [[ "$COLLECTION_A" == "$COLLECTION_B" ]] || die "Collection mismatch: '$COLLECTION_A' vs '$COLLECTION_B'"
  [[ "$NAME_A" == "$NAME_B" ]] || die "Icon name mismatch: '$NAME_A' vs '$NAME_B'"

  COLLECTION="$COLLECTION_A"
  ICON_NAME="$NAME_A"

  if [[ "$VARIANT_A" == "normal" ]]; then
    NORMAL_SRC="$NORMAL_OR_FILLED_A"
    FILLED_SRC="$NORMAL_OR_FILLED_B"
  else
    NORMAL_SRC="$NORMAL_OR_FILLED_B"
    FILLED_SRC="$NORMAL_OR_FILLED_A"
  fi
fi

[[ -f "$NORMAL_SRC" ]] || die "File not found: $NORMAL_SRC"
[[ -f "$FILLED_SRC" ]] || die "File not found: $FILLED_SRC"

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
[[ -n "$REPO_ROOT" ]] || die "Run this command inside the grauity repository"
cd "$REPO_ROOT"

[[ -d "iconland/seeds" ]] || die "Expected iconland submodule at iconland/seeds"

ICONLAND_STATUS="$(git -C iconland status --porcelain)"
[[ -z "$ICONLAND_STATUS" ]] || die "iconland has uncommitted changes. Commit/stash them first."
ICON_KEY="${COLLECTION}_${ICON_NAME}"

NORMAL_DEST="iconland/seeds/${ICON_KEY}.svg"
FILLED_DEST="iconland/seeds/${ICON_KEY}-filled.svg"

[[ ! -e "$NORMAL_DEST" ]] || die "Destination already exists: $NORMAL_DEST"
[[ ! -e "$FILLED_DEST" ]] || die "Destination already exists: $FILLED_DEST"

ensure_iconland_origin_access
ICONLAND_BRANCH="$(ensure_iconland_branch)"

if ! git -C iconland push --dry-run origin "$ICONLAND_BRANCH" >/dev/null 2>&1; then
  die "Cannot push to iconland/$ICONLAND_BRANCH from this environment. Configure repository write access before running this skill."
fi

echo "Copying SVGs into iconland/seeds..."
cp "$NORMAL_SRC" "$NORMAL_DEST"
cp "$FILLED_SRC" "$FILLED_DEST"

echo "Committing in iconland..."
git -C iconland add "seeds/${ICON_KEY}.svg" "seeds/${ICON_KEY}-filled.svg"
git -C iconland commit -m "feat(icons): add ${ICON_KEY} icon pair"

echo "Pushing iconland/${ICONLAND_BRANCH}..."
git -C iconland push origin "$ICONLAND_BRANCH"

echo "Updating submodule pointer in grauity..."
git submodule update --remote --merge iconland

echo "Building icons..."
npm run build-icons

echo "Running linter..."
npm run lint

echo "Done. Review changes with:"
echo "  git status --short"
