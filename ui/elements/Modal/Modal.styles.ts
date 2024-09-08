import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import {
    ModalBodyMainProps,
    ModalBodyProps,
    ModalContainerProps,
    ModalDescriptionProps,
    ModalPaginationItemProps,
    ModalTitleProps,
    ModalWrapperProps,
} from './types';

export const StyledModalWrapper = styled.div<ModalWrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--alpha-overlay, rgba(22, 25, 29, 0.8));
    z-index: 1000;
    padding: var(--spacing-16px, 16px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-family, 'Mona Sans');

    ${({ blurBackground }) =>
        blurBackground &&
        css`
            backdrop-filter: var(--backdrop-blur-8px);
        `}
`;

export const StyledModal = styled.div<ModalContainerProps>`
    border: var(--spacing-1px, 1px) solid var(--border, #e1e5ea);
    background: var(--bg-primary, #fff);
    z-index: 1000;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
    border-radius: var(--corner-radius-12px, 12px);
    width: 500px;
    min-width: 400px;
    height: 525px;
    padding: var(--spacing-20px, 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-16px, 16px);

    @media only screen and (max-width: 600px) {
        padding: var(--spacing-18px, 18px);
    }

    ${({ width }) =>
        width
            ? css`
                  width: ${width};
              `
            : ''}
    ${({ height }) =>
        height
            ? css`
                  height: ${height};
              `
            : ''}
    ${({ minHeight }) =>
        minHeight
            ? css`
                  min-height: ${minHeight};
              `
            : ''}
    ${({ mobileBottomFullWidth }) =>
        mobileBottomFullWidth
            ? css`
                  @media only screen and (max-width: 600px) {
                      position: fixed;
                      bottom: 0;
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                      max-width: unset;
                      width: 100%;
                      padding: var(--spacing-16px, 16px);
                  }
              `
            : ''}

    ${({ modalPadding }) =>
        css`
            padding: ${modalPadding};
        `}
`;

export const StyledModalMain = styled.div<ModalBodyMainProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    gap: var(--spacing-12px, 12px);

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`;

export const StyledModalDivider = styled.div`
    width: 100%;
    height: var(--spacing-1px, 1px);
    background: var(--border, #e1e5ea);
`;

export const StyledModalTitle = styled.h2<ModalTitleProps>`
    color: var(--text-primary, #16191d);
    font-weight: var(--font-weight-semibold, 600);
    font-size: var(--font-size-24px, 24px);
    line-height: var(--spacing-32px, 32px);
    margin: var(--spacing-0px, 0px) auto;
    text-align: center;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }

    @media only screen and (max-width: 600px) {
        font-size: var(--font-size-16px, 16px);
        line-height: var(--spacing-24px, 24px);
    }
`;

export const StyledModalDescription = styled.div<ModalDescriptionProps>`
    font-weight: var(--font-weight-450, 450);
    font-size: var(--font-size-16px, 16px);
    line-height: var(--spacing-28px, 28px);
    text-align: center;
    letter-spacing: 0.2px;
    color: var(--text-secondary, #5b6271);
    white-space: pre-line;

    @media only screen and (max-width: 600px) {
        font-size: var(--font-size-14px, 14px);
        line-height: var(--spacing-24px, 24px);
    }
`;

export const StyledModalBody = styled.div<ModalBodyProps>`
    font-weight: var(--font-weight-450, 450);
    font-size: var(--font-size-16px, 16px);
    line-height: var(--spacing-28px, 28px);
    text-align: center;
    letter-spacing: 0.2px;
    color: var(--text-secondary, #5b6271);
    margin: ${({ modalBodyMargin }) => modalBodyMargin && modalBodyMargin};
    white-space: pre-line;
    width: 100%;
    flex: 1;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }

    @media only screen and (max-width: 600px) {
        font-size: var(--font-size-14px, 14px);
        line-height: var(--spacing-24px, 24px);
    }
`;

export const StyledModalPaginatedActions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    gap: var(--spacing-12px, 12px);
`;

export const StyledModalPagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-4px, 4px);
    margin-top: auto;
`;

export const StyledModalPaginationItem = styled.div<ModalPaginationItemProps>`
    width: 6px;
    height: 6px;
    border-radius: var(--corner-radius-50percent, 50%);
    background: var(--border, #e1e5ea);
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    ${({ active }) =>
        active
            ? 'background: var(--text-secondary, #5b6271);'
            : '&:hover {background: var(--text-disabled, #8C95A6);}'}
`;

export const StyledModalAction = styled.div<{
    justifyContent?: string;
    children: ReactNode;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({ justifyContent }) =>
        justifyContent &&
        css`
            justify-content: ${justifyContent};
        `}

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`;

export const StyledModalBanner = styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`;
