import React, { forwardRef } from 'react';

import { Icon } from '../Icon';
import { StyledChipDiv, StyledChipText } from './Chip.styles';
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
            style = {},
            className = '',
            children,
        },
        ref
    ) => (
        <StyledChipDiv
            ref={ref}
            className={className}
            style={style}
            $variant={variant}
            $size={size}
            $hasBorder={hasBorder}
            $textColor={textColor}
            $backgroundColor={backgroundColor}
            $borderColor={borderColor}
            $rounded={rounded}
            $iconPosition={iconPosition}
        >
            {icon && <Icon name={icon} color={iconColor} size={iconSize} />}
            <StyledChipText
                title={typeof children === 'string' ? children : ''}
                className="ns-chip-text"
            >
                {children}
            </StyledChipText>
        </StyledChipDiv>
    )
);

export default Chip;
