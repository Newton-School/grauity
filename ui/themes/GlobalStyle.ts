import { createGlobalStyle } from 'styled-components';

export const constantGlobalStyle = `
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

    --spacing-0px: 0px;
    --spacing-1px: 1px;
    --spacing-2px: 2px;
    --spacing-3px: 3px;
    --spacing-4px: 4px;
    --spacing-5px: 5px;
    --spacing-6px: 6px;
    --spacing-7px: 7px;
    --spacing-8px: 8px;
    --spacing-9px: 9px;
    --spacing-10px: 10px;
    --spacing-12px: 12px;
    --spacing-14px: 14px;
    --spacing-16px: 16px;
    --spacing-18px: 18px;
    --spacing-20px: 20px;
    --spacing-24px: 24px;
    --spacing-28px: 28px;
    --spacing-32px: 32px;
    --spacing-36px: 36px;
    --spacing-40px: 40px;
    --spacing-48px: 48px;
    --spacing-56px: 56px;
    --spacing-64px: 64px;
    --spacing-72px: 72px;
    --spacing-80px: 80px;
    --spacing-128px: 128px;
    --spacing-160px: 160px;

    --corner-radius-0px: 0px;
    --corner-radius-2px: 2px;
    --corner-radius-4px: 4px;
    --corner-radius-8px: 8px;
    --corner-radius-12px: 12px;
    --corner-radius-16px: 16px;
    --corner-radius-20px: 20px;
    --corner-radius-24px: 24px;
    --corner-radius-32px: 32px;
    --corner-radius-40px: 40px;
    --corner-radius-50percent: 50%;
    --corner-radius-100percent: 100%;

    --font-size-2px: 2px;
    --font-size-4px: 4px;
    --font-size-6px: 6px;
    --font-size-8px: 8px;
    --font-size-10px: 10px;
    --font-size-11px: 11px;
    --font-size-12px: 12px;
    --font-size-14px: 14px;
    --font-size-16px: 16px;
    --font-size-18px: 18px;
    --font-size-20px: 20px;
    --font-size-24px: 24px;
    --font-size-28px: 28px;
    --font-size-32px: 32px;
    --font-size-36px: 36px;
    --font-size-40px: 40px;
    --font-size-48px: 48px;
    --font-size-56px: 56px;
    --font-size-64px: 64px;
    --font-size-72px: 72px;
    --font-size-80px: 80px;
    --font-size-96px: 96px;

    --font-weight-100: 100;
    --font-weight-200: 200;
    --font-weight-300: 300;
    --font-weight-400: 400;
    --font-weight-450: 450;
    --font-weight-500: 500;
    --font-weight-550: 550;
    --font-weight-600: 600;
    --font-weight-650: 650;
    --font-weight-700: 700;
    --font-weight-800: 800;
    --font-weight-900: 900;

    --font-weight-medium: var(--font-weight-450);
    --font-weight-semibold: var(--font-weight-550);
    --font-weight-bold: var(--font-weight-650);

    --backdrop-blur-0: blur(0px);
    --backdrop-blur-4px: blur(4px);
    --backdrop-blur-8px: blur(8px);
    --backdrop-blur-12px: blur(12px);
    --backdrop-blur-16px: blur(16px);
    --backdrop-blur-20px: blur(20px);

    --backdrop-blur: var(--backdrop-blur-8px);

    --z-index-tooltip: 3000;
    --z-index-overlay-hoc: 2000;
    --z-index-dropdown: 1400;
    --z-index-bottomsheet: 1300;
    --z-index-bottomsheet-overlay: 1250;
    --z-index-popover: 1200;
    --z-index-popover-overlay: 1150;
    --z-index-modal: 1100;
    --z-index-modal-overlay: 1050;
    --z-index-drawer: 1000;
    --z-index-drawer-overlay: 950;
    --z-index-floating-action-button: 500;
`;

