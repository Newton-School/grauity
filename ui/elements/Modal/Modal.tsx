import PropTypes from 'prop-types';
import React, { forwardRef, useImperativeHandle,useRef } from 'react';

import {
    useClickAway,
    useDisableBodyScroll,
    useKeyboardEvent,
} from '../../../hooks';
import NSButton from '../Button/Button';
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

/**
 * `Modal`: A modal displays content that temporarily blocks interactions with the main view of a site.
 * @component
 */
const Modal = forwardRef<HTMLDivElement, ModalProps>(({
    banner,
    title,
    description,
    body,
    action,
    width,
    height,
    minHeight,
    onHide,
    mobileBottomFullWidth,
    modalPadding,
    modalBodyMargin,
    showCloseButton,
    hideOnClickAway,
    blurBackground,
}, ref) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => modalRef.current);

    useDisableBodyScroll();

    useKeyboardEvent(() => {
        if (hideOnClickAway) {
            onHide();
        }
    }, ['Escape']);

    useClickAway(modalRef, () => {
        if (hideOnClickAway) {
            onHide();
        }
    });

    return (
        <StyledModalWrapper blurBackground={blurBackground}>
            <StyledModal
                onClick={(e: Event) => e.stopPropagation()}
                ref={modalRef}
                width={width}
                height={height}
                minHeight={minHeight}
                mobileBottomFullWidth={mobileBottomFullWidth}
                modalPadding={modalPadding}
            >
                <StyledModalMain>
                    {/* We show close button differently if banner is present */}
                    {banner && showCloseButton && (
                        <StyledModalAction justifyContent="end">
                            <NSButton
                                onClick={onHide}
                                variant="secondary-outlined"
                                icon="close"
                                ariaLabel="Close"
                                isIconButton
                            />
                        </StyledModalAction>
                    )}

                    {banner && <StyledModalBanner>{banner}</StyledModalBanner>}

                    {(title || showCloseButton) && (
                        <StyledModalTitle
                            showCloseButton={showCloseButton && !banner}
                        >
                            {title}
                            {showCloseButton && !banner && (
                                <NSButton
                                    onClick={onHide}
                                    variant="secondary-outlined"
                                    icon="close"
                                    isIconButton
                                />
                            )}
                        </StyledModalTitle>
                    )}

                    {description && (
                        <StyledModalDescription>
                            {description}
                        </StyledModalDescription>
                    )}

                    {body && (
                        <StyledModalBody modalBodyMargin={modalBodyMargin}>
                            {body}
                        </StyledModalBody>
                    )}
                </StyledModalMain>

                {action && <StyledModalAction>{action}</StyledModalAction>}
            </StyledModal>
        </StyledModalWrapper>
    );
}) as React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>> & {
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

Modal.propTypes = {
    banner: PropTypes.string || PropTypes.node,
    title: PropTypes.string || PropTypes.node,
    description: PropTypes.string,
    body: PropTypes.string || PropTypes.node,
    action: PropTypes.string || PropTypes.node,
    hideOnClickAway: PropTypes.bool,
    blurBackground: PropTypes.bool,
    onHide: PropTypes.func,
    mobileBottomFullWidth: PropTypes.bool,
    modalPadding: PropTypes.string,
    modalBodyMargin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    minHeight: PropTypes.string,
    showCloseButton: PropTypes.bool,
};

Modal.defaultProps = {
    banner: null,
    title: null,
    description: null,
    body: null,
    action: null,
    hideOnClickAway: false,
    blurBackground: false,
    onHide: () => {},
    mobileBottomFullWidth: false,
    modalPadding: '20px',
    modalBodyMargin: null,
    width: null,
    height: null,
    minHeight: null,
    showCloseButton: false,
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