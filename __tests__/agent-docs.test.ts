/**
 * Guards the agent-facing docs (`llms.txt`, `AGENTS.md`) against drifting out of
 * sync with the source they describe.
 *
 * These two files exist so LLM coding agents pass *valid* values to grauity's
 * closed enum props. grauity looks each value up in an internal style-mapping
 * table rather than validating it, so a wrong value never throws - it silently
 * renders nothing or the wrong style. That makes a stale doc worse than no doc,
 * and makes these assertions load-bearing rather than cosmetic.
 */
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(__dirname, '..');
const read = (p: string) => readFileSync(join(ROOT, p), 'utf8');

const LLMS = read('llms.txt');
const AGENTS = read('AGENTS.md');
const DOCS: [string, string][] = [
    ['llms.txt', LLMS],
    ['AGENTS.md', AGENTS],
];

/**
 * All matches of a global regex. Uses an exec loop rather than spreading
 * `matchAll`, which this repo's TS target does not allow.
 */
const allMatches = (text: string, source: string): string[][] => {
    const rx = new RegExp(source, 'g');
    const out: string[][] = [];
    let m = rx.exec(text);
    while (m !== null) {
        out.push(Array.prototype.slice.call(m) as string[]);
        if (m.index === rx.lastIndex) {
            rx.lastIndex += 1;
        }
        m = rx.exec(text);
    }
    return out;
};

/** Unique values, preserving first-seen order. */
const uniq = (xs: string[]): string[] =>
    xs.filter((x, i) => xs.indexOf(x) === i);

/** Values a string union is built from: the `| 'foo'` members of a `type X =`. */
const unionMembers = (src: string, typeName: string): string[] => {
    const start = src.indexOf('export type ' + typeName + ' =');
    if (start === -1) return [];
    const body = src.slice(start).split(/;\s*(?:\n|$)/)[0];
    return allMatches(body, "'([^']+)'").map((m) => m[1]);
};

/** Values of a TS string enum: the `NAME = 'value'` members of an `enum X {}`. */
const enumValues = (src: string, enumName: string): string[] => {
    const start = src.indexOf('enum ' + enumName + ' {');
    if (start === -1) return [];
    const body = src.slice(start, src.indexOf('}', start));
    return allMatches(body, "=\\s*'([^']+)'").map((m) => m[1]);
};

const ICON_NAMES = unionMembers(
    read('ui/core/icons/iconTypes.ts'),
    'grauityIconName'
);

const EXPORT_NAME =
    '\\b(NS[A-Za-z0-9_]+|Grauity[A-Za-z0-9_]+|useNS[A-Za-z0-9_]+)\\b';
const EXPORTS: string[] = uniq(
    allMatches(read('ui/index.ts'), EXPORT_NAME).map((m) => m[1])
);

/**
 * Names the docs deliberately mention as NOT existing, to steer agents away from
 * plausible-but-wrong imports. Allowed to appear even though they are not exports.
 */
const DOCUMENTED_AS_ABSENT = [
    'NSAvatar',
    'NSBadge',
    'NSSpinner',
    'NSLoader',
    'NSForm',
    'NSThemeProvider',
];

