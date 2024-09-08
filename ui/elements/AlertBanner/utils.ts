import { AlertProps, AlertType, AlertVariant } from '../Alert/types';
import {
    ALERT_BANNER_COLOR_MAPPINGS,
    ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_VARIANT_MAPPING,
    DEFAULT_ALERT_VARIANT_ICON_MAPPING,
} from './constants';
import { AlertBannerProps, AlertBannerType, AlertBannerVariant } from './types';

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

    return DEFAULT_ALERT_VARIANT_ICON_MAPPING[variant];
};

/**
 * Get alert banner colors based on variant and type
 *
 * @param variant - Alert banner variant
 * @param type - Alert banner type
 * @returns Alert banner colors
 */
export const getAlertBannerColors = (
    variant: AlertBannerVariant | AlertVariant,
    type: AlertBannerType | AlertType
) => ALERT_BANNER_COLOR_MAPPINGS[type][variant];

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
) => ALERT_BANNER_TYPE_AND_VARIANT_TO_BUTTON_VARIANT_MAPPING[type][variant];
