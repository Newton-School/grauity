import withTheme from './decorators/withTheme';

// Storybook Parameters
const parameters = {
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
const decorators = [withTheme];

// Storybook Global Types
const globalTypes = {
    theme: {
        name: 'Component Theme',
        description: 'Global theme for components & Storybook UI',
        defaultValue: 'light',
        icon: 'circlehollow',
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
        icon: 'circlehollow',
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

export { parameters, decorators, globalTypes };
