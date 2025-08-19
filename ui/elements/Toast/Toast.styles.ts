import styled from 'styled-components';

import { TOAST_DEVICE_STYLES } from './constants';
import {
    ToastActionsProps,
    ToastContainerProps,
    ToastContentProps,
    ToastTitleProps,
} from './types';
import { getToastColors } from './utils';

export const StyledToastContainer = styled.div<ToastContainerProps>`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: ${({ $type, $emphasis }) =>
        getToastColors($type, $emphasis).backgroundColor};
    border: 1px solid
        ${({ $type, $emphasis }) =>
        getToastColors($type, $emphasis).borderColor};
    color: ${({ $type, $emphasis }) =>
        getToastColors($type, $emphasis).textColor};

    /* Device-specific styles */
    border-radius: ${({ $device }) =>
        TOAST_DEVICE_STYLES[$device].borderRadius};
    padding: ${({ $device }) => TOAST_DEVICE_STYLES[$device].padding};
    gap: ${({ $device }) => TOAST_DEVICE_STYLES[$device].gap};
    min-height: ${({ $device }) => TOAST_DEVICE_STYLES[$device].minHeight};
    box-shadow: ${({ $device }) => TOAST_DEVICE_STYLES[$device].boxShadow};

    width: 440px;
    height: 48px;
    min-width: 440px;
    min-height: 48px;

    /* Fixed dimensions for mobile */
    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 48px;
        min-width: 328px;
        min-height: 48px;
        max-width: 100%;
    }

    /* Positioning */
    position: ${({ $position }) => $position};
    ${({ $top }) => $top && `top: ${$top};`}
    ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
    ${({ $left }) => $left && `left: ${$left};`}
    ${({ $right }) => $right && `right: ${$right};`}
    
    /* Size constraints */
    max-width: ${({ $maxWidth }) => $maxWidth};
    width: ${({ $device }) => ($device === 'mobile' ? '100%' : '440px')};
    min-width: ${({ $device }) => ($device === 'desktop' ? '440px' : 'auto')};
`;

export const StyledToastContent = styled.div<ToastContentProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0; /* Allow text to wrap */
    padding: 0 var(--spacing-sp-7, 12px);
`;

export const StyledToastTitle = styled.div<ToastTitleProps>`
    font-family: 'Mona Sans', sans-serif;
    font-size: var(--font-size-fs-20, 14px);
    font-weight: var(--font-weight-fw-20, 600);
    line-height: var(--line-height-lh-50, 22px);
    letter-spacing: var(--letter-spacing-ls-10, 0.016em);
    color: inherit;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
`;

export const StyledToastActions = styled.div<ToastActionsProps>`
    display: flex;
    align-items: center;
    gap: 0;
    margin-left: auto;
    flex-shrink: 0;
    padding-right: 0;
`;
