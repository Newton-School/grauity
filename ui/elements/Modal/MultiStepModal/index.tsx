import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import useClickAway from '../../../../hooks/useClickAway';
import useDisableBodyScroll from '../../../../hooks/useDisableBodyScroll';
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
    const hasMounted = useRef(false);
    const modalRef = useRef(null);

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

    useDisableBodyScroll();

    useClickAway(modalRef, () => {
        if (hideOnClickAway) {
            onHide();
        }
    });

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

                    <Modal.Action>
                        {showBackButton && !isFirstStep && (
                            <Button
                                variant="secondary-outlined"
                                onClick={() => {
                                    setCurrentStep(currentStep - 1);
                                }}
                                icon="arrow-right"
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
                                        onHide();
                                    } else {
                                        setCurrentStep(currentStep + 1);
                                    }
                                }}
                                icon={isLastStep ? null : 'arrow-left'}
                                iconPosition="right"
                            >
                                {nextButtonText}
                            </Button>
                        )}
                    </Modal.Action>
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
