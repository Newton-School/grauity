import classnames from 'classnames';
import React, { useContext } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { SC_THEME_SCOPE_THEME_KEY } from './constants';
import { ThemeScopeContext } from './contexts/ThemeScopeContext';
import { ThemeScopeProvider } from './ThemeScopeProvider';
import { Theme, ThemeScopeProps } from './types';
import { getThemeAndThemeClassName } from './utils';

/**
 * `ThemeScope` is used to apply a different theme to a section of your application.
 * You can use the `applyTheme` prop to set the theme to either 'light' or 'dark'.
 * If you want to invert the current theme, you can use the `invert` prop.
 *
 * ThemeScope also provides a way to detect the locally scoped theme in any child styled-component
 * using the `scopedTheme` prop from the theme object, i.e. by accessing `props.theme.scopedTheme`.
 *
 * To only detect the current theme (without changing it), you can use the `useThemeScope` hook.
 */
function ThemeScope<T extends React.ElementType = 'div'>({
    applyTheme,
    invert,
    as,
    asProps,
    children,
}: ThemeScopeProps<T>) {
    const parentTheme = useContext(ThemeScopeContext)?.theme as Theme;

    const { theme: themeName, themeClassName } = getThemeAndThemeClassName({
        applyTheme,
        parentTheme,
        invert,
    });

    const RootComponent = as || ('div' as T);

    return (
        <StyledComponentsThemeProvider
            theme={{ [SC_THEME_SCOPE_THEME_KEY]: themeName }}
        >
            <ThemeScopeProvider applyTheme={themeName}>
                <RootComponent
                    {...(asProps as any)}
                    className={classnames(asProps?.className, themeClassName)}
                >
                    {children}
                </RootComponent>
            </ThemeScopeProvider>
        </StyledComponentsThemeProvider>
    );
}

export default ThemeScope;
