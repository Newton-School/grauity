import styled from 'styled-components';

import { StyledDivProps } from '../Calendar/types';
import { StyledRangeInputContainerProps, StyledRangeInputProps } from './types';

export const StyledRangeInputContainer = styled.div<StyledRangeInputContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    gap: 10px;
    width: ${({ $width }) => $width};
    height: 100%;
    min-height: 45px;
    font-family: var(--font-family, 'Mona Sans');
    --slider-color: var(--text-disabled, #8c95a6);
    --slider-filled-color: var(--text-brand, #0673f9);
`;

export const StyledRangeSliderSection = styled.div<StyledDivProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const StyledRangeInput = styled.input.attrs({
    type: 'range',
})<StyledRangeInputProps>`
    pointer-events: none;
    position: absolute;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    border: none;
    border-radius: 14px;
    background: var(--slider-color);
    box-shadow: inset 0 1px 0 0 darken(var(--slider-color), 15%),
        inset 0 -1px 0 0 darken(var(--slider-color), 10%);
    -webkit-box-shadow: inset 0 1px 0 0 darken(var(--slider-color), 15%),
        inset 0 -1px 0 0 darken(var(--slider-color), 10%);
    left: 0;
    top: calc(50% - 5px);
    width: 100%;
    outline: none;
    height: 5px;
    margin: 0;
    padding: 0;
    cursor: -webkit-grab;
    cursor: grab;
    -webkit-transition: 0.3s ease;
    background: ${({ $minThumb, $maxThumb }) => `
    linear-gradient(
      to right,
      var(--slider-color) ${$minThumb}%,
      var(--slider-filled-color) ${$minThumb}%,
      var(--slider-filled-color) ${$maxThumb}%,
      var(--slider-color) ${$maxThumb}%
    )
  `};
    &::-webkit-slider-thumb {
        pointer-events: all;
        position: relative;
        z-index: 1;
        outline: 0;
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 14px;
        background-color: var(--slider-filled-color);
        -webkit-transition: 0.3s ease;
    }
    &:active {
        cursor: grabbing;
        &::-webkit-slider-thumb {
            transform: scale(1.3);
        }
    }
`;

export const StyledValuesContainer = styled.div<StyledDivProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 5px;
    color: var(--text-primary, #16191d);
`;
