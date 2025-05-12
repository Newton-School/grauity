import React from 'react';
import { Schema } from 'yup';

import { ButtonProps } from '../../Button';
import { CheckboxGroupProps } from '../CheckboxGroup';
import { DropdownProps } from '../Dropdown';
import { RadioButtonGroupProps } from '../RadioButtonGroup';
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
    TEXTFIELD = 'textfield',
    DROPDOWN = 'dropdown',
    DROPDOWN_MENU = 'dropdown-menu',
    CHECKBOX_GROUP = 'checkbox-group',
    RADIOBUTTON_GROUP = 'radio-button-group',
    CUSTOM = 'custom',
}

export interface ConditionalProp {
    prop: string;
    is: (data: FormState) => boolean;
    then?: any;
    otherwise?: any;
}

export interface FormFieldBaseProps {
    type: FormFieldType;
    renderer?: React.ComponentType<FormFieldProps>;
    rendererProps?: any;
    conditionalProps?: ConditionalProp[];
    configProps?: any;
}

export interface FormFieldTextFieldProps extends FormFieldBaseProps {
    type: FormFieldType.TEXTFIELD;
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

export interface FormFieldCheckboxGroupProps extends FormFieldBaseProps {
    type: FormFieldType.CHECKBOX_GROUP;
    rendererProps: CheckboxGroupProps;
}

export interface FormFieldRadioButtonGroupProps extends FormFieldBaseProps {
    type: FormFieldType.RADIOBUTTON_GROUP;
    rendererProps: RadioButtonGroupProps;
}

export interface FormFieldCustomProps extends FormFieldBaseProps {
    type: FormFieldType.CUSTOM;
    rendererProps: any;
}

export type FormField =
    | FormFieldTextFieldProps
    | FormFieldDropdownProps
    | FormFieldDropdownMenuProps
    | FormFieldCheckboxGroupProps
    | FormFieldRadioButtonGroupProps
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
    ALWAYS_COLUMN = 'always-column',
    ALWAYS_ROW = 'always-row',
    COLUMN_ON_MOBILE = 'column-on-mobile',
}

export interface FormConfig {
    fieldNames: FieldName[];
    initialState: FormState;
    rows: FormRow[];
    schema?: Schema;
}

// UseForm
export enum FormValidationType {
    ON_BLUR = 'onBlur',
    ON_CHANGE = 'onChange',
}

export interface UseFormProps {
    /**
     * The form configuration object.
     * - This object contains the form field names, initial state, and form rows.
     * - `fieldNames`: An array of strings representing the field names.
     * - `initialState`: An object with the field name as the key and the initial value as the value.
     * - `rows`: An array of objects with the following properties:
     *      - `widths`: A string representing the column widths for the row. (Eg: '1fr 1fr')
     *      - `column`: A string representing the column condition for the row. (Options: 'always-column', 'always-row', 'column-on-mobile')
     *      - `items`: An array of form field objects.
     *          - Each form field object contains the following properties:
     *          - `type`: A string representing the form field type. (Options: 'textfield', 'dropdown', 'dropdown-menu', 'checkbox-group', 'radio-button-group', 'custom')
     *          - `renderer`: A function that returns a React node. (Props: formField, error, formData, handleChange)
     *          - `rendererProps`: Props required for the form field renderer. (Eg: name, label, placeholder, etc.)
     *          - `configProps`: An object with additional form field props required at user side.
     * - `schema`: A Yup schema object to validate the form fields.
     * @required
     */
    formConfig: FormConfig;

    /**
     * CSS properties to style the form rows.
     * @default {}
     */
    rowStyles?: React.CSSProperties;

    /**
     * The type of validation to be used for the form fields.
     * - 'onBlur': Validate the form fields on blur.
     * - 'onChange': Validate the form fields on change.
     * - If not provided, all fields will be validated on submit.
     * @default null
     */
    whenToValidate?: FormValidationType;

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
     * Props for the submit button.
     * - These props will be passed to the default submit button.
     */
    submitButtonProps?: ButtonProps;

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
     * @param data - The form data to validate. (Default: Current form data)
     */
    validate: (fields: FieldName[], data: FormState) => void;

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
    handleValidate?: (props: HandleFormFieldChangeProps) => void;
    whenToValidate?: FormValidationType;
    handleChange?: (props: HandleFormFieldChangeProps) => void;
    handleSubmit?: () => void;
    isMobileView?: boolean;
    shouldSubmitOnEnter?: boolean;
    shouldShowSubmitButton?: boolean;
    submitButtonProps?: ButtonProps;
    setFormFieldRef?: (name: FieldName, element: any) => void;
}

// FormField
export interface FormFieldProps {
    formField: FormField;
    error?: string;
    formData: FormState;
    handleChange: (props: HandleFormFieldChangeProps) => void;
    whenToValidate?: FormValidationType;
    handleValidate: (props: HandleFormFieldChangeProps) => void;
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
