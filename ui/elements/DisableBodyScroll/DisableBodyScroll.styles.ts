import styled, { css } from 'styled-components';

import { StyledDisableBodyScrollProps } from './types';

export const StyledDisableBodyScroll = styled.div<StyledDisableBodyScrollProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: var(--z-index-disable-body-scroll-hoc, 2000);
    background: transparent;

    ${({ $enabled }) =>
        $enabled &&
        css`
            width: 100vw;
            height: 100vh;
        `}
`;
