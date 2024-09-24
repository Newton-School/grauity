import React, { forwardRef } from 'react';

import { StyledChipDiv } from './Chip.styles';
import { ChipProps } from './types';

const Chip = forwardRef<HTMLDivElement, ChipProps>(
    (
        {
            variant = 'brand',
            size = 'medium',
            hasBorder = false,
            textColor = null,
            backgroundColor = null,
            borderColor = null,
            children,
        },
        ref
    ) => (
        <StyledChipDiv
            ref={ref}
            variant={variant}
            size={size}
            hasBorder={hasBorder}
            textColor={textColor}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
        >
            {children}
        </StyledChipDiv>
    )
);

export default Chip;
