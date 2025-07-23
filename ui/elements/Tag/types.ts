import React from 'react';
import { grauityIconName } from 'ui/core';

import { StyledDivProps } from '../../../common/types';

export interface TagProps {
    /**
     * Content of the Tag.
     * */
    children: React.ReactNode;

    /**
     * Icon to be displayed in the Tag button.
     *
     * Default: `close`
     * */
    buttonIcon?: grauityIconName;

    /**
     * Function to be called when the Tag button is clicked.
     * */
    onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

    /**
     * Used to make the Tag button disabled.
     *
     * Default: `false`
     * */
    isDisabled?: boolean;

    /**
     * Icon to be displayed in the Tag.
     * Icon position is always 'left' for Tag component.
     *
     * Default: `null`
     * */
    icon?: grauityIconName;

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

    /**
     * The length of the text over which it should be truncated.
     *
     * Default: '200px'
     * */
    truncateLength?: string | number;
}

export interface StyledTagLabelProps extends StyledDivProps {
    $shouldTruncateText?: boolean;
    $truncateLength?: string | number;
}
