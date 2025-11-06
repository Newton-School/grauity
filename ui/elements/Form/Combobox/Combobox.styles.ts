import styled, { css } from 'styled-components';
import { ACTION_COLORS } from 'ui/core';

import { StyledComboboxTriggerProps } from './types';

export const StyledComboboxTriggerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-family: var(--font-family);
`;

const focusStyles = ($color: `${ACTION_COLORS}`) => css`
    border: 1px solid var(--border-emphasis-${$color}-default, #0673f9);
    outline: 2px solid var(--border-subtle-${$color}-default, #61a8ff);
    background: var(--bg-subtle-primary-default, #ffffff);
`;

export const StyledComboboxTrigger = styled.div<StyledComboboxTriggerProps>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: auto;
    max-height: unset;
    padding: var(--spacing-8px, 8px) var(--spacing-12px, 12px);
    border-radius: var(--corner-radius-8px, 8px);
    background: var(--bg-subtle-primary-default, #ffffff);
    width: 100%;
    box-sizing: border-box;

    border: 1px solid var(--border-moderate-primary-default, #c9cfd9);

    ${({ $color, $isFocused, $isDisabled }) => css`
        ${$color !== 'brand' &&
        css`
            border: 1px solid var(--border-emphasis-${$color}-default, #d9d9d9);
        `}

        ${!$isDisabled &&
        $color === 'brand' &&
        css`
            &:hover:not([disabled]) {
                background: var(--bg-subtle-primary-hover, #f6f7f9);
            }
        `}
        
        &:focus-within {
            ${focusStyles($color)}
        }

        ${$isFocused && focusStyles($color)}
    `}
`;

export const StyledComboboxTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
`;

const comboboxTextInputStyles = css`
    font-family: var(--font-family);
    font-size: var(--font-size-fs-20, 14px);
    font-weight: var(--font-weight-fw-10, 500);
    line-height: var(--line-height-lh-50, 22px);
    letter-spacing: var(--letter-spacing-ls-30, 0.1px);
`;

export const StyledComboboxTextInput = styled.input`
    flex: 1;
    min-width: 100px;
    width: fill-available;
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
    font-size: inherit;

    color: var(--text-emphasis-primary-default, #16191d);
    ${comboboxTextInputStyles}

    &::placeholder {
        color: var(--text-emphasis-primary-disabled, #8c95a6);
        opacity: 1;
        ${comboboxTextInputStyles}
    }
`;
