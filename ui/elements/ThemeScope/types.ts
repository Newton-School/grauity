import React from 'react';

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

type RequiredProps = 'className';
type ForbiddenProps = 'applyTheme' | 'invert' | 'as';

type AllowedComponentProps<T extends React.ElementType> = Omit<
    React.ComponentPropsWithoutRef<T>,
    ForbiddenProps
>;

type EnforceComponentType<T extends React.ElementType> =
    RequiredProps extends keyof React.ComponentPropsWithoutRef<T>
        ? ForbiddenProps & keyof React.ComponentPropsWithoutRef<T> extends never
            ? T
            : never
        : never;

// Generic ThemeScope props with proper type inference
export type ThemeScopeProps<T extends React.ElementType> = {
    /**
     * The theme to apply within this scope. If not provided, it will
     * inherit from the parent scope. Takes precedence over `invert` prop.
     */
    applyTheme?: Theme;

    /**
     * If true, it will apply the invert of the parent theme.
     */
    invert?: boolean;

    /**
     * The HTML element (like `'div'`) or React component to render as the root of this
     * theme scope. If a React component, it must accept a `className` prop and apply it at the outermost HTML element for the theme to be
     * applied correctly.
     *
     * Defaults to a `div` element.
     */
    as?: EnforceComponentType<T>;
} & AllowedComponentProps<T>;

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
