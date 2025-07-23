import React, { forwardRef } from 'react';

import { IconButton } from '../Button';
import Chip from '../Chip';
import { StyledTagContent, StyledTagLabel } from './index.styles';
import { TagProps } from './types';

/**
 * Tag can be used to categorize items and is used in components like Combobox.
 * Tag component extends the Chip component and adds a close button.
 */
const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
    const {
        onButtonClick = () => {},
        buttonIcon = 'close',
        isDisabled = false,
        icon = null,
        shouldTruncateText = true,
        className,
        children,
    } = props;

    return (
        <Chip
            variant={isDisabled ? 'disabled' : 'brand'}
            size="medium"
            icon={icon}
            iconSize="16"
            className={className}
            ref={ref}
        >
            <StyledTagContent>
                <StyledTagLabel
                    $shouldTruncateText={shouldTruncateText}
                    title={typeof children === 'string' ? children : ''}
                >
                    {children}
                </StyledTagLabel>
                {typeof onButtonClick === 'function' && (
                    <IconButton
                        icon={buttonIcon}
                        onClick={onButtonClick}
                        disabled={isDisabled}
                        size="extra-small"
                        variant="tertiary"
                        color={isDisabled ? 'neutral' : 'brand'}
                    />
                )}
            </StyledTagContent>
        </Chip>
    );
});

export default Tag;
