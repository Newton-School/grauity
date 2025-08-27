import React from 'react';

import { StyledDivProps } from '../../../common/types';

export interface DrawerProps {
    /**
     * The content to be displayed inside the Drawer.
     */
    children?: React.ReactNode;

    /**
     * Determines whether the Drawer is open or closed.
     * @default false
     */
    isOpen?: boolean;

    /**
     * Callback function to be called when the Drawer is requested to be closed.
     * @default () => {}
     */
    onClose?: () => void;

    /**
     * If true, the Drawer will take up the full screen.
     * @default false
     */
    fullScreen?: boolean;

    /**
     * If true, the Drawer will close when the backdrop is clicked.
     * @default true
     */
    closeOnBackdropClick?: boolean;

    /**
     * The width of the Drawer.
     * @default '30%'
     */
    width?: string;

    /**
     * The side from which the Drawer opens.
     * @default 'left'
     */
    position?: 'left' | 'right';

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

    /**
     * Custom styles to override drawer styling
     */
    styles?: React.CSSProperties;
}

export interface StyledDrawerProps extends StyledDivProps {
    $isOpen?: boolean;
    $width: string;
    $fullScreen?: boolean;
    $position: 'left' | 'right';
}

export interface StyledDrawerContentProps extends StyledDivProps {
    $width?: string;
}
