import styled, { css } from 'styled-components';

import { TEXT_AREA_SIZE_STYLES_MAPPING } from './constant';
import { TextAreaComponentProps } from './types';

export const StyledTextAreaFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    position: relative;
    font-family: var(--font-family);
    box-sizing: border-box;
`;

export const StyledTextArea = styled.textarea<TextAreaComponentProps>`
    border-radius: var(--corner-radius-radius4, 8px);
    color: var(--text-primary, #16191d);
    border-radius: var(--corner-radius-radius4, 8px);
    box-sizing: border-box;
    background: var(--bg-subtle-primary-default, #fff);
    border: 1px solid var(--border-moderate-primary-default, #c9cfd9);
    font-family: var(--font-family);
    font-weight: var(--font-weight-fw-10, 500);
    line-height: var(--line-height-lh-70, 26px);
    letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    font-size: var(--font-size-fs-30, 16px);
    color: var(--text-emphasis-primary-default, #16191d);
    transition: border-color 0.15s ease-in-out,
        background-color 0.15s ease-in-out, outline 0.2s ease-in-out;
    outline: 0px solid transparent;

    ${({ size }) =>
        size &&
        css`
            ${TEXT_AREA_SIZE_STYLES_MAPPING[size]}
        `};
    &::placeholder {
        color: var(--text-emphasis-primary-disabled, #8c95a6);
    }
    &:disabled {
        color: var(--text-emphasis-primary-disabled, #8c95a6);
        background: var(--bg-subtle-secondary-default, #f6f7f9);
    }
    &:hover {
        background: var(--bg-subtle-primary-hover, #f6f7f9);
    }
    &:focus {
        border: 1px solid var(--border-subtle-brand-default, #61a8ff);
        background: var(--bg-subtle-primary-default, #fff);
    }
    &:focus-visible {
        outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
    }
    &[readonly] {
        color: var(--text-emphasis-primary-default, #16191d);
        background: var(--bg-subtle-secondary-default, #f6f7f9);
    }
`;
