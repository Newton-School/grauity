import React from 'react';
import { Schema } from 'yup';

import { IconButtonProps } from '../../Button';
import { DropdownMenuProps } from '../../DropdownMenu';
import { CheckboxProps } from '../Checkbox';
import { TextFieldProps } from '../TextField';

// Form Data
export interface FormState {
    [key: string]: any;
}
export interface FormErrors {
    [key: string]: string;
}

// Form Field
export enum FormFieldType {
    TEXTFIELD = 'TEXTFIELD',
    DATE_PICKER = 'DATE_PICKER',
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
    schema?: Schema;
    configProps?: any;
    conditionalProps?: ConditionalProp[];
}
export interface FormFieldTextFieldProps extends FormFieldBaseProps {
    type: FormFieldType.TEXTFIELD;
    rendererProps: TextFieldProps;
}
export interface FormFieldDatePickerProps extends FormFieldBaseProps {
    type: FormFieldType.DATE_PICKER;
    rendererProps: TextFieldProps;
}
export interface FormFieldDropdownMenuProps extends FormFieldBaseProps {
    type: FormFieldType.DROPDOWN_MENU;
    rendererProps: DropdownMenuProps;
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
    | FormFieldDropdownMenuProps
    | FormFieldIconButtonProps
    | FormFieldCheckboxProps
    | FormFieldCustomProps;
export interface FormFields {
    [key: string]: FormField;
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
    fields: FormFields;
    initialState: FormState;
    rows: FormRow[];
}

// UseFormHook
export interface UseFormHookProps {
    /**
     * The initial state of the form.
     * @default {}
     */
    initialState?: FormState;

    /**
     * An array of form rows to be rendered.
     * @default []
     */
    formRows?: FormRow[];

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
}
export interface UseFormHookReturnProps {
    formData: FormState;
    formRenderer: React.ReactNode;
    validateFields: (fields: FormFields, data: FormState) => any;
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
    isMobileView?: boolean;
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
    field: FormField;
    data: any;
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
