import React from 'react';

import { StyledLabel } from '../index.styles';
import { LabelProps } from '../types';

export const Label = (props: LabelProps) => {
    const { name, isRequired, children, className } = props;

    return (
        <StyledLabel
            htmlFor={name}
            isRequired={isRequired}
            className={className}
        >
            {children}
        </StyledLabel>
    );
};

export { LabelProps };
