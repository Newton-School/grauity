import { DefaultTheme } from 'styled-components';

const DARK_THEME_CONFIG: DefaultTheme = {
    textPrimary: 'var(--neutral-0, #ffffff)',
    textSecondary: 'var(--neutral-600, #b2b9c7)',
    textDisabled: 'var(--neutral-700, #5b6271)',
    textAction: 'var(--neutral-0, #ffffff)',
    textAction2: 'var(--neutral-900, #16191D)',
    textBrand: 'var(--brand-300, #0673f9)',
    textSuccess: 'var(--success-300, #13b97c)',
    textError: 'var(--error-300, #ee3f44)',
    textWarning: 'var(--warning-300, #f37216)',
    textYellow: 'var(--yellow-300, #f59700)',
    textPurple: 'var(--purple-300, #b49dfe)',

    bgPrimary: 'var(--neutral-1000, #0b0c0e)',
    bgSecondary: 'var(--neutral-900, #16191d)',
    bgTertiary: 'var(--neutral-800, #23282f)',
    bgBrand: 'var(--brand-900, #002452)',
    bgSuccess: 'var(--success-800, #003d29)',
    bgError: 'var(--error-900, #4a040a)',
    bgWarning: 'var(--warning-900, #441704)',
    bgYellow: 'var(--yellow-900, #3d1a00)',
    bgPurple: 'var(--purple-800, #331d72)',
    bgDisabled: 'var(--neutral-800, #23282F)',

    bgActionBrand: 'var(--brand-500, #0673f9)',
    bgActionSuccess: 'var(--success-500, #009965)',
    bgActionError: 'var(--error-500, #d22d3a)',
    bgActionWarning: 'var(--warning-400, #f37216)',
    bgActionYellow: 'var(--yellow-400, #f59700)',
    bgActionPurple: 'var(--purple-600, #6138d3)',

    bgInvertPrimary: 'var(--neutral-0, #ffffff)',
    bgInvertSecondary: 'var(--neutral-100, #F6F7F9)',
    bgInvertTertiary: 'var(--neutral-200, #edeff3)',

    bgPrimaryHover: 'var(--neutral-900, #16191D)',
    bgInvertPrimaryHover: 'var(--neutral-100, #F6F7F9)',
    bgActionBrandHover: 'var(--brand-400, #2989FF)',
    bgActionSuccessHover: 'var(--success-400, #13B97C)',
    bgActionErrorHover: 'var(--error-400, #EE3F44)',
    bgActionWarningHover: 'var(--warning-300, #FD9254)',
    bgActionYellowHover: 'var(--yellow-400, #F37216)',

    alphaHover: 'var(--alpha-20, rgba(255, 255, 255, 0.20))',
    alphaPressed: 'var(--alpha-12, rgba(255, 255, 255, 0.12))',
    alphaOverlay: 'var(--alpha-overlay, rgba(22, 25, 29, 0.80))',

    border: 'var(--neutral-750, #30363d)',
    borderBrand: 'var(--brand-800, #003270)',
    borderSuccess: 'var(--success-700, #005c3d)',
    borderError: 'var(--error-800, #63080d)',
    borderWarning: 'var(--warning-700, #802d00)',
    borderYellow: 'var(--yellow-800, #5c2900)',
    borderPurple: 'var(--purple-700, #46279b)',
    borderNeutral: 'var(--neutral-800, #23282F)',

    lightVisible: 'none',
    darkVisible: 'block',
};

export default DARK_THEME_CONFIG;
