import { RadioButtonProps } from '../RadioButton/types';

export type RadioButtonValue = string | number;

export interface RadioButtonItemProps extends Omit<RadioButtonProps, 'name'> {
    name?: string;
}

export interface RadioButtonGroupProps {
    /**
     * The name of the radio button group.
     * @required
     */
    name: string;

    /**
     * The label for the radio button group.
     * @default undefined
     */
    label?: string;

    /**
     * The items available in the radio button group.
     * Each item should adhere to the `RadioButtonProps` interface.
     * @default []
     */
    items: RadioButtonItemProps[];

    /**
     * The currently selected value in the radio button group.
     * @default null
     */
    value?: RadioButtonValue;

    /**
     * Callback function to handle changes in the radio button group.
     * @param value - The updated value.
     */
    onChange?: (value: RadioButtonValue) => void;

    /**
     * Whether the radio button group is required.
     * @default false
     */
    isRequired?: boolean;

    /**
     * The help message for the radio button group.
     * @default undefined
     */
    helpMessage?: string;

    /**
     * The error message for the radio button group.
     * @default undefined
     */
    errorMessage?: string;

    /**
     * Additional class names to apply to the radio button.
     * @default undefined
     */
    className?: string;
}
