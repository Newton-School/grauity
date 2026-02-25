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

1. Initializes and pulls the `iconland` submodule on `master`.
2. Adds the required icon files to `iconland/seeds/`.
3. Commits and pushes to `master` in the `iconland` remote repository.
4. Fetches the latest `iconland` submodule update into `grauity`.
5. Runs `npm run build-icons` and `npm run lint`.

## Notes

-   This script intentionally does not create a grauity commit.
-   If the user does not provide `Type` or `name`, ask for them before running the script.

## Main skill responsibilities

1. Run the script command above to perform the iconland update + local generation/lint steps.
2. Review all resulting `grauity` changes (submodule pointer + generated icon outputs), create a `grauity` branch using the repository branch naming convention, commit, push, and open a PR.
3. If a Slack connector is available, send this message to `#developement` and resolve mentions to Slack user IDs before sending so mentions render in Slack:

```text
@core-dev Please review and merge
<pr_link>
```
