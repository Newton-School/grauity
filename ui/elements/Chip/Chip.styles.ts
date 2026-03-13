import styled, { css } from 'styled-components';

import { CHIP_FONT_SIZE_MAPPING, isChipSize } from './constants';
import { StyledChip, StyledChipTextProps } from './types';

export const StyledChipDiv = styled.div<StyledChip>`
    display: flex;
    padding: var(--spacing-3px, 3px) var(--spacing-6px, 6px);
    justify-content: center;
    align-items: center;
    gap: var(--spacing-4px, 4px);
    height: fit-content;
    width: fit-content;
    border-radius: var(--corner-radius-4px, 4px);
    color: ${({ $baseTextColor }) =>
        $baseTextColor || 'var(--text-emphasis-brand-default, #0673f9)'};
    background: ${({ $baseBackgroundColor }) =>
        $baseBackgroundColor || 'var(--bg-subtle-brand-default, #e5f1ff)'};
    font-family: var(--font-family, 'Mona Sans');
    font-style: normal;
    font-weight: var(--font-weight-semibold, 550);
    line-height: 120%;
    letter-spacing: 0.4px;

    ${({ $size }) =>
        isChipSize($size) &&
        css`
            ${CHIP_FONT_SIZE_MAPPING[$size]}
        `}
    ${({ $withborder, $baseBorderColor, $borderColor }) =>
        $withborder &&
        css`
            border: 1px solid;
            border-color: ${$borderColor || $baseBorderColor || 'transparent'};
        `}
    ${({ $textColor }) =>
        $textColor &&
        css`
            color: ${$textColor};
        `}
    ${({ $backgroundColor }) =>
        $backgroundColor &&
        css`
            background: ${$backgroundColor};
        `}
    ${({ $rounded }) =>
        $rounded &&
        css`
            border-radius: 100px;
        `}
    ${({ $iconPosition }) =>
        $iconPosition === 'right' &&
        css`
            flex-direction: row-reverse;
        `}
`;

export const StyledChipText = styled.span<StyledChipTextProps>`
    --alignment-padding: var(--spacing-2px, 2px);

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    ${({ $iconPosition }) => {
        if ($iconPosition === 'right') {
            return css`
                padding-left: var(--alignment-padding);
            `;
        }
        if ($iconPosition === 'left') {
            return css`
                padding-right: var(--alignment-padding);
            `;
        }
        return '';
    }}
`;
