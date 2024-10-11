import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { StyledDivProps } from '../../../common/types';
import { DRAG_HANDLE_HEIGHT } from './constants';
import { StyledBottomSheetContentProps, StyledBottomSheetProps } from './types';

export const StyledBottomSheet = styled(motion.div)<StyledBottomSheetProps>`
    width: 100%;
    height: ${({ $height }) => $height};
    background: var(--bg-primary, #fff);
    border-top-left-radius: var(--spacing-8px, 8px);
    border-top-right-radius: var(--spacing-8px, 8px);
    overflow: hidden;
    z-index: var(--z-index-bottomsheet, 1300);

    position: absolute;
    top: calc(100% + ${({ $translateY }) => $translateY}px);
    left: 0;

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
    overflow-x: hidden;
    overflow-y: auto;

    ${({ $height }) =>
        $height &&
        css`
            height: ${$height};
        `};
`;