describe('agent docs: icon names', () => {
    it('extracts the icon union from source', () => {
        expect(ICON_NAMES.length).toBeGreaterThan(400);
        expect(uniq(ICON_NAMES).length).toBe(ICON_NAMES.length);
    });

    it('states an icon count that matches the source union', () => {
        // Any stated count must be right, and at least one doc must state one.
        const claims: string[] = [];
        DOCS.forEach((entry) => {
            const [file, text] = entry;
            allMatches(
                text,
                '(\\d{3})\\s+(?:`?grauityIconName`?|kebab-case)'
            ).forEach((m) => {
                claims.push(file + ': ' + m[1]);
            });
        });
        expect(claims.length).toBeGreaterThan(0);
        claims.forEach((claim) => {
            const [file, count] = claim.split(': ');
            expect(file + ': ' + count).toBe(file + ': ' + ICON_NAMES.length);
        });
    });

    it('only uses real icon names in icon-typed props', () => {
        // `name=` is deliberately excluded: on form components it is a field
        // name, not an icon. Only icon-typed props are checked here.
        const ICON_PROP =
            '\\b(?:icon|leftIcon|rightIcon|buttonIcon|leftIconName|rightIconName)="([a-z][a-z0-9-]*)"';
        const bad: string[] = [];
        DOCS.forEach((entry) => {
            const [file, text] = entry;
            allMatches(text, ICON_PROP).forEach((m) => {
                if (m[1] === 'auto') return; // NSAlert accepts 'auto'
                if (ICON_NAMES.indexOf(m[1]) === -1)
                    bad.push(file + ': ' + m[0]);
            });
        });
        expect(bad).toEqual([]);
    });

    it('only lists real icon names in the llms.txt example list', () => {
        const bullet = LLMS.split('\n').filter(
            (l) => l.indexOf('**`grauityIconName`**') !== -1
        )[0];
        expect(bullet).toBeDefined();
        // Names offered as valid examples, i.e. before the near-miss warning.
        const examples = bullet.split('Common near-misses')[0];
        const listed = allMatches(examples, '`([a-z][a-z0-9-]*)`')
            .map((m) => m[1])
            .filter((v) => v.indexOf('grauity') !== 0);
        expect(listed.length).toBeGreaterThan(20);
        expect(listed.filter((v) => ICON_NAMES.indexOf(v) === -1)).toEqual([]);
    });

    it('does not claim near-miss names are valid', () => {
        // Each of these is a name agents reach for that grauity does not have.
        ['user', 'minus', 'settings', 'trash', 'calendar', 'user-plus'].forEach(
            (absent) => {
                expect(ICON_NAMES.indexOf(absent)).toBe(-1);
            }
        );
    });
});

describe('agent docs: near-miss guidance', () => {
    // Both docs steer agents off names they habitually guess. If either column
    // drifts, the guidance actively teaches the wrong name - so assert the
    // direction: left is never valid, right always is.
    it('AGENTS.md near-miss table points from an invalid name to a valid one', () => {
        const rows = allMatches(
            AGENTS,
            '\\n>\\s*\\|\\s*`([a-z][a-z0-9-]*)`\\s*\\|\\s*`([a-z][a-z0-9-]*)`'
        );
        expect(rows.length).toBeGreaterThan(4);
        const wrong: string[] = [];
        rows.forEach((r) => {
            if (ICON_NAMES.indexOf(r[1]) > -1) {
                wrong.push('guessed name is actually valid: ' + r[1]);
            }
            if (ICON_NAMES.indexOf(r[2]) === -1) {
                wrong.push('suggested name is not valid: ' + r[2]);
            }
        });
        expect(wrong).toEqual([]);
    });

    it('llms.txt near-miss list points from an invalid name to a valid one', () => {
        const tail = LLMS.split('Common near-misses')[1];
        expect(tail).toBeDefined();
        const pairs = allMatches(
            tail.split('\n')[0],
            '`([a-z][a-z0-9-]*)` \\(use `([a-z][a-z0-9-]*)`'
        );
        expect(pairs.length).toBeGreaterThan(3);
        const wrong: string[] = [];
        pairs.forEach((r) => {
            if (ICON_NAMES.indexOf(r[1]) > -1) {
                wrong.push('guessed name is actually valid: ' + r[1]);
            }
            if (ICON_NAMES.indexOf(r[2]) === -1) {
                wrong.push('suggested name is not valid: ' + r[2]);
            }
        });
        expect(wrong).toEqual([]);
    });
});

