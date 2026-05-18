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
    ModalBannerProps,
    ModalBodyProps,
    ModalContainerProps,
    ModalDividerProps,
    ModalMainProps,
    ModalProps,
    ModalTitleProps,
    ModalDescriptionProps,
} from './types';
import { getModalAnimationProps, getShouldRender } from './utils';

const ModalModal = forwardRef<HTMLDivElement, ModalContainerProps>(
    (
        {
            width,
            height,
            minHeight,
            minWidth,
            maxHeight,
            maxWidth,
            mobileBottomFullWidth,
            modalPadding,
            border,
            children,
            ...props
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
                {...props}
            >
                {children}
            </StyledModal>
        );
    }
);

const ModalAction = forwardRef<HTMLDivElement, Omit<ModalActionProps, 'ref'>>(
    ({ justifyContent, children }, ref) => {
        return (
            <StyledModalAction ref={ref} $justifyContent={justifyContent}>
                {children}
            </StyledModalAction>
        );
    }
);

const ModalMain = forwardRef<HTMLDivElement, ModalMainProps>(
    ({ overflow, children, ...rest }, ref) => (
        <StyledModalMain ref={ref} $overflow={overflow} {...rest}>
            {children}
        </StyledModalMain>
    )
);

const ModalBanner = forwardRef<HTMLDivElement, ModalBannerProps>(
    ({ children, ...rest }, ref) => (
        <StyledModalBanner ref={ref} {...rest}>
            {children}
        </StyledModalBanner>
    )
);

const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
    ({ children, ...rest }, ref) => (
        <StyledModalTitle ref={ref} {...rest}>
            {children}
        </StyledModalTitle>
    )
);

const ModalDescription = forwardRef<HTMLDivElement, ModalDescriptionProps>(
    ({ children, ...rest }, ref) => (
        <StyledModalDescription ref={ref} {...rest}>
            {children}
        </StyledModalDescription>
    )
);

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
    ({ modalBodyMargin, children, ...rest }, ref) => (
        <StyledModalBody ref={ref} $modalBodyMargin={modalBodyMargin} {...rest}>
            {children}
        </StyledModalBody>
    )
);

const ModalDivider = forwardRef<HTMLDivElement, ModalDividerProps>(
    ({ ...rest }, ref) => <StyledModalDivider ref={ref} {...rest} />
);

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
                    <StyledModal
                        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                            e.stopPropagation()
                        }
                        ref={modalRef}
                        $width={width}
                        $height={height}
                        $minHeight={minHeight}
                        $minWidth={minWidth}
                        $maxHeight={maxHeight}
                        $maxWidth={maxWidth}
                        $mobileBottomFullWidth={mobileBottomFullWidth}
                        $modalPadding={modalPadding}
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
                                <StyledModalAction $justifyContent="end">
                                    <IconButton
                                        onClick={handleClose}
                                        size="small"
                                        variant="tertiary"
                                        color="neutral"
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
                                    $modalBodyMargin={modalBodyMargin}
                                >
                                    {body}
                                </StyledModalBody>
                            )}

                            {children && (
                                <StyledModalBody
                                    $modalBodyMargin={modalBodyMargin}
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
    Modal: typeof ModalModal;
    Main: typeof ModalMain;
    Banner: typeof ModalBanner;
    Title: typeof ModalTitle;
    Description: typeof ModalDescription;
    Body: typeof ModalBody;
    Action: typeof ModalAction;
    Divider: typeof ModalDivider;
};

Modal.Modal = ModalModal;
Modal.Main = ModalMain;
Modal.Banner = ModalBanner;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Body = ModalBody;
Modal.Action = ModalAction;
Modal.Divider = ModalDivider;

export { type ModalProps };

export default Modal;
