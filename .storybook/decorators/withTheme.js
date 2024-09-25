import React, { useEffect, useState } from 'react';

import { NSThemeWrapper } from '../../ui';

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
        <NSThemeWrapper defaultTheme={currentComponentsTheme}>
            {children}
        </NSThemeWrapper>
    );
};

/**
 * This decorator is used to wrap the Storybook stories with the NSThemeWrapper
 */
const withTheme = (Story, context) => {
    // globals.theme can be 'light', 'dark', and refer to the component theme
    const { globals } = context;

    return (
        <NSThemeWrapper
            defaultTheme={globals.theme}
            usePreferredColorScheme={globals.theme === 'system'}
        >
            <Story />
        </NSThemeWrapper>
    );
};

export default withTheme;
