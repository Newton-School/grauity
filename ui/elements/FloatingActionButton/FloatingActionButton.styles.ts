import styled from 'styled-components';

import { StyledFloatingButtonProps } from './types';

export const StyledFloatingButton = styled.div<StyledFloatingButtonProps>`
    position: fixed;
    bottom: ${({ $bottomOffset }) => $bottomOffset};
    right: ${({ $sideOffset }) => $sideOffset};
    width: fit-content;
    height: fit-content;
    z-index: var(--z-index-floating-action-button);

    ${({ $position, $sideOffset }) => {
        if ($position === 'left') {
            return `
                right: auto;
                left: ${$sideOffset};
            `;
        }

        if ($position === 'mid') {
            return `
                right: 50%;
                transform: translateX(50%);
            `;
        }

        return '';
    }}
`;
