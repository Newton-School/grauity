import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import useClickAway from '../../../hooks/useClickAway';
import useDisableBodyScroll from '../../../hooks/useDisableBodyScroll';
import NSButton from '../Button';
import NSModal from './Modal';
import {
    StyledModalPaginatedActions,
    StyledModalPagination,
    StyledModalPaginationItem,
} from './Modal.styles';
import { MultiStepModalProps } from './types';

/**
 * `MultiStepModal`: A modal that displays content in multiple steps.
 * @component
 */
const MultiStepModal = ({
    modalSteps,
    showModalStepsPagination,
    hideOnClickAway,
    blurBackground,
    onHide,
    onFinalStep,
    mobileBottomFullWidth,
    onStepChange,
    modalPadding,
    modalBodyMargin,
    width,
    height,
    minHeight,
    showCloseButton,
}: MultiStepModalProps) => {
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

    const modalRef = React.useRef(null);

    useDisableBodyScroll();

    useClickAway(modalRef, () => {
        if (hideOnClickAway) {
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
        <NSModal
            banner={banner}
            title={title}
            description={description}
            body={body}
            hideOnClickAway={hideOnClickAway}
            blurBackground={blurBackground}
            onHide={onHide}
            mobileBottomFullWidth={mobileBottomFullWidth}
            modalPadding={modalPadding}
            modalBodyMargin={modalBodyMargin}
            width={width}
            height={height}
            minHeight={minHeight}
            showCloseButton={showCloseButton}
            action={
                <StyledModalPaginatedActions>
                    {showModalStepsPagination && modalSteps.length > 1 && (
                        <StyledModalPagination>
                            {modalSteps.map((item, index) => (
                                <StyledModalPaginationItem
                                    key={`modal-pagination-item-${index + 1}`}
                                    active={index === currentStep}
                                    onClick={() => setCurrentStep(index)}
                                />
                            ))}
                        </StyledModalPagination>
                    )}

                    <NSModal.Action>
                        {showBackButton && !isFirstStep && (
                            <NSButton
                                variant="secondary-outlined"
                                onClick={() => {
                                    setCurrentStep(currentStep - 1);
                                }}
                                icon="arrow-right"
                                iconPosition="left"
                            >
                                Back
                            </NSButton>
                        )}

                        {nextButtonText && (
                            <NSButton
                                variant={buttonVariant || 'secondary'}
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
                                iconPosition="right"
                            >
                                {nextButtonText}
                            </NSButton>
                        )}
                    </NSModal.Action>
                </StyledModalPaginatedActions>
            }
        />
    );
};

MultiStepModal.propTypes = {
    modalSteps: PropTypes.array,
    showModalStepsPagination: PropTypes.bool,
    hideOnClickAway: PropTypes.bool,
    blurBackground: PropTypes.bool,
    onHide: PropTypes.func,
    onFinalStep: PropTypes.func,
    mobileBottomFullWidth: PropTypes.bool,
    onStepChange: PropTypes.func,
    modalPadding: PropTypes.string,
    modalBodyMargin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    minHeight: PropTypes.string,
    showCloseButton: PropTypes.bool,
};

MultiStepModal.defaultProps = {
    modalSteps: [],
    showModalStepsPagination: true,
    hideOnClickAway: false,
    blurBackground: false,
    onHide: () => {},
    onFinalStep: () => {},
    mobileBottomFullWidth: false,
    onStepChange: () => {},
    modalPadding: '20px',
    modalBodyMargin: '12px 0 0 0',
    width: null,
    height: null,
    minHeight: null,
    showCloseButton: false,
};

MultiStepModal.PaginatedActions = StyledModalPaginatedActions;
MultiStepModal.Pagination = StyledModalPagination;
MultiStepModal.PaginationItem = StyledModalPaginationItem;

export { MultiStepModalProps };

export default MultiStepModal;
