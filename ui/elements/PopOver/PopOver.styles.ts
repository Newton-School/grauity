import styled, { css } from 'styled-components';

import { StyledDivProps, StyledPopOverContainerProps } from './types';

export const StyledPopOverWrapper = styled.div<StyledDivProps>`
    font-family: var(--font-family, 'Mona Sans');
    position: relative;
    width: fit-content;
    height: fit-content;
    // border: 2px solid black;

    --popover-trigger-width: 100%;
    --gap-between-trigger-and-popover: 4px;
    --popover-position-value: calc(
        100% + var(--gap-between-trigger-and-popover)
    );
`;

export const StyledPopOverContainer = styled.div<StyledPopOverContainerProps>`
    position: absolute;
    z-index: 1;
    border: 2px solid red;

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
