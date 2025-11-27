import '@testing-library/jest-dom';

import { renderHook } from '@testing-library/react';
import React from 'react';

import ThemeScope, { useThemeScope } from './index';

describe('useThemeScope', () => {
    it('returns light theme and className when no provider context', () => {
        const { result } = renderHook(() => useThemeScope());

        expect(result.current.theme).toBe('light');
        expect(result.current.themeClassName).toBe('grauity-theme-light');
    });

    it('returns light theme when provider has light theme', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ThemeScope applyTheme="light">{children}</ThemeScope>
        );

        const { result } = renderHook(() => useThemeScope(), { wrapper });

        expect(result.current.theme).toBe('light');
        expect(result.current.themeClassName).toBe('grauity-theme-light');
    });

    it('returns dark theme when provider has dark theme', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ThemeScope applyTheme="dark">{children}</ThemeScope>
        );

        const { result } = renderHook(() => useThemeScope(), { wrapper });

        expect(result.current.theme).toBe('dark');
        expect(result.current.themeClassName).toBe('grauity-theme-dark');
    });

    it('works with nested providers', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ThemeScope applyTheme="light">
                <ThemeScope applyTheme="dark">
                    {children}
                </ThemeScope>
            </ThemeScope>
        );

        const { result } = renderHook(() => useThemeScope(), { wrapper });

        expect(result.current.theme).toBe('dark');
        expect(result.current.themeClassName).toBe('grauity-theme-dark');
    });

    it('provides stable reference for theme values', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ThemeScope applyTheme="dark">{children}</ThemeScope>
        );

        const { result, rerender } = renderHook(() => useThemeScope(), { wrapper });

        const firstResult = result.current;
        rerender();
        const secondResult = result.current;

        expect(firstResult.theme).toBe(secondResult.theme);
        expect(firstResult.themeClassName).toBe(secondResult.themeClassName);
    });

    it('updates when provider theme changes', () => {
        let providerTheme = 'light';
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ThemeScope applyTheme={providerTheme as any}>
                {children}
            </ThemeScope>
        );

        const { result, rerender } = renderHook(() => useThemeScope(), { wrapper });

        expect(result.current.theme).toBe('light');

        // Simulate theme change
        providerTheme = 'dark';
        rerender();

        expect(result.current.theme).toBe('dark');
        expect(result.current.themeClassName).toBe('grauity-theme-dark');
    });

    it('returns correct values for deeply nested contexts', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ThemeScope applyTheme="light">
                <ThemeScope applyTheme="dark">
                    <ThemeScope invert>
                        {children}
                    </ThemeScope>
                </ThemeScope>
            </ThemeScope>
        );

        const { result } = renderHook(() => useThemeScope(), { wrapper });

        expect(result.current.theme).toBe('light');
        expect(result.current.themeClassName).toBe('grauity-theme-light');
    });
});
