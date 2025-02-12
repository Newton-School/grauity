import React from 'react';

import TextField, { TextFieldProps } from '../Form/TextField';
import { Icon } from '../Icon';

const DropdownTrigger = (props: TextFieldProps) => {
    return (
        <TextField
            {...props}
            onClick={(e) => {
                e.preventDefault();
            }}
            adornments={{
                end: <Icon name="chevron-down" />,
            }}
        />
    );
};

export default DropdownTrigger;
