import classNames from 'classnames';
import React, { createContext, useContext } from 'react';

import { Theme, ThemeScopeProps, ThemeType } from './types';
import { getThemeAndThemeClassName } from './utils';

const ThemeContext = createContext<{
    theme: Theme;
}>({
    theme: ThemeType.Light,
});

const ThemeScopeProvider = ({
    applyTheme = ThemeType.Light,
    children,
}: {
    applyTheme?: Theme;
    children?: React.ReactNode;
}) => {
    const { theme: themeName } = getThemeAndThemeClassName({
        applyTheme,
    });

    return (
        <ThemeContext.Provider value={{ theme: themeName }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeScope = ({
    applyTheme,
    invert,
    as: RootComponent = 'div',
    children,
    className = '',
}: ThemeScopeProps) => {
    const parentTheme = useContext(ThemeContext)?.theme as Theme;

    const { theme: themeName, themeClassName } = getThemeAndThemeClassName({
        applyTheme,
        parentTheme,
        invert,
    });

    return (
        <ThemeScopeProvider applyTheme={themeName}>
            <RootComponent className={classNames(className, themeClassName)}>
                {children}
            </RootComponent>
        </ThemeScopeProvider>
    );
};

export default ThemeScope;

export { ThemeContext, ThemeScopeProvider };
