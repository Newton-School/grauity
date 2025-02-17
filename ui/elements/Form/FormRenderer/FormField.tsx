import React from 'react';

import { IconButton } from '../../Button';
import CheckboxWrapper from './FormFieldWrappers/CheckboxWrapper';
import DropdownMenuWrapper from './FormFieldWrappers/DropdownMenuWrapper';
import TextFieldWrapper from './FormFieldWrappers/TextFieldWrapper';
import { FormFieldProps, FormFieldType } from './types';

const FormField = (props: FormFieldProps) => {
    const { formField } = props;

    if (typeof formField.renderer === 'function') {
        return <>{formField.renderer(props)}</>;
    }

    if (
        formField.type === FormFieldType.TEXTFIELD ||
        formField.type === FormFieldType.DATE_PICKER
    ) {
        return <TextFieldWrapper {...props} />;
    }

    if (formField.type === FormFieldType.DROPDOWN_MENU) {
        return <DropdownMenuWrapper {...props} />;
    }

    if (formField.type === FormFieldType.ICON_BUTTON) {
        return <IconButton {...formField.rendererProps} />;
    }

    if (formField.type === FormFieldType.CHECKBOX) {
        return <CheckboxWrapper {...props} />;
    }

    return null;
};

export default FormField;
