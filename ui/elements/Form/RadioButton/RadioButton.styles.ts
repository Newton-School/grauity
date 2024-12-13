import styled, { css } from 'styled-components';

import {
    StyledDivProps,
    StyledInputProps,
    StyledLabelProps,
} from '../../../../common/types';
import { Label } from '../Label';

export const StyledRadioButtonWithMessage = styled.div<StyledDivProps>`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const StyledRadioButton = styled.div<StyledDivProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family);
    width: fit-content;
    height: fit-content;
    padding-left: 2px;
`;

export const StyledRadioButtonInput = styled.input<StyledInputProps>`
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.4px solid var(--border-moderate-primary-default, #c9cfd9);
    position: relative;
    cursor: pointer;

    &:checked {
        border: 1.4px solid var(--border-subtle-brand-default, #61a8ff);
        background: var(--bg-subtle-primary-default, #fff);
    }
    &:checked::after {
        content: '';
        position: absolute;
        width: 80%;
        height: 80%;
        border-radius: 50%;
        background: var(--bg-emphasis-brand-default, #0673f9);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover:not(:disabled) {
        border: 1.4px solid var(--border-subtle-brand-default, #61a8ff);
        background: var(--bg-subtle-brand-default, #e5f1ff);
    }

    &:active:not(:disabled) {
        border: 0.75px solid var(--border-subtle-brand-default, #61a8ff);
        background: var(--bg-subtle-primary-default, #fff);
    }

    &:disabled {
        border: 1.4px solid var(--border-subtle-primary-disabled, #edeff3);
    }
`;

export const StyledRadioButtonLabel = styled(Label)`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.1px;

    ${({ disabled }: StyledLabelProps) =>
        disabled &&
        css`
            color: var(--text-emphasis-primary-disabled, #8c95a6);
        `};
`;
