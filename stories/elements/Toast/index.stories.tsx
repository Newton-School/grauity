import React from 'react';
import { nsToast,NSToaster } from 'ui';
import Toast, { ToastProps } from 'ui/elements/Toast';

export default {
    title: 'Elements/Toast',
    component: Toast,
    argTypes: {
        device: {
            control: { type: 'select' },
            options: ['desktop', 'mobile'],
        },
        type: {
            control: { type: 'select' },
            options: ['simple', 'rich'],
        },
        variant: {
            control: { type: 'select' },
            options: ['low', 'medium', 'high'],
        },
        color: {
            control: { type: 'select' },
            options: ['warning', 'brand', 'neutral', 'success', 'error'],
        },
        title: {
            control: 'text',
        },
        subtitle: {
            control: 'text',
        },
        showLeftIcon: {
            control: { type: 'boolean' },
        },
        showCloseIcon: {
            control: { type: 'boolean' },
        },
        showCTA: {
            control: { type: 'boolean' },
        },
        ctaText: {
            control: 'text',
        },
        placement: {
            control: { type: 'select' },
            options: [
                undefined,
                'top-left',
                'top-center',
                'top-right',
                'bottom-left',
                'bottom-center',
                'bottom-right',
                'top',
                'bottom',
            ],
        },
        autoClose: {
            control: { type: 'number' },
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'A Toast component for displaying brief, non-intrusive messages to users. Supports multiple devices, layout types (`simple`, `rich`), variants, colors, and optional actions.',
            },
        },
    },
};

const Template = (args: ToastProps) => <Toast {...args} />;

const defaultArgs: ToastProps = {
    device: 'desktop',
    type: 'simple',
    variant: 'medium',
    color: 'neutral',
    showLeftIcon: true,
    showCloseIcon: true,
    showCTA: false,
    ctaText: 'Action',
    title: 'Toast title',
    onClose: () => console.log('Toast closed'),
    onCTAClick: () => console.log('CTA clicked'),
    autoClose: null,
};

const referralImage = (
    <div
        aria-hidden="true"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background:
                'linear-gradient(135deg, #ef9d1a 0%, #d0850b 100%)',
            color: '#ffffff',
            fontFamily: '\'Mona Sans\', sans-serif',
            fontWeight: 800,
            fontSize: '11px',
            letterSpacing: '0.05em',
        }}
    >
        ₹500
    </div>
);

export const Component = Template.bind({});
Component.args = {
    ...defaultArgs,
};

// Trigger story using Sonner adapter
export const WithTrigger = () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <NSToaster />
        <button
            type="button"
            onClick={() =>
                nsToast({
                    device: 'desktop',
                    variant: 'high',
                    color: 'brand',
                    title: 'Sonner powered NSToast',
                    showCTA: true,
                    ctaText: 'Action',
                })
            }
            style={{ padding: '8px 12px', borderRadius: 8 }}
        >
            Trigger Toast
        </button>
    </div>
);

// Success Toast
export const Success = Template.bind({});
Success.args = {
    ...defaultArgs,
    color: 'success',
    title: 'Success!',
};

// Error Toast
export const Error = Template.bind({});
Error.args = {
    ...defaultArgs,
    color: 'error',
    title: 'Error occurred',
    showCTA: true,
    ctaText: 'Retry',
};

// Warning Toast
export const Warning = Template.bind({});
Warning.args = {
    ...defaultArgs,
    color: 'warning',
    title: 'Warning',
};

// Brand Toast
export const Brand = Template.bind({});
Brand.args = {
    ...defaultArgs,
    color: 'brand',
    title: 'New feature available',
    showCTA: true,
    ctaText: 'Learn more',
};

// High Variant
export const HighVariant = Template.bind({});
HighVariant.args = {
    ...defaultArgs,
    variant: 'high',
    color: 'error',
    title: 'Critical error',
    showCTA: true,
    ctaText: 'Fix now',
};

// Mobile Version
export const Mobile = Template.bind({});
Mobile.args = {
    ...defaultArgs,
    device: 'mobile',
    color: 'success',
    title: 'Upload complete',
};

// With CTA Only
export const WithCTAOnly = Template.bind({});
WithCTAOnly.args = {
    ...defaultArgs,
    showCloseIcon: false,
    showCTA: true,
    ctaText: 'Undo',
    title: 'Item moved to trash',
};

// Auto Close
export const AutoClose = Template.bind({});
AutoClose.args = {
    ...defaultArgs,
    autoClose: 3000,
    title: 'Auto-closing toast',
};

// Minimal (No Icon, No Close)
export const Minimal = Template.bind({});
Minimal.args = {
    ...defaultArgs,
    showLeftIcon: false,
    showCloseIcon: false,
    title: 'Simple message',
};

