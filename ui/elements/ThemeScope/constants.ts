import { Theme, ThemeClass, ThemeClassName, ThemeType } from './types';

export const THEME_CLASS_NAME_MAPPING: Record<Theme, ThemeClassName> = {
    [ThemeType.Light]: ThemeClass.Light,
    [ThemeType.Dark]: ThemeClass.Dark,
};

/**
 * Key used in styled-components theme object to store the current scoped theme.
 */
export const SC_THEME_SCOPE_THEME_KEY = 'scopedTheme';
