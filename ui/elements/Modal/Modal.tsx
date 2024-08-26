import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import useClickAway from '../../../hooks/useClickAway';
import useDisableBodyScroll from '../../../hooks/useDisableBodyScroll';
import { BUTTON_VARIANTS_ENUM, NSButton } from '../Button';
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
    StyledModalTitleText,
    StyledModalWrapper,
} from './Modal.styles';
import { ModalProps } from './types';

/**
 * `gra.UI.elements Modal`: A modal is a dialog box or popup, displayed over the current page.
 * @component
 */
const Modal = ({
    modalSteps,
    showModalStepsPagination,
    shouldHideOnClickAway,
    blurBackground,
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

    const {
        banner,
        title,
        description,
        body,
        nextButtonText,
        showBackButton,
        buttonVariant,
    } = modalSteps[currentStep] || {};

    const isLastStep = currentStep === modalSteps.length - 1;
    const isFirstStep = currentStep === 0;

    const hasBanner = !!banner?.render || !!banner?.image;
    const hasBody = !!body?.text || !!body?.image || !!body?.render;

    const modalRef = React.useRef(null);

    useDisableBodyScroll();

    useClickAway(modalRef, () => {
        if (shouldHideOnClickAway) {
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
        <StyledModalWrapper blurBackground={blurBackground}>
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
                    {hasBanner &&
                        (banner.render ? (
                            banner.render()
                        ) : (
                            <StyledModalBannerImageWrapper>
                                <StyledModalBannerImage src={banner.image} />
                            </StyledModalBannerImageWrapper>
                        ))}

                    {showHeader && title?.text && (
                        <StyledModalTitle
                            marginTop={hasBanner}
                            showCloseButton={showCloseButton && !hasBanner}
                        >
                            <StyledModalTitleText>
                                {title?.text}
                            </StyledModalTitleText>
                            {showCloseButton && !hasBanner && (
                                <NSButton
                                    onClick={onHide}
                                    variant={
                                        BUTTON_VARIANTS_ENUM.SECONDARY_OUTLINED
                                    }
                                    icon="close"
                                    isIconButton
                                />
                            )}
                        </StyledModalTitle>
                    )}

                    {description && (
                        <StyledModalDescription>
                            {description}
                        </StyledModalDescription>
                    )}

                    {hasBody && (
                        <StyledModalBody
                            width={body.width || ''}
                            modalBodyMargin={
                                !modalBodyMargin && modalSteps.length <= 1
                                    ? '20px 0 12px 0'
                                    : modalBodyMargin
                            }
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

                {showModalStepsPagination && modalSteps.length > 1 && (
                    <StyledModalPagination>
                        {modalSteps.map((item, index) => (
                            <StyledModalPaginationItem
                                key={item.title.text}
                                active={index === currentStep}
                                onClick={() => setCurrentStep(index)}
                            />
                        ))}
                    </StyledModalPagination>
                )}

                {showModalButtons && (
                    <StyledModalActionButtonContainer>
                        {showBackButton && !isFirstStep && (
                            <NSButton
                                variant={
                                    BUTTON_VARIANTS_ENUM.SECONDARY_OUTLINED
                                }
                                onClick={() => {
                                    setCurrentStep(currentStep - 1);
                                }}
                                icon="arrow-right"
                                iconPositon="left"
                            >
                                Back
                            </NSButton>
                        )}

                        {nextButtonText && (
                            <NSButton
                                variant={
                                    buttonVariant ||
                                    BUTTON_VARIANTS_ENUM.SECONDARY
                                }
                                fullWidth
                                onClick={() => {
                                    if (isLastStep) {
                                        onFinalStep();
                                        onHide();
                                    } else {
                                        setCurrentStep(currentStep + 1);
                                    }
                                }}
                                icon={isLastStep ? null : 'arrow-left'}
                                iconPositon="right"
                            >
                                {nextButtonText}
                            </NSButton>
                        )}
                    </StyledModalActionButtonContainer>
                )}
            </StyledModalContainer>
        </StyledModalWrapper>
    );
};

Modal.propTypes = {
    modalSteps: PropTypes.array,
    showModalStepsPagination: PropTypes.bool,
    shouldHideOnClickAway: PropTypes.bool,
    blurBackground: PropTypes.bool,
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
    showModalStepsPagination: true,
    shouldHideOnClickAway: false,
    blurBackground: false,
    onHide: () => {},
    onFinalStep: () => {},
    mobileBottomFullWidth: false,
    onStepChange: () => {},
    showModalButtons: true,
    showHeader: true,
    modalPadding: '20px',
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
    StyledModalTitleText,
    StyledModalWrapper,
};

export default Modal;
