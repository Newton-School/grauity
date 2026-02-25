---
name: iconland-add-icon
description: Use when the user wants to add a new icon to grauity from exactly two SVGs (`Type_name.svg` and `Type_name-filled.svg`) and run the full workflow: add to `iconland`, push submodule changes, update submodule pointer, build icons, and run lint.
---

# Iconland Add Icon Pair

Use this skill when the user gives two SVG files for one icon (normal + filled) and wants the icon added end-to-end.

## Required inputs

- Exactly two SVG file paths.
- Filenames must follow:
  - `Type_name.svg`
  - `Type_name-filled.svg`

Where:
- `Type` is PascalCase collection name (example: `Alert`, `Media`, `Docs`).
- `name` is kebab-case icon name.

## Command

```bash
bash .agents/skills/iconland-add-icon/scripts/add-icon-pair.sh \
  /absolute/path/Type_name.svg \
  /absolute/path/Type_name-filled.svg
```

## What the script does

1. Validates both filenames and ensures they represent the same icon key.
2. Ensures `iconland` submodule is clean before making changes.
3. Ensures `iconland` is on its default remote branch (if detached, it checks out tracked default branch).
4. Copies both files to `iconland/seeds/`.
5. Commits and pushes the change in `iconland`.
6. Runs `git submodule update --remote --merge iconland` in `grauity`.
7. Runs `npm run build-icons`.
8. Runs `npm run lint`.

## Notes

- This script intentionally does not create a grauity commit; it leaves all resulting repo changes for review.
- If the user provided files are missing or incorrectly named, stop and ask for corrected files.
