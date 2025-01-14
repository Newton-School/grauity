import styled, { css } from 'styled-components';

import {
    BUTTON_SIZE_STYLES_MAPPING,
    BUTTON_VARIANT_STYLES_MAPPING,
    ICON_BUTTON_SIZE_STYLES_MAPPING,
} from './constants';
import { ButtonComponentProps, ButtonContentProps } from './types';

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

    ${({ variant }) =>
        variant &&
        css`
            ${BUTTON_VARIANT_STYLES_MAPPING[variant]}
        `}

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

    ${({ disabled }) =>
        disabled &&
        css`
            background: var(--bg-disabled, #edeff3);
            color: var(--text-disabled, #8c95a6);
            border: none;
            outline: none;
            cursor: not-allowed;

            &:hover {
                background: var(--bg-disabled, #edeff3);
                color: var(--text-disabled, #8c95a6);
            }
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

    ${({ animateOnPress }) =>
        animateOnPress &&
        css`
            &:active {
                transform: scale(0.95);
            }
        `}
    

    transition: all 0.2s ease-in-out;
`;

export const StyledButtonContent = styled.div<ButtonContentProps>`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
    font-size: var(--font-size-14px, 14px);
    font-weight: var(--font-weight-semibold, 600);
    line-height: 160%;
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
