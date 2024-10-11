import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { StyledPopOverContainerProps } from './types';

export const StyledPopOverContainer = styled(
    motion.div
)<StyledPopOverContainerProps>`
    font-family: var(--font-family, 'Mona Sans');
    z-index: var(--z-index-popover, 1200);
    position: absolute;
    top: 0;
    left: 0;

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

    ${({ $offset }) =>
        !$offset &&
        css`
            z-index: -10;
        `}
`;
