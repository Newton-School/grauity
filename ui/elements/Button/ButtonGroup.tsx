import React from 'react';

import { StyledButtonGroup } from './ButtonGroup.styles';
import { ButtonGroupProps } from './types';

const ButtonGroup = ({ children = null }: ButtonGroupProps) => (
    <StyledButtonGroup>
        {children}
    </StyledButtonGroup>
);

export default ButtonGroup;
