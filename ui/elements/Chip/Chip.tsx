import React, { forwardRef } from 'react';

import { Icon } from '../Icon';
import { StyledChipDiv, StyledChipText } from './Chip.styles';
import {
    CHIP_SIZES_ENUM,
    isChipSize,
    resolveChipVariantStyles,
} from './constants';
import { ChipProps } from './types';

const Chip = forwardRef<HTMLDivElement, ChipProps>(
    (
        {
            type,
            state,
            darkerbg = false,
            withborder,
            variant,
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
    ) => {
        const {
            type: resolvedType,
            state: resolvedState,
            darkerbg: resolvedDarkerBg,
            styles,
        } =
            resolveChipVariantStyles({
                type,
                state,
                darkerbg,
                variant,
            });

        const resolvedSize = isChipSize(size) ? size : CHIP_SIZES_ENUM.MEDIUM;
        const resolvedWithBorder = withborder ?? hasBorder;

        return (
            <StyledChipDiv
                ref={ref}
                className={className}
                style={style}
                data-chip-type={resolvedType}
                data-chip-state={resolvedState}
                data-chip-darkerbg={resolvedDarkerBg}
                data-chip-withborder={resolvedWithBorder}
                $size={resolvedSize}
                $withborder={resolvedWithBorder}
                $baseTextColor={styles.color}
                $baseBackgroundColor={styles.background}
                $baseBorderColor={styles.border}
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
                    $iconPosition={icon ? iconPosition : undefined}
                >
                    {children}
                </StyledChipText>
            </StyledChipDiv>
        );
    }
);

Chip.displayName = 'System_thunder';

export default Chip;
