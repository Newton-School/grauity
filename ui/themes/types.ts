import React from 'react';
import { Theme } from 'ui/elements/ThemeScope/types';

export type ThemeName = Theme;

export type ThemeColorObjType = {
    [colorCategory: string]: {
        [colorIntensity: string]: {
            [colorName: string]: {
                [colorState: string]: string;
            };
        };
    };
};

export type ExtractColorVariablesType = (
    themeColorObj: ThemeColorObjType
) => String[];

export type ThemeConfigType = {
    [themeName: string]: ThemeColorObjType | any;
};

export type GrauityThemeProviderProps = {
    /**
     * Configuration for themes, where each theme name maps to its color object.
     * Default grauity themes are be provided for light and dark modes.
     */
    themeConfig: ThemeConfigType;

    /**
     * Children components to be wrapped by the theme provider.
     */
    children: React.ReactNode;

    /**
     * The current theme to apply. Defaults to 'light'.
     */
    currentTheme?: ThemeName;

    /**
     * The HTML element to initialize the theme on.
     *
     * Defaults to 'body'.
     */
    initThemeElement?: string;
};
