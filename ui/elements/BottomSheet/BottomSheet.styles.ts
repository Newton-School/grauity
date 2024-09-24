import styled, { css } from 'styled-components';

import { ANIMATION_DURATION } from './constants';
import { StyledBottomSheetProps, StyledDivProps } from './types';

export const StyledBottomSheetWrapper = styled.div<StyledDivProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    font-family: var(--font-family, 'Mona Sans');
    width: 100vw;
    height: 100vh;
    background: var(--alpha-overlay, rgba(22, 25, 29, 0.8));
    display: flex;
    align-items: end;
    overflow: hidden;
`;

export const StyledBottomSheet = styled.div<StyledBottomSheetProps>`
    width: 100%;
    height: ${({ $height }) => $height};
    background: var(--bg-primary, #fff);
    border-top-left-radius: var(--spacing-8px, 8px);
    border-top-right-radius: var(--spacing-8px, 8px);
    overflow-x: hidden;
    overflow-y: auto;

    position: absolute;
    top: 100%;
    left: 0;

    @keyframes slideIn {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
        }
    }

    @keyframes slideOut {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }

    animation: ${({ $isOpen }) => ($isOpen ? 'slideIn' : 'slideOut')}
        ${ANIMATION_DURATION}ms ease forwards;

    ${({ $fullScreen }) =>
        $fullScreen &&
        css`
            height: 100%;
            border-radius: 0;
        `};
`;
