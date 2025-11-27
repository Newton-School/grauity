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
    colors: ThemeColorObjType;
    [otherThemeProperty: string]: any;
};
