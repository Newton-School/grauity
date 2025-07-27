import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { StyledOverlayContentProps, StyledOverlayProps } from './types';

export const StyledOverlay = styled(motion.div)<StyledOverlayProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    @supports (height: 100dvh) {
        height: 100dvh;
        width: 100dvw;
    }
    z-index: var(--z-index-overlay-hoc, 2000);
    background: transparent;
    font-family: var(--font-family, 'Mona Sans');

    ${({ $shouldTintOverlay, $overlayColor }) =>
        $shouldTintOverlay &&
        css`
            background: ${$overlayColor ||
            'var(--alpha-overlay, rgba(22, 25, 29, 0.8))'};
        `}

    ${({ $shouldBlurOverlay }) =>
        $shouldBlurOverlay &&
        css`
            backdrop-filter: var(--backdrop-blur-8px);
        `}
`;

export const StyledOverlayContent = styled.div<StyledOverlayContentProps>`
    width: 100%;
    height: 100%;
    position: relative;
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;
    ${({ $bottom }) =>
        $bottom &&
        css`
            bottom: ${$bottom}px;
        `}

    ${({ $shouldCenterContent }) =>
        $shouldCenterContent &&
        css`
            display: flex;
            justify-content: center;
            align-items: center;
        `}
`;

export const StyledOverlayContentChildren = styled.div`
    width: fit-content;
    height: fit-content;
`;
