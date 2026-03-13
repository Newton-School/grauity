import { ChipSizes, ChipStates, ChipTypes, ChipVariants } from './types';

export enum CHIP_TYPES_ENUM {
    BRAND = 'brand',
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    YELLOW = 'yellow',
    PURPLE = 'purple',
    NEUTRAL = 'neutral',
}

export enum CHIP_STATES_ENUM {
    DEFAULT = 'default',
    FILLED = 'filled',
}

export enum CHIP_SIZES_ENUM {
    SMALL = 'small',
    MEDIUM = 'medium',
}

export const CHIP_TYPES: ChipTypes[] = [
    CHIP_TYPES_ENUM.BRAND,
    CHIP_TYPES_ENUM.ERROR,
    CHIP_TYPES_ENUM.NEUTRAL,
    CHIP_TYPES_ENUM.PURPLE,
    CHIP_TYPES_ENUM.SUCCESS,
    CHIP_TYPES_ENUM.WARNING,
    CHIP_TYPES_ENUM.YELLOW,
];

export const CHIP_STATES: ChipStates[] = [
    CHIP_STATES_ENUM.DEFAULT,
    CHIP_STATES_ENUM.FILLED,
];

export const CHIP_SIZES: ChipSizes[] = [
    CHIP_SIZES_ENUM.SMALL,
    CHIP_SIZES_ENUM.MEDIUM,
];

export const CHIP_DARKER_BG_OPTIONS = [false, true];
export const CHIP_WITH_BORDER_OPTIONS = [false, true];

interface ChipColorStyle {
    background: string;
    color: string;
    border: string;
}

interface ChipColorState {
    default: ChipColorStyle;
    darkerbg: ChipColorStyle;
}

type ChipColorMapping = {
    [state in ChipStates]: {
        [type in ChipTypes]: ChipColorState;
    };
};

