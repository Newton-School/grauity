import React, { useEffect, useState } from 'react';

import { ThemeWrapper } from '../../ui';

/**
 * This decorator is used to wrap the Storybook stories with the ThemeWrapper
 */
const withTheme = (Story, context) => {
    // globals.theme can be 'light', 'dark', and refer to the component theme
    const { globals } = context;

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
            <Story />
        </ThemeWrapper>
    );
};

export default withTheme;
