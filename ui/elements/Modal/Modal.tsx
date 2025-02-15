import { AnimatePresence } from 'framer-motion';
import React, {
    forwardRef,
    useId,
    useImperativeHandle,
    useMemo,
    useRef,
} from 'react';

import { useDisableBodyScroll, useKeyboardEvent } from '../../../hooks';
import { IconButton } from '../Button';
import Overlay from '../Overlay';
import {
    StyledModal,
    StyledModalAction,
    StyledModalBanner,
    StyledModalBody,
    StyledModalDescription,
    StyledModalDivider,
    StyledModalMain,
    StyledModalTitle,
} from './Modal.styles';
import { ModalProps } from './types';
import { getModalAnimationProps, getShouldRender } from './utils';

/**
 * A modal is used to display content that temporarily blocks
 * interactions with the main view of a site or to get user attention
 * on a specific action or information.
 */
const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
    const {
        isOpen = true,
        banner = null,
        title = null,
        description = null,
        body = null,
        action = null,
        height = 'auto',
        width = '500px',
        minHeight = null,
        minWidth = null,
        maxHeight = '95vh',
        maxWidth = '95vw',
        onHide = () => {},
        onClose = () => {},
        mobileBottomFullWidth = false,
        modalPadding = '20px',
        modalBodyMargin = null,
        showCloseButton = false,
        hideOnClickAway = false,
        blurBackground = false,
        animatePresence = 'fade',
        clickEvent = null,
        children = null,
        shouldFocusOnFirstElement = true,
    } = props;

    const modalRef = useRef<HTMLDivElement>(null);

    const handleClose = () => {
        if (typeof onHide === 'function') {
            onHide();
        }
        if (typeof onClose === 'function') {
            onClose();
        }
    };

    useImperativeHandle(ref, () => modalRef.current);

    useDisableBodyScroll(isOpen);

    useKeyboardEvent({
        onKeyPress: () => {
            if (hideOnClickAway) {
                handleClose();
            }
        },
        keyCodes: ['Escape'],
        config: { shouldDetect: isOpen },
    });

    const id = useId();

    const motionProps = useMemo(
        () => getModalAnimationProps(animatePresence, clickEvent),
        [animatePresence, clickEvent]
    );

    const shouldRender = useMemo(
        () =>
            getShouldRender({
                isOpen,
                animatePresence,
                clickEvent,
            }),
        [isOpen, animatePresence, clickEvent]
    );

    return (
        <AnimatePresence>
            {shouldRender && (
                <Overlay
                    shouldDisableScroll={shouldRender}
                    onOverlayClick={() => {
                        if (hideOnClickAway) {
                            handleClose();
                        }
                    }}
                    shouldTintOverlay
                    shouldBlurOverlay={blurBackground}
                    shouldCenterContent
                    data-testid="testid-modalwrapper"
                    animationDuration={0.3}
                    shouldFocusOnFirstElement={shouldFocusOnFirstElement}
                >
                    <StyledModal
                        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                            e.stopPropagation()
                        }
                        ref={modalRef}
                        width={width}
                        height={height}
                        minHeight={minHeight}
                        minWidth={minWidth}
                        maxHeight={maxHeight}
                        maxWidth={maxWidth}
                        mobileBottomFullWidth={mobileBottomFullWidth}
                        modalPadding={modalPadding}
                        aria-labelledby={`modal-title-${id}`}
                        aria-describedby={`modal-description-${id}`}
                        aria-modal="true"
                        role="dialog"
                        data-testid="testid-modal"
                        {...motionProps}
                    >
                        <StyledModalMain>
                            {showCloseButton && (
                                <StyledModalAction justifyContent="end">
                                    <IconButton
                                        onClick={handleClose}
                                        size="small"
                                        variant="secondary-outlined"
                                        icon="close"
                                        ariaLabel="Close"
                                        buttonProps={{ autoFocus: true }}
                                    />
                                </StyledModalAction>
                            )}

                            {banner && (
                                <StyledModalBanner>{banner}</StyledModalBanner>
                            )}

                            {title && (
                                <StyledModalTitle id={`modal-title-${id}`}>
                                    {title}
                                </StyledModalTitle>
                            )}

                            {description && (
                                <StyledModalDescription
                                    id={`modal-description-${id}`}
                                >
                                    {description}
                                </StyledModalDescription>
                            )}

                            {body && (
                                <StyledModalBody
                                    modalBodyMargin={modalBodyMargin}
                                >
                                    {body}
                                </StyledModalBody>
                            )}

                            {children && (
                                <StyledModalBody
                                    modalBodyMargin={modalBodyMargin}
                                >
                                    {children}
                                </StyledModalBody>
                            )}
                        </StyledModalMain>

                        {action && (
                            <StyledModalAction>{action}</StyledModalAction>
                        )}
                    </StyledModal>
                </Overlay>
            )}
        </AnimatePresence>
    );
}) as React.ForwardRefExoticComponent<
    ModalProps & React.RefAttributes<HTMLDivElement>
> & {
    Modal: typeof StyledModal;
    Main: typeof StyledModalMain;
    Banner: typeof StyledModalBanner;
    Title: typeof StyledModalTitle;
    Description: typeof StyledModalDescription;
    Body: typeof StyledModalBody;
    Action: typeof StyledModalAction;
    Divider: typeof StyledModalDivider;
};

Modal.Modal = StyledModal;
Modal.Main = StyledModalMain;
Modal.Banner = StyledModalBanner;
Modal.Title = StyledModalTitle;
Modal.Description = StyledModalDescription;
Modal.Body = StyledModalBody;
Modal.Action = StyledModalAction;
Modal.Divider = StyledModalDivider;

export { type ModalProps };

export default Modal;
