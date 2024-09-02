import PropTypes from 'prop-types';
import React from 'react';

import { useKeyboardEvent } from '../../../hooks';
import useClickAway from '../../../hooks/useClickAway';
import useDisableBodyScroll from '../../../hooks/useDisableBodyScroll';
import Button, { BUTTON_VARIANTS_ENUM } from '../Button';
import Modal from './Modal';
import { ConfirmationDialogProps } from './types';

/**
 * A confirmation dialog is a dialog box that asks the user to confirm an action.
 * @component
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
}: ConfirmationDialogProps) => {
    const modalRef = React.useRef(null);

    useDisableBodyScroll();

    useKeyboardEvent(
        () => {
            if (hideOnClickAway) {
                onCancel();
            }
        },
        ['Escape'],
    );

    useClickAway(modalRef, () => {
        if (hideOnClickAway) {
            onCancel();
        }
    });

    return (
        <Modal.Wrapper blurBackground={blurBackground}>
            <Modal.Modal
                onClick={(e: Event) => e.stopPropagation()}
                width="auto"
                height="auto"
                ref={modalRef}
            >
                <Modal.Main>
                    {banner && showCloseButton && (
                        <Modal.Action justifyContent="end">
                            <Button
                                onClick={onCancel}
                                variant="secondary-outlined"
                                icon="close"
                                ariaLabel="Close"
                                isIconButton
                            />
                        </Modal.Action>
                    )}

                    {banner && <Modal.Banner>{banner}</Modal.Banner>}

                    {(title || showCloseButton) && (
                        <Modal.Title
                            showCloseButton={showCloseButton && !banner}
                        >
                            {title}
                            {showCloseButton && !banner && (
                                <Button
                                    onClick={onCancel}
                                    variant="secondary-outlined"
                                    icon="close"
                                    isIconButton
                                />
                            )}
                        </Modal.Title>
                    )}

                    {description && (
                        <Modal.Description>{description}</Modal.Description>
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
    showCloseButton: PropTypes.bool,
    hideOnClickAway: PropTypes.bool,
    blurBackground: PropTypes.bool,
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
    showCloseButton: false,
    hideOnClickAway: false,
    blurBackground: false,
};

export { ConfirmationDialogProps };

export default ConfirmationDialog;