const GlobalStyle = createGlobalStyle<any>`
    :root {
        ${constantGlobalStyle}
    }

    .grauity-theme-light {
        // Custom tokens to handle colors based on theme
        // Text Colors
        --text-primary: ${(props) => props.theme.light.colors.text.textPrimary};
        --text-secondary: ${(props) =>
        props.theme.light.colors.text.textSecondary};
        --text-disabled: ${(props) =>
        props.theme.light.colors.text.textDisabled};
        --text-action: ${(props) => props.theme.light.colors.text.textAction};
        --text-action2: ${(props) => props.theme.light.colors.text.textAction2};
        --text-brand: ${(props) => props.theme.light.colors.text.textBrand};
        --text-success: ${(props) => props.theme.light.colors.text.textSuccess};
        --text-error: ${(props) => props.theme.light.colors.text.textError};
        --text-warning: ${(props) => props.theme.light.colors.text.textWarning};
        --text-yellow: ${(props) => props.theme.light.colors.text.textYellow};
        --text-purple: ${(props) => props.theme.light.colors.text.textPurple};

        // Background Colors
        --bg-primary: ${(props) =>
        props.theme.light.colors.background.bgPrimary};
        --bg-secondary: ${(props) =>
        props.theme.light.colors.background.bgSecondary};
        --bg-tertiary: ${(props) =>
        props.theme.light.colors.background.bgTertiary};
        --bg-brand: ${(props) => props.theme.light.colors.background.bgBrand};
        --bg-success: ${(props) =>
        props.theme.light.colors.background.bgSuccess};
        --bg-error: ${(props) => props.theme.light.colors.background.bgError};
        --bg-warning: ${(props) =>
        props.theme.light.colors.background.bgWarning};
        --bg-yellow: ${(props) => props.theme.light.colors.background.bgYellow};
        --bg-purple: ${(props) => props.theme.light.colors.background.bgPurple};
        --bg-disabled: ${(props) =>
        props.theme.light.colors.background.bgDisabled};

        --bg-action-brand: ${(props) =>
        props.theme.light.colors.background.bgActionBrand};
        --bg-action-success: ${(props) =>
        props.theme.light.colors.background.bgActionSuccess};
        --bg-action-error: ${(props) =>
        props.theme.light.colors.background.bgActionError};
        --bg-action-warning: ${(props) =>
        props.theme.light.colors.background.bgActionWarning};
        --bg-action-yellow: ${(props) =>
        props.theme.light.colors.background.bgActionYellow};
        --bg-action-purple: ${(props) =>
        props.theme.light.colors.background.bgActionPurple};

        --bg-invert-primary: ${(props) =>
        props.theme.light.colors.background.bgInvertPrimary};
        --bg-invert-secondary: ${(props) =>
        props.theme.light.colors.background.bgInvertSecondary};
        --bg-invert-tertiary: ${(props) =>
        props.theme.light.colors.background.bgInvertTertiary};

        --bg-primary-hover: ${(props) =>
        props.theme.light.colors.background.bgPrimaryHover};
        --bg-invert-primary-hover: ${(props) =>
        props.theme.light.colors.background.bgInvertPrimaryHover};
        --bg-action-brand-hover: ${(props) =>
        props.theme.light.colors.background.bgActionBrandHover};
        --bg-action-success-hover: ${(props) =>
        props.theme.light.colors.background.bgActionSuccessHover};
        --bg-action-error-hover: ${(props) =>
        props.theme.light.colors.background.bgActionErrorHover};
        --bg-action-warning-hover: ${(props) =>
        props.theme.light.colors.background.bgActionWarningHover};
        --bg-action-yellow-hover: ${(props) =>
        props.theme.light.colors.background.bgActionYellowHover};

        // Alpha Colors
        --alpha-hover: ${(props) => props.theme.light.colors.alpha.alphaHover};
        --alpha-pressed: ${(props) =>
        props.theme.light.colors.alpha.alphaPressed};
        /* --alpha-overlay: ${(props) =>
        props.theme.light.colors.alpha.alphaOverlay}; */

        // Border Colors
        --border: ${(props) => props.theme.light.colors.border.border};
        --border-brand: ${(props) =>
        props.theme.light.colors.border.borderBrand};
        --border-success: ${(props) =>
        props.theme.light.colors.border.borderSuccess};
        --border-error: ${(props) =>
        props.theme.light.colors.border.borderError};
        --border-warning: ${(props) =>
        props.theme.light.colors.border.borderWarning};
        --border-yellow: ${(props) =>
        props.theme.light.colors.border.borderYellow};
        --border-purple: ${(props) =>
        props.theme.light.colors.border.borderPurple};
        --border-neutral: ${(props) =>
        props.theme.light.colors.border.borderNeutral};

        // Font
        --font-family: ${(props) => props.theme.light.font.fontFamily};
        --font-family-code: ${(props) => props.theme.light.font.fontFamilyCode};

        // Custom tokens to handle visibility based on state
        --light-visible: ${(props) =>
        props.theme.light.visibility.lightVisible};
        --dark-visible: ${(props) => props.theme.light.visibility.darkVisible};
    }

    .grauity-theme-dark {
        // Custom tokens to handle colors based on theme
        // Text Colors
        --text-primary: ${(props) => props.theme.dark.colors.text.textPrimary};
        --text-secondary: ${(props) =>
        props.theme.dark.colors.text.textSecondary};
        --text-disabled: ${(props) =>
        props.theme.dark.colors.text.textDisabled};
        --text-action: ${(props) => props.theme.dark.colors.text.textAction};
        --text-action2: ${(props) => props.theme.dark.colors.text.textAction2};
        --text-brand: ${(props) => props.theme.dark.colors.text.textBrand};
        --text-success: ${(props) => props.theme.dark.colors.text.textSuccess};
        --text-error: ${(props) => props.theme.dark.colors.text.textError};
        --text-warning: ${(props) => props.theme.dark.colors.text.textWarning};
        --text-yellow: ${(props) => props.theme.dark.colors.text.textYellow};
        --text-purple: ${(props) => props.theme.dark.colors.text.textPurple};

        // Background Colors
        --bg-primary: ${(props) =>
        props.theme.dark.colors.background.bgPrimary};
        --bg-secondary: ${(props) =>
        props.theme.dark.colors.background.bgSecondary};
        --bg-tertiary: ${(props) =>
        props.theme.dark.colors.background.bgTertiary};
        --bg-brand: ${(props) => props.theme.dark.colors.background.bgBrand};
        --bg-success: ${(props) =>
        props.theme.dark.colors.background.bgSuccess};
        --bg-error: ${(props) => props.theme.dark.colors.background.bgError};
        --bg-warning: ${(props) =>
        props.theme.dark.colors.background.bgWarning};
        --bg-yellow: ${(props) => props.theme.dark.colors.background.bgYellow};
        --bg-purple: ${(props) => props.theme.dark.colors.background.bgPurple};
        --bg-disabled: ${(props) =>
        props.theme.dark.colors.background.bgDisabled};

        --bg-action-brand: ${(props) =>
        props.theme.dark.colors.background.bgActionBrand};
        --bg-action-success: ${(props) =>
        props.theme.dark.colors.background.bgActionSuccess};
        --bg-action-error: ${(props) =>
        props.theme.dark.colors.background.bgActionError};
        --bg-action-warning: ${(props) =>
        props.theme.dark.colors.background.bgActionWarning};
        --bg-action-yellow: ${(props) =>
        props.theme.dark.colors.background.bgActionYellow};
        --bg-action-purple: ${(props) =>
        props.theme.dark.colors.background.bgActionPurple};

        --bg-invert-primary: ${(props) =>
        props.theme.dark.colors.background.bgInvertPrimary};
        --bg-invert-secondary: ${(props) =>
        props.theme.dark.colors.background.bgInvertSecondary};
        --bg-invert-tertiary: ${(props) =>
        props.theme.dark.colors.background.bgInvertTertiary};

        --bg-primary-hover: ${(props) =>
        props.theme.dark.colors.background.bgPrimaryHover};
        --bg-invert-primary-hover: ${(props) =>
        props.theme.dark.colors.background.bgInvertPrimaryHover};
        --bg-action-brand-hover: ${(props) =>
        props.theme.dark.colors.background.bgActionBrandHover};
        --bg-action-success-hover: ${(props) =>
        props.theme.dark.colors.background.bgActionSuccessHover};
        --bg-action-error-hover: ${(props) =>
        props.theme.dark.colors.background.bgActionErrorHover};
        --bg-action-warning-hover: ${(props) =>
        props.theme.dark.colors.background.bgActionWarningHover};
        --bg-action-yellow-hover: ${(props) =>
        props.theme.dark.colors.background.bgActionYellowHover};

        // Alpha Colors
        --alpha-hover: ${(props) => props.theme.dark.colors.alpha.alphaHover};
        --alpha-pressed: ${(props) =>
        props.theme.dark.colors.alpha.alphaPressed};
        /* --alpha-overlay: ${(props) =>
        props.theme.dark.colors.alpha.alphaOverlay}; */

        // Border Colors
        --border: ${(props) => props.theme.dark.colors.border.border};
        --border-brand: ${(props) =>
        props.theme.dark.colors.border.borderBrand};
        --border-success: ${(props) =>
        props.theme.dark.colors.border.borderSuccess};
        --border-error: ${(props) =>
        props.theme.dark.colors.border.borderError};
        --border-warning: ${(props) =>
        props.theme.dark.colors.border.borderWarning};
        --border-yellow: ${(props) =>
        props.theme.dark.colors.border.borderYellow};
        --border-purple: ${(props) =>
        props.theme.dark.colors.border.borderPurple};
        --border-neutral: ${(props) =>
        props.theme.dark.colors.border.borderNeutral};

        // Font
        --font-family: ${(props) => props.theme.dark.font.fontFamily};
        --font-family-code: ${(props) => props.theme.dark.font.fontFamilyCode};

        // Custom tokens to handle visibility based on state
        --light-visible: ${(props) => props.theme.dark.visibility.lightVisible};
        --dark-visible: ${(props) => props.theme.dark.visibility.darkVisible};
    }
`;

export default GlobalStyle;
