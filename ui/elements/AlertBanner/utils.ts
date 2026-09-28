import { ALERT_TYPES_ENUM } from '../Alert/constants';
import { AlertProps, AlertType, AlertVariant } from '../Alert/types';
import { BUTTON_VARIANTS_ENUM } from '../Button';
import {
    ALERT_BANNER_COLOR_MAPPINGS,
    ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_COLOR_MAPPING,
    ALERT_BANNER_TYPES_ENUM,
    ALERT_BANNER_VARIANTS_ENUM,
    DEFAULT_ALERT_VARIANT_ICON_MAPPING,
} from './constants';
import { AlertBannerProps, AlertBannerType, AlertBannerVariant } from './types';

/**
 * Resolve a variant value to a safe one, falling back to PRIMARY if the
 * provided value is not in the supported enum.
 *
 * This guards against runtime crashes when consumers pass a string outside
 * the `AlertBannerVariant` union (e.g. `'information'`) — without this guard
 * the downstream `ALERT_BANNER_COLOR_MAPPINGS[type][variant]` lookup returns
 * `undefined`, which then crashes destructuring inside the component.
 */
const resolveVariant = (
    variant: AlertBannerVariant | AlertVariant | string | undefined | null
): AlertBannerVariant => {
    if (
        variant != null &&
        Object.values(ALERT_BANNER_VARIANTS_ENUM).includes(
            variant as ALERT_BANNER_VARIANTS_ENUM
        )
    ) {
        return variant as AlertBannerVariant;
    }
    if (variant != null && process?.env?.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
            `[grauity] Unknown AlertBanner variant "${variant}" — falling back to "primary". ` +
                `Supported variants: ${Object.values(
                    ALERT_BANNER_VARIANTS_ENUM
                ).join(', ')}.`
        );
    }
    return ALERT_BANNER_VARIANTS_ENUM.PRIMARY;
};

/**
 * Resolve a type value to a safe one, falling back to DEFAULT if the
 * provided value is not in the supported enum.
 */
const resolveType = (
    type: AlertBannerType | AlertType | string | undefined | null
): AlertBannerType => {
    if (
        type != null &&
        Object.values(ALERT_BANNER_TYPES_ENUM).includes(
            type as ALERT_BANNER_TYPES_ENUM
        )
    ) {
        return type as AlertBannerType;
    }
    if (type != null && process?.env?.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
            `[grauity] Unknown AlertBanner type "${type}" — falling back to "default". ` +
                `Supported types: ${Object.values(ALERT_BANNER_TYPES_ENUM).join(
                    ', '
                )}.`
        );
    }
    return ALERT_BANNER_TYPES_ENUM.DEFAULT;
};

/**
 * Get alert banner icon name based on variant and icon prop
 *
 * If icon prop is set to 'auto', the icon will be selected based on the variant
 *
 * @param icon - Alert banner icon prop
 * @param variant - Alert banner variant
 * @returns Alert banner icon name
 */
export const getAlertIconName = (
    icon: AlertBannerProps['icon'] | AlertProps['icon'],
    variant: AlertBannerVariant | AlertVariant
) => {
    if (icon !== 'auto') {
        return icon;
    }

    return DEFAULT_ALERT_VARIANT_ICON_MAPPING[resolveVariant(variant)];
};

/**
 * Get alert banner colors based on variant and type.
 *
 * Unknown variant or type values fall back to `primary` / `default` instead
 * of returning `undefined` (which previously crashed the consumer that
 * destructured the result — see https://github.com/Newton-School/grauity/issues
 * for context).
 *
 * @param variant - Alert banner variant
 * @param type - Alert banner type
 * @returns Alert banner colors (always defined)
 */
export const getAlertBannerColors = (
    variant: AlertBannerVariant | AlertVariant,
    type: AlertBannerType | AlertType
) => ALERT_BANNER_COLOR_MAPPINGS[resolveType(type)][resolveVariant(variant)];

/**
 * Get button color based on alert banner variant and type.
 * Useful for showing correct color for close button.
 *
 * Unknown variant or type values fall back to `primary` / `default`.
 *
 * @param variant - Alert banner variant
 * @param type - Alert banner type
 * @returns Button color
 */
export const getButtonColorFromAlertBannerTypeVariant = (
    variant: AlertBannerVariant | AlertVariant,
    type: AlertBannerType | AlertType
) =>
    ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_COLOR_MAPPING[resolveType(type)][
        resolveVariant(variant)
    ];

/**
 * Get button variant based on alert banner variant and type.
 * Useful for showing correct variant for close button.
 *
 * @param variant - Alert banner variant
 * @param type - Alert banner type
 * @returns Button variant
 */
export const getButtonVariantFromAlertBannerTypeVariant = (
    variant: AlertBannerVariant | AlertVariant,
    type: AlertBannerType | AlertType
) => {
    if (type === ALERT_TYPES_ENUM.FILLED) {
        return BUTTON_VARIANTS_ENUM.PRIMARY;
    }

    return BUTTON_VARIANTS_ENUM.TERTIARY;
};
