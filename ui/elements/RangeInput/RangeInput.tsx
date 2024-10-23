import debounce from 'lodash/debounce';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';

import {
    StyledRangeInput,
    StyledRangeInputContainer,
    StyledRangeSliderSection,
    StyledValuesContainer,
} from './RangeInput.styles';
import { RangeInputProps } from './types';

const RangeInput = forwardRef<HTMLDivElement, RangeInputProps>((props, ref) => {
    const {
        minValue = 0,
        maxValue = 100,
        step = 1,
        value = { min: 0, max: 100 },
        onChange = () => {},
        width = '100%',
    } = props;

    const [minInput, setMinInput] = useState(value.min || minValue);
    const [maxInput, setMaxInput] = useState(value.max || maxValue);
    const [finalMinInput, setFinalMinInput] = useState(value.min || minValue);
    const [finalMaxInput, setFinalMaxInput] = useState(value.max || maxValue);

    const handleChangeMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinInput(parseInt(e.target.value, 10));
    };

    const handleChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxInput(parseInt(e.target.value, 10));
    };

    useEffect(() => {
        setFinalMinInput(Math.min(minInput, maxInput));
        setFinalMaxInput(Math.max(minInput, maxInput));
    }, [minInput, maxInput]);

    const debouncedOnChange = useCallback(
        debounce((min: number, max: number) => {
            onChange({ min, max });
        }, 300),
        []
    );

    useEffect(() => {
        debouncedOnChange(finalMinInput, finalMaxInput);
    }, [finalMinInput, finalMaxInput]);

    return (
        <StyledRangeInputContainer ref={ref} $width={width} role="form">
            <StyledValuesContainer>
                <div>{finalMinInput}</div>
                <div>{finalMaxInput}</div>
            </StyledValuesContainer>
            <StyledRangeSliderSection>
                <StyledRangeInput
                    role="slider"
                    name="min"
                    aria-label={`Min value: ${finalMinInput}`}
                    value={minInput}
                    min={minValue}
                    max={maxValue}
                    step={step}
                    onChange={handleChangeMinValue}
                    $minThumb={
                        ((finalMinInput - minValue) / (maxValue - minValue)) *
                        100
                    }
                    $maxThumb={
                        ((finalMaxInput - minValue) / (maxValue - minValue)) *
                        100
                    }
                />
                <StyledRangeInput
                    role="slider"
                    name="max"
                    aria-label={`Max value: ${finalMaxInput}`}
                    value={maxInput}
                    min={minValue}
                    max={maxValue}
                    step={step}
                    onChange={handleChangeMaxValue}
                    $minThumb={
                        ((finalMinInput - minValue) / (maxValue - minValue)) *
                        100
                    }
                    $maxThumb={
                        ((finalMaxInput - minValue) / (maxValue - minValue)) *
                        100
                    }
                />
            </StyledRangeSliderSection>
        </StyledRangeInputContainer>
    );
});

export default RangeInput;
