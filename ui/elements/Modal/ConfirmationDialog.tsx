import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { ConfirmationDialogProps } from './types';
import { BUTTON_VARIANTS_ENUM } from '../Button';
import { StyledModalActionButtonContainer, StyledModalBannerImage, StyledModalBannerImageWrapper, StyledModalBody, StyledModalContainer, StyledModalDescription, StyledModalMain, StyledModalPagination, StyledModalPaginationItem, StyledModalTitle, StyledModalTitleText, StyledModalWrapper } from './Modal.styles';
import useClickAway from '../../../hooks/useClickAway';

const ConfirmationDialog = ({
    cancelText,
    confirmText,
    onCancel,
    onConfirm,
    banner,
    title,
    description,
    body,
    cancelButtonVariant,
    confirmButtonVariant,
    shouldHideOnClickAway,
}: ConfirmationDialogProps) => {
    const hasBanner = !!banner?.render || !!banner?.image;
    const hasBody = !!body?.text || !!body?.image || !!body?.render;
    
    const modalRef = React.useRef(null);

    useClickAway(modalRef, () => {
        if (shouldHideOnClickAway) {
            onCancel();
        }
    });

    return(
        <StyledModalWrapper>
            <StyledModalContainer
                onClick={(e: Event) => e.stopPropagation()}
                width='auto'
                height='auto'
                ref={modalRef}
            >
                <StyledModalMain>
                    {hasBanner &&
                (banner.render ? (
                    banner.render()
                ) : (
                    <StyledModalBannerImageWrapper>
                        <StyledModalBannerImage src={banner.image} />
                    </StyledModalBannerImageWrapper>
                ))}

                    <StyledModalTitle marginTop={hasBanner}>
                        <StyledModalTitleText>{title?.text}</StyledModalTitleText>
                    </StyledModalTitle>

                    <StyledModalDescription>
                        {description}
                    </StyledModalDescription>

                    {hasBody && (
                        <StyledModalBody
                            width={body.width || ''}
                        >
                            {body.render && body.render()}
                            {!body.render && body.image && (
                                <StyledModalBannerImageWrapper>
                                    <StyledModalBannerImage src={body.image} />
                                </StyledModalBannerImageWrapper>
                            )}
                            {!body.render && !body.image && body.text}
                        </StyledModalBody>
                    )}
                </StyledModalMain>

                <StyledModalActionButtonContainer>
                    <Button
                        variant={cancelButtonVariant || BUTTON_VARIANTS_ENUM.DANGER}
                        fullWidth
                        onClick={onCancel}
                    >
                        {cancelText}
                    </Button>
                    <Button
                        variant={confirmButtonVariant || BUTTON_VARIANTS_ENUM.SUCCESS}
                        fullWidth
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </Button>
                </StyledModalActionButtonContainer>
            </StyledModalContainer>
        </StyledModalWrapper>
    );};

ConfirmationDialog.propTypes = {
    cancelText: PropTypes.string,
    confirmText: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    banner: PropTypes.shape({
        image: PropTypes.string,
        render: PropTypes.func,
    }),
    title: PropTypes.shape({
        text: PropTypes.string,
    }),
    description: PropTypes.string,
    body: PropTypes.shape({
        text: PropTypes.string,
        image: PropTypes.string,
        render: PropTypes.func,
        width: PropTypes.string,
    }),
    cancelButtonVariant: PropTypes.string,
    confirmButtonVariant: PropTypes.string,
    shouldHideOnClickAway: PropTypes.bool,
};

ConfirmationDialog.defaultProps = {
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    banner: null,
    title: {
        text: 'Are you sure?',
    },
    description: 'Please confirm your action.',
    body: null,
    onCancel: () => {},
    onConfirm: () => {},
    cancelButtonVariant: BUTTON_VARIANTS_ENUM.DANGER,
    confirmButtonVariant: BUTTON_VARIANTS_ENUM.SUCCESS,
    shouldHideOnClickAway: false,
};

export default ConfirmationDialog;
