/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { StyledDivProps, StyledLabelProps } from '../../../../common/types';
import { Label } from '../Label';
import {
    StyledRadioButtonInputProps,
    StyledRadioButtonLabelProps,
} from './types';
import { getRadioButtonStyles } from './utils';

export const StyledRadioButtonWithMessage = styled.div<StyledDivProps>`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const StyledRadioButton = styled.div<StyledDivProps>`
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-family);
    width: fit-content;
    height: fit-content;
    padding-left: 2px;
`;

export const StyledRadioButtonInput = styled.input<StyledRadioButtonInputProps>`
    -webkit-appearance: none;
    display: block;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.4px solid var(--border-moderate-primary-default, #c9cfd9);
    position: relative;
    cursor: pointer;
    transition: border-color 70ms ease, background 70ms ease;
    outline: none;
    background: var(--bg-subtle-primary-default, #fff);

    ${({ $size }) => {
        if ($size === 'small') {
            return css`
                width: 12px;
                height: 12px;
                border-width: 1.25px;
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
        `;
    }}

    ${({ $color }) => getRadioButtonStyles($color)}

    &:checked::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: background 150ms ease;

        ${({ $size }) => {
            if ($size === 'small') {
                return css`
                    width: 7px;
                    height: 7px;
                `;
            }
            if ($size === 'large') {
                return css`
                    width: 12px;
                    height: 12px;
                `;
            }
            return css`
                width: 10px;
                height: 10px;
            `;
        }}
    }

    &:disabled {
        border: 1.4px solid var(--border-subtle-primary-disabled, #edeff3);
        cursor: not-allowed;
    }
`;

export const StyledRadioButtonLabel = styled(
    Label
)<StyledRadioButtonLabelProps>`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.1px;
    cursor: pointer;

    ${({ $size }) => {
        if ($size === 'small') {
            return css`
                font-size: 12px;
                line-height: 18px;
            `;
        }
        if ($size === 'large') {
            return css`
                font-size: 16px;
                line-height: 26px;
            `;
        }
        return css`
            font-size: 14px;
            line-height: 22px;
        `;
    }}

    ${({ isDisabled }: StyledLabelProps) =>
        isDisabled &&
        css`
            color: var(--text-emphasis-primary-disabled, #8c95a6);
            cursor: not-allowed;
        `};
`;
