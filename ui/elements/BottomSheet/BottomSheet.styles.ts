import styled, { css } from 'styled-components';

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

    ${({ $fullScreen }) =>
        $fullScreen &&
        css`
            height: 100%;
            border-radius: 0;
        `}
`;