describe('agent docs: exported names', () => {
    it('extracts exports from the barrel', () => {
        expect(EXPORTS.indexOf('NSButton')).toBeGreaterThan(-1);
        expect(EXPORTS.indexOf('GrauityThemeProvider')).toBeGreaterThan(-1);
        expect(EXPORTS.length).toBeGreaterThan(50);
    });

    it('every NS*/Grauity* name referenced is a real export', () => {
        const bad: string[] = [];
        DOCS.forEach((entry) => {
            const [file, text] = entry;
            allMatches(text, EXPORT_NAME).forEach((m) => {
                const name = m[1];
                if (EXPORTS.indexOf(name) > -1) return;
                if (DOCUMENTED_AS_ABSENT.indexOf(name) > -1) return;
                bad.push(file + ': ' + name);
            });
        });
        expect(uniq(bad)).toEqual([]);
    });

    it('mentions absent names only where it says they are absent', () => {
        // An allowlisted name must never read as usable API. Every line that
        // mentions one has to carry an explicit negation, or an agent will just
        // import it.
        const NEGATION =
            /\bno\b|\bnot\b|\bnever\b|\bdoes not exist\b|\bWRONG\b/i;
        const bad: string[] = [];
        DOCS.forEach((entry) => {
            const [file, text] = entry;
            text.split('\n').forEach((line, i) => {
                DOCUMENTED_AS_ABSENT.forEach((name) => {
                    const re = new RegExp('\\b' + name + '\\b', 'g');
                    let m = re.exec(line);
                    while (m !== null) {
                        // The negation has to come BEFORE the mention, or the
                        // name still reads as usable at the point it appears.
                        if (!NEGATION.test(line.slice(0, m.index))) {
                            bad.push(file + ':' + (i + 1) + ' ' + name);
                        }
                        m = re.exec(line);
                    }
                });
            });
        });
        expect(uniq(bad)).toEqual([]);
    });

    it('names documented as absent really are absent from the barrel', () => {
        DOCUMENTED_AS_ABSENT.forEach((name) => {
            expect(EXPORTS.indexOf(name)).toBe(-1);
        });
    });
});

describe('agent docs: package identity', () => {
    it('uses the real package name and no imposter', () => {
        DOCS.forEach((entry) => {
            const [file, text] = entry;
            expect(
                file + ':' + (text.indexOf('@newtonschool/grauity') > -1)
            ).toBe(file + ':true');
            expect(file + ':' + /@gravity\/ui|@grauity\//.test(text)).toBe(
                file + ':false'
            );
        });
    });
});

describe('agent docs: closed enum sets', () => {
    const BUTTON = read('ui/elements/Button/constants.ts');
    const CHIP = read('ui/elements/Chip/constants.ts');

    const BUTTON_ENUMS = [
        'BUTTON_VARIANTS_ENUM',
        'BUTTON_COLORS_ENUM',
        'BUTTON_SIZES_ENUM',
    ];

    it('llms.txt lists every value of the enums it presents as complete', () => {
        const sets = [
            enumValues(BUTTON, 'BUTTON_VARIANTS_ENUM'),
            enumValues(BUTTON, 'BUTTON_COLORS_ENUM'),
            enumValues(BUTTON, 'BUTTON_SIZES_ENUM'),
            enumValues(CHIP, 'CHIP_VARIANTS_ENUM'),
            enumValues(CHIP, 'CHIP_SIZES_ENUM'),
        ];
        sets.forEach((values) => {
            expect(values.length).toBeGreaterThan(1);
            const missing = values.filter((v) => LLMS.indexOf(v) === -1);
            expect(missing).toEqual([]);
        });
    });

    /** The body of one `#### <heading>` section of AGENTS.md. */
    const section = (heading: string): string => {
        const parts = AGENTS.split('#### ' + heading + '\n');
        expect(heading + ' section found').toBe(
            parts.length > 1 ? heading + ' section found' : 'missing'
        );
        return parts[1].split('####')[0].split('###')[0];
    };

    // Each block presents these as complete sets, so a value missing from any
    // one of them reads to an agent as "not allowed". Checked per block: a value
    // present in a neighbouring block must not mask its absence here.
    it.each(['NSButton', 'NSIconButton'])(
        '%s block lists every Button enum value',
        (heading) => {
            const block = section(heading);
            const missing: string[] = [];
            BUTTON_ENUMS.forEach((name) => {
                enumValues(BUTTON, name).forEach((v) => {
                    if (block.indexOf("'" + v + "'") === -1) missing.push(v);
                });
            });
            expect(heading + ': ' + uniq(missing).join(', ')).toBe(
                heading + ': '
            );
        }
    );

    it('llms.txt lists every form field type and row condition', () => {
        // The JSDoc on UseFormProps omits 'combobox'; the enums are the source
        // of truth, and this is where a doc most easily inherits a stale list.
        const form = read('ui/elements/Form/useForm/types.ts');
        const types = enumValues(form, 'FormFieldType');
        const columns = enumValues(form, 'FormRowColumnCondition');
        expect(types.length).toBeGreaterThan(6);
        expect(columns).toHaveLength(3);
        expect(types.filter((v) => LLMS.indexOf('`' + v + '`') === -1)).toEqual(
            []
        );
        expect(
            columns.filter((v) => LLMS.indexOf('`' + v + '`') === -1)
        ).toEqual([]);
    });

    it('llms.txt documents the required useForm config keys', () => {
        // `rows` is required and is where the fields live - omitting it yields a
        // config that cannot render.
        const form = read('ui/elements/Form/useForm/types.ts');
        const cfg = form.slice(form.indexOf('export interface FormConfig'));
        const required = allMatches(
            cfg.slice(0, cfg.indexOf('}')),
            '\\n\\s+([a-zA-Z]+):\\s'
        ).map((m) => m[1]);
        expect(required.sort()).toEqual(['fieldNames', 'initialState', 'rows']);
        const forms = LLMS.split('## Forms')[1].split('\n## ')[0];
        required.forEach((key) => expect(forms).toContain(key));
        expect(forms).toContain('formConfig');
        expect(forms).toContain('formRenderer');
    });

    it('both docs list all Typography variants', () => {
        const variants = unionMembers(
            read('ui/elements/Typography/types.ts'),
            'TypographyVariantType'
        );
        expect(variants).toHaveLength(27);
        DOCS.forEach((entry) => {
            const [file, text] = entry;
            const missing = variants.filter((v) => text.indexOf(v) === -1);
            expect(file + ': ' + missing.join(', ')).toBe(file + ': ');
        });
    });

    it('lists the real icon and spacing size scales', () => {
        const sizes = read('ui/core/sizes/sizeTypes.ts');
        expect(unionMembers(sizes, 'grauityIconSizeName')).toEqual([
            '4',
            '8',
            '12',
            '14',
            '16',
            '20',
            '24',
            '28',
            '32',
            '36',
            '40',
        ]);
        expect(unionMembers(sizes, 'grauitySizeName')).toEqual([
            '4',
            '8',
            '12',
            '16',
            '20',
            '24',
            '28',
            '32',
            '36',
            '40',
            '44',
            '48',
        ]);
    });
});

