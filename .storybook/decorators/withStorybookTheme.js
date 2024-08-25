import React, { useEffect } from 'react';
import { useGlobals } from '@storybook/addons';

/**
 * This decorator is used to change the Storybook UI theme.
 */
const withStorybookTheme = (Story, context) => {
    // globals.storybookTheme can be 'LIGHT' or 'DARK', and refer to the Storybook UI theme
    const { globals } = context;

    // Update the Storybook UI theme when the globals.storybookTheme changes
    useEffect(() => {
        const oldStorybookTheme = localStorage.getItem('storybook-theme');
        const newStorybookTheme = globals.storybookTheme;

        if (newStorybookTheme !== oldStorybookTheme) {
            localStorage.setItem('storybook-theme', newStorybookTheme);
            // This is a hack to reload the page to apply the new theme to the Storybook UI
            // This is not ideal, but it seems like this the only way to apply
            // the theme to the Storybook UI
            window.parent.location.reload();
        }
    }, [globals.storybookTheme]);

    return <Story />;
};

export default withStorybookTheme;
