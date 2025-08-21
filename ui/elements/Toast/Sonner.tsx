import React from 'react';
import { Toaster as SonnerToaster, toast } from 'sonner';

import NSToast from './Toast';
import type { ToastPlacement, ToastProps } from './types';

export type NSToasterProps = React.ComponentProps<typeof SonnerToaster>;

export const NSToaster: React.FC<NSToasterProps> = (props) => {
    return <SonnerToaster closeButton={false} richColors={false} expand={false} {...props} />;
};

export type NsToastOptions = {
    duration?: number;
    placement?: ToastPlacement;
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
};

const mapPlacementToSonner = (
    placement: ToastPlacement | undefined,
    device: ToastProps['device'] | undefined
) => {
    if (!placement) return undefined;
    if (device === 'mobile') {
        return placement === 'top' ? 'top-center' : 'bottom-center';
    }
    // Desktop
    switch (placement) {
        case 'top-left':
        case 'top-right':
        case 'bottom-left':
        case 'bottom-right':
            return placement;
        default:
            return undefined;
    }
};

export const nsToast = (props: ToastProps & NsToastOptions) => {
    const { duration, placement, position, ...toastProps } = props;
    const sonnerPosition = position || mapPlacementToSonner(placement, toastProps.device);
    const id = toast.custom(
        (t) => (
            <NSToast
                {...toastProps}
                // Do not pass placement into the toast when using Sonner positioning
                // to avoid conflicting fixed styles inside the custom content
                onClose={() => toast.dismiss(t)}
                onCTAClick={(e: any) => {
                    toastProps.onCTAClick?.(e);
                    toast.dismiss(t);
                }}
            />
        ),
        {
            duration: (toastProps.autoClose as number) || duration || 3000,
            position: sonnerPosition as any,
        }
    );
    return id;
};

export const nsToastDismiss = (id?: string) => toast.dismiss(id);