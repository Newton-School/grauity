import { ReactNode } from 'react';
import { AlertBannerProps } from 'ui/elements/AlertBanner';

export interface TableDecoratorProps {
    children: ReactNode;
    alertBannerProps: AlertBannerProps;
}
