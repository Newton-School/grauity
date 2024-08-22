import { DefaultTheme } from 'styled-components';

const LIGHT_THEME_CONFIG: DefaultTheme = {
    textPrimary: 'var(--neutral-900, #16191D)',
    textSecondary: 'var(--neutral-700, #5B6271)',
    textDisabled: 'var(--neutral-600, #8C95A6)',
    textAction: 'var(--neutral-0, #FFFFFF)',
    textAction2: 'var(--neutral-0, #FFFFFF)',
    textBrand: 'var(--brand-500, #0673F9)',
    textSuccess: 'var(--success-600, #007A51)',
    textError: 'var(--error-500, #D22D3A)',
    textWarning: 'var(--warning-500, #DE5A02)',
    textYellow: 'var(--yellow-500, #F59700)',
    textPurple: 'var(--purple-500, #7B55EE)',

    bgPrimary: 'var(--neutral-0, #FFFFFF)',
    bgSecondary: 'var(--neutral-100, #F6F7F9)',
    bgTertiary: 'var(--neutral-200, #EDEFF3)',
    bgBrand: 'var(--brand-0, #E5F1FF)',
    bgSuccess: 'var(--success-0, #D9FCED)',
    bgError: 'var(--error-0, #FFE5E7)',
    bgWarning: 'var(--warning-0, #FFF1E5)',
    bgYellow: 'var(--yellow-0, #FFF3D6)',
    bgPurple: 'var(--purple-0, #F5E5FF)',
    bgDisabled: 'var(--neutral-800, #23282F)',

    bgActionBrand: 'var(--brand-500, #0673f9)',
    bgActionSuccess: 'var(--success-500, #009965)',
    bgActionError: 'var(--error-500, #d22d3a)',
    bgActionWarning: 'var(--warning-400, #f37216)',
    bgActionYellow: 'var(--yellow-400, #f59700)',
    bgActionPurple: 'var(--purple-600, #6138d3)',

    bgInvertPrimary: 'var(--neutral-1000, #0B0C0E)',
    bgInvertSecondary: 'var(--neutral-900, #16191D)',
    bgInvertTertiary: 'var(--neutral-800, #23282F)',

    bgPrimaryHover: 'var(--neutral-100, #F6F7F9)',
    bgInvertPrimaryHover: 'var(--neutral-900, #16191D)',
    bgActionBrandHover: 'var(--brand-400, #2989FF)',
    bgActionSuccessHover: 'var(--success-400, #13B97C)',
    bgActionErrorHover: 'var(--error-400, #EE3F44)',
    bgActionWarningHover: 'var(--warning-300, #FD9254)',
    bgActionYellowHover: 'var(--yellow-400, #F37216)',

    alphaHover: 'var(--alpha-20, rgba(255, 255, 255, 0.20))',
    alphaPressed: 'var(--alpha-12, rgba(255, 255, 255, 0.12))',
    alphaOverlay: 'var(--alpha-overlay, rgba(22, 25, 29, 0.80))',

    border: 'var(--neutral-300, #E1E5EA)',
    borderBrand: 'var(--brand-200, #94C4FF)',
    borderSuccess: 'var(--success-100, #ACF7D3)',
    borderError: 'var(--error-100, #FBBBBF)',
    borderWarning: 'var(--warning-100, #FFD2BA)',
    borderYellow: 'var(--yellow-100, #FFD580)',
    borderPurple: 'var(--purple-100, #CEBCFE)',
    borderNeutral: 'var(--neutral-300, #E1E5EA)',

    lightVisible: 'none',
    darkVisible: 'block',

    fontFamily: 'Mona Sans',
};

export default LIGHT_THEME_CONFIG;
