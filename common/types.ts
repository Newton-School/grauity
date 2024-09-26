import React from 'react';

/**
 * Interface representing the properties for a styled div component.
 *
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @property {React.RefObject<HTMLDivElement>} [ref] - Optional ref object for the div element.
 */
export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.RefObject<HTMLDivElement>;
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
