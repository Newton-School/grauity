import { DEFAULT_ALERT_VARIANT_ICON_MAPPING } from './constants';
import { AlertBannerProps, AlertBannerVariant } from './types';

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
    icon: AlertBannerProps['icon'],
    variant: AlertBannerVariant
) => {
    if (icon !== 'auto') {
        return icon;
    }

    return DEFAULT_ALERT_VARIANT_ICON_MAPPING[variant];
};
