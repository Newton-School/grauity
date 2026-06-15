import { cpSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';

import fg from 'fast-glob';
import { defineConfig } from 'tsup';

/**
 * tsup build for @newtonschool/grauity (replaces Parcel).
 *
 * Goals:
 *  - Tree-shakeable, per-component output in BOTH ESM (.mjs) and CJS (.cjs),
 *    so a consumer's bundler can drop unused components and *their* unique deps
 *    (e.g. yup is only used by Form/useForm, @floating-ui/dom only by Tooltip).
 *  - Per-subpath .d.ts so consumers can import + type a single component.
 *  - Runtime deps stay EXTERNAL (they already are under Parcel) so the consumer
 *    dedupes/tree-shakes a single copy; never bundle react/styled-components or
 *    React contexts break.
 *  - Ship ui/fonts -> dist/fonts and ui/css -> dist/css RAW: grauity styling is
 *    runtime styled-components, so the .scss/.css files are static assets and
 *    tsup needs no CSS/Sass transformer.
 */

const ROOT = __dirname;

const pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8')) as {
    dependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
};

// Externalize all deps + peerDeps (+ their deep-import subpaths) so the consumer
// dedupes/tree-shakes a single copy and React contexts never break.
//
// EXCEPTION: lodash. grauity only deep-imports a few methods (lodash/debounce,
// lodash/invoke, lodash/isNil). Leaving `lodash/*` external emits extensionless
// specifiers that Node's native ESM resolver rejects ("Did you mean
// lodash/debounce.js?"), breaking ESM consumers. Bundling the handful of methods
// is tiny and fixes ESM. (A lodash-es migration is tracked separately.)
const externalPackages = [
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
].filter((p) => p !== 'lodash');
const external = [
    ...externalPackages,
    ...externalPackages.map((p) => new RegExp(`^${p}/`)),
];

/**
 * Multiple explicit entries (one per module the barrel imports) instead of a
 * single barrel + code-splitting. This yields stable, addressable output
 * filenames (dist/elements/Button/index.mjs, ...) that the package `exports`
 * map and per-subpath .d.ts can point at. Splitting is off (see the option
 * below), so each entry is self-contained.
 */
function buildEntries(): Record<string, string> {
    const patterns = [
        'ui/index.ts',
        'ui/core/index.ts',
        'ui/themes/index.ts',
        'ui/init/index.ts',
        'ui/helpers/index.ts',
        'ui/elements/*/index.ts',
        'ui/elements/*/*/index.ts',
        'ui/elements/Modal/Modal.tsx',
        'ui/elements/Calendar/CalendarEvent/CalendarEvent.tsx',
        'ui/elements/ThemeScope/constants.ts',
        'ui/elements/ThemeScope/types.ts',
        'ui/elements/ThemeScope/utils.ts',
    ];

    const files = fg.sync(patterns, {
        cwd: ROOT,
        ignore: [
            '**/*.test.*',
            '**/*.stories.*',
            '**/*.styles.ts',
            '**/__tests__/**',
            '**/__mocks__/**',
        ],
    });

    const entries: Record<string, string> = {};
    files.forEach((file) => {
        const key = relative(join(ROOT, 'ui'), join(ROOT, file))
            .replace(/\.tsx?$/, '')
            .split(sep)
            .join('/');
        entries[key] = file;
    });
    return entries;
}

/** Copy ui/fonts -> dist/fonts and ui/css -> dist/css verbatim (replaces parcel-reporter-static-files-copy). */
function copyStaticAssets(): void {
    const copies: Array<[string, string]> = [
        ['ui/fonts', 'dist/fonts'],
        ['ui/css', 'dist/css'],
    ];
    copies.forEach(([from, to]) => {
        const src = resolve(ROOT, from);
        const dest = resolve(ROOT, to);
        if (!existsSync(src)) {
            throw new Error(
                `[tsup] static source missing: ${from} (did build-icons / build-tokens run first?)`
            );
        }
        mkdirSync(dest, { recursive: true });
        cpSync(src, dest, { recursive: true });
        // eslint-disable-next-line no-console
        console.log(`  ✓ copied ${from} -> ${to}`);
    });

    // Release gate: assert generated + shipped static assets actually landed.
    const required = [
        'dist/css/tokens.css',
        'dist/css/grauity-theme.css',
        'dist/css/index.scss',
        'dist/css/grauity-icons.scss',
        'dist/fonts/grauity-icons.woff2',
    ];
    required.forEach((f) => {
        if (!existsSync(resolve(ROOT, f))) {
            throw new Error(
                `[tsup] expected static asset missing after copy: ${f}`
            );
        }
    });
}

export default defineConfig({
    entry: buildEntries(),
    outDir: 'dist',
    format: ['esm', 'cjs'],
    outExtension: ({ format }) => ({ js: format === 'esm' ? '.mjs' : '.cjs' }),
    // Types are emitted separately by `tsc` (npm run extract-typings) AFTER tsup:
    // tsup's rollup-plugin-dts OOMs on grauity's large generic surface across
    // ~40 entries. tsc emits a per-file .d.ts tree (rootDir: ui) co-located with
    // the .mjs/.cjs, which is exactly what the per-subpath `exports` map needs.
    dts: false,
    // Extract shared internals (core/, themes/, Icon, …) into shared chunks
    // loaded once, instead of duplicating them into every component entry —
    // matters for consumers importing many components. Bundler consumers
    // (Next/webpack/Vite/esbuild) re-flatten these chunks, so the circular
    // styled-components module graphs resolve correctly. The only native-ESM
    // caveat (`import styled from 'styled-components'` resolving sc@6's CJS,
    // whose default lacks tag helpers) is pre-existing and independent of
    // splitting — it affects unbundled native-ESM use only. See PR notes.
    splitting: true,
    treeshake: true,
    sourcemap: true,
    clean: true,
    minify: false,
    target: 'es2019',
    platform: 'browser',
    external,
    // tsup auto-externalizes every package.json dependency. Force-bundle lodash
    // so its CJS deep-imports (lodash/debounce, ...) are inlined rather than left
    // as extensionless ESM specifiers Node can't resolve.
    noExternal: [/^lodash(\/.*)?$/],
    onSuccess: async () => {
        copyStaticAssets();
    },
});
