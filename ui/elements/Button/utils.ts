import { css } from 'styled-components';

import { BUTTON_COLORS_ENUM, BUTTON_VARIANTS_ENUM } from './constants';
import { ButtonColors, ButtonVariants } from './types';

export const getButtonStyles = ({
    variant = 'primary',
    color = 'brand',
}: {
    variant: ButtonVariants;
    color: ButtonColors;
}) => {
    switch (variant) {
        case BUTTON_VARIANTS_ENUM.PRIMARY: {
            const bgColor =
                color === BUTTON_COLORS_ENUM.NEUTRAL
                    ? 'var(--bg-subtle-invert-primary-default)'
                    : `var(--bg-emphasis-${color}-default)`;
            const textColor =
                color === BUTTON_COLORS_ENUM.NEUTRAL
                    ? 'var(--text-emphasis-invert-primary-default)'
                    : 'var(--text-emphasis-white-default)';
            const disabledBackgroundColor =
                color === BUTTON_COLORS_ENUM.NEUTRAL
                    ? 'var(--bg-subtle-invert-primary-disabled)'
                    : `var(--bg-emphasis-${color}-disabled)`;
            const hoverBackgroundColor =
                color === BUTTON_COLORS_ENUM.NEUTRAL
                    ? 'var(--bg-subtle-invert-primary-hover)'
                    : `var(--bg-emphasis-${color}-hover)`;

            return css`
                background: ${bgColor};
                color: ${textColor};
                border: none;
                outline: 0px solid transparent;
                &:hover:not([disabled]) {
                    background: ${hoverBackgroundColor};
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid var(--border-subtle-${color}-default);
                }
                &:disabled {
                    background: ${disabledBackgroundColor};
                    color: var(--text-emphasis-white-disabled);
                }
            `;
        }
        case BUTTON_VARIANTS_ENUM.SECONDARY: {
            const colorSpace =
                color === BUTTON_COLORS_ENUM.NEUTRAL ? 'primary' : color;
            const hoverBackgroundColor =
                color === BUTTON_COLORS_ENUM.NEUTRAL
                    ? 'var(--bg-subtle-primary-hover)'
                    : `var(--bg-subtle-${color}-default)`;

            return css`
                color: var(--text-emphasis-${colorSpace}-default);
                border: 1.5px solid var(--border-subtle-${colorSpace}-default);
                outline: 0px solid transparent;
                background: var(--bg-subtle-primary-default);
                &:hover:not([disabled]) {
                    background: ${hoverBackgroundColor};
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid var(--border-subtle-${color}-default);
                }
                &:disabled {
                    border: 1.5px solid
                        var(--border-subtle-${colorSpace}-disabled);
                    color: var(--text-emphasis-${colorSpace}-disabled);
                }
            `;
        }
        case BUTTON_VARIANTS_ENUM.TERTIARY: {
            const colorSpace =
                color === BUTTON_COLORS_ENUM.NEUTRAL ? 'primary' : color;
            const hoverBackgroundColor =
                color === BUTTON_COLORS_ENUM.NEUTRAL
                    ? 'var(--bg-subtle-primary-hover)'
                    : `var(--bg-subtle-${color}-default)`;

            return css`
                color: var(--text-emphasis-${color}-default);
                border: none;
                outline: 0px solid transparent;
                background: var(--bg-subtle-primary-default);
                &:hover:not([disabled]) {
                    background: ${hoverBackgroundColor};
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid var(--border-subtle-${color}-default);
                }
                &:disabled {
                    color: var(--text-emphasis-${colorSpace}-disabled);
                }
            `;
        }
        default: {
            return css``;
        }
    }
};
