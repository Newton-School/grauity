import { DefaultTheme } from 'styled-components';

export type ThemeType = 'light' | 'dark';

export interface CustomGlobalStyleInterface extends DefaultTheme {
    theme: {
        colors: {
            text: {
                textPrimary: string;
                textSecondary: string;
                textDisabled: string;
                textAction: string;
                textAction2: string;
                textBrand: string;
                textSuccess: string;
                textError: string;
                textWarning: string;
                textYellow: string;
                textPurple: string;
            };
            background: {
                bgPrimary: string;
                bgSecondary: string;
                bgTertiary: string;
                bgBrand: string;
                bgSuccess: string;
                bgError: string;
                bgWarning: string;
                bgYellow: string;
                bgPurple: string;
                bgDisabled: string;

                bgActionBrand: string;
                bgActionSuccess: string;
                bgActionError: string;
                bgActionWarning: string;
                bgActionYellow: string;
                bgActionPurple: string;

                bgInvertPrimary: string;
                bgInvertSecondary: string;
                bgInvertTertiary: string;

                bgPrimaryHover: string;
                bgInvertPrimaryHover: string;
                bgActionBrandHover: string;
                bgActionSuccessHover: string;
                bgActionErrorHover: string;
                bgActionWarningHover: string;
                bgActionYellowHover: string;
            };
            alpha: {
                alphaHover: string;
                alphaPressed: string;
                alphaOverlay: string;
            };
            border: {
                border: string;
                borderBrand: string;
                borderSuccess: string;
                borderError: string;
                borderWarning: string;
                borderYellow: string;
                borderPurple: string;
                borderNeutral: string;
            };
        };
        visibility: {
            lightVisible: string;
            darkVisible: string;
        };
        font: {
            fontFamily: string;
            fontFamilyCode: string;
        };
    };
}
