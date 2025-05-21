import { addons } from '@storybook/manager-api';
import STORYBOOK_THEME from './theme';

const setTheme = (themeKey) => {
    const key = (themeKey || 'DARK').toUpperCase();
    const theme = STORYBOOK_THEME[key] || STORYBOOK_THEME.DARK;

    addons.setConfig({
        theme,
    });
};

const savedTheme = localStorage.getItem('storybook-theme');
setTheme(savedTheme);
