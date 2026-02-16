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
            const colorSpace =
                color === BUTTON_COLORS_ENUM.NEUTRAL ? 'invert-primary' : color;
            const colorSpaceInverted =
                color === BUTTON_COLORS_ENUM.NEUTRAL ? 'primary' : color;
            const textColorSpace =
                color === BUTTON_COLORS_ENUM.NEUTRAL
                    ? 'invert-primary'
                    : 'white';
            const bgColorIntensity =
                color === BUTTON_COLORS_ENUM.NEUTRAL ? 'subtle' : 'emphasis';

            return css`
                background: var(--bg-${bgColorIntensity}-${colorSpace}-default);
                color: var(--text-emphasis-${textColorSpace}-default);
                border: none;
                outline: 0px solid transparent;
                &:hover:not([disabled]) {
                    background: var(
                        --bg-${bgColorIntensity}-${colorSpace}-hover
                    );
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid
                        var(--border-subtle-${colorSpaceInverted}-default);
                }
                &:disabled {
                    background: var(
                        --bg-${bgColorIntensity}-${colorSpace}-disabled
                    );
                    color: var(--text-emphasis-white-disabled, #f6f7f9);
                }
            `;
        }
        case BUTTON_VARIANTS_ENUM.SECONDARY: {
            const colorSpace =
                color === BUTTON_COLORS_ENUM.NEUTRAL ? 'primary' : color;
            const hoverBackgroundColor =
                color === BUTTON_COLORS_ENUM.NEUTRAL
                    ? 'var(--bg-subtle-primary-hover, #f6f7f9)'
                    : `var(--bg-subtle-${color}-default)`;

            return css`
                color: var(--text-emphasis-${colorSpace}-default);
                border: 1.5px solid var(--border-subtle-${colorSpace}-default);
                outline: 0px solid transparent;
                background: var(--bg-subtle-primary-default, #ffffff);
                &:hover:not([disabled]) {
                    background: ${hoverBackgroundColor};
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid
                        var(--border-subtle-${colorSpace}-default);
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
                    ? 'var(--bg-subtle-primary-hover, #f6f7f9)'
                    : `var(--bg-subtle-${color}-default)`;

            return css`
                color: var(--text-emphasis-${colorSpace}-default);
                border: none;
                outline: 0px solid transparent;
                background: transparent;
                &:hover:not([disabled]) {
                    background: ${hoverBackgroundColor};
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid
                        var(--border-subtle-${colorSpace}-default);
                }
                &:disabled {
                    color: var(--text-emphasis-${colorSpace}-disabled);
                }
            `;
        }
        case BUTTON_VARIANTS_ENUM.LINK: {
            return css`
                color: var(--text-emphasis-brand-default, #0673f9);
                border: none;
                border-radius: var(--corner-radius-4px, 4px);
                outline: 0px solid transparent;
                background: transparent;
                &:hover:not([disabled]) {
                    background: transparent;
                    color: var(--text-emphasis-brand-default, #0673f9);
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid
                        var(--border-subtle-brand-default, #61a8ff);
                }
                &:disabled {
                    color: #94c4ff;
                }
                .grauity-theme-dark &:disabled {
                    color: #004599;
                }
            `;
        }
        default: {
            return css``;
        }
    }
};
