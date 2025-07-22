import styled, { css } from 'styled-components';

import { StyledTagLabelProps } from './types';

export const StyledTagContent = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    width: 100%;
`;

export const StyledTagLabel = styled.span<StyledTagLabelProps>`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    ${({ $shouldTruncateText }) =>
        $shouldTruncateText &&
        css`
            max-width: 200px;
            text-overflow: ellipsis;
            white-space: nowrap;
        `}
`;
