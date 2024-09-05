import { grauityIconName } from '../../core';
import { BUTTON_VARIANTS_ENUM } from '../Button';

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
            iconColor: 'var(--text-brand, #0673F9)',
            textColor: 'var(--text-primary, #16191D)',
            backgroundColor: 'var(--bg-primary, #FFF)',
            borderColor: 'var(--border, #E1E5EA)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: {
            iconColor: 'var(--text-success, #007A51)',
            textColor: 'var(--text-primary, #16191D)',
            backgroundColor: 'var(--bg-primary, #FFF)',
            borderColor: 'var(--border, #E1E5EA)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: {
            iconColor: 'var(--text-warning, #DE5A02)',
            textColor: 'var(--text-primary, #16191D)',
            backgroundColor: 'var(--bg-primary, #FFF)',
            borderColor: 'var(--border, #E1E5EA)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: {
            iconColor: 'var(--text-error, #D22D3A)',
            textColor: 'var(--text-primary, #16191D)',
            backgroundColor: 'var(--bg-primary, #FFF)',
            borderColor: 'var(--border, #E1E5EA)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: {
            iconColor: 'var(--text-primary, #16191D)',
            textColor: 'var(--text-primary, #16191D)',
            backgroundColor: 'var(--bg-primary, #FFF)',
            borderColor: 'var(--border, #E1E5EA)',
        },
    },
    [ALERT_BANNER_TYPES_ENUM.OUTLINED]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: {
            iconColor: 'var(--text-brand, #0673F9)',
            textColor: 'var(--text-brand, #0673F9)',
            backgroundColor: 'var(--bg-brand, #E5F1FF)',
            borderColor: 'var(--border-brand, #94C4FF)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: {
            iconColor: 'var(--text-success, #007A51)',
            textColor: 'var(--text-success, #007A51)',
            backgroundColor: 'var(--bg-success, #D9FCED)',
            borderColor: 'var(--border-success, #ACF7D3)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: {
            iconColor: 'var(--text-warning, #DE5A02)',
            textColor: 'var(--text-warning, #DE5A02)',
            backgroundColor: 'var(--bg-warning, #FFF1E5)',
            borderColor: 'var(--border-warning, #FFD2BA)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: {
            iconColor: 'var(--text-error, #D22D3A)',
            textColor: 'var(--text-error, #D22D3A)',
            backgroundColor: 'var(--bg-error, #FFE5E7)',
            borderColor: 'var(--border-error, #FBBBBF)',
        },
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: {
            iconColor: 'var(--text-primary, #16191D)',
            textColor: 'var(--text-primary, #16191D)',
            backgroundColor: 'var(--bg-secondary, #F6F7F9)',
            borderColor: 'var(--border, #E1E5EA)',
        },
    },
    [ALERT_BANNER_TYPES_ENUM.FILLED]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: {
            iconColor: 'var(--text-action, #FFF)',
            textColor: 'var(--text-action, #FFF)',
            backgroundColor: 'var(--bg-action-brand, #0673F9)',
            borderColor: 'transparent',
        },
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: {
            iconColor: 'var(--text-action, #FFF)',
            textColor: 'var(--text-action, #FFF)',
            backgroundColor: 'var(--bg-action-success, #007A51)',
            borderColor: 'transparent',
        },
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: {
            iconColor: 'var(--text-action, #FFF)',
            textColor: 'var(--text-action, #FFF)',
            backgroundColor: 'var(--bg-action-warning, #DE5A02)',
            borderColor: 'transparent',
        },
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: {
            iconColor: 'var(--text-action, #FFF)',
            textColor: 'var(--text-action, #FFF)',
            backgroundColor: 'var(--bg-action-error, #D22D3A)',
            borderColor: 'transparent',
        },
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: {
            iconColor: 'var(--text-action, #FFF)',
            textColor: 'var(--text-action, #FFF)',
            backgroundColor: 'var(--bg-action, #16191D)',
            borderColor: 'transparent',
        },
    },
};

export const ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_VARIANT_MAPPING = {
    [ALERT_BANNER_TYPES_ENUM.DEFAULT]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]:
            BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED,
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]:
            BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED,
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]:
            BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED,
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]:
            BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED,
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]:
            BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED,
    },
    [ALERT_BANNER_TYPES_ENUM.OUTLINED]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]:
            BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED,
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]:
            BUTTON_VARIANTS_ENUM.SUCCESS_OUTLINED,
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]:
            BUTTON_VARIANTS_ENUM.WARNING_OUTLINED,
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]:
            BUTTON_VARIANTS_ENUM.DANGER_OUTLINED,
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]:
            BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED,
    },
    [ALERT_BANNER_TYPES_ENUM.FILLED]: {
        [ALERT_BANNER_VARIANTS_ENUM.PRIMARY]: BUTTON_VARIANTS_ENUM.PRIMARY,
        [ALERT_BANNER_VARIANTS_ENUM.SUCCESS]: BUTTON_VARIANTS_ENUM.SUCCESS,
        [ALERT_BANNER_VARIANTS_ENUM.WARNING]: BUTTON_VARIANTS_ENUM.WARNING,
        [ALERT_BANNER_VARIANTS_ENUM.ERROR]: BUTTON_VARIANTS_ENUM.DANGER,
        [ALERT_BANNER_VARIANTS_ENUM.DEFAULT]: BUTTON_VARIANTS_ENUM.SECONDARY,
    },
};
