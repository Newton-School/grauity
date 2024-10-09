import styled, { css } from 'styled-components';

import { StyledDisableBodyScrollProps } from './types';

export const StyledDisableBodyScroll = styled.div<StyledDisableBodyScrollProps>`
    ${({ $enabled }) =>
        $enabled &&
        css`
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10000;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background: transparent;
        `}
`;
