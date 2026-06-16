/**
 * Generates grauity's static token stylesheets from the single source of truth
 * (ui/themes/constantGlobalStyle.ts + {light,dark}ThemeConstants.ts):
 *
 *   ui/css/tokens.css         -> all design tokens as plain CSS custom props
 *                                (zero-runtime alternative to <GlobalStyle/>)
 *   ui/css/grauity-theme.css  -> Tailwind v4 @theme export of the primitives
 *
 * `ui/css` is copied to `dist/css` by Parcel's staticFiles reporter, so these
 * ship in the published package. Run via `npm run build-tokens` (tsx).
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import {
    buildTailwindThemeCss,
    buildTokensCss,
} from '../ui/themes/buildTokenCss';
import DARK_THEME_CONFIG from '../ui/themes/darkThemeConstants';
import LIGHT_THEME_CONFIG from '../ui/themes/lightThemeConstants';

const OUT_DIR = join(process.cwd(), 'ui', 'css');

function write(file: string, contents: string): void {
    mkdirSync(OUT_DIR, { recursive: true });
    const path = join(OUT_DIR, file);
    writeFileSync(path, contents, 'utf8');
    // eslint-disable-next-line no-console
    console.log(`  ✓ ${file} (${contents.length} bytes)`);
}

// eslint-disable-next-line no-console
console.log('Building grauity token CSS...');
write(
    'tokens.css',
    buildTokensCss({ light: LIGHT_THEME_CONFIG, dark: DARK_THEME_CONFIG })
);
write('grauity-theme.css', buildTailwindThemeCss());
// eslint-disable-next-line no-console
console.log('Done.');
