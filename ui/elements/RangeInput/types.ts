import { StyledDivProps, StyledInputProps } from '../../../common/types';

export type RangeInputValue = {
    min: number;
    max: number;
};

export interface RangeInputProps {
    /**
     * The minimum value of the range input
     * @default 0
     */
    minValue?: number;

    /**
     * The maximum value of the range input
     * @default 100
     */
    maxValue?: number;

    /**
     * The jump step value of the range input
     * @default 1
     */
    step?: number;

    /**
     * The current value of the range input
     * @default { min: 0, max: 100 }
     */
    value?: RangeInputValue;

    /**
     * The function to be called when the range input value changes
     * @param value - The new value of the range input
     */
    onChange?: (value: RangeInputValue) => void;

    /**
     * The width of the range input container
     * @default '100%'
     */
    width?: string;

    /**
     * Additional class name for the range input container
     * @default ''
     */
    className?: string;
}

export interface StyledRangeInputContainerProps extends StyledDivProps {
    $width: string;
}

export interface StyledRangeInputProps extends StyledInputProps {
    $minThumb: number;
    $maxThumb: number;
}
