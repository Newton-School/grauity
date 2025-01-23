import React from 'react';

import { NSThemeWrapper } from '../../ui';

/**
 * This decorator is used to wrap the Storybook stories with the NSThemeWrapper
 */
const withTheme = (Story, context) => {
    // globals.theme can be 'light', 'dark', and refer to the component theme
    const { globals } = context;

    return (
        <NSThemeWrapper defaultTheme={globals.theme}>
            <Story />
        </NSThemeWrapper>
    );
};

export default withTheme;
