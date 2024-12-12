import styled from 'styled-components';

import { StyledDivProps, StyledInputProps } from '../../../../common/types';

export const StyledRadioButton = styled.div<StyledDivProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family);
    width: fit-content;
    height: fit-content;
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

    &:hover[not(:disabled)] {
        border: 1.4px solid var(--border-subtle-brand-default, #61a8ff);
        background: var(--bg-subtle-brand-default, #e5f1ff);
    }

    &:active[not(:disabled)] {
        border: 0.75px solid var(--border-subtle-brand-default, #61a8ff);
        background: var(--bg-subtle-primary-default, #fff);
    }

    &:disabled {
        border: 1.4px solid var(--border-subtle-primary-disabled, #edeff3);
    }
`;