describe('agent docs: referenced paths resolve', () => {
    it('every ui/** path mentioned exists', () => {
        const bad: string[] = [];
        DOCS.forEach((entry) => {
            const [file, text] = entry;
            allMatches(text, '(?:`|\\()(ui/[A-Za-z0-9_/.-]+)(?:`|\\))').forEach(
                (m) => {
                    const p = m[1].replace(/[.,]$/, '');
                    if (p.indexOf('*') > -1) return;
                    if (!existsSync(join(ROOT, p))) bad.push(file + ': ' + p);
                }
            );
        });
        expect(uniq(bad)).toEqual([]);
    });

    it('names the type files by their real filename', () => {
        // The convention is `types.ts`, not `*.types.ts` - a glob for the latter
        // matches nothing, sending agents after a file that does not exist.
        DOCS.forEach((entry) => {
            const [file, text] = entry;
            expect(file + ':' + (text.indexOf('*.types.ts') > -1)).toBe(
                file + ':false'
            );
        });
    });
});

describe('agent docs: are actually served', () => {
    it('copies both docs to the Storybook output root', () => {
        const main = read('.storybook/main.js');
        expect(main).toContain("from: '../llms.txt'");
        expect(main).toContain("to: '/llms.txt'");
        expect(main).toContain("from: '../AGENTS.md'");
        expect(main).toContain("to: '/AGENTS.md'");
    });

    it('disables Jekyll so a root .md is served verbatim', () => {
        // GitHub Pages serves this repo with the legacy (Jekyll) build from
        // gh-pages:/docs. Without .nojekyll a root markdown file is subject to
        // Jekyll's processing rules; .nojekyll makes /AGENTS.md deterministic.
        const pkg = JSON.parse(read('package.json'));
        expect(pkg.scripts['build-storybook']).toContain('docs/.nojekyll');
    });
});
