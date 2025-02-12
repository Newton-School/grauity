import React from 'react';

import { Icon } from '../Icon';
import { StyledDropdownDefaultTrigger } from './DropdownMenu.styles';

const DropdownTrigger = ({ children = 'Select' }) => {
    return (
        <StyledDropdownDefaultTrigger
            variant="secondary-outlined"
            fullWidth
            onClick={(e) => {
                e.preventDefault();
            }}
        >
            <span>{children}</span>
            <Icon name="chevron-down" />
        </StyledDropdownDefaultTrigger>
    );
};

export default DropdownTrigger;
