import React, { PropsWithChildren } from 'react';

export enum ThemeType {
    Light = 'light',
    Dark = 'dark',
}
export type Theme = `${ThemeType}`;

export enum ThemeClass {
    Light = 'grauity-theme-light',
    Dark = 'grauity-theme-dark',
}

export type ThemeClassName = `${ThemeClass}`;

export type ThemeScopeProps = PropsWithChildren<{
    /**
     * The theme to apply within this scope. If not provided, it will
     * inherit from the parent scope.
     */
    applyTheme?: Theme;
    /**
     * If true, it will apply the invert of the parent theme.
     */
    invert?: boolean;
    /**
     * The HTML element (like `'div'`) or React component to render as the root of this
     * theme scope. If providing a React component, it should accept a `className` prop
     * for the theme to be applied correctly.
     *
     * Defaults to a `div` element.
     */
    as?: React.ElementType;

    /**
     * Additional class names to apply to the current theme scope's root element
     * (see `ThemeScopeProps.as`)
     */
    className?: string;
}>;

export type GetThemeAndClassNameParams = {
    /**
     * The theme to apply within this scope.
     */
    applyTheme?: Theme;
    /**
     * The parent theme to inherit from, defaults to 'light'
     */
    parentTheme?: Theme;
    /**
     * If true, it will invert the theme from the parent scope
     */
    invert?: boolean;
};
