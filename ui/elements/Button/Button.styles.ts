import styled, { css } from 'styled-components';

import { BUTTON_SIZES_ENUM, BUTTON_VARIANTS_ENUM } from './constants';
import { ButtonComponentProps } from './types';

export const StyledButton = styled.button<ButtonComponentProps>`
    padding: var(--spacing-4px, 4px) var(--spacing-12px, 12px);
    font-size: var(--font-size-14px, 14px);
    border-radius: var(--corner-radius-8px, 8px);
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-weight-semibold, 600);
    font-family: var(--font-family, 'Mona Sans');
    border: none;
    outline: none;
    cursor: pointer;
    width: max-content;
    gap: var(--spacing-8px, 8px);

    ${({ variant }) => {
        switch (variant) {
            case BUTTON_VARIANTS_ENUM.PRIMARY:
                return css`
                    background: var(--bg-action-brand, #0673f9);
                    color: #fff;
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-action-brand-hover, #2989ff);
                    }

                    &:focus {
                        background: var(--bg-action-brand-hover, #2989ff);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border-brand, #94c4ff);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.PRIMARY_OUTLINED:
                return css`
                    background: transparent;
                    color: var(--text-brand, #0673f9);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-brand, #e5f1ff);
                    }

                    &:focus {
                        background: var(--bg-brand, #e5f1ff);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border-brand, #94c4ff);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.SECONDARY:
                return css`
                    background: var(--bg-invert-primary, #0b0c0e);
                    color: var(--text-action2, #ffffff);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-invert-primary-hover, #16191d);
                    }

                    &:focus {
                        background: var(--bg-invert-primary-hover, #16191d);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border, #e1e5ea);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.SECONDARY_OUTLINED:
                return css`
                    background: transparent;
                    color: var(--text-primary, #16191d);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-secondary, #f6f7f9);
                    }

                    &:focus {
                        background: var(--bg-secondary, #f6f7f9);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border, #e1e5ea);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.TERTIARY:
                return css`
                    background: var(--bg-primary, #fff);
                    color: var(--text-primary, #16191d);
                    outline: var(--spacing-1px, 1px) solid
                        var(--border-neutral, #e1e5ea);

                    &:hover {
                        background: var(--bg-primary-hover, #f6f7f9);
                    }

                    &:focus {
                        background: var(--bg-primary-hover, #f6f7f9);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border, #e1e5ea);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.TERTIARY_OUTLINED:
                return css`
                    background: transparent;
                    color: var(--text-primary, #16191d);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-primary-hover, #f6f7f9);
                    }

                    &:focus {
                        background: var(--bg-primary-hover, #f6f7f9);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border, #e1e5ea);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.SUCCESS:
                return css`
                    background: var(--bg-action-success, #009965);
                    color: var(--text-action, #ffffff);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-action-success-hover, #13b97c);
                    }

                    &:focus {
                        background: var(--bg-action-success-hover, #13b97c);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border-success, #acf7d3);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.SUCCESS_OUTLINED:
                return css`
                    background: transparent;
                    color: var(--text-success, #007a51);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-success, #d9fced);
                    }

                    &:focus {
                        background: var(--bg-success, #d9fced);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border-success, #acf7d3);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.DANGER:
                return css`
                    background: var(--bg-action-error, #d22d3a);
                    color: var(--text-action, #ffffff);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-action-error-hover, #ee3f44);
                    }

                    &:focus {
                        background: var(--bg-action-error-hover, #ee3f44);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border-error, #fbbbbf);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.DANGER_OUTLINED:
                return css`
                    background: transparent;
                    color: var(--text-error, #d22d3a);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-error, #ffe5e7);
                    }

                    &:focus {
                        background: var(--bg-error, #ffe5e7);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border-error, #fbbbbf);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.WARNING:
                return css`
                    background: var(--bg-action-warning, #f37216);
                    color: var(--text-action, #ffffff);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-action-warning-hover, #fd9254);
                    }

                    &:focus {
                        background: var(--bg-action-warning-hover, #fd9254);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border-warning, #ffd2ba);
                    }
                `;
            case BUTTON_VARIANTS_ENUM.WARNING_OUTLINED:
                return css`
                    background: transparent;
                    color: var(--text-warning, #de5a02);
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-warning, #fff1e5);
                    }

                    &:focus {
                        background: var(--bg-warning, #fff1e5);
                        outline: var(--spacing-3px, 3px) solid
                            var(--border-warning, #ffd2ba);
                    }
                `;
            default:
                return css``;
        }
    }}

    ${({ size, isIconButton }) => {
        switch (size) {
            case BUTTON_SIZES_ENUM.SMALL:
                return css`
                    padding: var(--spacing-4px, 4px) var(--spacing-8px, 8px);
                    height: var(--spacing-32px, 32px);
                    gap: var(--spacing-4px, 4px);
                    ${isIconButton &&
                    css`
                        padding: var(--spacing-4px, 4px);
                        width: var(--spacing-32px, 32px);
                    `};
                `;
            case BUTTON_SIZES_ENUM.MEDIUM:
                return css`
                    padding: var(--spacing-8px, 8px) var(--spacing-12px, 12px);
                    height: var(--spacing-40px, 40px);
                    ${isIconButton &&
                    css`
                        padding: var(--spacing-8px, 8px);
                        width: var(--spacing-40px, 40px);
                    `};
                `;
            case BUTTON_SIZES_ENUM.LARGE:
                return css`
                    padding: var(--spacing-12px, 12px) var(--spacing-16px, 16px);
                    height: var(--spacing-48px, 48px);
                    ${isIconButton &&
                    css`
                        padding: var(--spacing-12px, 12px);
                        width: var(--spacing-48px, 48px);
                    `};
                `;
            case BUTTON_SIZES_ENUM.EXTRA_LARGE:
                return css`
                    padding: var(--spacing-16px, 16px) var(--spacing-20px, 20px);
                    height: var(--spacing-56px, 56px);
                    ${isIconButton &&
                    css`
                        padding: var(--spacing-16px, 16px);
                        width: var(--spacing-56px, 56px);
                    `};
                `;
            default:
                return css``;
        }
    }}

    ${({ isIconButton }) =>
        isIconButton &&
        css`
            border-radius: var(--corner-radius-50percent, 50%);
        `}

    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `}

    ${({ disabled }) =>
        disabled &&
        css`
            background: var(--bg-disabled, #23282f);
            color: var(--text-disabled, #5b6271);
            border: none;
            outline: none;
            cursor: not-allowed;

            &:hover {
                background: var(--bg-disabled, #23282f);
                color: var(--text-disabled, #5b6271);
            }
        `}

    ${({ loading }) =>
        loading &&
        css`
            cursor: progress;
        `}

    ${({ iconPosition }) =>
        iconPosition === 'right' &&
        css`
            flex-direction: row-reverse;
        `}

    transition: background-color 0.2s ease-in, outline 0.2s ease-in, border 0.2s ease-in, border-color 0.2s ease-in;
`;
