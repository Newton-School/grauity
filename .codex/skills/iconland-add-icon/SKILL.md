---
name: iconland-add-icon
description: Use when the user wants to add a new icon to grauity.
---

# Iconland Add Icon Pair

Use this skill when the user gives two SVG files for one icon (normal + filled) and wants the icon added end-to-end.

## Required inputs

-   Exactly two SVG file paths.
-   Icon `Type` in PascalCase (example: `Alert`, `Media`, `Docs`).
-   Icon `name` in kebab-case (example: `exclamation-circle`).

Uploaded SVG filenames can be anything. The script renames them to the required iconland seed names automatically.

## Command

```bash
bash .codex/skills/iconland-add-icon/scripts/add-icon-pair.sh \
  <Type> \
  <name> \
  /absolute/path/normal.svg \
  /absolute/path/filled.svg
```

## What the script does

1. Validates `<Type>` and `<name>`, then renames/copies the uploaded SVGs into iconland seeds (`Type_name.svg` and `Type_name-filled.svg`).
2. Ensures `iconland` submodule is clean before making changes.
3. Ensures `iconland` is on its default remote branch (if detached, it checks out tracked default branch).
4. Copies both files to `iconland/seeds/`.
5. Commits and pushes the change in `iconland`.
6. Runs `git submodule update --remote --merge iconland` in `grauity`.
7. Runs `npm run build-icons`.
8. Runs `npm run lint`.

## Notes

-   This script intentionally does not create a grauity commit; it leaves all resulting repo changes for review.
-   If the user does not provide `Type` or `name`, ask for them before running the script.
