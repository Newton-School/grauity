import * as React from 'react';

import { StyledDivProps } from '../../../common/types';
import { IconProps } from '../Icon/types';

/**
 * Props for the IconGroup component.
 */
export interface IconGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Array of icon props to render inside the group */
    icons?: IconProps[];
    /** Child nodes to be rendered inside the group */
    children?: React.ReactNode;
    /** Additional CSS class name(s) */
    className?: string;
    /** Size of the icons */
    size?: IconProps['size'];
    /** Color of the icons */
    color?: IconProps['color'];
    /** Whether the icons are laid out horizontally */
    horizontal?: boolean;
    /** Spacing between icons */
    spacing?: string;
}

/**
 * Props for the styled IconGroup container.
 */
export interface StyledIconGroupProps extends StyledDivProps {
    /** Whether the icons are laid out horizontally */
    horizontal: boolean;
    /** Spacing between icons */
    spacing: string;
}
