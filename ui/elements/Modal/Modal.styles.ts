import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import {
    ModalBodyMainProps,
    ModalBodyProps,
    ModalContainerProps,
    ModalDescriptionProps,
    ModalPaginationItemProps,
    ModalTitleProps,
} from './types';

export const StyledModal = styled(motion.div)<ModalContainerProps>`
    background: var(--bg-subtle-primary-default, #ffffff);
    z-index: var(--z-index-modal, 1100);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
    border-radius: var(--corner-radius-12px, 12px);
    padding: var(--spacing-20px, 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-16px, 16px);
    box-sizing: border-box;

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
    ${({ minWidth }) =>
        minWidth
            ? css`
                  min-width: ${minWidth};
              `
            : ''}
    ${({ maxHeight }) =>
        maxHeight
            ? css`
                  max-height: ${maxHeight};
              `
            : ''}
    ${({ maxWidth }) =>
        maxWidth
            ? css`
                  max-width: ${maxWidth};
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

            @media only screen and (max-width: 600px) {
                padding: ${modalPadding};
            }
        `}

    ${({ $border }) =>
        $border &&
        css`
            border: ${$border};
        `}
`;

export const StyledModalMain = styled.div<ModalBodyMainProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    gap: var(--spacing-12px, 12px);

    ${({ $overflow }) =>
        $overflow &&
        css`
            overflow: ${$overflow};
        `}

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`;

export const StyledModalDivider = styled.div`
    width: 100%;
    height: var(--spacing-1px, 1px);
    background: var(--border-subtle-primary-default, #e1e5ea);
`;

export const StyledModalTitle = styled.h2<ModalTitleProps>`
    color: var(--text-emphasis-primary-default, #16191d);
    font-weight: var(--font-weight-semibold, 600);
    font-size: var(--font-size-24px, 24px);
    line-height: var(--spacing-32px, 32px);
    margin: var(--spacing-0px, 0px) auto;
    text-align: center;

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
    color: var(--text-emphasis-secondary-default, #5b6271);
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
    color: var(--text-emphasis-secondary-default, #5b6271);
    margin: ${({ modalBodyMargin }) => modalBodyMargin && modalBodyMargin};
    white-space: pre-line;
    width: 100%;
    flex: 1;

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
    background: var(--border-subtle-primary-default, #e1e5ea);
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    ${({ active }) =>
        active
            ? 'background: var(--text-emphasis-secondary-default, #5b6271);'
            : '&:hover {background: var(--text-emphasis-primary-disabled, #8c95a6);}'}
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
`;

export const StyledModalBanner = styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`;
