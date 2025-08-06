import styled, { css } from 'styled-components';

import {
    ICON_POSITION_STYLES_MAPPING,
    TAB_SIZE_MAPPING,
    TAB_SIZE_STYLES_MAPPING,
    TAB_VARIANT_STYLES_MAPPING,
} from './constants';
import {
    StyledTabComponentProps,
    StyledTabContainerProps,
    StyledTabContentProps,
    StyledTabSubtextProps,
} from './types';

export const StyledTab = styled.button<StyledTabComponentProps>`
    display: flex;
    font-weight: var(--font-weight-semibold);
    color: var(--text-emphasis-secondary-default, #5b6271);
    background: transparent;
    border: none;
    cursor: pointer;

    ${({ $iconPosition }) =>
        $iconPosition &&
        css`
            ${ICON_POSITION_STYLES_MAPPING[$iconPosition]}
        `}

    ${({ $isActive }) =>
        $isActive
            ? css`
                  background: var(--bg-subtle-primary-default, #fff);
                  color: var(--text-emphasis-brand-default, #0673f9);
              `
            : css`
                  &:hover {
                      color: var(--text-emphasis-primary-default, #16191d);
                  }
              `};

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: var(--text-emphasis-secondary-disabled, #c9cfd9);
            cursor: not-allowed;
        `};

    ${({ $size }) => css`
        ${TAB_SIZE_MAPPING[$size]}
    `};

    ${({ $variant }) => css`
        ${TAB_VARIANT_STYLES_MAPPING[$variant]}
    `};

    &:focus-visible {
        outline: 3px solid var(--border-subtle-brand-default);
    }
    &:focus {
        outline: none;
    }

    transition: background 0.3s ease, color 0.3s ease;
`;

export const StyledTabContainer = styled.div<StyledTabContainerProps>`
    color: inherit;
    display: flex;
    align-items: center;
`;

export const StyledTabContent = styled.div<StyledTabContentProps>`
    display: flex;
    gap: var(--spacing-4px, 4px);
    font-size: var(--font-size-fs-30, 16px);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-lh-70, 26px);
    letter-spacing: 0.06px;

    margin: 0 var(--spacing-4px, 4px);

    ${({ $size }) => css`
        ${TAB_SIZE_STYLES_MAPPING[$size]}
    `};
`;

export const StyledSubtext = styled.span<StyledTabSubtextProps>`
    padding: var(--spacing-0px, 0) var(--spacing-4px, 4px);
    border-radius: var(--spacing-4px, 4px);
    background: inherit;
    height: fit-content;

    font-size: var(--font-size-fs-10, 12px);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-lh-10, 14px);
    letter-spacing: var(--letter-spacing-ls-40, 0.25px);

    margin: var(--spacing-0px, 0) var(--spacing-4px, 4px) var(--spacing-0px, 0)
        var(--spacing-0px, 0);

    ${({ $isActive }) =>
        $isActive
            ? css`
                  background: var(--bg-subtle-brand-default, #e5f1ff);
              `
            : css`
                  background: var(--bg-subtle-secondary-default, #f6f7f9);
              `}
`;
