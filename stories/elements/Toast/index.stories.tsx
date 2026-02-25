import React from 'react';
import Toast, { ToastProps } from 'ui/elements/Toast';
import { NSToaster, nsToast } from 'ui';

export default {
    title: 'Elements/Toast',
    component: Toast,
    argTypes: {
        device: {
            control: { type: 'select' },
            options: ['desktop', 'mobile'],
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
        autoClose: {
            control: { type: 'number' },
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'A Toast component for displaying brief, non-intrusive messages to users. Supports multiple devices, variants, colors, and optional actions.',
            },
        },
    },
};

const Template = (args: ToastProps) => <Toast {...args} />;

const defaultArgs: ToastProps = {
    device: 'desktop',
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