import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { ConfirmationDialogProps } from './types';
import { BUTTON_VARIANTS_ENUM } from '../Button';
import { StyledModalActionButtonContainer, StyledModalBannerImage, StyledModalBannerImageWrapper, StyledModalBody, StyledModalContainer, StyledModalDescription, StyledModalMain, StyledModalPagination, StyledModalPaginationItem, StyledModalTitle, StyledModalTitleText, StyledModalWrapper } from './Modal.styles';

const ConfirmationDialog = ({
    cancelText,
    confirmText,
    onCancel,
    onConfirm,
    banner,
    title,
    description,
    body,
}: ConfirmationDialogProps) => (
    <StyledModalWrapper>
        <StyledModalContainer
            onClick={(e: Event) => e.stopPropagation()}
            height='auto'
        >
            <StyledModalMain>
                {banner?.hasBanner &&
                (!banner.isCustom ? (
                    <StyledModalBannerImageWrapper>
                        <StyledModalBannerImage src={banner.image} />
                    </StyledModalBannerImageWrapper>
                ) : (
                    banner.render()
                ))}

                <StyledModalTitle marginTop={banner?.hasBanner}>
                    <StyledModalTitleText>{title?.text}</StyledModalTitleText>
                </StyledModalTitle>

                <StyledModalDescription>
                    {description}
                </StyledModalDescription>

                {body?.hasBody && (
                    <StyledModalBody
                        width={body.width || ''}
                    >
                        {!body.isCustom ? body.text : body.render()}
                    </StyledModalBody>
                )}
            </StyledModalMain>

            <StyledModalActionButtonContainer>
                <Button
                    variant={BUTTON_VARIANTS_ENUM.DANGER}
                    fullWidth
                    onClick={onCancel}
                >
                    {cancelText}
                </Button>
                <Button
                    variant={BUTTON_VARIANTS_ENUM.SUCCESS}
                    fullWidth
                    onClick={onConfirm}
                >
                    {confirmText}
                </Button>
            </StyledModalActionButtonContainer>
        </StyledModalContainer>
    </StyledModalWrapper>
);

ConfirmationDialog.propTypes = {
    cancelText: PropTypes.string,
    confirmText: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    banner: PropTypes.shape({
        hasBanner: PropTypes.bool,
        image: PropTypes.string,
        isCustom: PropTypes.bool,
        render: PropTypes.func,
    }),
    title: PropTypes.shape({
        text: PropTypes.string,
    }),
    description: PropTypes.string,
    body: PropTypes.shape({
        hasBody: PropTypes.bool,
        text: PropTypes.string,
        isCustom: PropTypes.bool,
        render: PropTypes.func,
        width: PropTypes.string,
    }),
};

ConfirmationDialog.defaultProps = {
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    banner: {
        hasBanner: false,
    },
    title: {
        text: 'Are you sure?',
    },
    description: 'Please confirm your action.',
    body: {
        hasBody: false,
    },
    onCancel: () => {},
    onConfirm: () => {},
};

export default ConfirmationDialog;