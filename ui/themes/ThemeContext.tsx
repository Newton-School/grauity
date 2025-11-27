import React, {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

import THEME from './constants';
import DARK_THEME_OBJ from './darkThemeConstants';
import LIGHT_THEME_OBJ from './lightThemeConstants';
import { GrauityThemeProvider } from './ThemeProvider';

const ThemeContext = createContext(null);

interface ThemeWrapperProps {
    children: React.ReactNode;
    defaultTheme?: any;
    usePreferredColorScheme?: boolean;
}

const ThemeWrapper = ({
    children,
    defaultTheme = THEME.LIGHT,
    usePreferredColorScheme = false,
}: ThemeWrapperProps) => {
    const [theme, setTheme] = useState({
        themeName: defaultTheme,
    });

    const [isThemeEnabled, setIsThemeEnabled] = useState(true);

    const handleToggleTheme = useCallback(
        (themeName: any) => {
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

    useEffect(() => {
        if ([THEME.LIGHT, THEME.DARK].includes(defaultTheme)) {
            setTheme({ themeName: defaultTheme });
        }
    }, [defaultTheme]);

    // Check if the user has dark mode enabled system-wide
    useEffect(() => {
        let mq: MediaQueryList;
        if (usePreferredColorScheme) {
            mq = window.matchMedia('(prefers-color-scheme: dark)');
            const prefersDarkColorScheme = mq.matches;
            if (prefersDarkColorScheme) {
                setTheme({ themeName: THEME.DARK });
            }

            mq.addEventListener('change', (evt) =>
                setTheme({ themeName: evt.matches ? THEME.DARK : THEME.LIGHT })
            );
        }

        return () => {
            if (usePreferredColorScheme) {
                mq.removeEventListener('change', (evt) =>
                    setTheme({
                        themeName: evt.matches ? THEME.DARK : THEME.LIGHT,
                    })
                );
            }
        };
    }, [usePreferredColorScheme]);

    useEffect(() => {
        if (isThemeEnabled) {
            // Remove any existing theme classes
            document.body.classList.forEach((className) => {
                if (className.startsWith('grauity-theme-')) {
                    document.body.classList.remove(className);
                }
            });

            // Add the new theme class
            document.body.classList.add(
                `grauity-theme-${value?.theme?.themeName}`
            );
        }
    }, [isThemeEnabled, value?.theme?.themeName]);

    const currentTheme = isThemeEnabled ? value : defaultValue;

    return (
        <ThemeContext.Provider value={currentTheme}>
            <GrauityThemeProvider
                rootThemeScopeTheme={currentTheme?.theme?.themeName}
            >
                {children}
            </GrauityThemeProvider>
        </ThemeContext.Provider>
    );
};

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeConsumer, ThemeContext, ThemeWrapper };
