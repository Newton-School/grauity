import React from 'react';

import { ThemeScopeContext } from './contexts/ThemeScopeContext';
import { Theme, ThemeType } from './types';
import { getThemeAndThemeClassName } from './utils';

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
        <ThemeScopeContext.Provider value={{ theme: themeName }}>
            {children}
        </ThemeScopeContext.Provider>
    );
};

export { ThemeScopeProvider };
