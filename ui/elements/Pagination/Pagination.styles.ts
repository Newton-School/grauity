import styled, { css } from 'styled-components';

import { StyledPaginationProps } from './types';

export const StyledGenericFilterWrapper = styled.div`
    margin-top: 28px;
`;

export const StyledPagination = styled.div<StyledPaginationProps>`
    font-size: 14px;
    font-weight: var(--font-weight-medium);
    line-height: 16px;
    letter-spacing: 0.4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    gap: var(--spacing-spacing12, 24px);

    ${({ $justifyContent }) => css`
        justify-content: ${$justifyContent};
    `}

    button {
        min-width: 34px;
        min-height: 34px;
    }

    @media screen and (max-width: 600px) {
        gap: var(--spacing-spacing5, 8px);

        .pagination-button-text {
            display: none;
        }
    }
`;

export const StyledPaginationPages = styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-spacing5, 8px);
`;
