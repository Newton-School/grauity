import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { ThemeScopeProvider } from '../elements/ThemeScope/ThemeScopeProvider';
import { Theme } from '../elements/ThemeScope/types';
import DARK_THEME_OBJ from './darkThemeConstants';
import GlobalStyle from './GlobalStyle';
import LIGHT_THEME_OBJ from './lightThemeConstants';
import { ThemeConfigType } from './types';

/**
 * GrauityThemeProvider allows you to use multiple themes in your
 * application simultaneously, like light and dark mode.
 *
 * Wrap your root level element (e.g. in your App component) with this provider.
 *
 * It uses `ThemeScope` to set the initial theme for the application that you provide
 * using the `rootThemeScopeTheme` prop. You can then use ThemeScope anywhere in
 * your application to switch themes for that section of the app.
 *
 * PERFORMANCE: set `injectGlobalStyle={false}` and instead import the prebuilt
 * `@newtonschool/grauity/dist/css/tokens.css` once. That delivers the same
 * tokens with zero runtime cost (no styled-components global-style generation /
 * injection on mount), which is the recommended setup for new apps.
 */
export const GrauityThemeProvider = ({
    themeConfig = {
        light: LIGHT_THEME_OBJ,
        dark: DARK_THEME_OBJ,
    },
    children = null,
    rootThemeScopeTheme = 'light',
    injectGlobalStyle = true,
}: {
    themeConfig?: { [theme: string]: ThemeConfigType };
    children?: React.ReactNode;
    rootThemeScopeTheme?: Theme;
    injectGlobalStyle?: boolean;
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
                {injectGlobalStyle ? <GlobalStyle /> : null}
                {rootThemeScopeTheme ? (
                    <ThemeScopeProvider applyTheme={rootThemeScopeTheme}>
                        {children}
                    </ThemeScopeProvider>
                ) : (
                    children
                )}
            </>
        </StyledComponentsThemeProvider>
    );
};
