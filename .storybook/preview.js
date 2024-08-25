import {
    withTheme,
    withStorybookTheme,
    withThemeBackground,
    withGrauityInit,
} from './decorators';

import STORYBOOK_THEME from './theme';

// Storybook Parameters
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    docs: {
        source: {
            excludeDecorators: true,
        },
        theme: STORYBOOK_THEME.DARK,
    },
};

// Storybook Decorators
export const decorators = [
    // Theme background container
    withThemeBackground,
    // Grauity init
    withGrauityInit,
    // Component theme
    withTheme,
    // Storybook theme
    withStorybookTheme,
];

// Storybook Global Types
export const globalTypes = {
    // Button to switch between light and dark theme for components
    theme: {
        name: 'Component Theme',
        description: 'Global theme for components & Storybook UI',
        defaultValue: 'light',
        toolbar: {
            title: 'Component Theme',
            items: [
                { value: 'light', title: 'Light', icon: 'circlehollow' },
                { value: 'dark', title: 'Dark', icon: 'circle' },
            ],
            showName: true,
            dynamicTitle: true,
        },
    },
    // Button to switch between LIGHT and DARK theme for Storybook UI
    storybookTheme: {
        name: 'Storybook Theme',
        description: 'Theme for Storybook UI',
        defaultValue: 'LIGHT',
        toolbar: {
            title: 'Component Theme',
            items: [
                {
                    value: 'LIGHT',
                    title: 'Storybook Light',
                    icon: 'circlehollow',
                },
                { value: 'DARK', title: 'Storybook Dark', icon: 'circle' },
            ],
            showName: true,
            dynamicTitle: true,
        },
    },
};
