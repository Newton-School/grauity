<h1 align="center">gra.UI.ty</h1>

<p align="center">
  <img src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/cc6c8f01c5fa4ca481de8f9180eb937a.png" alt="gra.UI.ty Logo 1" width="120" height="120" />
  <img src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/92ae68a3bf55431d8120e92041951482.png" alt="gra.UI.ty Logo 2" width="120" height="120" />
  <img src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c1dd6d6367b34e01a19c458e1656c3c1.png" alt="gra.UI.ty Logo 3" width="120" height="120" />
</p>

<h3 align="center">Discovering the most elegant UI components for your next project</h3>

<p align="center">
  A meticulously crafted UI component library, bringing the simplicity and elegance of nature to your digital interfaces.
  <br />
  Explore the components and start building beautiful, efficient, and user-friendly interfaces with ease.
  <br />
  <br />
  <a href="https://grauity.newtonschool.co"><strong>Explore gra.UI.ty docs »</strong></a>
  <br />
  <br />
  <img src="https://github.com/Newton-School/grauity/actions/workflows/run-tests.yml/badge.svg" alt="Test status badge" />
  <img src="https://github.com/Newton-School/grauity/actions/workflows/build-storybook.yml/badge.svg" alt="Build docs badge" />
  <img src="https://github.com/Newton-School/grauity/actions/workflows/publish-npm-package.yml/badge.svg" alt="Publish to NPM" />
  <div align="center">
    <img src="http://img.shields.io/npm/v/@newtonschool/grauity.svg" alt="NPM version badge" />
    <img src="http://img.shields.io/npm/dm/@newtonschool/grauity.svg" alt="NPM downloads badge" />
    <img src="http://img.shields.io/bundlephobia/min/@newtonschool/grauity.svg" alt="Bundle size badge" />
    <img src="http://img.shields.io/npm/l/@newtonschool/grauity.svg" alt="License badge" />
  </div>
</p>

## About gra.UI.ty

Inspired by the natural laws that guide the cosmos, **gra.UI.ty** (pronounced "gravity") is a React-based UI component library designed to harmonize simplicity and functionality. Our mission is to provide developers and designers with the tools to create intuitive and aesthetically pleasing user interfaces.

### Philosophy

Like the gravitational force itself, the principles of great design are universal, omnipresent, yet often unobserved. With gra.UI.ty, we aim to tap into these fundamental elements to craft UI components that not only look stunning but feel inherently right.

### Component Naming Convention

gra.UI.ty components should be prefixed by _NS_.
For example, `NSButton`, `NSTable`, `NSInput`

### Alias

gra.UI.ty is also affectionately known as **grauity**, **graUIty** or simply as **gravity**

## Setup gra.UI.ty to make it your own!

### Developing Components

To start your development journey in grauity, follow these steps:

```bash
# Install all packages in grauity
npm install

# Update submodules (mainly iconland, the submodule for icons)
git submodule init
git submodule update --recursive

# Build icons (required when running for first time)
npm run build-icons

# Run grauity Storybook
npm run storybook
# Then head to localhost:6006

# To build grauity Storybook docs, run this command in grauity
npm run build-storybook
```

### Integrating locally with your app for side-by-side development & testing

To integrate grauity locally with your app, follow these steps:

```bash
# Install all packages in grauity
grauity$: npm install

# Build grauity
grauity$: npm run build

# Install local version of grauity
your-app$: npm install ../grauity

# Now, link react, react-dom from grauity to your-app:
your-app$: npm link ../grauity/node_modules/react ../grauity/node_modules/react-dom --legacy-peer-deps

# Finally, run your-app
your-app$: npm run dev
```

After you have made changes in grauity, build it.

```bash
grauity$: npm run build
```

If changes are not showing up even after rebuilding, you may
have to delete `your-app/node_modules/@newtonschool/grauity` folder
and install `grauity` again:

```bash
grauity$: npm run build

your-app$: npm install ../grauity
```

Then simply import components you want from `@newtonschool/grauity` in `your-app` like so:

```js
import { NSButton, BUTTON_VARIANTS_ENUM } from '@newtonschool/grauity';
```

And use it as you wish

```js
import { NSButton } from '@newtonschool/grauity';

export const MyComponent = () => (
    <NSButton
        variant="primary"
        onClick={() => {
            setShowFormErrors(true);
        }}
    >
        Click me!
    </NSButton>
);
```

# How to's

## Add new icons from `.svg` files

### 1. Update the iconland submodule in grauity

```bash
grauity$: git submodule update --remote --merge
```

### 2. Add your `.svg` files

To add a new font icon, add your `.svg` files for the new icon in the [./iconland/seeds/](iconland/seeds) directory in the [iconland](./iconland) submodule.

#### 3. Optimize & Generate new font files

```bash
grauity$: npm run build-icons:optimize
grauity$: npm run build-icons:generate
```

_Alternatively_, run the command

```bash
grauity$: npm run build-icons
```

Font files will be created in [ui/fonts](ui/fonts) folder.

## Use theming in your React app

Without theming, only foundational (theme agnostic) CSS variables (found here: [constantGlobalStyle](ui/themes/GlobalStyle.ts)) will be provided.

To enable theming, wrap your components with `GrauityThemeProvider`:

```js
import { GrauityThemeProvider } from '@newtonschool/grauity';

const App = ({ children, ...props }) => {
    return <GrauityThemeProvider>{children}</GrauityThemeProvider>;
};

export default App;
```

Theming can be controlled by providing different class names to your root/local DOM elements, like the body element.

-   Add class `grauity-theme-light` to use the light theme
-   Add class `grauity-theme-dark` to use the dark theme

Now, you will be provided with the foundational as well as themed CSS variables, whose
value will change depending on the theme applied.

These themed CSS variables can be found here:

-   [Dark theme color mapping](./ui/themes/darkThemeConstants.ts)
-   [Light theme color mapping](./ui/themes/lightThemeConstants.ts)

## Use icons in your React app

To use grauity icons, add the following import in `global-styles.scss` or any root-level CSS/SCSS file. Make sure CSS/SCSS loaders are setup properly in your app.

```js
@import '~@newtonschool/grauity/dist/css/index.scss';
```

## Recommended IDE Setup

1. Visual Studio Code (VS Code) is our recommended Integrated Development Environment of choice.
2. Required Extensions:
  - [ESLint (by Microsoft)](https://marketplace.visualstudio.com/items/?itemName=dbaeumer.vscode-eslint) - For JavaScript/TypeScript code linting
  - [Prettier - Code formatter (by Prettier)](https://marketplace.visualstudio.com/items/?itemName=esbenp.prettier-vscode)
  - [Prettier ESLint (by Rebecca Vest)](https://marketplace.visualstudio.com/items/?itemName=rvest.vs-code-prettier-eslint) - For code formatting and ESLint integration
3. Enable format on save:
  - Mac: Code > Preferences > Settings (`cmd` + `,`)
  - Windows/Linux: File > Preferences > Settings (`Ctrl` + `,`)
  - Search for "format on save"
  - Check the box for "Editor: Format On Save"

Alternatively, you can add the following snippet to your `settings.json` file:
```json
{
  "editor.formatOnSave": true
}
```
