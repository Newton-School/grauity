import React from 'react';

import { StyledLabel } from '../index.styles';
import { LabelProps } from '../types';

export const Label = (props: LabelProps) => {
    const {
        name,
        color = 'secondary',
        isRequired,
        isDisabled,
        children,
        className,
        ...rest
    } = props;

    return (
        <StyledLabel
            htmlFor={name}
            $isRequired={isRequired}
            $isDisabled={isDisabled}
            className={className}
            $color={color}
            {...rest}
        >
            {children}
        </StyledLabel>
    );
};

export { LabelProps };
