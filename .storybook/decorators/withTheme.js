import React, { useEffect, useState } from 'react';
import { addons, useGlobals } from '@storybook/addons';

import { ThemeWrapper, GrauityInit } from '../../ui';
import ThemeBlock from '../themeBlock';
import STORYBOOK_THEME from '../theme';

const withTheme = (Story, context) => {
    // globals.theme can be 'light', 'dark', and refer to the component theme
    // globals.storybookTheme can be 'LIGHT' or 'DARK', and refer to the Storybook UI theme
    const [globals] = useGlobals();

    const [currentComponentsTheme, setCurrentComponentsTheme] = useState(
        globals.theme
    );

    // Update the component theme when the globals.theme changes
    useEffect(() => {
        const newTheme = globals.theme;
        setCurrentComponentsTheme(newTheme);
    }, [globals.theme]);

    // Update the Storybook UI theme when the globals.storybookTheme changes
    useEffect(() => {
        const oldStorybookTheme = localStorage.getItem('storybook-theme');
        const newStorybookTheme = globals.storybookTheme;
        if (newStorybookTheme !== oldStorybookTheme) {
            addons.setConfig({
                theme: STORYBOOK_THEME[newStorybookTheme],
            });
            localStorage.setItem('storybook-theme', newStorybookTheme);
            // This is a hack to reload the page to apply the new theme to the Storybook UI
            // This is not ideal, but it seems like this the only way to apply
            // the theme to the Storybook UI
            window.parent.location.reload();
        }
    }, [globals.storybookTheme]);

    return (
        <ThemeWrapper defaultTheme={currentComponentsTheme}>
            <GrauityInit fontSize={'16px'} multiplier={1}>
                <ThemeBlock fill>
                    <Story />
                </ThemeBlock>
            </GrauityInit>
        </ThemeWrapper>
    );
};

export default withTheme;
