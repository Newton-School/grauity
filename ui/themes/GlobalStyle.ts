import { createGlobalStyle, css } from 'styled-components';

import { buildThemeVariables } from './buildTokenCss';
import { constantGlobalStyle } from './constantGlobalStyle';

// Re-exported for backward compatibility (previously defined in this file).
export { constantGlobalStyle };

/**
 * Global style for the application.
 *
 * Injects the theme-agnostic primitive tokens at `:root` and the semantic
 * light/dark token sets under their `.grauity-theme-*` scope classes. The
 * per-theme variables are produced by the shared `buildThemeVariables` builder
 * so this runtime output and the prebuilt static `dist/css/tokens.css` can
 * never drift.
 *
 * PERFORMANCE: for zero-runtime token delivery, prefer importing the prebuilt
 * `@newtonschool/grauity/dist/css/tokens.css` and skip rendering this component
 * (see `GrauityThemeProvider`'s `injectGlobalStyle` prop). That removes the
 * styled-components global-style generation/injection from the critical path.
 */
const GlobalStyle = createGlobalStyle<any>`
    :root {
        ${constantGlobalStyle}
    }

    .grauity-theme-light {
        ${(props) => css`
            ${buildThemeVariables(props.theme.light)}
        `}
    }

    .grauity-theme-dark {
        ${(props) => css`
            ${buildThemeVariables(props.theme.dark)}
        `}
    }
`;

export default GlobalStyle;
