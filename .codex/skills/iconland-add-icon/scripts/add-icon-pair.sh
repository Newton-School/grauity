#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage:
  add-icon-pair.sh <Type> <name> <normal.svg> <filled.svg>
USAGE
}

die() {
  echo "Error: $*" >&2
  exit 1
}

validate_type() {
  local value="$1"
  [[ "$value" =~ ^[A-Z][A-Za-z0-9]*$ ]] || die "Invalid Type '$value'. Expected PascalCase (example: Alert, Media, Docs)"
}

validate_name() {
  local value="$1"
  [[ "$value" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]] || die "Invalid name '$value'. Expected kebab-case (example: exclamation-circle)"
}

[[ "${1:-}" == "-h" || "${1:-}" == "--help" ]] && {
  usage
  exit 0
}

[[ $# -eq 4 ]] || {
  usage
  die "Expected 4 arguments: <Type> <name> <normal.svg> <filled.svg>"
}

TYPE="$1"
NAME="$2"
NORMAL_SRC="$3"
FILLED_SRC="$4"

validate_type "$TYPE"
validate_name "$NAME"

[[ -f "$NORMAL_SRC" ]] || die "File not found: $NORMAL_SRC"
[[ -f "$FILLED_SRC" ]] || die "File not found: $FILLED_SRC"

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || true)"
[[ -n "$REPO_ROOT" ]] || die "Run this command inside the grauity repository"
cd "$REPO_ROOT"

ICON_KEY="${TYPE}_${NAME}"
NORMAL_DEST="iconland/seeds/${ICON_KEY}.svg"
FILLED_DEST="iconland/seeds/${ICON_KEY}-filled.svg"

# Step 1: Initialize and pull the iconland submodule on master.
git submodule update --init iconland
git -C iconland fetch origin master
if git -C iconland show-ref --verify --quiet refs/heads/master; then
  git -C iconland checkout master
else
  git -C iconland checkout -b master origin/master
fi
git -C iconland pull --ff-only origin master

# Step 2: Add the required icon files into iconland/seeds.
[[ -d "iconland/seeds" ]] || die "Expected iconland submodule at iconland/seeds"
[[ ! -e "$NORMAL_DEST" ]] || die "Destination already exists: $NORMAL_DEST"
[[ ! -e "$FILLED_DEST" ]] || die "Destination already exists: $FILLED_DEST"
ICONLAND_STATUS="$(git -C iconland status --porcelain)"
[[ -z "$ICONLAND_STATUS" ]] || die "iconland has uncommitted changes. Commit/stash them first."
cp "$NORMAL_SRC" "$NORMAL_DEST"
cp "$FILLED_SRC" "$FILLED_DEST"
git -C iconland add "seeds/${ICON_KEY}.svg" "seeds/${ICON_KEY}-filled.svg"

# Step 3: Commit and push to master in the iconland remote repository.
git -C iconland commit -m "feat(icons): add ${ICON_KEY} icon pair"
git -C iconland push origin master

# Step 4: Fetch the latest submodule pointer in grauity.
git submodule update --remote --merge iconland

# Step 5: Run icon build and lint in grauity.
npm run build-icons
npm run lint
