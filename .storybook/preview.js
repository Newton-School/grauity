import {
    withTheme,
    withStorybookTheme,
    withThemeBackground,
    withPadding,
} from './decorators';
import '../ui/css/index.scss';

import STORYBOOK_THEME from './theme';

// Storybook Parameters
export const parameters = {
    // actions: { argTypesRegex: '^on[A-Z].*' },
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
        theme: STORYBOOK_THEME.LIGHT,
    },
};

// Storybook Decorators
export const decorators = [
    // // Grauity init
    // withGrauityInit,
    // Component theme
    withTheme,
    // Storybook theme
    withStorybookTheme,
    // Theme background container
    withThemeBackground,
    // Padding container
    withPadding,
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
                { value: 'light', title: 'Light', icon: 'sun' },
                { value: 'dark', title: 'Dark', icon: 'moon' },
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
export const tags = ['autodocs', 'autodocs'];
