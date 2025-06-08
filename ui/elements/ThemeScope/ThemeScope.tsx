import classNames from 'classnames';
import React, { useContext } from 'react';

import { ThemeScopeContext } from './contexts/ThemeScopeContext';
import { ThemeScopeProvider } from './ThemeScopeProvider';
import { Theme, ThemeScopeProps } from './types';
import { getThemeAndThemeClassName } from './utils';

const ThemeScope = ({
    applyTheme,
    invert,
    as: RootComponent = 'div',
    children,
    className = '',
}: ThemeScopeProps) => {
    const parentTheme = useContext(ThemeScopeContext)?.theme as Theme;

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
