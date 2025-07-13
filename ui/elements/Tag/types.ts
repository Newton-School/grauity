import React from 'react';
import { grauityIconName } from 'ui/core';

import { ChipVariants } from '../Chip/types';

export interface TagProps {
    /**
     * Content of the Tag.
     * */
    children: React.ReactNode;

    /**
     * Function to be called when the close button is clicked.
     * */
    onCloseClick?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;

    /**
     * Icon to be displayed in the Tag.
     * Icon position is always 'left' for Tag component.
     *
     * Default: `null`
     * */
    icon?: grauityIconName;

    /**
     * Variant of the Tag. This is the same as Chip variant.
     *
     * Default: `brand`
     * */
    variant?: ChipVariants;

    /**
     * Additional CSS class for the Tag.
     * */
    className?: string;

    /**
     * Whether the text inside the tag should be truncated,
     * with an ellipsis if it overflows. (Max width is set to 200px)
     *
     * Default: `true`
     * */
    shouldTruncateText?: boolean;
}
