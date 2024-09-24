import styled, { css } from 'styled-components';

import { StyledPopOverContainerProps } from './types';

export const StyledPopOverContainer = styled.div<StyledPopOverContainerProps>`
    position: absolute;
    z-index: 1;
    border: 2px solid red;
    font-family: var(--font-family, 'Mona Sans');

    ${({ $offset }) =>
        typeof $offset?.top === 'number' &&
        css`
            top: ${$offset?.top}px;
        `}
    ${({ $offset }) =>
        typeof $offset?.left === 'number' &&
        css`
            left: ${$offset?.left}px;
        `}
`;
