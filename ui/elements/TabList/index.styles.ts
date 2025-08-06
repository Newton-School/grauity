import styled, { css } from 'styled-components';

import { TAB_LIST_VARIANT_STYLES_MAPPING } from './constants';
import { StyledTabListProps } from './types';

export const StyledTabList = styled.div<StyledTabListProps>`
    display: flex;
    position: relative;

    ${({ $variant }) => css`
        ${TAB_LIST_VARIANT_STYLES_MAPPING[$variant]}
    `};

    &:focus-visible {
        outline: 3px solid var(--border-subtle-brand-default);
    }
`;

export const StyledTabListIndicator = styled.span`
    position: absolute;
    bottom: -1px;
    height: 2px;
    background-color: var(--text-emphasis-brand-default, #0673f9);
    transition: left 0.3s ease, width 0.3s ease;
    z-index: 1;
`;
