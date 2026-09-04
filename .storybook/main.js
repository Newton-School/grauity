export default {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    // Serve the agent-facing docs from the site root
    // (grauity.newtonschool.co/llms.txt and /AGENTS.md).
    staticDirs: [
        { from: '../llms.txt', to: '/llms.txt' },
        { from: '../AGENTS.md', to: '/AGENTS.md' },
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
