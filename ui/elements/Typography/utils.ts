/* eslint-disable indent */
import {
    TYPOGRAPHY_VARIANT_STYLES_MAPPING,
    TYPOGRAPHY_VARIANTS_ENUM,
} from './constants';

export const getTypographyVariantStyles = (variant: string) =>
    variant
        ? TYPOGRAPHY_VARIANT_STYLES_MAPPING[variant]
        : TYPOGRAPHY_VARIANT_STYLES_MAPPING[
              TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MD_P1
          ];
