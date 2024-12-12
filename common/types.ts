import React from 'react';

/**
 * Interface representing the properties for a styled div component.
 *
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @property {React.Ref<HTMLDivElement>} [ref] - Optional ref for the div element.
 */
export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
    'data-testid'?: string;
}

/**
 * Interface representing the properties for a styled select component.
 *
 * @extends React.SelectHTMLAttributes<HTMLSelectElement>
 * @property {React.Ref<HTMLSelectElement>} [ref] - Optional ref for the select element.
 */
export interface StyledSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    ref?: React.Ref<HTMLSelectElement>;
}

/**
 * Interface representing the properties for a styled input component.
 *
 * @extends React.InputHTMLAttributes<HTMLInputElement>
 * @property {React.Ref<HTMLInputElement>} [ref] - Optional ref to the input element.
 */
export interface StyledInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    ref?: React.Ref<HTMLInputElement>;
}

/**
 * Interface representing the properties for a styled label component.
 *
 * @extends React.LabelHTMLAttributes<HTMLLabelElement>
 * @property {React.Ref<HTMLLabelElement>} [ref] - Optional ref to the label element.
 */
export interface StyledLabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement> {
    ref?: React.Ref<HTMLLabelElement>;
    isRequired?: boolean;
}

/**
 * Interface representing the properties for a styled button component.
 *
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 * @property {React.Ref<HTMLButtonElement>} [ref] - Optional ref to the button element.
 */
export interface StyledButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    ref?: React.Ref<HTMLButtonElement>;
}