// Custom Icon
export const CustomIcon = Template.bind({});
CustomIcon.args = {
    ...defaultArgs,
    leftIcon: 'bell',
    color: 'brand',
    title: 'Notification',
};

// Rich variant - matches the new referral design
export const Rich = Template.bind({});
Rich.args = {
    ...defaultArgs,
    type: 'rich',
    color: 'warning',
    variant: 'medium',
    title: 'Earn ₹500 on each referral',
    subtitle: 'Invite friends and earn ₹500 on each successful referral',
    image: referralImage,
    showCTA: true,
    ctaText: 'Copy Referral Link',
    primaryCTAIcon: 'copy',
    secondaryCTA: {
        icon: 'info-circle',
        ariaLabel: 'More info',
    },
};

// Rich variant on mobile
export const RichMobile = Template.bind({});
RichMobile.args = {
    ...Rich.args,
    device: 'mobile',
};

// Rich variant without subtitle
export const RichWithoutSubtitle = Template.bind({});
RichWithoutSubtitle.args = {
    ...Rich.args,
    subtitle: undefined,
    title: 'Earn ₹500 on each referral',
};

// Rich variant without secondary CTA
export const RichWithoutSecondaryCTA = Template.bind({});
RichWithoutSecondaryCTA.args = {
    ...Rich.args,
    secondaryCTA: undefined,
};

// Rich variant with default icon (no custom image)
export const RichWithDefaultIcon = Template.bind({});
RichWithDefaultIcon.args = {
    ...defaultArgs,
    type: 'rich',
    color: 'success',
    variant: 'medium',
    title: 'Profile updated successfully',
    subtitle: 'Your changes have been saved across all devices.',
    showCTA: true,
    ctaText: 'View profile',
};

// Rich variant - high emphasis
export const RichHighEmphasis = Template.bind({});
RichHighEmphasis.args = {
    ...Rich.args,
    variant: 'high',
    color: 'brand',
};

// Placement: bottom-center (desktop, simple)
export const PlacementBottomCenter = Template.bind({});
PlacementBottomCenter.args = {
    ...defaultArgs,
    placement: 'bottom-center',
    color: 'brand',
    title: 'Centered at bottom of viewport',
    showCTA: true,
    ctaText: 'Action',
};

// Placement: bottom-center (desktop, rich)
export const PlacementBottomCenterRich = Template.bind({});
PlacementBottomCenterRich.args = {
    ...Rich.args,
    placement: 'bottom-center',
};

// Placement: top-center (desktop, simple)
export const PlacementTopCenter = Template.bind({});
PlacementTopCenter.args = {
    ...defaultArgs,
    placement: 'top-center',
    color: 'success',
    title: 'Centered at top of viewport',
};

// Placement: bottom (mobile, simple)
export const PlacementMobileBottom = Template.bind({});
PlacementMobileBottom.args = {
    ...defaultArgs,
    device: 'mobile',
    placement: 'bottom',
    color: 'neutral',
    title: 'Mobile bottom placement',
};

// Placement: bottom (mobile, rich)
export const PlacementMobileBottomRich = Template.bind({});
PlacementMobileBottomRich.args = {
    ...Rich.args,
    device: 'mobile',
    placement: 'bottom',
};

// Sonner-driven trigger demonstrating bottom-center for both variants.
// Click the buttons to see the toasts pop in centered at the bottom of the
// viewport — they should be visually centered for any width (simple = 440,
// rich = 800).
export const PlacementSonnerBottomCenter = () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <NSToaster />
        <button
            type="button"
            onClick={() =>
                nsToast({
                    position: 'bottom-center',
                    color: 'brand',
                    variant: 'medium',
                    title: 'Simple toast at bottom-center',
                    showCTA: true,
                    ctaText: 'Action',
                })
            }
            style={{ padding: '8px 12px', borderRadius: 8 }}
        >
            Trigger simple bottom-center
        </button>
        <button
            type="button"
            onClick={() =>
                nsToast({
                    position: 'bottom-center',
                    type: 'rich',
                    color: 'warning',
                    variant: 'medium',
                    title: 'Earn ₹500 on each referral',
                    subtitle:
                        'Invite friends and earn ₹500 on each successful referral',
                    image: referralImage,
                    ctaText: 'Copy Referral Link',
                    primaryCTAIcon: 'copy',
                    secondaryCTA: {
                        icon: 'info-circle',
                        ariaLabel: 'More info',
                    },
                })
            }
            style={{ padding: '8px 12px', borderRadius: 8 }}
        >
            Trigger rich bottom-center
        </button>
    </div>
);