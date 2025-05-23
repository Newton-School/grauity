import React from 'react';

// import { StyledDivProps } from '../../../common/types';

export type PopOverDirection = 'top' | 'right' | 'bottom' | 'left';

export type PopOverOffset = {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
};

export type PopoverPosition = {
    top: number;
    left: number;
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
    triggerRef?: React.RefObject<any>;

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
    parentRef?: React.RefObject<any>;

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

    /**
     * Flag to disable the background scroll when the PopOver is open.
     * @default false
     */
    disableBackgroundScroll?: boolean;

    /**
     * Width of the PopOver Content.
     */
    width?: string;

    /**
     * Height of the PopOver Content.
     */
    height?: string;

    /**
     * Custom position of the PopOver.
     * This will directly open the popover at given position without any adjustments.
     */
    position?: PopoverPosition;

    /**
     * Should focus on the first element in the popover
     * @default true
     */
    shouldFocusOnFirstElement?: boolean;

    /**
     * Optional translation offsets applied via CSS transform.
     * Useful when you want to visually shift the PopOver content.
     * @default { x: 0, y: 0 }
     */
    popOverTranslation?: {
        x?: number;
        y?: number;
    };
}

export interface StyledPopOverContainerProps {
    $offset?: PopOverOffset | null;
}
