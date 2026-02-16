import styled, { css } from 'styled-components';

import { ThemeType } from '../ThemeScope/types';
import {
    LINK_BUTTON_CONTENT_STYLES_MAPPING,
    LINK_BUTTON_SIZE_STYLES_MAPPING,
} from './constants';
import { StyledLinkButtonContentProps, StyledLinkButtonProps } from './types';

export const StyledLinkButton = styled.button<StyledLinkButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-8px, 8px);
    padding: var(--spacing-0px, 0px);
    border: none;
    border-radius: var(--corner-radius-4px, 4px);
    outline: 0px solid transparent;
    background: transparent;
    color: var(--text-emphasis-brand-default, #0673f9);
    cursor: pointer;
    width: fit-content;
    white-space: nowrap;
    transform-origin: center;
    text-decoration: none;
    transition: color 0.2s ease-in-out, outline 0.2s ease-in-out,
        transform 0.2s ease-in-out;

    ${({ size = 'large' }) => LINK_BUTTON_SIZE_STYLES_MAPPING[size]}

    ${({ $showAnimationOnClick }) =>
        $showAnimationOnClick &&
        css`
            &:active:not(:disabled) {
                transform: scale(0.99);
            }
        `}

    &:focus {
        outline: 0px solid transparent;
    }

    &:focus-visible {
        outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
    }

    &:disabled {
        cursor: not-allowed;
        color: ${({ $scopedTheme }) =>
        $scopedTheme === ThemeType.Dark ? '#004599' : '#94c4ff'};
    }
`;

export const StyledLinkButtonContent = styled.span<StyledLinkButtonContentProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family, 'Mona Sans');
    font-style: normal;
    color: inherit;
    ${({ $size }) => LINK_BUTTON_CONTENT_STYLES_MAPPING[$size]}
`;

export const StyledLinkButtonIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
