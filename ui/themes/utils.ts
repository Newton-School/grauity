import { ExtractColorVariablesType, ThemeColorObjType } from './types';

/**
 * Returns a CSS variable name from the given parts
 *
 * @param parts - The parts of the variable name
 * @returns
 *
 * @example
 * constructVariableName('background', 'subtle', 'primary', 'default') => '--bg-subtle-primary-default'
 *
 */
export const constructVariableName = (...parts: string[]) => {
    return `--${parts.join('-')}`;
};

/**
 * Extracts color variables from the theme color object
 *
 * @param themeColorObj - The theme color object, which is a nested object of color categories, intensities, names, and states
 * @returns
 */
export const extractColorVariables: ExtractColorVariablesType = (
    themeColorObj: ThemeColorObjType
) => {
    const colorVariables: string[] = [];

    const extractVariables = (obj: any, parts: string[] = []) => {
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === 'object') {
                extractVariables(value, [...parts, key]);
            } else if (value) {
                const variableName = constructVariableName(...parts, key);
                colorVariables.push(`${variableName}: ${value};`);
            }
        });
    };

    extractVariables(themeColorObj);
    return colorVariables;
};
