import { addons } from '@storybook/addons';
import STORYBOOK_THEME from './theme';

// Function to set the theme based on user preference
const setTheme = (theme) => {
    addons.setConfig({
        theme: STORYBOOK_THEME[theme],
    });
    localStorage.setItem('storybook-theme', theme);
};

// Get the saved theme from localStorage or default to DARK
const savedTheme = localStorage.getItem('storybook-theme') || 'LIGHT';
setTheme(savedTheme);
