/**
 * Renders scripts/og-image/card.html to public/og-image.png — the 1200x630
 * social share card served at https://grauity.newtonschool.co/og-image.png and
 * referenced by the og:image / twitter:image tags in .storybook/manager-head.html.
 *
 * Run it after changing the card design or the brand assets:
 *
 *     node scripts/og-image/render.mjs
 *
 * Requires a local Chrome/Chromium (set CHROME_PATH to point at a specific one).
 * The card is shot at 2x and downscaled, so text stays crisp without shipping a
 * huge PNG; the downscale uses ImageMagick when available, macOS `sips` otherwise.
 */
import { execFileSync, spawn } from 'node:child_process';
import {
    existsSync,
    mkdirSync,
    mkdtempSync,
    readFileSync,
    rmSync,
    statSync,
    writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..', '..');

const WIDTH = 1200;
const HEIGHT = 630;
const SCALE = 2;
const TIMEOUT_MS = 90_000;

const CHROME_CANDIDATES = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
].filter(Boolean);

const wait = (ms) => new Promise((done) => setTimeout(done, ms));

function findChrome() {
    const chrome = CHROME_CANDIDATES.find((path) => existsSync(path));
    if (!chrome) {
        throw new Error(
            `No Chrome/Chromium found. Set CHROME_PATH to a browser binary. Looked in:\n  ${CHROME_CANDIDATES.join('\n  ')}`
        );
    }
    return chrome;
}

function has(binary) {
    try {
        execFileSync('which', [binary], { stdio: 'ignore' });
        return true;
    } catch {
        return false;
    }
}

function downscale(from, to) {
    if (has('magick')) {
        execFileSync('magick', [from, '-resize', `${WIDTH}x${HEIGHT}`, '-strip', to]);
        return;
    }
    if (has('sips')) {
        execFileSync('sips', ['-z', String(HEIGHT), String(WIDTH), from, '--out', to], {
            stdio: 'ignore',
        });
        return;
    }
    throw new Error('Need ImageMagick (`magick`) or macOS `sips` to downscale the screenshot.');
}

/**
 * Headless Chrome writes the screenshot and then, on some macOS builds, never
 * exits. So we run it detached and watch for the file to appear and stop
 * growing, rather than waiting on the process.
 */
async function screenshot(chrome, url, out) {
    const child = spawn(
        chrome,
        [
            '--headless=new',
            '--disable-gpu',
            '--no-sandbox',
            '--no-first-run',
            '--no-default-browser-check',
            '--hide-scrollbars',
            '--virtual-time-budget=5000',
            `--force-device-scale-factor=${SCALE}`,
            `--window-size=${WIDTH},${HEIGHT}`,
            `--screenshot=${out}`,
            `--user-data-dir=${join(dirname(out), 'profile')}`,
            url,
        ],
        { stdio: 'ignore', detached: true }
    );
    child.unref();

    try {
        let previous = -1;
        const deadline = Date.now() + TIMEOUT_MS;
        while (Date.now() < deadline) {
            await wait(500);
            if (!existsSync(out)) continue;
            const { size } = statSync(out);
            if (size > 0 && size === previous) return;
            previous = size;
        }
        throw new Error(`Chrome did not produce a screenshot within ${TIMEOUT_MS / 1000}s.`);
    } finally {
        try {
            process.kill(-child.pid, 'SIGKILL');
        } catch {
            child.kill('SIGKILL');
        }
    }
}

const font = readFileSync(join(ROOT, '.storybook', 'fonts', 'Mona-Sans.woff2')).toString('base64');
const mark = readFileSync(join(ROOT, 'public', 'favicon.svg'), 'utf8')
    .replace(
        /^[\s\S]*?<svg[^>]*>/,
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none">'
    )
    .trim();

const html = readFileSync(join(HERE, 'card.html'), 'utf8')
    .replaceAll('__FONT__', font)
    .replaceAll('__MARK__', mark);

const work = mkdtempSync(join(tmpdir(), 'grauity-og-'));
const source = join(work, 'card.html');
const shot = join(work, 'shot.png');
writeFileSync(source, html);

const out = join(ROOT, 'public', 'og-image.png');
mkdirSync(dirname(out), { recursive: true });

try {
    await screenshot(findChrome(), `file://${source}`, shot);
    downscale(shot, out);
    // eslint-disable-next-line no-console
    console.log(`  ✓ public/og-image.png (${WIDTH}x${HEIGHT})`);
} finally {
    rmSync(work, { recursive: true, force: true });
}
