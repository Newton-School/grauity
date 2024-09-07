import React, { useEffect, useState } from 'react';

import { ThemeWrapper } from '../../ui';

/**
 * This wrapper is needed because Storybook does not support
 * using hooks in the decorators.
 */
const StatefulThemeWrapper = ({ globals, children }) => {
    const [currentComponentsTheme, setCurrentComponentsTheme] = useState(
        globals.theme
    );

    // Update the component theme when the globals.theme changes
    useEffect(() => {
        const newTheme = globals.theme;
        setCurrentComponentsTheme(newTheme);
    }, [globals.theme]);

    return (
        <ThemeWrapper defaultTheme={currentComponentsTheme}>
            {children}
        </ThemeWrapper>
    );
};

/**
 * This decorator is used to wrap the Storybook stories with the ThemeWrapper
 */
const withTheme = (Story, context) => {
    // globals.theme can be 'light', 'dark', and refer to the component theme
    const { globals } = context;

    return (
        <ThemeWrapper defaultTheme={globals.theme}>
            <Story />
        </ThemeWrapper>
    );
};

export default withTheme;
