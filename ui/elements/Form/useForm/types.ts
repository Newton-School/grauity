import React from 'react';
import { Schema } from 'yup';

import { IconButtonProps } from '../../Button';
import { CheckboxProps } from '../Checkbox';
import { DropdownProps } from '../Dropdown';
import { TextFieldProps } from '../TextField';

// Form Data
export type FieldName = string;
export interface FormState {
    [key: FieldName]: any;
}
export interface FormErrors {
    [key: FieldName]: string;
}

// Form Field
export enum FormFieldType {
    TEXTFIELD = 'TEXTFIELD',
    DATE_PICKER = 'DATE_PICKER',
    DROPDOWN = 'DROPDOWN',
    DROPDOWN_MENU = 'DROPDOWN_MENU',
    ICON_BUTTON = 'ICON_BUTTON',
    CHECKBOX = 'CHECKBOX',
    CUSTOM = 'CUSTOM',
}
export interface ConditionalProp {
    propName: string;
    propValue: any;
    conditions: Array<{ prop: string; value: any }>;
}
export interface FormFieldBaseProps {
    type: FormFieldType;
    renderer?: (props: FormFieldProps) => React.ReactNode;
    rendererProps?: any;
    conditionalProps?: ConditionalProp[];
    configProps?: any;
}
export interface FormFieldTextFieldProps extends FormFieldBaseProps {
    type: FormFieldType.TEXTFIELD;
    rendererProps: TextFieldProps;
}
export interface FormFieldDatePickerProps extends FormFieldBaseProps {
    type: FormFieldType.DATE_PICKER;
    rendererProps: TextFieldProps;
}
export interface FormFieldDropdownProps extends FormFieldBaseProps {
    type: FormFieldType.DROPDOWN;
    rendererProps: DropdownProps;
}
export interface FormFieldDropdownMenuProps extends FormFieldBaseProps {
    type: FormFieldType.DROPDOWN_MENU;
    rendererProps: DropdownProps;
}
export interface FormFieldIconButtonProps extends FormFieldBaseProps {
    type: FormFieldType.ICON_BUTTON;
    rendererProps: IconButtonProps;
}
export interface FormFieldCheckboxProps extends FormFieldBaseProps {
    type: FormFieldType.CHECKBOX;
    rendererProps: CheckboxProps;
}
export interface FormFieldCustomProps extends FormFieldBaseProps {
    type: FormFieldType.CUSTOM;
    rendererProps: any;
}
export type FormField =
    | FormFieldTextFieldProps
    | FormFieldDatePickerProps
    | FormFieldDropdownProps
    | FormFieldDropdownMenuProps
    | FormFieldIconButtonProps
    | FormFieldCheckboxProps
    | FormFieldCustomProps;
export interface FormFields {
    [key: FieldName]: FormField;
}

// Form Row
export interface FormRow {
    widths?: string;
    column?: FormRowColumnCondition;
    items?: FormField[];
}

// Form Config
export enum FormRowColumnCondition {
    ALWAYS_COLUMN = 'ALWAYS_COLUMN',
    ALWAYS_ROW = 'ALWAYS_ROW',
    COLUMN_ON_MOBILE = 'COLUMN_ON_MOBILE',
}
export interface FormConfig {
    fieldNames: FieldName[];
    initialState: FormState;
    rows: FormRow[];
    schema?: Schema;
}

