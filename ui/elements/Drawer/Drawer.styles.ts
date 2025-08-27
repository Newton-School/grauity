import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { StyledDrawerContentProps, StyledDrawerProps } from './types';

export const StyledDrawer = styled(motion.div)<StyledDrawerProps>`
    width: ${({ $width }) => $width};
    height: 100vh;
    background: var(--bg-subtle-primary-default, #ffffff);
    overflow: hidden;
    z-index: var(--z-index-drawer, 1300);

    position: absolute;
    top: 0;
    ${({ $position }) => ($position === 'left' ? 'left: 0;' : 'right: 0;')}

    @supports (height: 100dvh) {
        height: 100dvh;
    }

    ${({ $fullScreen }) =>
        $fullScreen &&
        css`
            width: 100vw;
        `};
`;

export const StyledDrawerContent = styled.div<StyledDrawerContentProps>`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    ${({ $width }) =>
        $width &&
        css`
            width: ${$width};
        `};
`;
