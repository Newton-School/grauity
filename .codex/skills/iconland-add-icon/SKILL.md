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

## Required environment

-   `SLACK_BOT_TOKEN` (only required environment variable).
-   `gh` CLI installed/authenticated and write access to `grauity` + `iconland`.
-   Slack workspace contains channel `#developement` and user group `@core-dev`.

## Command

```bash
# Run from the grauity repo root.
bash .codex/skills/iconland-add-icon/scripts/add-icon-pair.sh \
  <Type> \
  <name> \
  /absolute/path/normal.svg \
  /absolute/path/filled.svg
```

## What the script does

1. Initializes/syncs `iconland` submodule first (`git submodule sync -- iconland` + `git submodule update --init --recursive iconland`).
2. Validates `<Type>` and `<name>`, then copies uploaded SVGs into iconland seeds (`Type_name.svg` and `Type_name-filled.svg`).
3. Checks out `iconland/main`, commits the new pair, and pushes directly to `origin/main`.
4. Runs `npm run build-icons`.
5. Runs `npm run lint`.
6. Creates a `grauity` PR branch, commits all resulting changes, pushes the branch, and opens a PR with `gh`.
7. Sends Slack notification with the PR link through Slack Web API (`chat.postMessage`) using `rich_text` blocks.
8. Resolves `@core-dev` to Slack ID before posting so mention works as a real mention.
9. Keeps message content exactly:

```text
@core-dev Please review and merge
<pr_link>
```

## Notes

-   If the user does not provide `Type` or `name`, ask for them before running the script.
-   The simplified flow is fixed to `main` as PR base branch and `#developement` for Slack posting.
