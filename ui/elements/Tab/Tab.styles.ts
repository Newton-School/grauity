import styled, { css } from 'styled-components';

import {
    ICON_POSITION_STYLES_MAPPING,
    TAB_SIZE_MAPPING,
    TAB_SIZE_STYLES_MAPPING,
    TAB_VARIANT_STYLES_MAPPING,
} from './constants';
import {
    TabComponentProps,
    TabContainerProps,
    TabContentProps,
    TabSubtextProps,
} from './types';

export const StyledTab = styled.button<TabComponentProps>`
    display: flex;
    gap: var(--spacing-sp-8, 8px);
    font-weight: var(--font-weight-fw-20, 600);
    color: var(--text-emphasis-secondary-default, #5b6271);
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--border-subtle-primary-default, #e1e5ea);
    cursor: pointer;

    ${({ $iconPosition }) =>
        $iconPosition &&
        css`
            ${ICON_POSITION_STYLES_MAPPING[$iconPosition]}
        `}

    ${({ $isActive }) =>
        $isActive &&
        css`
            background: var(--bg-subtle-primary-default, #fff);
            color: var(--text-emphasis-brand-default, #0673f9);
            border-bottom: 2px solid var(--text-emphasis-brand-default, #0673f9);
        `};

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: var(--text-emphasis-secondary-disabled, #c9cfd9);
            border-bottom: 1px solid
                var(--border-subtle-primary-default, #e1e5ea);
            cursor: not-allowed;
        `};

    ${({ $size }) => css`
        ${TAB_SIZE_MAPPING[$size]}
    `};

    ${({ $variant }) => css`
        ${TAB_VARIANT_STYLES_MAPPING[$variant]}
    `};
`;

export const StyledTabContainer = styled.div<TabContainerProps>`
    color: inherit;
    display: flex;
    gap: var(--spacing-sp-8, 8px);
    align-items: center;
`;

export const StyledTabContent = styled.div<TabContentProps>`
    font-size: var(--font-size-fs-30, 16px);
    font-style: normal;
    font-weight: var(--font-weight-fw-20, 600);
    line-height: var(--line-height-lh-70, 26px);
    letter-spacing: var(--letter-spacing-ls-20, 0.06px);

    ${({ $size }) => css`
        ${TAB_SIZE_STYLES_MAPPING[$size]}
    `};
`;

export const StyledSubtext = styled.span<TabSubtextProps>`
    padding: 0 4px;
    border-radius: 4px;
    background: inherit;
    height: fit-content;

    font-size: var(--font-size-fs-10, 12px);
    font-weight: var(--font-weight-fw-20, 600);
    line-height: var(--line-height-lh-10, 14px);
    letter-spacing: var(--letter-spacing-ls-40, 0.25px);

    ${({ $isActive }) =>
        $isActive &&
        css`
            background: var(--bg-subtle-brand-default, #e5f1ff);
        `}
`;
