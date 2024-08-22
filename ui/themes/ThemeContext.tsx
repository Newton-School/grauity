import PropTypes from 'prop-types';
import React, {
    createContext,
    useCallback,
    useMemo,
    useState,
} from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import DARK_THEME_OBJ from './darkThemeConstants';
import LIGHT_THEME_OBJ from './lightThemeConstants';
import THEME from './constants';
import { CustomGlobalStyleInterface, ThemeType } from './types';

const ThemeContext = createContext(null);

export const GlobalStyle = createGlobalStyle<CustomGlobalStyleInterface>`
    :root {
        // Color Tokens
        --neutral-0:   #FFFFFF;
        --neutral-100: #F6F7F9;
        --neutral-200: #EDEFF3;
        --neutral-300: #E1E5EA;
        --neutral-400: #C9CFD9;
        --neutral-500: #B2B9C7;
        --neutral-600: #8C95A6;
        --neutral-700: #5B6271;
        --neutral-750: #30363D;
        --neutral-800: #23282F;
        --neutral-900: #16191D;
        --neutral-1000: #0B0C0E;

        --brand-0:   #E5F1FF;
        --brand-100: #C2DDFF;
        --brand-200: #94C4FF;
        --brand-300: #61A8FF;
        --brand-400: #2989FF;
        --brand-500: #0673F9;
        --brand-600: #005ED1;
        --brand-700: #004599;
        --brand-800: #003270;
        --brand-900: #002452;

        --error-0:   #FFE5E7;
        --error-100: #FBBBBF;
        --error-200: #FA9499;
        --error-300: #F8636B;
        --error-400: #EE3F44;
        --error-500: #D22D3A;
        --error-600: #A01B22;
        --error-700: #7E1219;
        --error-800: #63080D;
        --error-900: #4A040A;

        --success-0: #D9FCED;
        --success-100: #ACF7D3;
        --success-200: #7EE7B8;
        --success-300: #50CE99;
        --success-400: #13B97C;
        --success-500: #009965;
        --success-600: #007A51;
        --success-700: #005C3D;
        --success-800: #003D29;
        --success-900: #002D1E;

        --warning-0: #FFF1E5;
        --warning-100: #FFD2BA;
        --warning-200: #FFB286;
        --warning-300: #FD9254;
        --warning-400: #F37216;
        --warning-500: #DE5A02;
        --warning-600: #A83E00;
        --warning-700: #802D00;
        --warning-800: #5C1F00;
        --warning-900: #441704;

        --yellow-0: #FFF3D6;
        --yellow-100: #FFE4AD;
        --yellow-200: #FFD580;
        --yellow-300: #FEC553;
        --yellow-400: #FEB000;
        --yellow-500: #F59700;
        --yellow-600: #D17300;
        --yellow-700: #944500;
        --yellow-800: #5C2900;
        --yellow-900: #3D1A00;

        --purple-0: #F5E5FF;
        --purple-100: #E1D1FF;
        --purple-200: #CEBCFE;
        --purple-300: #B49DFE;
        --purple-400: #967CFD;
        --purple-500: #7B55EE;
        --purple-600: #6138D3;
        --purple-700: #46279B;
        --purple-800: #331D72;
        --purple-900: #221056;

        --alpha-20: rgba(255, 255, 255, 0.20);
        --alpha-12: rgba(255, 255, 255, 0.12);
        --alpha-80: rgba(255, 255, 255, 0.80);
        --alpha-overlay: rgba(22, 25, 29, 0.80);


        // Custom tokens to handle visibility based on state
        // Text Colors
        --text-primary: ${(props) => props.theme.textPrimary};
        --text-secondary: ${(props) => props.theme.textSecondary};
        --text-disabled: ${(props) => props.theme.textDisabled};
        --text-action: ${(props) => props.theme.textAction};
        --text-action2: ${(props) => props.theme.textAction2};
        --text-brand: ${(props) => props.theme.textBrand};
        --text-success: ${(props) => props.theme.textSuccess};
        --text-error: ${(props) => props.theme.textError};
        --text-warning: ${(props) => props.theme.textWarning};
        --text-yellow: ${(props) => props.theme.textYellow};
        --text-purple: ${(props) => props.theme.textPurple};

        // Background Colors
        --bg-primary: ${(props) => props.theme.bgPrimary};
        --bg-secondary: ${(props) => props.theme.bgSecondary};
        --bg-tertiary: ${(props) => props.theme.bgTertiary};
        --bg-brand: ${(props) => props.theme.bgBrand};
        --bg-success: ${(props) => props.theme.bgSuccess};
        --bg-error: ${(props) => props.theme.bgError};
        --bg-warning: ${(props) => props.theme.bgWarning};
        --bg-yellow: ${(props) => props.theme.bgYellow};
        --bg-purple: ${(props) => props.theme.bgPurple};
        --bg-disabled: ${(props) => props.theme.bgDisabled};

        --bg-action-brand: ${(props) => props.theme.bgActionBrand};
        --bg-action-success: ${(props) => props.theme.bgActionSuccess};
        --bg-action-error: ${(props) => props.theme.bgActionError};
        --bg-action-warning: ${(props) => props.theme.bgActionWarning};
        --bg-action-yellow: ${(props) => props.theme.bgActionYellow};
        --bg-action-purple: ${(props) => props.theme.bgActionPurple};

        --bg-invert-primary: ${(props) => props.theme.bgInvertPrimary};
        --bg-invert-secondary: ${(props) => props.theme.bgInvertSecondary};
        --bg-invert-tertiary: ${(props) => props.theme.bgInvertTertiary};

        --bg-primary-hover: ${(props) => props.theme.bgPrimaryHover};
        --bg-invert-primary-hover: ${(props) => props.theme.bgInvertPrimaryHover};
        --bg-action-brand-hover: ${(props) => props.theme.bgActionBrandHover};
        --bg-action-success-hover: ${(props) => props.theme.bgActionSuccessHover};
        --bg-action-error-hover: ${(props) => props.theme.bgActionErrorHover};
        --bg-action-warning-hover: ${(props) => props.theme.bgActionWarningHover};
        --bg-action-yellow-hover: ${(props) => props.theme.bgActionYellowHover};

        // Alpha Colors
        --alpha-hover: ${(props) => props.theme.alphaHover};
        --alpha-pressed: ${(props) => props.theme.alphaPressed};
        /* --alpha-overlay: ${(props) => props.theme.alphaOverlay}; */

        // Border Colors
        --border: ${(props) => props.theme.border};
        --border-brand: ${(props) => props.theme.borderBrand};
        --border-success: ${(props) => props.theme.borderSuccess};
        --border-error: ${(props) => props.theme.borderError};
        --border-warning: ${(props) => props.theme.borderWarning};
        --border-yellow: ${(props) => props.theme.borderYellow};
        --border-purple: ${(props) => props.theme.borderPurple};
        --border-neutral: ${(props) => props.theme.borderNeutral};

        // Custom tokens to handle visibility based on state
        --light-visible: ${(props) => props.theme.lightVisible};
        --dark-visible: ${(props) => props.theme.darkVisible};

        // Font Family
        --font-family: ${(props) => props.theme.fontFamily};
    }
`;

const ThemeWrapper = ({ children }: any) => {
    const [theme, setTheme] = useState({
        themeName: THEME.LIGHT,
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
                themeName: THEME.LIGHT,
                themeColors: LIGHT_THEME_OBJ,
            },
            handleToggleTheme,
            setIsThemeEnabled,
        }),
        []
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
