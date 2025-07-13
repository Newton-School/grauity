import React from 'react';

import Chip from '../Chip';
import { TagProps } from './types';

/**
 * Tag can be used to categorize items and is used in components like Combobox.
 * Tag component extends the Chip component and adds a close button.
 */
const Tag = (props: TagProps) => {
    const {
        onCloseClick = () => {},
        variant = 'brand',
        icon = null,
        shouldTruncateText = true,
        className,
        children,
    } = props;

    return (
        <Chip
            variant={variant}
            size="medium"
            hasBorder={false}
            onButtonClick={onCloseClick}
            buttonIcon="close"
            icon={icon}
            iconSize="16"
            iconPosition="left"
            className={className}
            shouldTruncateText={shouldTruncateText}
        >
            {children}
        </Chip>
    );
};

export default Tag;
