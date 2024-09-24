import React from 'react';

export type PopOverDirection = 'top' | 'right' | 'bottom' | 'left';

export type PopOverOffset = {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
};

export interface PopOverProps {
    /**
     * Whether the PopOver is open or not.
     * @default false
     */
    isOpen?: boolean;

    /**
     * Ref to the trigger element. Required to calculate the position of the PopOver.
     * @default null
     */
    triggerRef?: React.RefObject<HTMLDivElement>;

    /**
     * Direction in which the PopOver should open.
     * @default bottom
     */
    direction?: PopOverDirection;

    /**
     * Content to be displayed inside the PopOver.
     */
    children?: React.ReactNode;

    /**
     * Flag to enable or disable auto adjustment of the PopOver position.
     * @default true
     */
    autoAdjust?: boolean;

    /**
     * Ref to the parent element. Required to calculate the position of the PopOver.
     * @default document.body
     */
    parentRef?: React.RefObject<HTMLDivElement>;

    /**
     * Minimum margin offset to be maintained from the parent container.
     * @default { top: 0, left: 0, right: 0, bottom: 0 }
     */
    minimumOffset?: PopOverOffset;

    /**
     * Flag to enable or disable closing the PopOver on outside click.
     * @default true
     */
    shouldCloseOnOutsideClick?: boolean;

    /**
     * Callback function triggered when the PopOver is closed.
     */
    onClose?: () => void;
}

export interface StyledDivProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement>;
}

export interface StyledPopOverContainerProps extends StyledDivProps {
    $offset?: PopOverOffset;
}
