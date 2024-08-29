import { grauityIconName } from '../../core';

export enum ALERT_BANNER_TYPES_ENUM {
    DEFAULT = 'default', // Colorless background, colored icon & text
    OUTLINED = 'outlined', // Light colored background with outline, colored icon & text
    FILLED = 'filled', // Colored background, white icon & text
}

export enum ALERT_BANNER_VARIANTS_ENUM {
    PRIMARY = 'primary',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    DEFAULT = 'default',
}

export const ERRONEOUS_ALERT_BANNER_VARIANTS = [
    ALERT_BANNER_VARIANTS_ENUM.WARNING,
    ALERT_BANNER_VARIANTS_ENUM.ERROR,
];

export const ALERT_BANNER_VARIANTS = [
    ALERT_BANNER_VARIANTS_ENUM.PRIMARY,
    ALERT_BANNER_VARIANTS_ENUM.SUCCESS,
    ALERT_BANNER_VARIANTS_ENUM.WARNING,
    ALERT_BANNER_VARIANTS_ENUM.ERROR,
    ALERT_BANNER_VARIANTS_ENUM.DEFAULT,
];

export const ALERT_BANNER_TYPES = [
    ALERT_BANNER_TYPES_ENUM.DEFAULT,
    ALERT_BANNER_TYPES_ENUM.OUTLINED,
    ALERT_BANNER_TYPES_ENUM.FILLED,
];

export const DEFAULT_ALERT_VARIANT_ICON_MAPPING: Record<
    ALERT_BANNER_VARIANTS_ENUM,
    grauityIconName
> = {
    [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: 'info-circle',
    [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: 'check-circle',
    [ALERT_BANNER_VARIANTS_ENUM.WARNING]: 'exclamation-triangle',
    [ALERT_BANNER_VARIANTS_ENUM.ERROR]: 'exclamation-circle',
    [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: 'info-circle',
};
