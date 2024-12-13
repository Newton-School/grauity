/* eslint-disable indent */
import styled, { css } from 'styled-components';

import { StyledDivProps, StyledLabelProps } from '../../../../common/types';
import { Label } from '../Label';
import { StyledRadioButtonInputProps } from './types';

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

export const StyledRadioButtonInput = styled.input<StyledRadioButtonInputProps>`
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.4px solid var(--border-moderate-primary-default, #c9cfd9);
    position: relative;
    cursor: pointer;

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
            border: 1.4px solid var(--border-moderate-primary-default, #c9cfd9);
        `;
    }}    

    &:checked {
        border: 1.4px solid var(--border-subtle-brand-default, #61a8ff);
        background: var(--background-subtle-primary-default, #fff);

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
    &:checked::after {
        content: '';
        position: absolute;
        width: 80%;
        height: 80%;
        border-radius: 50%;
        background: var(--background-emphasis-brand-default, #0673f9);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        ${({ $state }) => {
            if ($state === 'error') {
                return css`
                    background: var(
                        --background-emphasis-error-default,
                        #f8636b
                    );
                `;
            }
            if ($state === 'success') {
                return css`
                    background: var(
                        --background-emphasis-success-default,
                        #50ce99
                    );
                `;
            }
            return css`
                background: var(--background-emphasis-brand-default, #0673f9);
            `;
        }}
    }

    &:hover:not(:disabled) {
        border-color: var(--border-subtle-brand-default, #61a8ff);
        background: var(--background-subtle-brand-default, #e5f1ff);

        ${({ $state }) => {
            if ($state === 'error') {
                return css`
                    border-color: var(--border-moderate-error-default, #f8636b);
                    background: var(--background-subtle-error-default, #ffe5e7);
                `;
            }
            if ($state === 'success') {
                return css`
                    border-color: var(
                        --border-moderate-success-default,
                        #50ce99
                    );
                    background: var(
                        --background-subtle-success-default,
                        #d9fced
                    );
                `;
            }
            return css`
                border-color: var(--border-subtle-brand-default, #2989ff);
                background: var(--background-subtle-brand-default, #e5f1ff);
            `;
        }}
    }

    &:active:not(:disabled) {
        border: 0.75px solid var(--border-subtle-brand-default, #61a8ff);
        background: var(--background-subtle-primary-default, #fff);

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
