import { CheckboxProps } from '../Checkbox/types';

export type CheckBoxValue = string | number;

export interface CheckboxOptionProps extends Omit<CheckboxProps, 'name'> {
    name?: string;
}

export interface CheckboxGroupProps {
    /**
     * The name of the checkbox fields.
     * @required
     */
    name: string;

    /**
     * The label for the checkbox group.
     * @default undefined
     */
    label?: string;

    /**
     * The options available in the checkbox group.
     * Each option should adhere to the `CheckboxProps` interface.
     * @default []
     */
    options: CheckboxOptionProps[];

    /**
     * The currently selected values in the checkbox group.
     * @default []
     */
    value?: CheckBoxValue[];

    /**
     * Callback function to handle changes in the checkbox group.
     * @param value - The updated array of selected values.
     */
    onChange?: (value: CheckBoxValue[]) => void;

    /**
     * Whether the checkbox group is required.
     * @default false
     */
    isRequired?: boolean;

    /**
     * The help message for the checkbox group.
     * @default undefined
     */
    helpMessage?: string;

    /**
     * The error message for the checkbox group.
     * @default undefined
     */
    errorMessage?: string;

    /**
     * Additional class names to apply to the checkbox.
     * @default undefined
     */
    className?: string;
}
