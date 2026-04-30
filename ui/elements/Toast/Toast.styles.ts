import styled, { css } from 'styled-components';

import { TOAST_DEVICE_STYLES_MAPPING, TOAST_TYPES_ENUM } from './constants';
import {
    StyledToastActionsProps,
    StyledToastBodyProps,
    StyledToastContainerProps,
    StyledToastContentProps,
    StyledToastImageProps,
    StyledToastLeadingProps,
    StyledToastSubtitleProps,
    StyledToastTitleProps,
} from './types';
import { getToastColors } from './utils';

const simpleContainerStyles = css<StyledToastContainerProps>`
    display: flex;
    align-items: center;

    border-radius: ${({ $device }) =>
        TOAST_DEVICE_STYLES_MAPPING[$device].borderRadius};
    padding: ${({ $device }) => TOAST_DEVICE_STYLES_MAPPING[$device].padding};
    gap: ${({ $device }) => TOAST_DEVICE_STYLES_MAPPING[$device].gap};
    min-height: ${({ $device }) =>
        TOAST_DEVICE_STYLES_MAPPING[$device].minHeight};
    box-shadow: ${({ $device }) =>
        TOAST_DEVICE_STYLES_MAPPING[$device].boxShadow};

    width: 440px;
    height: 48px;
    min-width: 440px;
    min-height: 48px;

    @media only screen and (max-width: 600px) {
        width: 100%;
        height: 48px;
        min-width: 328px;
        min-height: 48px;
        max-width: 100%;
    }

    width: ${({ $device }) => ($device === 'mobile' ? '100%' : '440px')};
    min-width: ${({ $device }) => ($device === 'desktop' ? '440px' : 'auto')};
`;

const richContainerStyles = css<StyledToastContainerProps>`
    display: flex;
    flex-direction: ${({ $device }) =>
        $device === 'mobile' ? 'column' : 'row'};
    align-items: ${({ $device }) =>
        $device === 'mobile' ? 'stretch' : 'center'};
    justify-content: space-between;
    gap: ${({ $device }) =>
        $device === 'mobile'
            ? 'var(--spacing-sp-5, 8px)'
            : 'var(--spacing-sp-7, 12px)'};

    border-radius: var(--corner-radius-cr-5, 12px);
    padding: ${({ $device }) =>
        $device === 'mobile'
            ? 'var(--spacing-sp-7, 12px)'
            : 'var(--spacing-sp-7, 12px) var(--spacing-sp-8, 16px)'};
    overflow: hidden;
    position: relative;

    box-shadow: 0px 75px 21px 0px rgba(0, 0, 0, 0),
        0px 48px 19px 0px rgba(0, 0, 0, 0.01),
        0px 27px 16px 0px rgba(0, 0, 0, 0.02),
        0px 12px 12px 0px rgba(0, 0, 0, 0.03),
        0px 3px 7px 0px rgba(0, 0, 0, 0.04);

    /* Locked dimensions per spec: desktop = 800x76, mobile = 336 wide */
    width: ${({ $device }) => ($device === 'mobile' ? '336px' : '800px')};
    height: ${({ $device }) => ($device === 'desktop' ? '76px' : 'auto')};
    min-width: ${({ $device }) => ($device === 'mobile' ? '336px' : '800px')};
    max-width: ${({ $device }) => ($device === 'mobile' ? '336px' : '800px')};

    @media only screen and (max-width: 600px) {
        width: 336px;
        max-width: 100%;
        min-width: 0;
    }
`;

export const StyledToastContainer = styled.div<StyledToastContainerProps>`
    box-sizing: border-box;
    background-color: ${({ $color, $variant }) =>
        getToastColors($color, $variant).backgroundColor};
    border: 1px solid
        ${({ $color, $variant }) =>
        getToastColors($color, $variant).borderColor};
    color: ${({ $color, $variant }) =>
        getToastColors($color, $variant).textColor};

    max-width: ${({ $maxWidth }) => $maxWidth};

    ${({ $type }) =>
        $type === TOAST_TYPES_ENUM.RICH
            ? richContainerStyles
            : simpleContainerStyles};
`;

export const StyledToastContent = styled.div<StyledToastContentProps>`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    padding: ${({ $type }) =>
        $type === TOAST_TYPES_ENUM.RICH ? '0' : '0 var(--spacing-sp-7, 12px)'};
    gap: ${({ $type }) =>
        $type === TOAST_TYPES_ENUM.RICH ? 'var(--spacing-sp-2, 2px)' : '0'};
`;

export const StyledToastTitle = styled.div<StyledToastTitleProps>`
    font-family: 'Mona Sans', sans-serif;
    color: inherit;
    margin: 0;
    max-width: 100%;

    ${({ $type }) =>
        $type === TOAST_TYPES_ENUM.RICH
            ? css`
                  font-size: var(--font-size-fs-30, 16px);
                  font-weight: var(--font-weight-fw-20, 600);
                  line-height: var(--line-height-lh-70, 26px);
                  letter-spacing: var(--letter-spacing-ls-20, 0.06px);
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
              `
            : css`
                  font-size: var(--font-size-fs-20, 14px);
                  font-weight: var(--font-weight-fw-20, 600);
                  line-height: var(--line-height-lh-50, 22px);
                  letter-spacing: var(--letter-spacing-ls-10, 0.016em);
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
              `};
`;

export const StyledToastSubtitle = styled.div<StyledToastSubtitleProps>`
    font-family: 'Mona Sans', sans-serif;
    font-size: var(--font-size-fs-20, 14px);
    font-weight: var(--font-weight-fw-10, 500);
    line-height: var(--line-height-lh-50, 22px);
    letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    color: inherit;
    opacity: 0.72;
    margin: 0;
    width: 100%;
    /* Always single-line; clip with ellipsis when content overflows */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledToastActions = styled.div<StyledToastActionsProps>`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    ${({ $type, $device }) =>
        $type === TOAST_TYPES_ENUM.RICH
            ? css`
                  gap: ${$device === 'mobile'
        ? 'var(--spacing-sp-5, 8px)'
        : 'var(--spacing-sp-7, 12px)'};
                  width: ${$device === 'mobile' ? '100%' : 'auto'};
                  align-items: ${$device === 'mobile' ? 'stretch' : 'center'};
              `
            : css`
                  gap: 0;
                  margin-left: auto;
                  padding-right: 0;
              `};
`;

export const StyledToastLeading = styled.div<StyledToastLeadingProps>`
    display: flex;
    align-items: ${({ $device }) =>
        $device === 'mobile' ? 'flex-start' : 'center'};
    gap: var(--spacing-sp-7, 12px);
    flex: 1;
    min-width: 0;
`;

export const StyledToastImage = styled.div<StyledToastImageProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;
    overflow: hidden;
    flex-shrink: 0;
`;

export const StyledToastBody = styled.div<StyledToastBodyProps>`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sp-2, 2px);
    flex: 1;
    min-width: 0;
    padding-right: ${({ $device }) =>
        $device === 'mobile' ? 'var(--spacing-sp-9, 28px)' : '0'};
`;

export const StyledToastCloseAbsolute = styled.div`
    position: absolute;
    top: var(--spacing-sp-3, 4px);
    right: var(--spacing-sp-3, 4px);
`;
