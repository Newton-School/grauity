import styled, { css } from 'styled-components';

import {
    BUTTON_SIZE_STYLES_MAPPING,
    BUTTON_VARIANT_STYLES_MAPPING,
    ICON_BUTTON_SIZE_STYLES_MAPPING,
} from './constants';
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

export const StyledButtonContent = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
    font-size: var(--font-size-14px, 14px);
    font-weight: var(--font-weight-semibold, 600);
    line-height: 160%;
    letter-spacing: 0.4px;
`;
