import { StyledInputProps } from '../../../common/types';
import { StyledDivProps } from '../Calendar/types';

export type RangeInputValue = {
    min: number;
    max: number;
};

export interface RangeInputProps {
    minValue?: number;
    maxValue?: number;
    step?: number;
    value?: RangeInputValue;
    onChange?: (value: RangeInputValue) => void;
    width?: string;
}

export interface StyledRangeInputContainerProps extends StyledDivProps {
    $width: string;
}

export interface StyledRangeInputProps extends StyledInputProps {
    $minThumb: number;
    $maxThumb: number;
}
