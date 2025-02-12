import React from 'react';

import TextField, { TextFieldProps } from '../Form/TextField';

const DropdownTrigger = (props: TextFieldProps) => {
    return (
        <TextField
            {...props}
            onClick={(e) => {
                e.preventDefault();
            }}
        />
    );
};

export default DropdownTrigger;
