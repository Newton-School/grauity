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
        rendererComponent = formField.renderer(props);
    } else {
        switch (formField.type) {
            case FormFieldType.TEXTFIELD:
            case FormFieldType.DATE_PICKER:
                rendererComponent = <TextFieldWrapper {...props} />;
                break;
            case FormFieldType.DROPDOWN:
                rendererComponent = <DropdownWrapper {...props} />;
                break;
            case FormFieldType.DROPDOWN_MENU:
                rendererComponent = <DropdownMenuWrapper {...props} />;
                break;
            case FormFieldType.ICON_BUTTON:
                rendererComponent = <IconButton {...formField.rendererProps} />;
                break;
            case FormFieldType.CHECKBOX:
                rendererComponent = <CheckboxWrapper {...props} />;
                break;
            default:
                break;
        }
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
