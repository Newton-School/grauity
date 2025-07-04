import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { StyledDrawerProps } from './types';

export const StyledDrawer = styled(motion.div)<StyledDrawerProps>`
    position: fixed;
    top: 0;
    left: 0;
    background: var(--bg-primary, #fff);
    z-index: var(--z-index-drawer, 1250);
    display: flex;
    flex-direction: column;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
    font-family: var(--font-family, 'Mona Sans');

    ${({ $side, $width, $fullScreen }) =>
        ($side === 'left' || $side === 'right') &&
        css`
            width: ${$fullScreen ? '100vw' : $width || '400px'};
            height: 100vh;
            @supports (height: 100dvh) {
                height: 100dvh;
            }
        `}

    ${({ $side, $height, $fullScreen }) =>
        ($side === 'top' || $side === 'bottom') &&
        css`
            height: ${$fullScreen ? '100vh' : $height || '50%'};
            width: 100vw;
            @supports (height: 100dvh) {
                height: ${$fullScreen ? '100dvh' : $height || '50%'};
                width: 100dvw;
            }
        `}

    ${({ $side }) =>
        $side === 'right' &&
        css`
            right: 0;
            left: auto;
        `}
    ${({ $side }) =>
        $side === 'left' &&
        css`
            left: 0;
            right: auto;
        `}
    ${({ $side }) =>
        $side === 'bottom' &&
        css`
            bottom: 0;
            top: auto;
        `}
`;

export const StyledDrawerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-16px, 16px);
    border-bottom: 1px solid var(--border, #e1e5ea);
`;

export const StyledDrawerTitle = styled.h2`
    font-size: var(--font-size-20px, 20px);
    line-height: var(--spacing-28px, 28px);
    margin: 0;
    color: var(--text-primary, #16191d);
`;

export const StyledDrawerSubtitle = styled.p`
    font-size: var(--font-size-14px, 14px);
    line-height: var(--spacing-20px, 20px);
    margin: var(--spacing-4px, 4px) 0 0 0;
    color: var(--text-secondary, #5b6271);
`;

export const StyledDrawerContent = styled.div`
    padding: var(--spacing-16px, 16px);
    overflow-y: auto;
    flex: 1;
`;
