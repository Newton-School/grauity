import styled, { css } from 'styled-components';

import { StyledDivProps } from '../../../../common/types';
import { TEXT_FIELD_SIZE_STYLE_MAPPING } from './constants';
import {
    StyledTextFieldContainerProps,
    StyledTextFieldInputProps,
} from './types';
import { getTextFieldStyles } from './utils';

export const StyledTextInputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    position: relative;
    font-family: var(--font-family);
`;

export const StyledTextFieldLeftAdornment = styled.div<StyledDivProps>`
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    gap: var(--spacing-spacing5, 8px);
`;

export const StyledTextFieldRightAdornment = styled(
    StyledTextFieldLeftAdornment
)`
    right: 0;
    top: 0;
    left: auto;
`;

export const StyledTextFieldInput = styled.input<StyledTextFieldInputProps>`
    display: flex;
    min-height: 32px;
    padding: 4px 8px;
    align-items: center;
    gap: var(--spacing-spacing5, 8px);
    align-self: stretch;
    border-radius: var(--corner-radius-radius4, 8px);
    border: 1px solid var(--border-moderate-primary-default, #c9cfd9);
    background: var(--bg-subtle-primary-default, #fff);
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.15s ease-in-out,
        background-color 0.15s ease-in-out, outline 0.2s ease-in-out;
    outline: 0px solid transparent;
    color: var(--text-emphasis-primary-default, #16191d);
    font-family: var(--font-family);
    font-weight: var(--font-weight-fw-10, 500);

    &:hover {
        background: var(--bg-subtle-primary-hover, #f6f7f9);
    }

    ${({ $color }) => getTextFieldStyles($color)}

    &:disabled {
        color: var(--text-emphasis-primary-disabled, #8c95a6);
        border: 1px solid var(--border-moderate-primary-default, #c9cfd9);
        background: var(--bg-subtle-secondary-default, #f6f7f9);
        cursor: not-allowed;
    }

    &:read-only:not(:disabled) {
        color: var(--text-emphasis-primary-default, #16191d);
        background: var(--bg-subtle-secondary-default, #f6f7f9);
    }

    &::placeholder {
        color: var(--text-emphasis-primary-disabled, #5b6271);
        font-size: var(--font-size-fs-20, 14px);
        font-style: normal;
        font-weight: var(--font-weight-fw-10, 500);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
        font-family: var(--font-family);
        opacity: 1;
    }

    ${({ $size }) =>
        $size &&
        css`
            ${TEXT_FIELD_SIZE_STYLE_MAPPING[$size]}
        `}

    ${({ $adornmentDimensions }) => css`
        ${!!$adornmentDimensions?.start && `padding-left: ${$adornmentDimensions.start}px;`}
        ${!!$adornmentDimensions?.end && `padding-right: ${$adornmentDimensions.end}px;`}
    `}
`;

export const StyledTextFieldContainer = styled.div<StyledTextFieldContainerProps>`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    color: var(--text-emphasis-primary-default, #1a1d24);

    ${StyledTextFieldLeftAdornment}, ${StyledTextFieldRightAdornment} {
        font-weight: var(--font-weight-fw-10, 500);

        ${({ $size }) =>
        $size &&
            css`
                font-size: ${TEXT_FIELD_SIZE_STYLE_MAPPING[$size].fontSize};
            `}

        ${({ $isDisabled }) =>
        $isDisabled &&
            css`
                color: var(--text-emphasis-primary-disabled, #8c95a6);
            `}
    }
`;
