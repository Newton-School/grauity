import styled from 'styled-components';

import { StyledDivProps, StyledInputProps } from '../../../../common/types';

export const StyledTextInputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    position: relative;
    font-family: var(--font-family);
`;

export const StyledTextFieldContainer = styled.div<StyledDivProps>`
        border-radius: 8px;
    border: 1px solid var(--border-neutral, #e1e5ea);
    background: var(--bg-primary, #fff);
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--text-primary, #16191d);
    padding: 8px 12px;
    ::placeholder {
        color: var(--text-disabled, #8c95a6);
    }
    :active {
        border: 1px solid black;
        background: var(--bg-primary, #fff);
    }
    caret-color: var(--text-brand, #0673f9);
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    :disabled {
        background: var(--bg-disabled, #f5f6f7);
        color: var(--text-disabled, #8c95a6);
        cursor: not-allowed;
    }
`;

export const StyledTextField = styled.input<StyledInputProps>`
    border-radius: 8px;
    border: none;
    background: transparent;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--text-primary, #16191d);
    padding: 8px 12px;
    /* ::placeholder {
        color: var(--text-disabled, #8c95a6);
    }
    :disabled {
        color: var(--text-disabled, #8c95a6);
        cursor: not-allowed;
    }
    &:active {
        border: none;
        background: transparent;
    }
    &:focus {
        outline: none;
    }
    &:focus-visible {
        outline: none;
    } */
`;

export const StyledTextInputAreaField = styled.textarea`
    border-radius: 8px;
    border: 1px solid var(--border-neutral, #e1e5ea);
    background: var(--bg-primary, #fff);
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--text-primary, #16191d);
    padding: 8px 12px;
    ::placeholder {
        color: var(--text-disabled, #8c95a6);
    }
    :active {
        border: 1px solid black;
        background: var(--bg-primary, #fff);
    }
    caret-color: var(--text-brand, #0673f9);
    :disabled {
        background: var(--bg-disabled, #f5f6f7);
        color: var(--text-disabled, #8c95a6);
        cursor: not-allowed;
    }
`;
