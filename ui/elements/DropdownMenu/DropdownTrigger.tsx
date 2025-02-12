import React from 'react';
import { NSLabel } from 'ui/index';

import { Icon } from '../Icon';
import {
    StyledDropdownDefaultTrigger,
    StyledDropdownDefaultTriggerButton,
} from './DropdownMenu.styles';

const DropdownTrigger = ({ label = 'Select', children = 'Select' }) => {
    return (
        <StyledDropdownDefaultTrigger>
            <NSLabel name={label}>{label}</NSLabel>
            <StyledDropdownDefaultTriggerButton
                name={label}
                variant="secondary-outlined"
                fullWidth
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                <span>{children}</span>
                <Icon name="chevron-down" />
            </StyledDropdownDefaultTriggerButton>
        </StyledDropdownDefaultTrigger>
    );
};

export default DropdownTrigger;
