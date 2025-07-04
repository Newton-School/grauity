import React from 'react';

import { StyledDivProps } from '../../../common/types';

export type DrawerSide = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
    /**
     * Determines whether the Drawer is open.
     * @default false
     */
    isOpen?: boolean;

    /**
     * Callback function to be called when the Drawer requests to be closed.
     * @default () => {}
     */
    onClose?: () => void;

    /**
     * Side of the screen from which the Drawer should appear.
     * @default 'right'
     */
    side?: DrawerSide;

    /**
     * If true, the Drawer will close when the backdrop is clicked.
     * @default true
     */
    closeOnBackdropClick?: boolean;

    /**
     * If true, the Drawer will take up the full screen.
     * @default false
     */
    fullScreen?: boolean;

    /**
     * Width of the Drawer when appearing from left or right.
     * @default '400px'
     */
    width?: string;

    /**
     * Height of the Drawer when appearing from top or bottom.
     * @default '50%'
     */
    height?: string;

    /**
     * Determines whether the close button should be shown.
     * @default true
     */
    showCloseButton?: boolean;

    /**
     * Title for the Drawer header.
     */
    title?: React.ReactNode;

    /**
     * Subtitle for the Drawer header.
     */
    subtitle?: React.ReactNode;

    /**
     * Content of the Drawer.
     */
    children?: React.ReactNode;

    /**
     * Additional class name to be passed to the Drawer.
     */
    className?: string;

    /**
     * Should focus on the first element in the drawer
     * @default true
     */
    shouldFocusOnFirstElement?: boolean;

    /**
     * Flag to determine if the background scroll should be disabled.
     * @default true
     */
    shouldDisableScroll?: boolean;
}

export interface StyledDrawerProps extends StyledDivProps {
    $side: DrawerSide;
    $fullScreen?: boolean;
    $width?: string;
    $height?: string;
}
