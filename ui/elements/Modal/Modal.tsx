import { AnimatePresence } from 'framer-motion';
import React, {
    forwardRef,
    useId,
    useImperativeHandle,
    useMemo,
    useRef,
} from 'react';
import ReactDOM from 'react-dom';

import {
    useClickAway,
    useDisableBodyScroll,
    useKeyboardEvent,
} from '../../../hooks';
import { IconButton } from '../Button';
import {
    StyledModal,
    StyledModalAction,
    StyledModalBanner,
    StyledModalBody,
    StyledModalDescription,
    StyledModalDivider,
    StyledModalMain,
    StyledModalTitle,
    StyledModalWrapper,
} from './Modal.styles';
import { ModalProps } from './types';
import { getModalAnimationProps } from './utils';

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
        width = null,
        height = null,
        minHeight = null,
        onHide = () => {},
        mobileBottomFullWidth = false,
        modalPadding = '20px',
        modalBodyMargin = null,
        showCloseButton = false,
        hideOnClickAway = false,
        blurBackground = false,
        animatePresence = 'fade',
    } = props;

    const modalRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => modalRef.current);

    useDisableBodyScroll(isOpen);

    useKeyboardEvent({
        onKeyPress: () => {
            if (hideOnClickAway) {
                onHide();
            }
        },
        keyCodes: ['Escape'],
        config: { shouldDetect: isOpen },
    });

    useClickAway(modalRef, () => {
        if (hideOnClickAway) {
            onHide();
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
                <StyledModalWrapper
                    blurBackground={blurBackground}
                    data-testid="testid-modalwrapper"
                >
                    <StyledModal
                        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                            e.stopPropagation()
                        }
                        ref={modalRef}
                        width={width}
                        height={height}
                        minHeight={minHeight}
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
                                        onClick={onHide}
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
                        </StyledModalMain>

                        {action && (
                            <StyledModalAction>{action}</StyledModalAction>
                        )}
                    </StyledModal>
                </StyledModalWrapper>
            )}
        </AnimatePresence>,
        document.body
    );
}) as React.ForwardRefExoticComponent<
    ModalProps & React.RefAttributes<HTMLDivElement>
> & {
    Wrapper: typeof StyledModalWrapper;
    Modal: typeof StyledModal;
    Main: typeof StyledModalMain;
    Banner: typeof StyledModalBanner;
    Title: typeof StyledModalTitle;
    Description: typeof StyledModalDescription;
    Body: typeof StyledModalBody;
    Action: typeof StyledModalAction;
    Divider: typeof StyledModalDivider;
};

Modal.Wrapper = StyledModalWrapper;
Modal.Modal = StyledModal;
Modal.Main = StyledModalMain;
Modal.Banner = StyledModalBanner;
Modal.Title = StyledModalTitle;
Modal.Description = StyledModalDescription;
Modal.Body = StyledModalBody;
Modal.Action = StyledModalAction;
Modal.Divider = StyledModalDivider;

export default Modal;
