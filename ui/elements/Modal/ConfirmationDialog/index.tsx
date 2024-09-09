import PropTypes from 'prop-types';
import React, { useId } from 'react';

import { useKeyboardEvent } from '../../../../hooks';
import useClickAway from '../../../../hooks/useClickAway';
import useDisableBodyScroll from '../../../../hooks/useDisableBodyScroll';
import Button, { BUTTON_VARIANTS_ENUM, IconButton } from '../../Button';
import Modal from '../Modal';
import { ConfirmationDialogProps } from '../types';

/**
 * A confirmation dialog is a dialog box that asks the user to confirm an action.
 */
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
    showCloseButton,
    hideOnClickAway,
    blurBackground,
    mobileBottomFullWidth,
}: ConfirmationDialogProps) => {
    const modalRef = React.useRef(null);

    useDisableBodyScroll();

    useKeyboardEvent(() => {
        if (hideOnClickAway) {
            onCancel();
        }
    }, ['Escape']);

    useClickAway(modalRef, () => {
        if (hideOnClickAway) {
            onCancel();
        }
    });

    const id = useId();

    return (
        <Modal.Wrapper blurBackground={blurBackground}>
            <Modal.Modal
                onClick={(e: Event) => e.stopPropagation()}
                width="auto"
                height="auto"
                ref={modalRef}
                aria-labelledby={`modal-title-${id}`}
                aria-describedby={`modal-description-${id}`}
                aria-modal="true"
                role="dialog"
                mobileBottomFullWidth={mobileBottomFullWidth}
            >
                <Modal.Main>
                    {showCloseButton && (
                        <Modal.Action justifyContent="end">
                            <IconButton
                                onClick={onCancel}
                                variant="secondary-outlined"
                                icon="close"
                                ariaLabel="Close"
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
                        <Modal.Description id={`modal-description-${id}`}>
                            {description}
                        </Modal.Description>
                    )}

                    {body && <Modal.Body>{body}</Modal.Body>}
                </Modal.Main>

                <Modal.Action>
                    <Button
                        variant={
                            cancelButtonVariant || BUTTON_VARIANTS_ENUM.DANGER
                        }
                        fullWidth
                        onClick={onCancel}
                    >
                        {cancelText}
                    </Button>
                    <Button
                        variant={
                            confirmButtonVariant || BUTTON_VARIANTS_ENUM.SUCCESS
                        }
                        fullWidth
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </Button>
                </Modal.Action>
            </Modal.Modal>
        </Modal.Wrapper>
    );
};

ConfirmationDialog.propTypes = {
    cancelText: PropTypes.string,
    confirmText: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    banner: PropTypes.string || PropTypes.node,
    title: PropTypes.string || PropTypes.node,
    description: PropTypes.string,
    body: PropTypes.string || PropTypes.node,
    cancelButtonVariant: PropTypes.string,
    confirmButtonVariant: PropTypes.string,
    showCloseButton: PropTypes.bool,
    hideOnClickAway: PropTypes.bool,
    blurBackground: PropTypes.bool,
    mobileBottomFullWidth: PropTypes.bool,
};

ConfirmationDialog.defaultProps = {
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    banner: null,
    title: 'Are you sure?',
    description: 'Please confirm your action.',
    body: null,
    onCancel: () => {},
    onConfirm: () => {},
    cancelButtonVariant: 'danger',
    confirmButtonVariant: 'success',
    showCloseButton: false,
    hideOnClickAway: false,
    blurBackground: false,
    mobileBottomFullWidth: false,
};

export { ConfirmationDialogProps };

export default ConfirmationDialog;
