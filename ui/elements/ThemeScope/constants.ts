import { Theme, ThemeClass, ThemeClassName, ThemeType } from './types';

export const THEME_CLASS_NAME_MAPPING: Record<Theme, ThemeClassName> = {
    [ThemeType.Light]: ThemeClass.Light,
    [ThemeType.Dark]: ThemeClass.Dark,
};
