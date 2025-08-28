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

// Helper type to ensure a component accepts className prop (optional or required)
type HasClassName<P> = 'className' extends keyof P ? P : never;

// Helper type to ensure the component accepts className
type RequiresClassName<T> = T extends React.ComponentType<infer P>
    ? HasClassName<P> extends never
        ? never
        : T
    : T; // Intrinsic elements like 'div', 'span' etc. always accept className

// Core ThemeScope props (without the forwarded props)
type ThemeScopeOwnProps = {
    /**
     * The theme to apply within this scope. If not provided, it will
     * inherit from the parent scope. Takes precedence over `invert` prop.
     */
    applyTheme?: Theme;
    /**
     * If true, it will apply the invert of the parent theme.
     */
    invert?: boolean;
};

// Generic ThemeScope props with proper type inference
export type ThemeScopeProps<T extends React.ElementType = 'div'> =
    ThemeScopeOwnProps & {
        /**
         * The HTML element (like `'div'`) or React component to render as the root of this
         * theme scope. If a React component, it must accept a `className` prop and apply it at the outermost HTML element for the theme to be
         * applied correctly.
         *
         * Defaults to a `div` element.
         */
        as?: RequiresClassName<T>;

        /**
         * Additional props to forward to the underlying component specified by `as`.
         */
        asProps?: Omit<React.ComponentPropsWithoutRef<T>, 'children'>;

        /**
         * Children to render within the theme scope. Type is inferred from the `as` component.
         */
        children?: React.ComponentPropsWithoutRef<T> extends {
            children?: infer C;
        }
            ? C
            : never;
    };

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
