import styled, { css } from 'styled-components';

import { ANIMATION_DURATION, DRAG_HANDLE_HEIGHT } from './constants';
import {
    StyledBottomSheetContentProps,
    StyledBottomSheetProps,
    StyledBottomSheetWrapperProps,
    StyledDivProps,
} from './types';

export const StyledBottomSheetWrapper = styled.div<StyledBottomSheetWrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    font-family: var(--font-family, 'Mona Sans');
    width: 100vw;
    height: 100vh;
    background: var(--alpha-overlay, rgba(22, 25, 29, 0.8));
    color: var(--text-primary, #16191d);
    display: flex;
    align-items: end;
    overflow: hidden;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    animation: ${({ $isOpen }) => ($isOpen ? 'fadeIn' : 'fadeOut')}
        ${ANIMATION_DURATION}ms ease forwards;
`;

export const StyledBottomSheet = styled.div<StyledBottomSheetProps>`
    width: 100%;
    height: ${({ $height }) => $height};
    background: var(--bg-primary, #fff);
    border-top-left-radius: var(--spacing-8px, 8px);
    border-top-right-radius: var(--spacing-8px, 8px);
    overflow: hidden;

    position: absolute;
    top: calc(100% + ${({ $translateY }) => $translateY}px);
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

export const StyledDragHandleContainer = styled.div<StyledDivProps>`
    width: 100%;
    height: ${DRAG_HANDLE_HEIGHT}px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const StyledDragHandle = styled.div<StyledDivProps>`
    width: 50px;
    height: 5px;
    background: var(--bg-invert-tertiary, #23282f);
    opacity: 0.7;
    border-radius: 4px;
`;

export const StyledBottomSheetContent = styled.div<StyledBottomSheetContentProps>`
    width: 100%;
    height: calc(100% - ${DRAG_HANDLE_HEIGHT}px);
    oveflow-x: hidden;
    overflow-y: auto;

    ${({ $height }) =>
        $height &&
        css`
            height: ${$height};
        `};
`;
