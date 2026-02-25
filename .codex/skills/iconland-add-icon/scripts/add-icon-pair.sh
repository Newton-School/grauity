#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  add-icon-pair.sh <Type_name.svg> <Type_name-filled.svg>

Behavior:
  1) Validates naming convention.
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

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

[[ $# -eq 2 ]] || {
  usage
  die "Expected exactly 2 SVG file paths"
}

NORMAL_OR_FILLED_A="$1"
NORMAL_OR_FILLED_B="$2"

[[ -f "$NORMAL_OR_FILLED_A" ]] || die "File not found: $NORMAL_OR_FILLED_A"
[[ -f "$NORMAL_OR_FILLED_B" ]] || die "File not found: $NORMAL_OR_FILLED_B"

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
[[ -n "$REPO_ROOT" ]] || die "Run this command inside the grauity repository"
cd "$REPO_ROOT"

[[ -d "iconland/seeds" ]] || die "Expected iconland submodule at iconland/seeds"

ICONLAND_STATUS="$(git -C iconland status --porcelain)"
[[ -z "$ICONLAND_STATUS" ]] || die "iconland has uncommitted changes. Commit/stash them first."

PARSED_A="$(parse_icon_filename "$(basename "$NORMAL_OR_FILLED_A")")"
PARSED_B="$(parse_icon_filename "$(basename "$NORMAL_OR_FILLED_B")")"

IFS=':' read -r VARIANT_A COLLECTION_A NAME_A _ <<<"$PARSED_A"
IFS=':' read -r VARIANT_B COLLECTION_B NAME_B _ <<<"$PARSED_B"

[[ "$VARIANT_A" != "$VARIANT_B" ]] || die "Provide one normal and one filled SVG"
[[ "$COLLECTION_A" == "$COLLECTION_B" ]] || die "Collection mismatch: '$COLLECTION_A' vs '$COLLECTION_B'"
[[ "$NAME_A" == "$NAME_B" ]] || die "Icon name mismatch: '$NAME_A' vs '$NAME_B'"

COLLECTION="$COLLECTION_A"
ICON_NAME="$NAME_A"
ICON_KEY="${COLLECTION}_${ICON_NAME}"

if [[ "$VARIANT_A" == "normal" ]]; then
  NORMAL_SRC="$NORMAL_OR_FILLED_A"
  FILLED_SRC="$NORMAL_OR_FILLED_B"
else
  NORMAL_SRC="$NORMAL_OR_FILLED_B"
  FILLED_SRC="$NORMAL_OR_FILLED_A"
fi

NORMAL_DEST="iconland/seeds/${ICON_KEY}.svg"
FILLED_DEST="iconland/seeds/${ICON_KEY}-filled.svg"

[[ ! -e "$NORMAL_DEST" ]] || die "Destination already exists: $NORMAL_DEST"
[[ ! -e "$FILLED_DEST" ]] || die "Destination already exists: $FILLED_DEST"

ICONLAND_BRANCH="$(ensure_iconland_branch)"

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
