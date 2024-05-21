import { grauityIconColorName } from '../../core';
import { BUTTON_VARIANTS_ENUM } from './constants';
import { ButtonVariants } from './types';

export const getButtonColorFromVariant = (
    variant: ButtonVariants
): grauityIconColorName => {
    switch (variant) {
    case BUTTON_VARIANTS_ENUM.PRIMARY:
    case BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED:
        return '#0673F9';
    case BUTTON_VARIANTS_ENUM.SECONDARY:
    case BUTTON_VARIANTS_ENUM.SECONDARY_OUTLINED:
        return '#D22D3A';
    case BUTTON_VARIANTS_ENUM.TERTIARY:
        return '#16191D';
    case BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED:
        return '#16191D';
    case BUTTON_VARIANTS_ENUM.SUCCESS:
    case BUTTON_VARIANTS_ENUM.SUCCESS_OUTLINED:
        return '#007A51';
    case BUTTON_VARIANTS_ENUM.DANGER:
    case BUTTON_VARIANTS_ENUM.DANGER_OUTLINED:
        return '#D22D3A';
    case BUTTON_VARIANTS_ENUM.WARNING:
    case BUTTON_VARIANTS_ENUM.WARNING_OUTLINED:
        return '#DE5A02';
    default:
        return '#ffffff';
    }
};

export default getButtonColorFromVariant;
