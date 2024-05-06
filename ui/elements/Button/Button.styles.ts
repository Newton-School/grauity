import styled, { css } from 'styled-components';
import { BUTTON_SIZES_ENUM, BUTTON_VARIANTS_ENUM } from './constants';

export const StyledButton = styled.button<any>`
    padding: 4px 12px;
    font-size: 14px;
    border-radius: 8px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 550;
    font-family: "Switzer";
    border: none;
    outline: none;
    cursor: pointer;
    width: max-content;

    ${({ variant }) => {
        switch (variant) {
        case BUTTON_VARIANTS_ENUM.PRIMARY:
            return css`
                    background: var(--bg-action-brand, #0673f9);
                    color: #fff;
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-brand-action-hover, #2989ff);
                    }

                    &:focus {
                        background: var(--bg-brand-action-hover, #2989ff);
                        outline: var(--spacing-2px, 2px) solid
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
                        outline: var(--spacing-2px, 2px) solid
                            var(--border-brand, #94c4ff);
                    }
                `;
        case BUTTON_VARIANTS_ENUM.SECONDARY:
            return css`
                    background: #0b0c0e;
                    color: #fff;
                    border: none;
                    outline: none;
                    border: 1px solid var(--border, #30363d);

                    &:hover {
                        background: var(--bg-invert-primary-hover, #16191d);
                    }

                    &:focus {
                        background: var(--bg-invert-primary-hover, #16191d);
                        outline: var(--spacing-2px, 2px) solid
                            var(--border-neutral, #e1e5ea);
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
                        outline: var(--spacing-2px, 2px) solid
                            var(--border-neutral, #e1e5ea);
                    }
                `;
        case BUTTON_VARIANTS_ENUM.TERTIARY:
            return css`
                    background: var(--bg-primary, #fff);
                    color: var(--text-primary, #16191d);
                    outline: 1px solid var(--border-neutral, #e1e5ea);

                    &:hover {
                        background: var(--bg-primary-hover, #f6f7f9);
                    }

                    &:focus {
                        background: var(--bg-primary-hover, #f6f7f9);
                        outline: 2px solid var(--border-neutral, #e1e5ea);
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
                        outline: 2px solid var(--border-neutral, #e1e5ea);
                    }
                `;
        case BUTTON_VARIANTS_ENUM.SUCCESS:
            return css`
                    background: var(--bg-success-action, #009965);
                    color: #ffffff;
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-success-action-hover, #13b97c);
                    }

                    &:focus {
                        background: var(--bg-success-action-hover, #13b97c);
                        outline: var(--spacing-2px, 2px) solid
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
                        outline: var(--spacing-2px, 2px) solid
                            var(--border-success, #acf7d3);
                    }
                `;
        case BUTTON_VARIANTS_ENUM.DANGER:
            return css`
                    background: var(--bg-error-action, #d22d3a);
                    color: #ffffff;
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-error-action-hover, #ee3f44);
                    }

                    &:focus {
                        background: var(--bg-error-action-hover, #ee3f44);
                        outline: var(--spacing-2px, 2px) solid
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
                        outline: var(--spacing-2px, 2px) solid
                            var(--border-error, #fbbbbf);
                    }
                `;
        case BUTTON_VARIANTS_ENUM.WARNING:
            return css`
                    background: var(--bg-warning-action, #f37216);
                    color: #ffffff;
                    border: none;
                    outline: none;

                    &:hover {
                        background: var(--bg-warning-action-hover, #fd9254);
                    }

                    &:focus {
                        background: var(--bg-warning-action-hover, #fd9254);
                        outline: var(--spacing-2px, 2px) solid
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
                        outline: var(--spacing-2px, 2px) solid
                            var(--border-warning, #ffd2ba);
                    }
                `;
        default:
            return css``;
        }
    }}

    ${({ size }) => {
        switch (size) {
        case BUTTON_SIZES_ENUM.SMALL:
            return css`
                    padding: 4px 8px;
                    height: 32px;
                `;
        case BUTTON_SIZES_ENUM.MEDIUM:
            return css`
                    padding: 8px 12px;
                    height: 40px;
                `;
        case BUTTON_SIZES_ENUM.LARGE:
            return css`
                    padding: 12px 16px;
                    height: 48px;
                `;
        case BUTTON_SIZES_ENUM.EXTRA_LARGE:
            return css`
                    padding: 16px 20px;
                    height: 56px;
                `;
        default:
            return css``;
        }
    }}

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

            &:hover {
                background: var(--bg-disabled, #23282f);
                color: var(--text-disabled, #5b6271);
            }
        `}

    ${({ iconPositon }) =>
        iconPositon === 'right' &&
        css`
            flex-direction: row-reverse;
        `}

    transition: background-color 0.2s ease-in, outline 0.2s ease-in;
`;

export const StyledButtonText = styled.span`
    padding: 0 8px;
`;
