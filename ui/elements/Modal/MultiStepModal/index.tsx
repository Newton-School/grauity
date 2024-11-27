import React, { useEffect, useRef, useState } from 'react';

import Button from '../../Button';
import Modal from '../Modal';
import {
    StyledModalPaginatedActions,
    StyledModalPagination,
    StyledModalPaginationItem,
} from '../Modal.styles';
import { MultiStepModalProps } from '../types';

/**
 * A multi-step modal is a modal that has multiple steps.
 */
const MultiStepModal = (props: MultiStepModalProps) => {
    const {
        isOpen = true,
        modalSteps = [],
        showModalStepsPagination = true,
        hideOnClickAway = false,
        blurBackground = false,
        onHide = () => {},
        onClose = () => {},
        onFinalStep = () => {},
        mobileBottomFullWidth = false,
        onStepChange = () => {},
        modalPadding = '20px',
        modalBodyMargin = '12px 0 0 0',
        height = 'auto',
        width = '500px',
        minHeight = null,
        minWidth = null,
        maxHeight = '95vh',
        maxWidth = '95vw',
        showCloseButton = false,
        modalRef,
        animatePresence = 'fade',
    } = props;

    const [currentStep, setCurrentStep] = useState(0);
    const hasMounted = useRef(false);

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

    const handleClose = () => {
        if (typeof onHide === 'function') {
            onHide();
        }
        if (typeof onClose === 'function') {
            onClose();
        }
    };

    useEffect(() => {
        if (
            hasMounted.current &&
            onStepChange &&
            typeof onStepChange === 'function'
        ) {
            onStepChange();
        } else {
            hasMounted.current = true;
        }
    }, [currentStep]);

    if (modalSteps.length === 0) {
        return null;
    }

    return (
        <Modal
            isOpen={isOpen}
            banner={banner}
            title={title}
            description={description}
            body={body}
            hideOnClickAway={hideOnClickAway}
            blurBackground={blurBackground}
            onClose={handleClose}
            mobileBottomFullWidth={mobileBottomFullWidth}
            modalPadding={modalPadding}
            modalBodyMargin={modalBodyMargin}
            width={width}
            height={height}
            minHeight={minHeight}
            minWidth={minWidth}
            maxHeight={maxHeight}
            maxWidth={maxWidth}
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

                    <Modal.Action>
                        {showBackButton && !isFirstStep && (
                            <Button
                                variant="secondary-outlined"
                                onClick={() => {
                                    setCurrentStep(currentStep - 1);
                                }}
                                icon="arrow-left"
                                iconPosition="left"
                            >
                                Back
                            </Button>
                        )}

                        {nextButtonText && (
                            <Button
                                variant={buttonVariant || 'secondary'}
                                fullWidth
                                onClick={() => {
                                    if (isLastStep) {
                                        onFinalStep();
                                        handleClose();
                                    } else {
                                        setCurrentStep(currentStep + 1);
                                    }
                                }}
                                icon={isLastStep ? null : 'arrow-right'}
                                iconPosition="right"
                            >
                                {nextButtonText}
                            </Button>
                        )}
                    </Modal.Action>
                </StyledModalPaginatedActions>
            }
            ref={modalRef}
            animatePresence={animatePresence}
        />
    );
};

MultiStepModal.PaginatedActions = StyledModalPaginatedActions;
MultiStepModal.Pagination = StyledModalPagination;
MultiStepModal.PaginationItem = StyledModalPaginationItem;

export { type MultiStepModalProps };

export default MultiStepModal;
