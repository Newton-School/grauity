import React, { forwardRef } from 'react';

import { IconButton } from '../Button';
import { Icon } from '../Icon';
import { StyledChipDiv, StyledChipText } from './Chip.styles';
import { CHIP_VARIANT_TO_BUTTON_VARIANT_AND_COLOR_MAPPING } from './constants';
import { ChipProps } from './types';

const Chip = forwardRef<HTMLDivElement, ChipProps>(
    (
        {
            variant = 'brand',
            size = 'medium',
            hasBorder = false,
            icon = null,
            iconSize = '12',
            iconPosition = 'left',
            iconColor = 'inherit',
            textColor = null,
            backgroundColor = null,
            borderColor = null,
            rounded = false,
            onButtonClick = null,
            buttonIcon = 'close',
            style = {},
            className = '',
            shouldTruncateText = true,
            children,
        },
        ref
    ) => (
        <StyledChipDiv
            ref={ref}
            className={className}
            style={style}
            variant={variant}
            size={size}
            hasBorder={hasBorder}
            textColor={textColor}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            rounded={rounded}
            iconPosition={iconPosition}
        >
            {icon && <Icon name={icon} color={iconColor} size={iconSize} />}
            <StyledChipText
                title={typeof children === 'string' ? children : ''}
                className="ns-chip-text"
                $shouldTruncateText={shouldTruncateText}
            >
                {children}
            </StyledChipText>
            {onButtonClick && (
                <IconButton
                    icon={buttonIcon}
                    size="extra-small"
                    onClick={onButtonClick}
                    {...CHIP_VARIANT_TO_BUTTON_VARIANT_AND_COLOR_MAPPING[
                        variant
                    ]}
                />
            )}
        </StyledChipDiv>
    )
);

export default Chip;
