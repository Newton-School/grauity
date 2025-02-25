import React, { forwardRef } from 'react';

import { IconButton } from '../../Button';
import CheckboxWrapper from './FormFieldWrappers/CheckboxWrapper';
import DropdownMenuWrapper from './FormFieldWrappers/DropdownMenuWrapper';
import DropdownWrapper from './FormFieldWrappers/DropdownWrapper';
import TextFieldWrapper from './FormFieldWrappers/TextFieldWrapper';
import { FormFieldProps, FormFieldType } from './types';

const FormField = forwardRef<HTMLDivElement, FormFieldProps>((props, ref) => {
    const { formField } = props;

    let rendererComponent = null;

    if (typeof formField.renderer === 'function') {
        rendererComponent = <>{formField.renderer(props)}</>;
    }

    if (
        formField.type === FormFieldType.TEXTFIELD ||
        formField.type === FormFieldType.DATE_PICKER
    ) {
        rendererComponent = <TextFieldWrapper {...props} />;
    }

    if (formField.type === FormFieldType.DROPDOWN) {
        rendererComponent = <DropdownWrapper {...props} />;
    }

    if (formField.type === FormFieldType.DROPDOWN_MENU) {
        rendererComponent = <DropdownMenuWrapper {...props} />;
    }

    if (formField.type === FormFieldType.ICON_BUTTON) {
        rendererComponent = <IconButton {...formField.rendererProps} />;
    }

    if (formField.type === FormFieldType.CHECKBOX) {
        rendererComponent = <CheckboxWrapper {...props} />;
    }

    if (!rendererComponent) {
        return null;
    }

    return (
        <div>
            {rendererComponent}
            <div ref={ref} tabIndex={-1} />
        </div>
    );
});

export default FormField;
