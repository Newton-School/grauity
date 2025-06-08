import { THEME_CLASS_NAME_MAPPING } from './constants';
import {
    GetThemeAndClassNameParams,
    Theme,
    ThemeClassName,
    ThemeType,
} from './types';

/**
 * Returns the theme and its corresponding class name based on the provided
 * applyTheme and parentTheme. If applyTheme is not provided, it will inherit
 * from the parentTheme. If invert is true, it will switch between light and dark themes.
 * @returns {{ theme: Theme; themeClassName: ThemeClassName }} - The new theme and its class name.
 */
export const getThemeAndThemeClassName = ({
    applyTheme,
    parentTheme,
    invert,
}: GetThemeAndClassNameParams): {
    theme: Theme;
    themeClassName: ThemeClassName;
} => {
    let newTheme: Theme;

    if (applyTheme) {
        newTheme = applyTheme;
    } else if (parentTheme) {
        if (invert) {
            if (parentTheme === ThemeType.Light) {
                newTheme = ThemeType.Dark;
            } else {
                newTheme = ThemeType.Light;
            }
        } else {
            newTheme = parentTheme;
        }
    } else {
        newTheme = ThemeType.Light;
    }

    const newThemeClassName: ThemeClassName =
        THEME_CLASS_NAME_MAPPING[newTheme];

    return {
        theme: newTheme,
        themeClassName: newThemeClassName,
    };
};
