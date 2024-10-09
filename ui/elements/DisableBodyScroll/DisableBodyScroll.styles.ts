import styled, { css } from 'styled-components';

import { StyledDisableBodyScrollProps } from './types';

export const StyledDisableBodyScroll = styled.div<StyledDisableBodyScrollProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    background: transparent;

    ${({ $enabled }) =>
        $enabled &&
        css`
            width: 100vw;
            height: 100vh;
            z-index: 10000;
        `}
`;
