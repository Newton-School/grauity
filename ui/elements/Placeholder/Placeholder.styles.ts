import styled, { keyframes } from 'styled-components';

import { StyledPlaceholderProps } from './types';

const loading = keyframes`  
    100% {
        transform: translateX(100%);
    }
`;

export const StyledPlaceholder = styled.div<StyledPlaceholderProps>`
    box-sizing: border-box;
    position: relative;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    border: ${(props) => props.$border};
    border-radius: ${(props) => props.$borderRadius};
    margin: ${(props) => props.$margin};
    background-color: ${(props) =>
        props.$backgroundColor || 'var(--bg-subtle-tertiary-default, #edeff3)'};
    overflow: hidden;
    &::after {
        display: block;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        background: -webkit-gradient(
            linear,
            left top,
            right top,
            from(transparent),
            color-stop(rgba(210, 210, 210, 0.2)),
            to(transparent)
        );
        background: linear-gradient(
            90deg,
            transparent,
            rgba(210, 210, 210, 0.2),
            transparent
        );
        animation: ${loading} 0.8s infinite;
    }
`;
