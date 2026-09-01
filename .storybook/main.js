export default {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    // Browser tab title. Storybook appends " - Storybook" to it, and falls back
    // to its own package name when this is unset.
    title: 'gra.UI.ty',

    // Copied to the root of the build, so they are served from
    // https://grauity.newtonschool.co/<file>. Storybook also reads favicon.svg
    // from here and uses it instead of its own.
    staticDirs: ['../public'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    docs: {
        autodocs: true,
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
    async babel(config) {
        return {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-flow',
                '@babel/preset-typescript',
            ],
        };
    },
};
