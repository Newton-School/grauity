import { getThemeAndThemeClassName } from './utils';

describe('getThemeAndThemeClassName', () => {
    it('returns light theme by default when no parameters provided', () => {
        const result = getThemeAndThemeClassName({});

        expect(result.theme).toBe('light');
        expect(result.themeClassName).toBe('grauity-theme-light');
    });

    it('applies the specified theme when applyTheme is provided', () => {
        const result = getThemeAndThemeClassName({
            applyTheme: 'dark',
        });

        expect(result.theme).toBe('dark');
        expect(result.themeClassName).toBe('grauity-theme-dark');
    });

    it('applies light theme when applyTheme is light', () => {
        const result = getThemeAndThemeClassName({
            applyTheme: 'light',
        });

        expect(result.theme).toBe('light');
        expect(result.themeClassName).toBe('grauity-theme-light');
    });

    it('inherits parent theme when no applyTheme and no invert', () => {
        const result = getThemeAndThemeClassName({
            parentTheme: 'dark',
        });

        expect(result.theme).toBe('dark');
        expect(result.themeClassName).toBe('grauity-theme-dark');
    });

    it('inverts light parent theme to dark when invert is true', () => {
        const result = getThemeAndThemeClassName({
            parentTheme: 'light',
            invert: true,
        });

        expect(result.theme).toBe('dark');
        expect(result.themeClassName).toBe('grauity-theme-dark');
    });

    it('inverts dark parent theme to light when invert is true', () => {
        const result = getThemeAndThemeClassName({
            parentTheme: 'dark',
            invert: true,
        });

        expect(result.theme).toBe('light');
        expect(result.themeClassName).toBe('grauity-theme-light');
    });

    it('applyTheme takes precedence over invert', () => {
        const result = getThemeAndThemeClassName({
            applyTheme: 'dark',
            parentTheme: 'dark',
            invert: true,
        });

        expect(result.theme).toBe('dark');
        expect(result.themeClassName).toBe('grauity-theme-dark');
    });

    it('applyTheme takes precedence over parentTheme', () => {
        const result = getThemeAndThemeClassName({
            applyTheme: 'light',
            parentTheme: 'dark',
        });

        expect(result.theme).toBe('light');
        expect(result.themeClassName).toBe('grauity-theme-light');
    });

    it('defaults to light theme when only invert is true but no parentTheme', () => {
        const result = getThemeAndThemeClassName({
            invert: true,
        });

        expect(result.theme).toBe('light');
        expect(result.themeClassName).toBe('grauity-theme-light');
    });

    it('handles all combinations of parameters correctly', () => {
        // Test matrix of different parameter combinations
        const testCases = [
            // Default to light theme
            {
                params: {},
                expected: {
                    theme: 'light',
                    themeClassName: 'grauity-theme-light',
                },
            },
            // Apply light theme
            {
                params: { applyTheme: 'light' as const },
                expected: {
                    theme: 'light',
                    themeClassName: 'grauity-theme-light',
                },
            },
            // Apply dark theme
            {
                params: { applyTheme: 'dark' as const },
                expected: {
                    theme: 'dark',
                    themeClassName: 'grauity-theme-dark',
                },
            },
            // Inherit light parent theme
            {
                params: { parentTheme: 'light' as const },
                expected: {
                    theme: 'light',
                    themeClassName: 'grauity-theme-light',
                },
            },
            // Inherit dark parent theme
            {
                params: { parentTheme: 'dark' as const },
                expected: {
                    theme: 'dark',
                    themeClassName: 'grauity-theme-dark',
                },
            },
            // Invert light parent theme to dark
            {
                params: { parentTheme: 'light' as const, invert: true },
                expected: {
                    theme: 'dark',
                    themeClassName: 'grauity-theme-dark',
                },
            },
            // Invert dark parent theme to light
            {
                params: { parentTheme: 'dark' as const, invert: true },
                expected: {
                    theme: 'light',
                    themeClassName: 'grauity-theme-light',
                },
            },
            // applyTheme takes precedence over parentTheme and invert
            {
                params: {
                    applyTheme: 'light' as const,
                    parentTheme: 'dark' as const,
                    invert: true,
                },
                expected: {
                    theme: 'light',
                    themeClassName: 'grauity-theme-light',
                },
            },
            // applyTheme takes precedence over parentTheme and invert
            {
                params: {
                    applyTheme: 'dark' as const,
                    parentTheme: 'light' as const,
                    invert: true,
                },
                expected: {
                    theme: 'dark',
                    themeClassName: 'grauity-theme-dark',
                },
            },
        ];

        testCases.forEach(({ params, expected }) => {
            const result = getThemeAndThemeClassName(params);
            expect(result.theme).toBe(expected.theme);
            expect(result.themeClassName).toBe(expected.themeClassName);
        });
    });
});
