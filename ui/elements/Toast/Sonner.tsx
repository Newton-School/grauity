import React from 'react';
import { toast, Toaster as SonnerToaster } from 'sonner';
import { createGlobalStyle } from 'styled-components';

import NSToast from './Toast';
import type { ToastPlacement, ToastProps } from './types';

export type NSToasterProps = React.ComponentProps<typeof SonnerToaster>;

/**
 * Sonner ships with a 356px-wide toaster centered with `translateX(-50%)`.
 * NSToasts (especially the `rich` variant at 800px) are wider than that,
 * so the inner `[data-sonner-toast]` ends up visually right-shifted for
 * any `*-center` position.
 *
 * We override the inner toast for center positions so it centers itself
 * around the toaster's anchor point (which sits at the viewport center).
 * The pattern composes with Sonner's animation transform via `var(--y)`,
 * preserving slide-in/out animations for stacked toasts.
 */
const NSToasterGlobalStyles = createGlobalStyle`
    [data-sonner-toaster][data-x-position='center'] [data-sonner-toast] {
        left: 50%;
        right: auto;
        transform: translateX(-50%) var(--y);
    }

    /* Sonner's mobile media query forces width: calc(100% - mobile-offset*2)
     * on every toast which would override our rich card's 336px design width.
     * Restore intrinsic width for our custom toasts so the styled container
     * keeps its design dimensions (centered horizontally as above). */
    @media only screen and (max-width: 600px) {
        [data-sonner-toaster][data-x-position='center'] [data-sonner-toast] {
            width: auto;
            left: 50%;
            right: auto;
            transform: translateX(-50%) var(--y);
        }
    }
`;

export const NSToaster: React.FC<NSToasterProps> = (props) => {
    return (
        <>
            <NSToasterGlobalStyles />
            <SonnerToaster
                closeButton={false}
                richColors={false}
                expand={false}
                {...props}
            />
        </>
    );
};

export type NsToastOptions = {
    duration?: number;
    placement?: ToastPlacement;
    position?:
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right';
};

const mapPlacementToSonner = (
    placement: ToastPlacement | undefined,
    device: ToastProps['device'] | undefined
): NsToastOptions['position'] | undefined => {
    if (!placement) {
        return undefined;
    }
    if (device === 'mobile') {
        return placement === 'top' ? 'top-center' : 'bottom-center';
    }
    switch (placement) {
        case 'top-left':
        case 'top-right':
        case 'bottom-left':
        case 'bottom-right':
        case 'top-center':
        case 'bottom-center':
            return placement;
        default:
            return undefined;
    }
};

export const nsToast = (props: ToastProps & NsToastOptions) => {
    const { duration, placement, position, ...toastProps } = props;
    const sonnerPosition =
        position || mapPlacementToSonner(placement, toastProps.device);

    const id = toast.custom(
        (t) => (
            <NSToast
                {...toastProps}
                onClose={() => toast.dismiss(t)}
                onCTAClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    toastProps.onCTAClick?.(e);
                    toast.dismiss(t);
                }}
            />
        ),
        {
            duration: (toastProps.autoClose as number) || duration || 3000,
            position: sonnerPosition as any,
            // Strip Sonner's default container chrome so the NSToast component
            // owns sizing/visuals. `width: auto` lets the inner toast grow to
            // its natural width (e.g. 800px for rich) so the centering rule
            // above can reposition it around the viewport center.
            unstyled: true,
            style: {
                width: 'auto',
                padding: 0,
                background: 'transparent',
                boxShadow: 'none',
                border: 'none',
            },
        }
    );
    return id;
};

export const nsToastDismiss = (id?: string) => toast.dismiss(id);
