/**
 * Writes a root `dist/index.d.ts` that re-exports the real root types.
 *
 * tsc emits the declaration tree under `dist/ui/**` (its rootDir is the repo
 * root, because grauity's `common/` and `hooks/` live outside `ui/`), so the
 * complete root types live at `dist/ui/index.d.ts`. The package `exports`/`types`
 * point there, but we also write a `dist/index.d.ts` re-export for tools that
 * read that legacy path literally (e.g. downstream audit scripts).
 */
const { writeFileSync } = require('node:fs');
const { resolve } = require('node:path');

const out = resolve(__dirname, '..', 'dist', 'index.d.ts');
writeFileSync(out, "export * from './ui/index';\n", 'utf8');
// eslint-disable-next-line no-console
console.log('  ✓ wrote dist/index.d.ts (re-exports ./ui/index)');
