import { addons } from '@storybook/manager-api';
import STORYBOOK_THEME from './theme';

// Function to set the theme based on user preference
const setTheme = (theme) => {
    addons.setConfig({
        theme: STORYBOOK_THEME[theme],
    });
};

// Get the saved theme from localStorage, or fall back to LIGHT to match the
// `storybookTheme` global's default in preview.js. Without the fallback, first
// time visitors look up STORYBOOK_THEME[null] and get Storybook's stock theme
// and logo instead of ours.
const savedTheme = localStorage.getItem('storybook-theme') || 'LIGHT';
setTheme(savedTheme);
