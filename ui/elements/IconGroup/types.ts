import * as React from 'react';
import { IconProps } from '../Icon/types';

export interface IconGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    icons?: IconProps[];
    children?: React.ReactNode;
    className?: string;
    size?: IconProps['size'];
    color?: IconProps['color'];
    horizontal?: boolean;
    spacing?: string;
}