const CHIP_STATE_TYPE_STYLE_MAPPING: ChipColorMapping = {
    [CHIP_STATES_ENUM.DEFAULT]: {
        [CHIP_TYPES_ENUM.BRAND]: {
            default: {
                background: 'var(--bg-subtle-brand-default, #e5f1ff)',
                color: 'var(--text-emphasis-brand-default, #0673f9)',
                border: 'var(--border-subtle-brand-default, #61a8ff)',
            },
            darkerbg: {
                background: 'var(--bg-subtle-brand-hover, #c2ddff)',
                color: 'var(--text-emphasis-brand-default, #0673f9)',
                border: 'var(--border-subtle-brand-default, #61a8ff)',
            },
        },
        [CHIP_TYPES_ENUM.SUCCESS]: {
            default: {
                background: 'var(--bg-subtle-success-default, #d9fced)',
                color: 'var(--text-emphasis-success-default, #007a51)',
                border: 'var(--border-subtle-success-default, #acf7d3)',
            },
            darkerbg: {
                background: 'var(--bg-subtle-success-hover, #acf7d3)',
                color: 'var(--text-emphasis-success-default, #007a51)',
                border: 'var(--border-subtle-success-default, #acf7d3)',
            },
        },
        [CHIP_TYPES_ENUM.ERROR]: {
            default: {
                background: 'var(--bg-subtle-error-default, #ffe5e7)',
                color: 'var(--text-emphasis-error-default, #d22d3a)',
                border: 'var(--border-subtle-error-default, #fbbbbf)',
            },
            darkerbg: {
                background: 'var(--bg-subtle-error-hover, #fbbbbf)',
                color: 'var(--text-emphasis-error-default, #d22d3a)',
                border: 'var(--border-subtle-error-default, #fbbbbf)',
            },
        },
        [CHIP_TYPES_ENUM.WARNING]: {
            default: {
                background: 'var(--bg-subtle-warning-default, #fff1e5)',
                color: 'var(--text-emphasis-warning-default, #de5a02)',
                border: 'var(--border-subtle-warning-default, #ffd2ba)',
            },
            darkerbg: {
                background: 'var(--bg-subtle-warning-hover, #ffd2ba)',
                color: 'var(--text-emphasis-warning-default, #de5a02)',
                border: 'var(--border-subtle-warning-default, #ffd2ba)',
            },
        },
        [CHIP_TYPES_ENUM.YELLOW]: {
            default: {
                background: 'var(--bg-subtle-yellow-default, #fff3d6)',
                color: 'var(--text-emphasis-yellow-default, #d17300)',
                border: 'var(--border-subtle-yellow-default, #ffd580)',
            },
            darkerbg: {
                background: 'var(--bg-subtle-yellow-hover, #ffe4ad)',
                color: 'var(--text-emphasis-yellow-default, #d17300)',
                border: 'var(--border-subtle-yellow-default, #ffd580)',
            },
        },
        [CHIP_TYPES_ENUM.PURPLE]: {
            default: {
                background: 'var(--bg-subtle-purple-default, #f5e5ff)',
                color: 'var(--text-emphasis-purple-default, #6138d3)',
                border: 'var(--border-subtle-purple-default, #cebcfe)',
            },
            darkerbg: {
                background: 'var(--bg-subtle-purple-hover, #e1d1ff)',
                color: 'var(--text-emphasis-purple-default, #6138d3)',
                border: 'var(--border-subtle-purple-default, #cebcfe)',
            },
        },
        [CHIP_TYPES_ENUM.NEUTRAL]: {
            default: {
                background: 'var(--bg-subtle-secondary-default, #f6f7f9)',
                color: 'var(--text-emphasis-primary-default, #16191d)',
                border: 'var(--border-subtle-primary-default, #e1e5ea)',
            },
            darkerbg: {
                background: 'var(--bg-subtle-tertiary-default, #edeff3)',
                color: 'var(--text-emphasis-primary-default, #16191d)',
                border: 'var(--border-subtle-primary-default, #e1e5ea)',
            },
        },
    },
    [CHIP_STATES_ENUM.FILLED]: {
        [CHIP_TYPES_ENUM.BRAND]: {
            default: {
                background: 'var(--bg-emphasis-brand-default, #0673f9)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-brand-default, #61a8ff)',
            },
            darkerbg: {
                background: 'var(--bg-emphasis-brand-hover, #005ed1)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-brand-default, #61a8ff)',
            },
        },
        [CHIP_TYPES_ENUM.SUCCESS]: {
            default: {
                background: 'var(--bg-emphasis-success-default, #009965)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-success-default, #acf7d3)',
            },
            darkerbg: {
                background: 'var(--bg-emphasis-success-hover, #007a51)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-success-default, #acf7d3)',
            },
        },
        [CHIP_TYPES_ENUM.ERROR]: {
            default: {
                background: 'var(--bg-emphasis-error-default, #d22d3a)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-error-default, #fbbbbf)',
            },
            darkerbg: {
                background: 'var(--bg-emphasis-error-hover, #a01b22)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-error-default, #fbbbbf)',
            },
        },
        [CHIP_TYPES_ENUM.WARNING]: {
            default: {
                background: 'var(--bg-emphasis-warning-default, #f37216)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-warning-default, #ffd2ba)',
            },
            darkerbg: {
                background: 'var(--bg-emphasis-warning-hover, #de5a02)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-warning-default, #ffd2ba)',
            },
        },
        [CHIP_TYPES_ENUM.YELLOW]: {
            default: {
                background: 'var(--bg-emphasis-yellow-default, #f59700)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-yellow-default, #ffd580)',
            },
            darkerbg: {
                background: 'var(--bg-emphasis-yellow-hover, #d17300)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-yellow-default, #ffd580)',
            },
        },
        [CHIP_TYPES_ENUM.PURPLE]: {
            default: {
                background: 'var(--bg-emphasis-purple-default, #6138d3)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-purple-default, #cebcfe)',
            },
            darkerbg: {
                background: 'var(--bg-emphasis-purple-hover, #46279b)',
                color: 'var(--text-emphasis-white-default, #ffffff)',
                border: 'var(--border-subtle-purple-default, #cebcfe)',
            },
        },
        [CHIP_TYPES_ENUM.NEUTRAL]: {
            default: {
                background: 'var(--bg-subtle-invert-primary-default, #0b0c0e)',
                color: 'var(--text-emphasis-invert-primary-default, #ffffff)',
                border: 'var(--border-subtle-primary-default, #e1e5ea)',
            },
            darkerbg: {
                background: 'var(--bg-subtle-invert-tertiary-default, #23282f)',
                color: 'var(--text-emphasis-invert-primary-default, #ffffff)',
                border: 'var(--border-subtle-primary-default, #e1e5ea)',
            },
        },
    },
};

const LEGACY_CHIP_VARIANT_MODEL_MAPPING: Record<
    string,
    {
        type: ChipTypes;
        state: ChipStates;
        darkerbg?: boolean;
        styleOverride?: Partial<ChipColorStyle>;
    }
> = {
    brand: { type: CHIP_TYPES_ENUM.BRAND, state: CHIP_STATES_ENUM.DEFAULT },
    success: {
        type: CHIP_TYPES_ENUM.SUCCESS,
        state: CHIP_STATES_ENUM.DEFAULT,
    },
    error: { type: CHIP_TYPES_ENUM.ERROR, state: CHIP_STATES_ENUM.DEFAULT },
    warning: {
        type: CHIP_TYPES_ENUM.WARNING,
        state: CHIP_STATES_ENUM.DEFAULT,
    },
    yellow: {
        type: CHIP_TYPES_ENUM.YELLOW,
        state: CHIP_STATES_ENUM.DEFAULT,
    },
    purple: {
        type: CHIP_TYPES_ENUM.PURPLE,
        state: CHIP_STATES_ENUM.DEFAULT,
    },
    disabled: {
        type: CHIP_TYPES_ENUM.NEUTRAL,
        state: CHIP_STATES_ENUM.DEFAULT,
        darkerbg: true,
        styleOverride: {
            background: 'var(--bg-subtle-primary-disabled, #edeff3)',
            color: 'var(--text-emphasis-primary-disabled, #8c95a6)',
            border: 'var(--border-subtle-primary-disabled, #edeff3)',
        },
    },
    'action-brand': {
        type: CHIP_TYPES_ENUM.BRAND,
        state: CHIP_STATES_ENUM.FILLED,
    },
    'action-success': {
        type: CHIP_TYPES_ENUM.SUCCESS,
        state: CHIP_STATES_ENUM.FILLED,
    },
    'action-error': {
        type: CHIP_TYPES_ENUM.ERROR,
        state: CHIP_STATES_ENUM.FILLED,
    },
    'action-warning': {
        type: CHIP_TYPES_ENUM.WARNING,
        state: CHIP_STATES_ENUM.FILLED,
    },
    'action-yellow': {
        type: CHIP_TYPES_ENUM.YELLOW,
        state: CHIP_STATES_ENUM.FILLED,
    },
    'action-purple': {
        type: CHIP_TYPES_ENUM.PURPLE,
        state: CHIP_STATES_ENUM.FILLED,
    },
};

