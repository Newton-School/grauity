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
import {
    ModalActionProps,
    ModalBodyMainProps,
    ModalBodyProps,
    ModalContainerProps,
    ModalProps,
} from './types';
import { getModalAnimationProps, getShouldRender } from './utils';

const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>(
    (
        {
            width,
            height,
            minHeight,
            minWidth,
            maxHeight,
            maxWidth,
            mobileBottomFullWidth,
            modalPadding = '20px',
            border,
            ...rest
        },
        ref
    ) => {
        return (
            <StyledModal
                ref={ref}
                $width={width}
                $height={height}
                $minHeight={minHeight}
                $minWidth={minWidth}
                $maxHeight={maxHeight}
                $maxWidth={maxWidth}
                $mobileBottomFullWidth={mobileBottomFullWidth}
                $modalPadding={modalPadding}
                $border={border}
                {...rest}
            />
        );
    }
);

const ModalMain = forwardRef<HTMLDivElement, ModalBodyMainProps>(
    ({ overflow, ...rest }, ref) => {
        return <StyledModalMain ref={ref} $overflow={overflow} {...rest} />;
    }
);

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
    ({ modalBodyMargin, ...rest }, ref) => {
        return (
            <StyledModalBody ref={ref} $modalBodyMargin={modalBodyMargin} {...rest} />
        );
    }
);

const ModalAction = forwardRef<HTMLDivElement, ModalActionProps>(
    ({ justifyContent, ...rest }, ref) => {
        return (
            <StyledModalAction
                ref={ref}
                $justifyContent={justifyContent}
                {...rest}
            />
        );
    }
);

ModalContainer.displayName = 'ModalContainer';
ModalMain.displayName = 'ModalMain';
ModalBody.displayName = 'ModalBody';
ModalAction.displayName = 'ModalAction';

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
                    <ModalContainer
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
                        border={border}
                        aria-labelledby={`modal-title-${id}`}
                        aria-describedby={`modal-description-${id}`}
                        aria-modal="true"
                        role="dialog"
                        data-testid="testid-modal"
                        {...motionProps}
                    >
                        <ModalMain overflow={overflow}>
                            {showCloseButton && (
                                <ModalAction justifyContent="end">
                                    <IconButton
                                        onClick={handleClose}
                                        size="small"
                                        variant="tertiary"
                                        color="neutral"
                                        icon="close"
                                        ariaLabel="Close"
                                        buttonProps={{ autoFocus: true }}
                                    />
                                </ModalAction>
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
                                <ModalBody modalBodyMargin={modalBodyMargin}>
                                    {body}
                                </ModalBody>
                            )}

                            {children && (
                                <ModalBody modalBodyMargin={modalBodyMargin}>
                                    {children}
                                </ModalBody>
                            )}
                        </ModalMain>

                        {action && <ModalAction>{action}</ModalAction>}
                    </ModalContainer>
                </Overlay>
            )}
        </AnimatePresence>
    );
}) as React.ForwardRefExoticComponent<
    ModalProps & React.RefAttributes<HTMLDivElement>
> & {
    Modal: typeof ModalContainer;
    Main: typeof ModalMain;
    Banner: typeof StyledModalBanner;
    Title: typeof StyledModalTitle;
    Description: typeof StyledModalDescription;
    Body: typeof ModalBody;
    Action: typeof ModalAction;
    Divider: typeof StyledModalDivider;
};

Modal.Modal = ModalContainer;
Modal.Main = ModalMain;
Modal.Banner = StyledModalBanner;
Modal.Title = StyledModalTitle;
Modal.Description = StyledModalDescription;
Modal.Body = ModalBody;
Modal.Action = ModalAction;
Modal.Divider = StyledModalDivider;

export { type ModalProps };

export default Modal;
