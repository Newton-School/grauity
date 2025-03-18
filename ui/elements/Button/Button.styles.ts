import styled, { css } from 'styled-components';

import {
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

    ${({ $showAnimationOnClick }) =>
        $showAnimationOnClick &&
        css`
            &:active:not([disabled]) {
                transform: scale(0.95);
            }
        `}

    &:disabled {
        cursor: not-allowed;
    }

    ${({ size, isIconButton }) => {
        if (!isIconButton) {
            return css`
                ${BUTTON_SIZE_STYLES_MAPPING[size]}
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

    ${({ iconPosition }) =>
        iconPosition === 'right' &&
        css`
            flex-direction: row-reverse;
        `}

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border 0.2s ease-in-out, outline 0.2s ease-in-out, transform 0.2s ease-in-out;
`;

export const StyledButtonContent = styled.div<ButtonContentProps>`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
    font-size: var(--font-size-14px, 14px);
    font-weight: var(--font-weight-semibold, 600);
    letter-spacing: 0.4px;
    max-width: 100%;

    ${({ $iconPosition }) => {
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
