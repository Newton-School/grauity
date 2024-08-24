import withTheme from './decorators/withTheme';

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
};

// Storybook Decorators
export const decorators = [withTheme];

// Storybook Global Types
export const globalTypes = {
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
