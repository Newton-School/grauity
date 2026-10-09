/**
 * @jest-environment node
 */

/**
 * ui/css/grauity-icons.scss is generated and gitignored, so a regression to deprecated Sass
 * would not show up in review. These tests run the generator's own fantasticon options over two
 * fixture icons and compile the result with every active Sass deprecation made fatal.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const sass = require('sass');

const ROOT_DIRECTORY = path.resolve(__dirname, '..');
const FIXTURE_ICONS = {
    'Test_alpha.svg':
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 2h20v20H2z"/></svg>',
    'Test_beta.svg':
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>',
};
const FATAL_DEPRECATIONS = Object.values(sass.deprecations).filter(
    (deprecation) => deprecation.status === 'active'
);

// The options the generator passes to fantasticon, captured without building the real font.
const getGeneratorOptions = () => {
    let generatorOptions;
    jest.isolateModules(() => {
        jest.doMock('fantasticon', () => ({
            ...jest.requireActual('fantasticon'),
            generateFonts: (options) => {
                generatorOptions = options;
                return new Promise(() => {});
            },
        }));
        // eslint-disable-next-line global-require
        require('./generate-font-icons-from-optimised-svgs.cjs');
    });
    return generatorOptions;
};

// Renders grauity-icons.scss for the fixture icons, in memory: no outputDir, so nothing is written.
const generateFixtureScss = async () => {
    const { generateFonts } = jest.requireActual('fantasticon');
    const inputDir = fs.mkdtempSync(path.join(os.tmpdir(), 'grauity-icons-'));
    Object.entries(FIXTURE_ICONS).forEach(([fileName, svg]) => {
        fs.writeFileSync(path.join(inputDir, fileName), svg);
    });

    const options = { ...getGeneratorOptions(), inputDir };
    delete options.outputDir;
    delete options.pathOptions;
    // The generator runs from the repository root (npm scripts), so its paths are relative to it.
    // Without a template of its own, fantasticon falls back to its bundled one.
    if (options.templates && options.templates.scss) {
        options.templates = {
            scss: path.resolve(ROOT_DIRECTORY, options.templates.scss),
        };
    }

    try {
        const { assetsOut, codepoints } = await generateFonts(options);
        return { scss: assetsOut.scss, codepoints };
    } finally {
        fs.rmSync(inputDir, { recursive: true, force: true });
    }
};

const toCssEscape = (codepoint) => `\\${codepoint.toString(16)}`;

describe('generate-font-icons-from-optimised-svgs', () => {
    it('renders grauity-icons.scss from the template in scripts/templates', () => {
        const { templates } = getGeneratorOptions();

        expect(templates).toBeDefined();
        expect(path.resolve(ROOT_DIRECTORY, templates.scss)).toBe(
            path.resolve(__dirname, 'templates/grauity-icons.scss.hbs')
        );
    });

    it('generates SCSS that compiles with every active Sass deprecation made fatal', async () => {
        const { scss, codepoints } = await generateFixtureScss();

        const { css } = sass.compileString(scss, {
            fatalDeprecations: FATAL_DEPRECATIONS,
        });

        expect(Object.keys(codepoints)).toEqual(['alpha', 'beta']);
        Object.entries(codepoints).forEach(([name, codepoint]) => {
            const content = toCssEscape(codepoint);
            expect(css).toContain(
                `.grauity-icon-${name}:before {\n  content: "${content}";\n}`
            );
        });
        expect(css).toContain(
            'i[class^=grauity-icon-]:before, i[class*=" grauity-icon-"]:before {'
        );
    });

    it('keeps $grauity-icons-map available to stylesheets that import it', async () => {
        const { scss, codepoints } = await generateFixtureScss();

        const { css } = sass.compileString(
            `@use "sass:map";\n${scss}\n.probe { content: map.get($grauity-icons-map, "beta"); }`,
            { fatalDeprecations: FATAL_DEPRECATIONS }
        );

        expect(css).toContain(
            `.probe {\n  content: "${toCssEscape(codepoints.beta)}";\n}`
        );
    });

    it('would fail on the global map-get() that fantasticon 2 emits', () => {
        // Proves the check above is not vacuous: this is the per-icon rule the old template emitted.
        expect(() =>
            sass.compileString(
                '$grauity-icons-map: ("alpha": "\\f101");\n.grauity-icon-alpha:before { content: map-get($grauity-icons-map, "alpha"); }',
                { fatalDeprecations: FATAL_DEPRECATIONS }
            )
        ).toThrow(
            /Global built-in functions are deprecated|Undefined function/
        );
    });
});
