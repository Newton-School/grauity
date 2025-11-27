import { grauityIconName } from '../../core';
import { BUTTON_COLORS_ENUM } from '../Button/constants';

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

export const ALERT_BANNER_COLOR_MAPPINGS = {
    [ALERT_BANNER_TYPES_ENUM.DEFAULT]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: {
            iconColor: 'var(--text-emphasis-brand-default, #0673f9)',
            textColor: 'var(--text-emphasis-primary-default, #16191d)',
            backgroundColor: 'var(--bg-subtle-primary-default, #ffffff)',
            borderColor: 'var(--border-subtle-primary-default, #e1e5ea)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: {
            iconColor: 'var(--text-emphasis-success-default, #007a51)',
            textColor: 'var(--text-emphasis-primary-default, #16191d)',
            backgroundColor: 'var(--bg-subtle-primary-default, #ffffff)',
            borderColor: 'var(--border-subtle-primary-default, #e1e5ea)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: {
            iconColor: 'var(--text-emphasis-warning-default, #de5a02)',
            textColor: 'var(--text-emphasis-primary-default, #16191d)',
            backgroundColor: 'var(--bg-subtle-primary-default, #ffffff)',
            borderColor: 'var(--border-subtle-primary-default, #e1e5ea)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: {
            iconColor: 'var(--text-emphasis-error-default, #d22d3a)',
            textColor: 'var(--text-emphasis-primary-default, #16191d)',
            backgroundColor: 'var(--bg-subtle-primary-default, #ffffff)',
            borderColor: 'var(--border-subtle-primary-default, #e1e5ea)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: {
            iconColor: 'var(--text-emphasis-primary-default, #16191d)',
            textColor: 'var(--text-emphasis-primary-default, #16191d)',
            backgroundColor: 'var(--bg-subtle-primary-default, #ffffff)',
            borderColor: 'var(--border-subtle-primary-default, #e1e5ea)',
        },
    },
    [ALERT_BANNER_TYPES_ENUM.OUTLINED]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: {
            iconColor: 'var(--text-emphasis-brand-default, #0673f9)',
            textColor: 'var(--text-emphasis-brand-default, #0673f9)',
            backgroundColor: 'var(--bg-subtle-brand-default, #e5f1ff)',
            borderColor: 'var(--border-subtle-brand-default, #61a8ff)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: {
            iconColor: 'var(--text-emphasis-success-default, #007a51)',
            textColor: 'var(--text-emphasis-success-default, #007a51)',
            backgroundColor: 'var(--bg-subtle-success-default, #d9fced)',
            borderColor: 'var(--border-subtle-success-default, #acf7d3)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: {
            iconColor: 'var(--text-emphasis-warning-default, #de5a02)',
            textColor: 'var(--text-emphasis-warning-default, #de5a02)',
            backgroundColor: 'var(--bg-subtle-warning-default, #fff1e5)',
            borderColor: 'var(--border-subtle-warning-default, #ffd2ba)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: {
            iconColor: 'var(--text-emphasis-error-default, #d22d3a)',
            textColor: 'var(--text-emphasis-error-default, #d22d3a)',
            backgroundColor: 'var(--bg-subtle-error-default, #ffe5e7)',
            borderColor: 'var(--border-subtle-error-default, #fbbbbf)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: {
            iconColor: 'var(--text-emphasis-primary-default, #16191d)',
            textColor: 'var(--text-emphasis-primary-default, #16191d)',
            backgroundColor: 'var(--bg-subtle-secondary-default, #f6f7f9)',
            borderColor: 'var(--border-subtle-primary-default, #e1e5ea)',
        },
    },
    [ALERT_BANNER_TYPES_ENUM.FILLED]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: {
            iconColor: 'var(--text-emphasis-white-default, #ffffff)',
            textColor: 'var(--text-emphasis-white-default, #ffffff)',
            backgroundColor: 'var(--bg-emphasis-brand-default, #0673f9)',
            borderColor: 'transparent',
        },
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: {
            iconColor: 'var(--text-emphasis-white-default, #ffffff)',
            textColor: 'var(--text-emphasis-white-default, #ffffff)',
            backgroundColor: 'var(--bg-emphasis-success-default, #009965)',
            borderColor: 'transparent',
        },
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: {
            iconColor: 'var(--text-emphasis-white-default, #ffffff)',
            textColor: 'var(--text-emphasis-white-default, #ffffff)',
            backgroundColor: 'var(--bg-emphasis-warning-default, #f37216)',
            borderColor: 'transparent',
        },
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: {
            iconColor: 'var(--text-emphasis-white-default, #ffffff)',
            textColor: 'var(--text-emphasis-white-default, #ffffff)',
            backgroundColor: 'var(--bg-emphasis-error-default, #d22d3a)',
            borderColor: 'transparent',
        },
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: {
            iconColor: 'var(--text-emphasis-invert-primary-default, #ffffff)',
            textColor: 'var(--text-emphasis-invert-primary-default, #ffffff)',
            backgroundColor: 'var(--bg-subtle-invert-primary-default, #0b0c0e)',
            borderColor: 'transparent',
        },
    },
};

export const ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_COLOR_MAPPING = {
    [ALERT_BANNER_TYPES_ENUM.DEFAULT]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: BUTTON_COLORS_ENUM.NEUTRAL,
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: BUTTON_COLORS_ENUM.NEUTRAL,
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: BUTTON_COLORS_ENUM.NEUTRAL,
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: BUTTON_COLORS_ENUM.NEUTRAL,
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: BUTTON_COLORS_ENUM.NEUTRAL,
    },
    [ALERT_BANNER_TYPES_ENUM.OUTLINED]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: BUTTON_COLORS_ENUM.BRAND,
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: BUTTON_COLORS_ENUM.SUCCESS,
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: BUTTON_COLORS_ENUM.WARNING,
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: BUTTON_COLORS_ENUM.ERROR,
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: BUTTON_COLORS_ENUM.NEUTRAL,
    },
    [ALERT_BANNER_TYPES_ENUM.FILLED]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: BUTTON_COLORS_ENUM.BRAND,
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: BUTTON_COLORS_ENUM.SUCCESS,
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: BUTTON_COLORS_ENUM.WARNING,
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: BUTTON_COLORS_ENUM.ERROR,
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: BUTTON_COLORS_ENUM.NEUTRAL,
    },
};
