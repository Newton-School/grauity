import React from 'react';

import { Label } from '../Form/Label';
import { Icon } from '../Icon';
import {
    StyledDropdownDefaultTrigger,
    StyledDropdownDefaultTriggerButton,
} from './DropdownMenu.styles';

const DropdownTrigger = ({ label = 'Select', children = 'Select' }) => {
    return (
        <StyledDropdownDefaultTrigger>
            <Label name={label}>{label}</Label>
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
