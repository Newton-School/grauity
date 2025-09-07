import { AnimatePresence } from 'framer-motion';
import React, {
    forwardRef,
    useId,
    useImperativeHandle,
    useMemo,
    useRef,
} from 'react';
import { FocusTrap } from 'focus-trap-react';

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
        border = '1px solid var(--border-subtle-primary-default, #e1e5ea)',
        modalBodyMargin = null,
        showCloseButton = false,
        hideOnClickAway = false,
        blurBackground = false,
        animatePresence = 'fade',
        clickEvent = null,
        children = null,
        shouldFocusOnFirstElement = true,
        shouldDisableScroll = true,
        overflow = 'visible',
        className,
        initialFocus = undefined,
        returnFocusOnDeactivate = true,
    } = props;

    const modalRef = useRef<HTMLDivElement>(null);

    const resolvedInitialFocus = useMemo(() => {
        if (typeof initialFocus === 'string') {
            return document.querySelector(initialFocus) as HTMLElement | null;
        }
        if (initialFocus === true) {
            // explicitly forbid true, fallback to undefined or throw error
            // or simply return undefined so focus-trap default is used
            return undefined;
        }
        return initialFocus;
    }, [initialFocus]);
    

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
                    shouldDisableScroll={shouldDisableScroll}
                    onOverlayClick={() => {
                        if (hideOnClickAway) {
                            handleClose();
                        }
                    }}
                    shouldTintOverlay
                    shouldBlurOverlay={blurBackground}
                    shouldCenterContent
                    data-testid="testid-modalwrapper"
                    className={className}
                    animationDuration={0.3}
                    shouldFocusOnFirstElement={shouldFocusOnFirstElement}
                >
                    <FocusTrap
                        active={isOpen}
                        focusTrapOptions={{
                            initialFocus:
                                resolvedInitialFocus ?? (shouldFocusOnFirstElement ? undefined : false),
                            returnFocusOnDeactivate,
                        }}
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
                            $border={border}
                            aria-labelledby={`modal-title-${id}`}
                            aria-describedby={`modal-description-${id}`}
                            aria-modal="true"
                            role="dialog"
                            data-testid="testid-modal"
                            {...motionProps}
                        >
                            <StyledModalMain $overflow={overflow}>
                                {showCloseButton && (
                                    <StyledModalAction justifyContent="end">
                                        <IconButton
                                            onClick={handleClose}
                                            size="small"
                                            variant="tertiary"
                                            color="neutral"
                                            icon="close"
                                            ariaLabel="Close"
                                            buttonProps={{}}
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
                                    <StyledModalBody modalBodyMargin={modalBodyMargin}>
                                        {body}
                                    </StyledModalBody>
                                )}

                                {children && (
                                    <StyledModalBody modalBodyMargin={modalBodyMargin}>
                                        {children}
                                    </StyledModalBody>
                                )}
                            </StyledModalMain>

                            {action && (
                                <StyledModalAction>{action}</StyledModalAction>
                            )}
                        </StyledModal>
                    </FocusTrap>
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
