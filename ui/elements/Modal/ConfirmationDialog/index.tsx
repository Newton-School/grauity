import { AnimatePresence } from 'framer-motion';
import React, { useId, useMemo } from 'react';
import ReactDOM from 'react-dom';

import { useKeyboardEvent } from '../../../../hooks';
import useClickAway from '../../../../hooks/useClickAway';
import useDisableBodyScroll from '../../../../hooks/useDisableBodyScroll';
import Button, { BUTTON_VARIANTS_ENUM, IconButton } from '../../Button';
import Modal from '../Modal';
import { ConfirmationDialogProps } from '../types';
import { getModalAnimationProps } from '../utils';

/**
 * A confirmation dialog is a dialog box that asks the user to confirm an action.
 */
const ConfirmationDialog = (props: ConfirmationDialogProps) => {
    const {
        isOpen = false,
        cancelText = 'Cancel',
        confirmText = 'Confirm',
        onCancel = () => {},
        onConfirm = () => {},
        banner = null,
        title = 'Are you sure?',
        description = 'Please confirm your action.',
        body = null,
        cancelButtonVariant = 'danger',
        confirmButtonVariant = 'success',
        showCloseButton = false,
        hideOnClickAway = false,
        blurBackground = false,
        mobileBottomFullWidth = false,
        animatePresence = 'fade',
    } = props;

    const modalRef = React.useRef(null);

    useDisableBodyScroll();

    useKeyboardEvent({
        onKeyPress: () => {
            if (hideOnClickAway) {
                onCancel();
            }
        },
        keyCodes: ['Escape'],
    });

    useClickAway(modalRef, () => {
        if (hideOnClickAway) {
            onCancel();
        }
    });

    const id = useId();

    const motionProps = useMemo(
        () => getModalAnimationProps(animatePresence),
        [animatePresence]
    );

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <Modal.Wrapper blurBackground={blurBackground}>
                    <Modal.Modal
                        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                            e.stopPropagation()
                        }
                        width="auto"
                        height="auto"
                        ref={modalRef}
                        aria-labelledby={`modal-title-${id}`}
                        aria-describedby={`modal-description-${id}`}
                        aria-modal="true"
                        role="dialog"
                        mobileBottomFullWidth={mobileBottomFullWidth}
                        {...motionProps}
                    >
                        <Modal.Main>
                            {showCloseButton && (
                                <Modal.Action justifyContent="end">
                                    <IconButton
                                        onClick={onCancel}
                                        variant="secondary-outlined"
                                        icon="close"
                                        ariaLabel="Close"
                                        buttonProps={{ autoFocus: true }}
                                    />
                                </Modal.Action>
                            )}

                            {banner && <Modal.Banner>{banner}</Modal.Banner>}

                            {title && (
                                <Modal.Title id={`modal-title-${id}`}>
                                    {title}
                                </Modal.Title>
                            )}

                            {description && (
                                <Modal.Description
                                    id={`modal-description-${id}`}
                                >
                                    {description}
                                </Modal.Description>
                            )}

                            {body && <Modal.Body>{body}</Modal.Body>}
                        </Modal.Main>

                        <Modal.Action>
                            <Button
                                variant={
                                    cancelButtonVariant ||
                                    BUTTON_VARIANTS_ENUM.DANGER
                                }
                                fullWidth
                                onClick={onCancel}
                                buttonProps={
                                    !showCloseButton && { autoFocus: true }
                                }
                            >
                                {cancelText}
                            </Button>
                            <Button
                                variant={
                                    confirmButtonVariant ||
                                    BUTTON_VARIANTS_ENUM.SUCCESS
                                }
                                fullWidth
                                onClick={onConfirm}
                            >
                                {confirmText}
                            </Button>
                        </Modal.Action>
                    </Modal.Modal>
                </Modal.Wrapper>
            )}
        </AnimatePresence>,
        document.body
    );
};

export { ConfirmationDialogProps };

export default ConfirmationDialog;