export const CHIP_VARIANT_STYLES_MAPPING = {
    [CHIP_TYPES_ENUM.BRAND]:
        CHIP_STATE_TYPE_STYLE_MAPPING[CHIP_STATES_ENUM.DEFAULT][
            CHIP_TYPES_ENUM.BRAND
        ].default,
    [CHIP_TYPES_ENUM.SUCCESS]:
        CHIP_STATE_TYPE_STYLE_MAPPING[CHIP_STATES_ENUM.DEFAULT][
            CHIP_TYPES_ENUM.SUCCESS
        ].default,
    [CHIP_TYPES_ENUM.ERROR]:
        CHIP_STATE_TYPE_STYLE_MAPPING[CHIP_STATES_ENUM.DEFAULT][
            CHIP_TYPES_ENUM.ERROR
        ].default,
    [CHIP_TYPES_ENUM.WARNING]:
        CHIP_STATE_TYPE_STYLE_MAPPING[CHIP_STATES_ENUM.DEFAULT][
            CHIP_TYPES_ENUM.WARNING
        ].default,
    [CHIP_TYPES_ENUM.YELLOW]:
        CHIP_STATE_TYPE_STYLE_MAPPING[CHIP_STATES_ENUM.DEFAULT][
            CHIP_TYPES_ENUM.YELLOW
        ].default,
    [CHIP_TYPES_ENUM.PURPLE]:
        CHIP_STATE_TYPE_STYLE_MAPPING[CHIP_STATES_ENUM.DEFAULT][
            CHIP_TYPES_ENUM.PURPLE
        ].default,
    [CHIP_TYPES_ENUM.NEUTRAL]:
        CHIP_STATE_TYPE_STYLE_MAPPING[CHIP_STATES_ENUM.DEFAULT][
            CHIP_TYPES_ENUM.NEUTRAL
        ].default,
};

export const CHIP_FONT_SIZE_MAPPING: {
    [size in CHIP_SIZES_ENUM]: { [cssSelector: string]: any };
} = {
    [CHIP_SIZES_ENUM.SMALL]: {
        fontSize: 'var(--font-size-10px, 10px)',
        maxHeight: 'var(--spacing-20px, 20px)',
    },
    [CHIP_SIZES_ENUM.MEDIUM]: {
        fontSize: 'var(--font-size-12px, 12px)',
        maxHeight: 'var(--spacing-24px, 24px)',
    },
};

export interface ResolvedChipVariantStyles {
    type: ChipTypes;
    state: ChipStates;
    darkerbg: boolean;
    styles: ChipColorStyle;
}

export const isChipType = (value?: string): value is ChipTypes =>
    !!value && CHIP_TYPES.includes(value as ChipTypes);

export const isChipState = (value?: string): value is ChipStates =>
    !!value && CHIP_STATES.includes(value as ChipStates);

export const isChipSize = (value?: string): value is CHIP_SIZES_ENUM =>
    !!value && CHIP_SIZES.includes(value as CHIP_SIZES_ENUM);

interface ResolveChipVariantStylesParams {
    type?: ChipTypes;
    state?: ChipStates;
    darkerbg?: boolean;
    variant?: ChipVariants;
}

export const resolveChipVariantStyles = ({
    type,
    state,
    darkerbg = false,
    variant,
}: ResolveChipVariantStylesParams): ResolvedChipVariantStyles => {
    const legacyVariantModel =
        typeof variant === 'string'
            ? LEGACY_CHIP_VARIANT_MODEL_MAPPING[variant]
            : null;

    const resolvedType =
        type || legacyVariantModel?.type || CHIP_TYPES_ENUM.BRAND;
    const resolvedState =
        state || legacyVariantModel?.state || CHIP_STATES_ENUM.DEFAULT;
    const resolvedDarkerBg = darkerbg || Boolean(legacyVariantModel?.darkerbg);

    const stateStyles =
        CHIP_STATE_TYPE_STYLE_MAPPING[resolvedState][resolvedType];
    const baseStyles = resolvedDarkerBg
        ? stateStyles.darkerbg
        : stateStyles.default;

    return {
        type: resolvedType,
        state: resolvedState,
        darkerbg: resolvedDarkerBg,
        styles: {
            ...baseStyles,
            ...(legacyVariantModel?.styleOverride || {}),
        },
    };
};
