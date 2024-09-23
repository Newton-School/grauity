import styled from 'styled-components';

import { StyledDivProps, StyledPopOverContainerProps } from './types';

export const StyledPopOverWrapper = styled.div<StyledDivProps>`
    font-family: var(--font-family, 'Mona Sans');
    position: relative;
    width: fit-content;

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

    ${({ $direction }) => {
        switch ($direction) {
            case 'top':
                return 'bottom: var(--popover-position-value); left: 50%; transform: translateX(-50%);';
            case 'topLeft':
                return 'bottom: var(--popover-position-value); right: var(--popover-position-value);';
            case 'topRight':
                return 'bottom: var(--popover-position-value); left: var(--popover-position-value);';
            case 'bottom':
                return 'top: var(--popover-position-value); left: 50%; transform: translateX(-50%);';
            case 'bottomLeft':
                return 'top: var(--popover-position-value); right: var(--popover-position-value);';
            case 'bottomRight':
                return 'top: var(--popover-position-value); left: var(--popover-position-value);';
            case 'left':
                return 'right: var(--popover-position-value); top: 50%; transform: translateY(-50%);';
            case 'right':
                return 'left: var(--popover-position-value); top: 50%; transform: translateY(-50%);';
            default:
                return '';
        }
    }}
`;
