import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ThemeScopeProvider } from 'ui/elements/ThemeScope';
import { Theme } from 'ui/elements/ThemeScope/types';

import DARK_THEME_OBJ from './darkThemeConstants';
import GlobalStyle from './GlobalStyle';
import LIGHT_THEME_OBJ from './lightThemeConstants';

/**
 * GrauityThemeProvider allows you to use multiple themes in your
 * application simultaneously, like light and dark mode.
 *
 * Wrap your app/components with this provider and also provide class name
 * of `'grauity-theme-light'` or `'grauity-theme-dark'` to the parent div of your app/component.
 */
export const GrauityThemeProvider = ({
    themeConfig = {
        light: LIGHT_THEME_OBJ,
        dark: DARK_THEME_OBJ,
    },
    children = null,
    applyTheme = 'light',
}: {
    themeConfig?: Record<string, any>;
    children?: React.ReactNode;
    applyTheme?: Theme;
}) => {
    return (
        <StyledComponentsThemeProvider
            theme={{
                // More themes can be added here
                light: { ...themeConfig.light }, // grauity-theme-light
                dark: { ...themeConfig.dark }, // grauity-theme-dark
            }}
        >
            <>
                <GlobalStyle />
                {applyTheme ? (
                    <ThemeScopeProvider applyTheme={applyTheme}>
                        {children}
                    </ThemeScopeProvider>
                ) : (
                    children
                )}
            </>
        </StyledComponentsThemeProvider>
    );
};
