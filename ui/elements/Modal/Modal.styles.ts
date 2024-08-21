import styled, { css } from 'styled-components';
import {
    ModalBannerImageProps,
    ModalBodyProps,
    ModalContainerProps,
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
    background-color: "#2b303bcc";
    z-index: 1000;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Mona Sans;
`;

export const StyledModalContainer = styled.div<ModalContainerProps>`
    border: 1px solid var(--border, #e1e5ea);
    background: var(--bg-primary, #fff);
    z-index: 1000;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    width: 500px;
    height: 525px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    @media only screen and (max-width: 600px) {
        padding: 16px;
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
                      padding: 16px;
                  }
              `
            : ''}

    ${({ modalPadding }) =>
        css`
            padding: ${modalPadding};
        `}
`;

export const StyledModalMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 8px;
    flex: 1;

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`;

export const StyledModalBannerImage = styled.img<ModalBannerImageProps>`
    width: 100%;
    border-radius: 8px;
`;

export const StyledModalTitle = styled.div<ModalTitleProps>`
    font-weight: 550;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: var(--text-primary, #16191d);

    ${({ showCloseButton }) =>
        showCloseButton &&
        css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 12px 0;
        `}

    ${({ marginTop, showSubBanner }) =>
        marginTop &&
        css`
            margin-top: ${showSubBanner ? '60px' : '20px'};
        `};

    ${(props) =>
        props.marginTop &&
        css`
            margin-top: ${props.showSubBanner ? '60px' : '20px'};
        `};

    @media only screen and (max-width: 600px) {
        font-size: 16px;
        line-height: 24px;
    }
`;

export const StyledModalDescription = styled.div`
    font-weight: 450;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.2px;
    color: var(--text-secondary, #5b6271);
    margin-top: 12px;
    white-space: pre-line;

    @media only screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

export const StyledModalBody = styled.div<ModalBodyProps>`
    font-weight: 450;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.2px;
    color: var(--text-secondary, #5b6271);
    margin: ${({ modalBodyMargin }) => modalBodyMargin};
    white-space: pre-line;
    width: ${({ width }) => width || '100%'};
    flex: 1;

    @media only screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

export const StyledModalPagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 4px;
    margin-top: auto;
`;

export const StyledModalPaginationItem = styled.div<ModalPaginationItemProps>`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${(active) =>
        active ? 'var(--text-secondary, #5b6271)' : 'var(--border, #e1e5ea)'};
`;

export const StyledModalActionButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
`;

export const StyledModalBannerImageWrapper = styled.div`
    width: 100%;
    position: relative;
`;
