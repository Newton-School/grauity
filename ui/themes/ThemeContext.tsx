import PropTypes from 'prop-types';
import React, { createContext, useCallback, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import DARK_THEME_OBJ from './darkThemeConstants';
import LIGHT_THEME_OBJ from './lightThemeConstants';
import THEME from './constants';
import { ThemeType } from './types';
import GlobalStyle from './GlobalStyle';

const ThemeContext = createContext(null);

interface ThemeWrapperProps {
    children: React.ReactNode;
    defaultTheme: ThemeType;
}

const ThemeWrapper = ({
    children,
    defaultTheme = THEME.LIGHT,
}: ThemeWrapperProps) => {
    const [theme, setTheme] = useState({
        themeName: defaultTheme,
    });

    const [isThemeEnabled, setIsThemeEnabled] = useState(true);

    const handleToggleTheme = useCallback(
        (themeName: ThemeType) => {
            setTheme((oldTheme) =>
                themeName === THEME.LIGHT
                    ? { ...oldTheme, themeName: THEME.LIGHT }
                    : { ...oldTheme, themeName: THEME.DARK }
            );
        },
        [setTheme]
    );

    const value = useMemo(
        () => ({
            theme: {
                ...theme,
                themeColors:
                    theme?.themeName === THEME.LIGHT
                        ? LIGHT_THEME_OBJ
                        : DARK_THEME_OBJ,
            },
            handleToggleTheme,
            setIsThemeEnabled,
        }),
        [theme, handleToggleTheme, theme?.themeName, isThemeEnabled]
    );

    const defaultValue = useMemo(
        () => ({
            theme: {
                themeName: defaultTheme,
                themeColors:
                    defaultTheme === THEME.LIGHT
                        ? LIGHT_THEME_OBJ
                        : DARK_THEME_OBJ,
            },
            handleToggleTheme,
            setIsThemeEnabled,
        }),
        [defaultTheme]
    );

    return (
        <ThemeContext.Provider value={isThemeEnabled ? value : defaultValue}>
            <ThemeProvider
                theme={
                    isThemeEnabled
                        ? { ...value.theme.themeColors }
                        : { ...defaultValue.theme.themeColors }
                }
            >
                <>
                    <GlobalStyle />
                    {children}
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeConsumer, ThemeContext, ThemeWrapper };
