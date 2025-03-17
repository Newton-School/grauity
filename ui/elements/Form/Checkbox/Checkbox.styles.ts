/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { StyledDivProps, StyledLabelProps } from '../../../../common/types';
import { Label } from '../Label';
import { StyledCheckboxInputProps } from './types';
import { getCheckboxStyles } from './utils';

export const StyledCheckboxWithMessage = styled.div<StyledDivProps>`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-family: var(--font-family);
`;

export const StyledCheckbox = styled.div<StyledDivProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    height: fit-content;
    padding-left: 2px;
`;

export const StyledCheckboxButton = styled.button<StyledCheckboxInputProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background: var(--bg-subtle-primary-default, #fff);
    border-radius: 5px;
    border: 1.5px solid var(--border-moderate-primary-default, #c9cfd9);
    cursor: pointer;
    transition: border-color 70ms ease, background 70ms ease, color 70ms ease;
    position: relative;
    padding: 0;
    margin: 0;

    /* Size Variants */
    ${({ $size }) => {
        if ($size === 'small') {
            return css`
                width: 12px;
                height: 12px;
                border-width: 1.25px;
                border-radius: 3px;
            `;
        }
        if ($size === 'large') {
            return css`
                width: 20px;
                height: 20px;
                border-width: 1.5px;
            `;
        }
        return css`
            width: 16px;
            height: 16px;
            border-width: 1.4px;
            border-radius: 4px;
        `;
    }}

    ${({ $color, $checked, $indeterminate }) =>
        getCheckboxStyles({
            color: $color,
            checked: $checked,
            indeterminate: $indeterminate,
        })}

    /* Disabled State */
    &:disabled {
        border-color: var(--border-subtle-primary-disabled, #edeff3);
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

export const StyledCheckboxLabel = styled(Label)`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.1px;
    cursor: pointer;

    ${({ isDisabled }: StyledLabelProps) =>
        isDisabled &&
        css`
            color: var(--text-emphasis-primary-disabled, #8c95a6);
        `};
`;
