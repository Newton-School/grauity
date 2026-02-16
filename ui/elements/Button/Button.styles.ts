import styled, { css } from 'styled-components';

import {
    BUTTON_LINK_CONTENT_STYLES_MAPPING,
    BUTTON_LINK_SIZE_STYLES_MAPPING,
    BUTTON_SIZE_STYLES_MAPPING,
    ICON_BUTTON_SIZE_STYLES_MAPPING,
} from './constants';
import { ButtonComponentProps, ButtonContentProps } from './types';
import { getButtonStyles } from './utils';

export const StyledButton = styled.button<ButtonComponentProps>`
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
    transform-origin: center;

    ${({ variant, $color }) =>
        variant && getButtonStyles({ variant, color: $color })}

    ${({ $showAnimationOnClick, variant }) =>
        $showAnimationOnClick &&
        css`
            &:active:not([disabled]) {
                transform: scale(${variant === 'link' ? 0.99 : 0.95});
            }
        `}

    &:disabled {
        cursor: not-allowed;
    }

    ${({ size, isIconButton, variant }) => {
        if (!isIconButton) {
            const buttonSizeStyles =
                variant === 'link'
                    ? BUTTON_LINK_SIZE_STYLES_MAPPING[size]
                    : BUTTON_SIZE_STYLES_MAPPING[size];

            return css`
                ${buttonSizeStyles}
            `;
        }

        return css`
            ${ICON_BUTTON_SIZE_STYLES_MAPPING[size]}
        `;
    }}

    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `}

    ${({ isLoading }) =>
        isLoading &&
        css`
            cursor: progress;
        `}

    ${({ iconPosition, variant }) =>
        iconPosition === 'right' &&
        variant !== 'link' &&
        css`
            flex-direction: row-reverse;
        `}

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border 0.2s ease-in-out, outline 0.2s ease-in-out, transform 0.2s ease-in-out;
`;

export const StyledButtonContent = styled.div<ButtonContentProps>`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
    font-family: var(--font-family, 'Mona Sans');
    color: inherit;
    max-width: 100%;

    ${({ $variant, $size }) =>
        $variant === 'link'
            ? css`
                  ${BUTTON_LINK_CONTENT_STYLES_MAPPING[$size]}
              `
            : css`
                  font-size: var(--font-size-14px, 14px);
                  font-weight: var(--font-weight-semibold, 600);
                  letter-spacing: 0.4px;
              `}

    ${({ $variant, $iconPosition }) => {
        if ($variant === 'link') {
            return '';
        }

        if ($iconPosition === 'right') {
            return css`
                padding-left: var(--spacing-8px, 8px);
            `;
        }
        if ($iconPosition === 'left') {
            return css`
                padding-right: var(--spacing-8px, 8px);
            `;
        }
        return '';
    }}
`;
