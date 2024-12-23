import React from 'react';

import { StyledLabel } from '../index.styles';
import { LabelProps } from '../types';

export const Label = (props: LabelProps) => {
    const { name, required, children } = props;

    return (
        <StyledLabel htmlFor={name} required={required}>
            {children}
        </StyledLabel>
    );
};
