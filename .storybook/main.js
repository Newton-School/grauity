export default {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],

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
};
