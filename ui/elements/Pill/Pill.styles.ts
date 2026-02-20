import styled, { css } from 'styled-components';

import Button from '../Button';
import { PILL_SIZE_CSS_STYLES_MAPPING } from './constants';
import {
    StyledPillButtonProps,
    StyledPillContentProps,
    StyledPillCountIndicatorProps,
    StyledPillLabelProps,
} from './types';

export const StyledPillButton = styled(Button)<StyledPillButtonProps>`
    border-radius: var(--corner-radius-cr-10, 9999px);
    padding: 5px 8px;
    min-height: unset;
    height: unset;
    color: var(--text-emphasis-secondary-default);

    ${({ $isActive, $color }) =>
        css`
            ${$isActive &&
            css`
                color: var(--text-emphasis-${$color}-default);
                border: 1px solid var(--border-emphasis-${$color}-default);
                background: var(--bg-subtle-${$color}-default);
            `}
        `}

    ${({ $isReadOnly, $isDisabled }) =>
        css`
            ${($isDisabled || $isReadOnly) &&
            css`
                &:disabled {
                    background: var(--bg-subtle-primary-disabled);
                    border: 1px solid var(--border-subtle-primary-disabled);
                    color: ${$isDisabled
        ? 'var(--text-emphasis-primary-disabled)'
        : 'var(--text-emphasis-primary-default)'};
                }
            `}
        `}

    ${({ $size }) =>
        $size &&
        css`
            ${PILL_SIZE_CSS_STYLES_MAPPING[$size]};
        `}
`;

export const StyledPillContent = styled.span<StyledPillContentProps>`
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
`;

export const StyledPillLabel = styled.span<StyledPillLabelProps>`
    padding: 0 var(--spacing-sp-3, 4px);
`;

export const StyledPillCountIndicator = styled.span<StyledPillCountIndicatorProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin: 0 var(--spacing-sp-3, 4px);
    padding: 0 6px;
    background: var(--bg-subtle-tertiary-default);
    transition: all 0.2s ease-in-out;

    ${({ $height }) =>
        $height &&
        css`
            height: ${$height};
        `}

    ${({ $isActive, $isDisabled, $isReadOnly, $color }) =>
        css`
            ${$isActive &&
            !($isReadOnly || $isDisabled) &&
            css`
                background: var(--bg-emphasis-${$color}-default);
                color: var(--text-emphasis-white-default);
            `}
            ${($isReadOnly || $isDisabled) &&
            css`
                background: var(--bg-subtle-secondary-default);
            `}
        `}
`;
