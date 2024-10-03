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
</p>

## About gra.UI.ty

Inspired by the natural laws that guide the cosmos, **gra.UI.ty** (pronounced "gravity") is a React-based UI component library designed to harmonize simplicity and functionality. Our mission is to provide developers and designers with the tools to create intuitive and aesthetically pleasing user interfaces.

### Philosophy

Like gravity itself, the principles of great design are universal, omnipresent, yet often unobserved. With gra.UI.ty, we aim to tap into these fundamental elements to craft UI components that not only look stunning but feel inherently right.

### Component Naming Convention

gra.UI.ty components should be prefixed by *NS*.
For example, `NSButton`, `NSTable`, `NSInput`

### Alias

gra.UI.ty is also affectionately known as **grauity**, **graUIty** or simply as **gravity**

## Key Features

-   **Comprehensive Component Set:** From buttons and dialogs to complex data grids and sliders, gra.UI.ty has everything you need. (Coming soon!)
-   **Semantic and Mindful Components:** Our components are more than just divs. Each one is thoughtfully designed with semantic HTML for better accessibility and SEO. We aim to ensure that each component has a clear and meaningful structure.
-   **Modular and Extensible:** Integrate seamlessly with your projects, adding only what you need without bloating your codebase.
-   **Theming and Customization:** Easily adapt the components to match your brand or project’s aesthetic. (Coming soon!)
-   **Accessibility First:** Built with accessibility in mind, ensuring that your applications are usable by everyone. (We'll get there...)

## Setup gra.UI.ty to make it your own!

### Developing Components

To develop components gra.UI.ty locally, follow these steps:

```bash
# Install all packages via NPM in grauity
grauity$: npm install

# Initialize submodules for iconland
grauity$: git submodule init
grauity$: git submodule update --recursive

# Build icons when running for first time
grauity$: npm run build-icons

# To run storybook, run this command in grauity
grauity$: npm run storybook
# Then head to localhost:6006

# To build storybook, run this command in grauity
grauity$: npm run build-storybook
```

### Integrating locally with newton-web

To integrate grauity locally with newton-web, follow these steps:

```bash
# Firstly, install all packages via NPM in grauity
grauity$: npm install

# To build grauity, run this command
grauity$: npm run build

# Then, run these commands in newton-web:
newton-web$: npm install ../grauity
# This is assuming `grauity` and `newton-web` share same parent folder

# Now, link react, react-dom from grauity to newton-web:
newton-web$: npm link ../gruity/node_modules/react ../gruity/node_modules/react-dom --legacy-peer-deps

# Finally, run newton-web
newton-web$: npm run dev
```

After you have made changes in grauity, build it.

```bash
grauity$: npm run build
```

If changes are not showing up even after rebuilding, you may 
have to delete `newton-web/node_modules/@newtonschool/grauity` 
and install it again using

```bash
newton-web$: npm i ../grauity --legacy-peer-deps
newton-web$: npm run dev
```

Then simply import components you want from `@newtonschool/grauity` in `newton-web` like so:

```js
import { NSButton, BUTTON_VARIANTS_ENUM } from "@newtonschool/grauity";
```

And use it as you wish

```js
import { NSButton } from '@newtonschool/grauity';

export const MyComponent = () => (
  <NSButton
      variant='primary'
      onClick={() => {
          setShowFormErrors(true);
      }}
  >
    Click me!
  </NSButton>
)
```

## How to's

### Add icons
Adding new icons is easy. Design team to provide `.svg` files for new icons, and they are to be added to the [./iconland/seeds/](iconland/seeds) directory. Then follow these steps:

#### 1. Generate icons
```bash
grauity$: npm run build-icons:generate
```

#### 2. Optimise icons (from [[iconland/seeds/]](iconland/seeds/) to [iconland/optimised/](iconland/optimised/) )
```bash
grauity$: npm run build-icons:optimize
```

#### 3. Build font icons from optimised icons
```bash
grauity$: npm run build-icons
```

### Use icons in newton-web
To use grauity icons, add the following import in `global-styles.scss` or any root-level CSS/SCSS file. Make sure CSS/SCSS loaders are setup properly in your app.

```js
@import '~@newtonschool/grauity/dist/css/index.scss';
```
