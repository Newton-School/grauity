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

Uploaded SVG filenames can be anything. Always rename to the required iconland seed names when copying.

## Workflow

1. Validate inputs before changing files.
    - Ask for missing `Type` or `name`.
    - Reject invalid `Type` values unless they match `^[A-Z][A-Za-z0-9]*$`.
    - Reject invalid `name` values unless they match `^[a-z0-9]+(-[a-z0-9]+)*$`.
    - Confirm both SVG paths exist.
2. Set working variables in the repository root.
    ```bash
    REPO_ROOT="$(git rev-parse --show-toplevel)"
    cd "$REPO_ROOT"
    ICON_KEY="${TYPE}_${NAME}"
    NORMAL_DEST="iconland/seeds/${ICON_KEY}.svg"
    FILLED_DEST="iconland/seeds/${ICON_KEY}-filled.svg"
    ```
3. Initialize and sync the `iconland` submodule on `master`.
    ```bash
    git submodule update --init iconland
    git -C iconland fetch origin master
    if git -C iconland show-ref --verify --quiet refs/heads/master; then
      git -C iconland checkout master
    else
      git -C iconland checkout -b master origin/master
    fi
    git -C iconland pull --ff-only origin master
    ```
4. Ensure destination and submodule state are safe.
    - Stop if either destination file already exists.
    - Stop if `git -C iconland status --porcelain` is not empty.
    - Resolve blockers instead of forcing destructive resets.
5. Copy SVGs to the required iconland seed names and stage them in `iconland`.
    ```bash
    cp "$NORMAL_SRC" "$NORMAL_DEST"
    cp "$FILLED_SRC" "$FILLED_DEST"
    git -C iconland add "seeds/${ICON_KEY}.svg" "seeds/${ICON_KEY}-filled.svg"
    ```
6. Commit and push in `iconland`.
    ```bash
    git -C iconland commit -m "feat(icons): add ${ICON_KEY} icon pair"
    git -C iconland push origin master
    ```
7. Update the submodule pointer in `grauity`, then regenerate and lint.
    ```bash
    git submodule update --remote --merge iconland
    npm run build-icons
    npm run lint
    ```
    - If build or lint fails, debug and apply the smallest safe fix, then rerun.
8. Review `grauity` changes and open a PR.
    - Inspect `git status` and verify only intended files changed.
    - Create a branch using the repository branch naming convention.
    - Commit generated updates and the submodule pointer.
    - Push and open a PR.

## Main skill responsibilities

1. Execute the full manual workflow above to perform the iconland update plus local generation/lint steps.
2. Review all resulting `grauity` changes (submodule pointer + generated icon outputs), create a `grauity` branch using the repository branch naming convention, commit, push, and open a PR.
3. For Slack connector checks, first look for `SLACK_BOT_TOKEN_GRAUITY_CODEX_CONNECTOR` in the environment; if it is not present, use `SLACK_BOT_TOKEN` as fallback.
4. If a Slack connector is available, post to `#development` using this decision flow:
    - If the global `slack-bot` skill is available in the current session, use that skill to send the message.
    - Otherwise, use Slack Web API directly and resolve IDs before posting:
        - Resolve channel name to channel ID.
        - Resolve user mentions to user IDs and format them as `<@U12345>`.
        - Resolve user group mentions to group IDs and format them as `<!subteam^S12345|@group-handle>`.
        - Format links as `<https://example.com|label>`.
        - Keep rich text in Slack mrkdwn format (`*bold*`, `_italic_`, `~strike~`, `` `code` ``, fenced code blocks).
        - Send the final message with `chat.postMessage` after all mention/link substitutions.
5. Use this message template:

```text
@core-dev Please review and merge
<pr_link>
```
