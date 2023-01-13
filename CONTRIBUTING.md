# Contributing

The following is a set of guidelines for contributing to grauity. Please spend several minutes reading these guidelines
before you create an issue or pull request.

## Development Workflow

After cloning antd, run npm install to fetch its dependencies. Then, you can run several commands:

### Contributing to the components

1. `npm run storybook` will start a storybook server where you can test the changes to your components.

| Category | File/Folder name writing format | Examples
| --- | -- | ---
| First Level Folder | kebab-case | `components`, `utils`, `fonts`, `helpers`, `elements`
| Component Folder | PascalCase | `Button`, `Icon`
| Components File (with tsx) | PascalCase.tsx | `Button.tsx`, `Icon.tsx`
| Stories Component Folder | PascalCase | `Button`, `Icon`
| Stories File | PascalCase.stories.tsx | `Button.stories.tsx`, `Icon.stories.tsx`, `index.stories.tsx`
| Stories Playground Source File | example.source.tsx | `example.source.tsx`
| Util File (with ts) | camelCase.tsx | `index.ts`, `classNameBuilders.ts`, `index.ts`

### Changes in the icons

1. If you want to change some icons, you just need to add/edit/remove the icons in the `iconland/seeds` folder.

The format of the icon file name will be `tag1|tag2|tag3|...|tagN|icon-name.svg`.

| Category  | Writing format | Examples                                                   |
|-----------|----------------|------------------------------------------------------------|
| tagN      | camelCase      | `usersAndPeople`, `buildings`, `arrows`, `audioAndVideo`   |
| icon-name | kebab-case     | `user-profile`, `user-settings`, `user-add`, `user-delete` |

2. `npm run build-icons` to build the icons specifically.

## Building Workflow

## Releasing Workflow
