import React from 'react';

import { StyledLabel } from '../index.styles';
import { LabelProps } from '../types';

export const Label = (props: LabelProps) => {
    const {
        name,
        color = 'secondary',
        isRequired,
        children,
        className,
        isDisabled,
        ...rest
    } = props;

    return (
        <StyledLabel
            htmlFor={name}
            $isRequired={isRequired}
            className={className}
            $color={color}
            $isDisabled={isDisabled}
            {...rest}
        >
            {children}
        </StyledLabel>
    );
};

export type { LabelProps };
