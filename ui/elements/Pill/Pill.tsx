import React, { forwardRef } from 'react';

import { ButtonColors } from '../Button/types';
import { Icon } from '../Icon';
import Typography from '../Typography';
import { PILL_SIZE_STYLES_MAPPING } from './constants';
import {
    StyledPillButton,
    StyledPillContent,
    StyledPillCountIndicator,
    StyledPillLabel,
} from './Pill.styles';
import { PillProps } from './types';

/**
 * Pill component can be used to represent an attribute, tag, or action.
 * It can display a label, an optional count, and icons on either side.
 */
const Pill = forwardRef<HTMLButtonElement, PillProps>((props, ref) => {
    const {
        children,
        count,
        leftIconName,
        rightIconName,
        isActive,
        isDisabled,
        isReadOnly,
        className,
        style,
        onClick,
        ariaLabel,
        size = 'medium',
        color = 'brand',
    } = props;

    const hasCount = !['', null, undefined].includes(count as any);

    const { typographyVariant, iconSize, countIndicatorHeight } =
        PILL_SIZE_STYLES_MAPPING[size];

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
    };

    return (
        <StyledPillButton
            ref={ref}
            className={className}
            disabled={isDisabled || isReadOnly}
            onClick={handleClick}
            style={style}
            ariaLabel={ariaLabel ?? (typeof children === 'string' ? children : undefined)}
            aria-disabled={isDisabled || isReadOnly}
            showAnimationOnClick={false}
            variant="secondary"
            color={(isActive ? color : 'neutral') as ButtonColors}
            $size={size}
            $color={color}
            $isActive={isActive}
            $isReadOnly={isReadOnly}
            $isDisabled={isDisabled}
        >
            <StyledPillContent $isActive={isActive}>
                {leftIconName && (
                    <Icon
                        name={leftIconName}
                        size={iconSize}
                        color="currentColor"
                    />
                )}
                {children && (
                    <StyledPillLabel
                        title={typeof children === 'string' ? children : ''}
                        $isReadOnly={isReadOnly}
                    >
                        <Typography
                            variant={typographyVariant}
                            color="currentColor"
                        >
                            {children}
                        </Typography>
                    </StyledPillLabel>
                )}
                {hasCount && (
                    <StyledPillCountIndicator
                        $isActive={isActive}
                        $isDisabled={isDisabled}
                        $isReadOnly={isReadOnly}
                        $color={color}
                        $height={countIndicatorHeight}
                    >
                        <Typography
                            variant={typographyVariant}
                            color="currentColor"
                        >
                            {count}
                        </Typography>
                    </StyledPillCountIndicator>
                )}
                {rightIconName && (
                    <Icon
                        name={rightIconName}
                        size={iconSize}
                        color="currentColor"
                    />
                )}
            </StyledPillContent>
        </StyledPillButton>
    );
});

Pill.displayName = 'Pill';

export default Pill;
