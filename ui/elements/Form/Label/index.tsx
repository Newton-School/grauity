import React from 'react';

import { StyledLabel } from '../index.styles';
import { LabelProps } from '../types';

export const Label = (props: LabelProps) => {
    const { name, isRequired, children, className, ...rest } = props;

    return (
        <StyledLabel
            htmlFor={name}
            isRequired={isRequired}
            className={className}
            {...rest}
        >
            {children}
        </StyledLabel>
    );
};

export { LabelProps };