// UseForm
export interface UseFormProps {
    /**
     * The form configuration object.
     * - This object contains the form field names, initial state, and form rows.
     * - `fieldNames`: An array of strings representing the field names.
     * - `initialState`: An object with the field name as the key and the initial value as the value.
     * - `rows`: An array of objects with the following properties:
     *      - `widths`: A string representing the column widths for the row. (Eg: '1fr 1fr')
     *      - `column`: A string representing the column condition for the row. (Options: 'ALWAYS_COLUMN', 'ALWAYS_ROW', 'COLUMN_ON_MOBILE')
     *      - `items`: An array of form field objects.
     *          - Each form field object contains the following properties:
     *          - `type`: A string representing the form field type. (Options: 'TEXTFIELD', 'DATE_PICKER', 'DROPDOWN', 'DROPDOWN_MENU', 'ICON_BUTTON', 'CHECKBOX', 'CUSTOM')
     *          - `renderer`: A function that returns a React node. (Props: formField, error, formData, handleChange)
     *          - `rendererProps`: Props required for the form field renderer. (Eg: name, label, placeholder, etc.)
     *          - `configProps`: An object with additional form field props required at user side.
     * @required
     */
    formConfig: FormConfig;

    /**
     * CSS properties to style the form rows.
     * @default {}
     */
    rowStyles?: React.CSSProperties;

    /**
     * Flag to indicate if the form is being viewed on a mobile device.
     * @default false
     */
    isMobileView?: boolean;

    /**
     * Flag to indicate if the form should focus on the first error when the form is validated.
     * @default true
     */
    shouldFocusOnFirstError?: boolean;

    /**
     * Flag to indicate if the form should submit on pressing the 'Enter' key.
     * @default true
     */
    shouldSubmitOnEnter?: boolean;

    /**
     * Flag to indicate if the form should show the submit button.
     * - A default submit button will be rendered at the end of the form.
     * - If set to false, the user can provide a custom submit button and call the `submit` function to submit the form.
     * @default true
     */
    shouldShowSubmitButton?: boolean;

    /**
     * Function to be called when the form is submitted.
     * - This function will be called after the form is validated and there are no errors.
     * @param data - The form data to be submitted.
     */
    onSubmit?: (data: FormState) => void;
}
export interface UseFormReturnProps {
    /**
     * The current state of the form.
     */
    formData: FormState;

    /**
     * The form renderer to render the form fields.
     * - This is a React node that renders the form fields based on the form configuration.
     * - Place this node in the component to render the form.
     */
    formRenderer: React.ReactNode;

    /**
     * Function to validate the form fields.
     * @param fields - The form fields to validate. (Default: All fields)
     */
    validate: (fields: FieldName[]) => void;

    /**
     * Function to submit the form.
     * - This function will validate the form fields and submit the form if there are no errors.
     * - Will be called on pressing Enter key if the `shouldSubmitOnEnter` flag is set to true.
     * - Will be called on pressing Submit button if the `shouldShowSubmitButton` flag is set to true.
     * - If the `shouldShowSubmitButton` flag is set to false, the user can create a custom submit button and call this function to submit the form.
     */
    submit: () => void;

    /**
     * Function to change the form data.
     * @param newData - The new form data to update.
     */
    changeFormData: (newData: FormState) => void;
}

export interface HandleFormFieldChangeProps {
    name: string;
    value: any;
}

// FormRenderer
export interface FormRendererProps {
    formData?: FormState;
    errors?: FormErrors;
    formRows?: FormRow[];
    rowStyles?: React.CSSProperties;
    handleChange?: (props: HandleFormFieldChangeProps) => void;
    handleSubmit?: () => void;
    isMobileView?: boolean;
    shouldFocusOnFirstError?: boolean;
    shouldSubmitOnEnter?: boolean;
    shouldShowSubmitButton?: boolean;
}

// FormField
export interface FormFieldProps {
    formField: FormField;
    error?: string;
    formData: FormState;
    handleChange: (props: HandleFormFieldChangeProps) => void;
}

// Utility Functions
export interface CheckFieldValidationProps {
    field: FieldName;
    data: FormState;
    schema: Schema;
}
export interface GetFormRowColumnValueProps {
    column: FormRowColumnCondition;
    isMobileView?: boolean;
}
export interface GetConditionalProps {
    formField: FormField;
    formData: FormState;
}
export interface GetConditionalPropsReturn {
    [key: string]: any;
}
