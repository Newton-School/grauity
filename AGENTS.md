# AGENTS.md instructions for this repository

## Skills
A skill is a set of local instructions stored in a `SKILL.md` file.

### Available skills
- `iconland-add-icon`: Use when the user wants to add a new icon to grauity.  
  file: `.codex/skills/iconland-add-icon/SKILL.md`

### How to use skills
- Trigger rules: If the user names a skill (`$SkillName` or plain text) or the task clearly matches a skill description, use that skill for the turn.
- Missing or blocked skill: If a named skill path cannot be read, state that briefly and continue with the best fallback.
- Progressive disclosure:
  1. Open only the selected skill `SKILL.md`.
  2. Resolve relative paths from the skill directory first.
  3. Load only referenced files needed for the task.
  4. Prefer running skill scripts over re-implementing them.
