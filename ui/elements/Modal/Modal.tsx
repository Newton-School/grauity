import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import useClickAway from '../../../hooks/useClickAway';

import {
    StyledModalActionButtonContainer,
    StyledModalBannerImage,
    StyledModalBannerImageWrapper,
    StyledModalBody,
    StyledModalContainer,
    StyledModalDescription,
    StyledModalMain,
    StyledModalPagination,
    StyledModalPaginationItem,
    StyledModalTitle,
    StyledModalWrapper,
} from './Modal.styles';
import { ModalProps } from './types';
import { Icon } from '../Icon';
import Button from '../Button/Button';
import { BUTTON_VARIANTS_ENUM } from '../Button/constants';

const Modal = ({
    modalSteps,
    shouldHideOnClickAway,
    onHide,
    onFinalStep,
    mobileBottomFullWidth,
    onStepChange,
    showModalButtons,
    showHeader,
    modalPadding,
    modalBodyMargin,
    width,
    height,
    minHeight,
    showCloseButton,
}: ModalProps) => {
    const [currentStep, setCurrentStep] = useState(0);

    const { banner, title, description, body, nextButtonText, showBackButton } =
        modalSteps[currentStep] || {};

    const isLastStep = currentStep === modalSteps.length - 1;
    const isFirstStep = currentStep === 0;

    const modalRef = React.useRef(null);

    useClickAway(modalRef, () => {
        if (shouldHideOnClickAway) {
            console.log('oh jeez onClose');
            onHide();
        }
    });

    useEffect(() => {
        if (onStepChange && typeof onStepChange === 'function') {
            onStepChange();
        }
    }, [currentStep]);

    if (modalSteps.length === 0) {
        return null;
    }

    return (
        <StyledModalWrapper>
            <StyledModalContainer
                onClick={(e: Event) => e.stopPropagation()}
                ref={modalRef}
                width={width}
                height={height}
                minHeight={minHeight}
                mobileBottomFullWidth={mobileBottomFullWidth}
                modalPadding={modalPadding}
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

                    {showHeader && title?.text && (
                        <StyledModalTitle
                            marginTop={banner?.hasBanner}
                            showCloseButton={showCloseButton}
                        >
                            {title?.text}
                            {showCloseButton && (
                                <Button onClick={onHide} variant={BUTTON_VARIANTS_ENUM.SECONDARY_OUTLINED}>
                                    <Icon name="close" size="24" />
                                </Button>
                            )}
                        </StyledModalTitle>
                    )}

                    {description && (
                        <StyledModalDescription>
                            {description}
                        </StyledModalDescription>
                    )}

                    {body?.hasBody && (
                        <StyledModalBody
                            width={body.width || ''}
                            modalBodyMargin={modalBodyMargin}
                        >
                            {!body.isCustom ? body.text : body.render()}
                        </StyledModalBody>
                    )}
                </StyledModalMain>

                {modalSteps.length > 1 && (
                    <StyledModalPagination>
                        {modalSteps.map((item, index) => (
                            <StyledModalPaginationItem
                                key={item.title}
                                active={index === currentStep}
                            />
                        ))}
                    </StyledModalPagination>
                )}

                {showModalButtons && (
                    <StyledModalActionButtonContainer>
                        {showBackButton && !isFirstStep && (
                            <Button
                                variant={
                                    BUTTON_VARIANTS_ENUM.SECONDARY_OUTLINED
                                }
                                onClick={() => {
                                    setCurrentStep(currentStep - 1);
                                }}
                            >
                                <Icon name="arrow-right" size="24" />
                                Back
                            </Button>
                        )}

                        {nextButtonText && (
                            <Button
                                variant={BUTTON_VARIANTS_ENUM.SECONDARY}
                                fullWidth
                                onClick={() => {
                                    if (isLastStep) {
                                        onFinalStep();
                                        onHide();
                                    } else {
                                        setCurrentStep(currentStep + 1);
                                    }
                                }}
                            >
                                {nextButtonText}
                                {!isLastStep && (
                                    <Icon name="arrow-left" size="24" color="white" />
                                )}
                            </Button>
                        )}
                    </StyledModalActionButtonContainer>
                )}
            </StyledModalContainer>
        </StyledModalWrapper>
    );
};

Modal.propTypes = {
    modalSteps: PropTypes.array,
    shouldHideOnClickAway: PropTypes.bool,
    onHide: PropTypes.func,
    onFinalStep: PropTypes.func,
    mobileBottomFullWidth: PropTypes.bool,
    onStepChange: PropTypes.func,
    showModalButtons: PropTypes.bool,
    showHeader: PropTypes.bool,
    modalPadding: PropTypes.string,
    modalBodyMargin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    minHeight: PropTypes.string,
    showCloseButton: PropTypes.bool,
};

Modal.defaultProps = {
    modalSteps: [],
    shouldHideOnClickAway: false,
    onHide: () => {},
    onFinalStep: () => {},
    mobileBottomFullWidth: false,
    onStepChange: () => {},
    showModalButtons: true,
    showHeader: true,
    modalPadding: '32px',
    modalBodyMargin: '12px 0 0 0',
    width: null,
    height: null,
    minHeight: null,
    showCloseButton: false,
};

export {
    StyledModalActionButtonContainer,
    StyledModalBannerImage,
    StyledModalBannerImageWrapper,
    StyledModalBody,
    StyledModalContainer,
    StyledModalDescription,
    StyledModalMain,
    StyledModalPagination,
    StyledModalPaginationItem,
    StyledModalTitle,
    StyledModalWrapper,
};

export default Modal;
