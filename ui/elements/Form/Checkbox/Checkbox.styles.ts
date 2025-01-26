/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { StyledDivProps, StyledLabelProps } from '../../../../common/types';
import { Label } from '../Label';
import { StyledCheckboxInputProps } from './types';

export const StyledCheckboxWithMessage = styled.div<StyledDivProps>`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const StyledCheckbox = styled.div<StyledDivProps>`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family);
    width: fit-content;
    height: fit-content;
    padding-left: 2px;
`;

export const StyledCheckboxButton = styled.button<StyledCheckboxInputProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background: var(--background-subtle-primary-default, #fff);
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

    /* State Variants */
    ${({ $state }) => {
        if ($state === 'error') {
            return css`
                border-color: var(--border-moderate-error-default, #f8636b);
            `;
        }
        if ($state === 'success') {
            return css`
                border-color: var(--border-moderate-success-default, #50ce99);
            `;
        }
        return css`
            border-color: var(--border-moderate-primary-default, #c9cfd9);
        `;
    }}

    /* Checked State */
    ${({ $checked }) =>
        $checked &&
        css`
            border-color: var(--background-emphasis-brand-default, #0673f9);
            background: var(--background-emphasis-brand-default, #0673f9);
            color: var(--background-emphasis-brand-default, #0673f9);
            transition: border-color 150ms ease, background 150ms ease,
                color 150ms ease;
        `}

    /* Hover State */
    &:hover:not(:disabled) {
        ${({ $checked, $state, $indeterminate }) =>
            !$checked && !$indeterminate
                ? css`
                      border-color: var(--border-subtle-brand-default, #61a8ff);
                      background: var(
                          --background-subtle-brand-default,
                          #e5f1ff
                      );

                      ${$state === 'error' &&
                      css`
                          border-color: var(
                              --border-moderate-error-default,
                              #f8636b
                          );
                          background: var(
                              --background-subtle-error-default,
                              #ffe5e7
                          );
                      `}

                      ${$state === 'success' &&
                      css`
                          border-color: var(
                              --border-moderate-success-default,
                              #50ce99
                          );
                          background: var(
                              --background-subtle-success-default,
                              #d9fced
                          );
                      `}
                  `
                : ''}
    }

    /* Active State */
    &:active:not(:disabled) {
        ${({ $state }) => {
            if ($state === 'error') {
                return css`
                    border-color: var(--border-moderate-error-default, #f8636b);
                `;
            }
            if ($state === 'success') {
                return css`
                    border-color: var(
                        --border-moderate-success-default,
                        #50ce99
                    );
                `;
            }
            return css`
                border-color: var(--border-subtle-brand-default, #61a8ff);
            `;
        }}
    }

    /* Disabled State */
    &:disabled {
        border-color: var(--border-subtle-primary-disabled, #edeff3);
        background: var(--background-subtle-primary-default, #fff);
        cursor: not-allowed;
        opacity: 0.5;
        ${({ $checked }) =>
            $checked &&
            css`
                border-color: var(--border-subtle-primary-disabled, #edeff3);
                background: var(--background-subtle-primary-disabled, #edeff3);
                color: var(--background-subtle-primary-disabled, #edeff3);
            `}
    }

    /* Focus Styles */
    &:focus-visible {
        outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
    }

    /* Indeterminate state */
    ${({ $indeterminate }) =>
        $indeterminate &&
        css`
            border-color: var(--background-emphasis-brand-default, #0673f9);
            background: var(--background-emphasis-brand-default, #0673f9);
            color: var(--background-emphasis-brand-default, #0673f9);
            transition: border-color 150ms ease, background 150ms ease,
                color 150ms ease;
        `}
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
