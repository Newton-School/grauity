import PropTypes from 'prop-types';
import React from 'react';

import { useKeyboardEvent } from '../../../hooks';
import useClickAway from '../../../hooks/useClickAway';
import useDisableBodyScroll from '../../../hooks/useDisableBodyScroll';
import NSButton, { BUTTON_VARIANTS_ENUM } from '../Button';
import NSModal from './Modal';
import { ConfirmationDialogProps } from './types';

/**
 * `gra.UI.elements ConfirmationDialog`: A confirmation dialog is a dialog box that asks the user to confirm an action.
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

    return (
        <NSModal.Wrapper blurBackground={blurBackground}>
            <NSModal.Modal
                onClick={(e: Event) => e.stopPropagation()}
                width="auto"
                height="auto"
                ref={modalRef}
            >
                <NSModal.Main>
                    {banner && showCloseButton && (
                        <NSModal.Action justifyContent="end">
                            <NSButton
                                onClick={onCancel}
                                variant="secondary-outlined"
                                icon="close"
                                ariaLabel="Close"
                                isIconButton
                            />
                        </NSModal.Action>
                    )}

                    {banner && <NSModal.Banner>{banner}</NSModal.Banner>}

                    {(title || showCloseButton) && (
                        <NSModal.Title
                            showCloseButton={showCloseButton && !banner}
                        >
                            {title}
                            {showCloseButton && !banner && (
                                <NSButton
                                    onClick={onCancel}
                                    variant="secondary-outlined"
                                    icon="close"
                                    isIconButton
                                />
                            )}
                        </NSModal.Title>
                    )}

                    {description && (
                        <NSModal.Description>{description}</NSModal.Description>
                    )}

                    {body && <NSModal.Body>{body}</NSModal.Body>}
                </NSModal.Main>

                <NSModal.Action>
                    <NSButton
                        variant={
                            cancelButtonVariant || BUTTON_VARIANTS_ENUM.DANGER
                        }
                        fullWidth
                        onClick={onCancel}
                    >
                        {cancelText}
                    </NSButton>
                    <NSButton
                        variant={
                            confirmButtonVariant || BUTTON_VARIANTS_ENUM.SUCCESS
                        }
                        fullWidth
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </NSButton>
                </NSModal.Action>
            </NSModal.Modal>
        </NSModal.Wrapper>
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
