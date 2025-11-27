import { useContext } from 'react';

import { ThemeScopeContext } from './contexts/ThemeScopeContext';
import { Theme } from './types';
import { getThemeAndThemeClassName } from './utils';

/**
 * `useThemeScope` is a hook that allows you to get the current scoped theme (set using `ThemeScope`).
 *
 * You can use this hook in any child component of the `ThemeScope` wrapper to get the current theme.
 */
function useThemeScope() {
    const parentTheme = useContext(ThemeScopeContext)?.theme as Theme;

    const { theme, themeClassName } = getThemeAndThemeClassName({
        parentTheme,
    });

    return {
        /**
         * The current scoped theme name (i.e., 'light' or 'dark')
         */
        theme,
        /**
         * Class name used for applying the theme.
         */
        themeClassName,
    };
}

export default useThemeScope;
