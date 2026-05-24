import React from 'react';
import Toast, { ToastProps } from 'ui/elements/Toast';
import { nsToast, NSToaster } from 'ui/index';

// A small curated list of icons that read well at the toast sizes; users can
// still type any valid grauity icon name into the control.
const COMMON_ICONS = [
    undefined,
    'check-circle',
    'check-badge-filled',
    'info-circle',
    'info-circle-filled',
    'exclamation-triangle',
    'exclamation-triangle-filled',
    'exclamation-circle',
    'exclamation-circle-filled',
    'bell',
    'bell-filled',
    'bulb',
    'bulb-filled',
    'arrow-right',
    'arrow-right-filled',
    'copy',
    'close',
];

export default {
    title: 'Elements/Toast',
    component: Toast,
    argTypes: {
        type: {
            description:
                'Layout of the toast. `simple` is a one-line message; `rich` is a card with title, subtitle, primary + secondary CTAs and close.',
            control: { type: 'inline-radio' },
            options: ['simple', 'rich'],
            table: { defaultValue: { summary: 'simple' } },
        },
        variant: {
            description:
                'Emphasis level. `primary` is subtle, `secondary` is the default tinted style, `tertiary` is the solid attention-grabbing style.',
            control: { type: 'inline-radio' },
            options: ['primary', 'secondary', 'tertiary'],
            table: { defaultValue: { summary: 'secondary' } },
        },
        color: {
            description: 'Semantic color of the toast.',
            control: { type: 'select' },
            options: ['neutral', 'brand', 'success', 'warning', 'error'],
            table: { defaultValue: { summary: 'neutral' } },
        },
        title: {
            description:
                'Main message. For `rich`, leaving this `undefined` shows a placeholder; pass `null` to suppress.',
            control: 'text',
        },
        subtitle: {
            description:
                'Description shown beneath the title. **Always single-line** on wide viewports — content longer than the available width is truncated with an ellipsis. For `rich`, leaving this `undefined` shows a placeholder; pass `null` to suppress.',
            control: 'text',
        },
        showLeftIcon: {
            description:
                'Toggle the leading icon. When hidden, the leading slot is removed entirely.',
            control: { type: 'boolean' },
            table: { defaultValue: { summary: 'true' } },
        },
        leftIcon: {
            description:
                'Override the default semantic icon. Accepts any grauity icon name.',
            control: { type: 'select' },
            options: COMMON_ICONS,
        },
        showCloseIcon: {
            description: 'Show/hide the close IconButton.',
            control: { type: 'boolean' },
            table: { defaultValue: { summary: 'true' } },
        },
        showCTA: {
            description:
                'Show/hide the primary CTA Button. Defaults to `true` for `rich`, `false` for `simple`.',
            control: { type: 'boolean' },
        },
        ctaText: {
            description: 'Label for the primary CTA button.',
            control: 'text',
            table: { defaultValue: { summary: 'Action' } },
        },
        primaryCTAIcon: {
            description:
                'Optional leading icon shown inside the primary CTA. `rich` only.',
            control: { type: 'select' },
            options: COMMON_ICONS,
        },
        showSecondaryCTA: {
            description:
                'Show/hide the secondary IconButton. Defaults to `true` for `rich`. Pass `false` to hide it without clearing `secondaryCTA`.',
            control: { type: 'boolean' },
        },
        secondaryCTAIcon: {
            description:
                '[Storybook only] Convenience control to set the secondary CTA icon. In code, pass the full `secondaryCTA` object.',
            control: { type: 'select' },
            options: COMMON_ICONS,
        },
        autoClose: {
            description:
                'Auto-dismiss timeout in ms. Set to `null` or `0` to disable.',
            control: { type: 'number' },
        },
        placement: {
            description:
                'Built-in fixed placement (overrides parent layout). Use `position` instead when triggering via `nsToast`.',
            control: { type: 'select' },
            options: [
                undefined,
                'top-left',
                'top-center',
                'top-right',
                'bottom-left',
                'bottom-center',
                'bottom-right',
            ],
        },
        xOffset: {
            description: 'Horizontal offset (px) when `placement` is set.',
            control: { type: 'number' },
            table: { defaultValue: { summary: '16' } },
        },
        yOffset: {
            description: 'Vertical offset (px) when `placement` is set.',
            control: { type: 'number' },
            table: { defaultValue: { summary: '16' } },
        },
        maxWidth: {
            description:
                'Override the default container max-width. Useful for clamping the rich card if you need it narrower than 800px.',
            control: 'text',
        },
        // Hide handlers and structural slots from the control panel.
        onClose: { table: { disable: true } },
        onCTAClick: { table: { disable: true } },
        onAutoClose: { table: { disable: true } },
        secondaryCTA: { table: { disable: true } },
        image: { table: { disable: true } },
        className: { table: { disable: true } },
        style: { table: { disable: true } },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Toast component for displaying brief, non-intrusive messages. Two layouts: `simple` (single line) and `rich` (card with title, subtitle, primary + secondary CTAs, and close). Layout adapts responsively to the viewport. When `rich` is selected, every slot is on by default — opt out with `showCTA: false`, `showSecondaryCTA: false`, `showCloseIcon: false`, `title: null`, `subtitle: null`.',
            },
        },
    },
};

// ---------- Helpers ----------

interface PlaygroundArgs extends ToastProps {
    secondaryCTAIcon?: string;
}

const Template = ({ secondaryCTAIcon, ...args }: PlaygroundArgs) => {
    const secondaryCTA = secondaryCTAIcon
        ? { icon: secondaryCTAIcon as any, ariaLabel: 'Secondary action' }
        : args.secondaryCTA;

    return <Toast {...args} secondaryCTA={secondaryCTA} />;
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

const baseArgs: ToastProps = {
    type: 'simple',
    variant: 'secondary',
    color: 'neutral',
    showLeftIcon: true,
    showCloseIcon: true,
    showCTA: false,
    ctaText: 'Action',
    title: 'Toast title',
    onClose: () => {},
    onCTAClick: () => {},
    autoClose: null,
};

// =====================================================================
// Playground — every prop wired to a control
// =====================================================================

export const Playground = Template.bind({});
Playground.args = {
    ...baseArgs,
    type: 'rich',
    color: 'success',
    variant: 'secondary',
    title: 'Task completed',
    subtitle:
        'Your changes have been saved and synced with the server.',
    showCTA: true,
    ctaText: 'View',
    showSecondaryCTA: true,
    secondaryCTAIcon: 'arrow-right',
    showCloseIcon: true,
} as PlaygroundArgs;
Playground.parameters = {
    docs: {
        description: {
            story:
                'Use the **Controls** panel to flip every prop and watch the toast respond live. Try switching `type` to `rich` and toggling `showCTA`, `showSecondaryCTA`, `showCloseIcon`, or clearing `title`/`subtitle`.',
        },
    },
};

// =====================================================================
// Trigger story — fires `nsToast` via Sonner
// =====================================================================

export const Trigger = (args: PlaygroundArgs) => {
    const { secondaryCTAIcon, ...rest } = args;
    return (
        <div
            style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            <NSToaster />
            <button
                type="button"
                onClick={() =>
                    nsToast({
                        ...rest,
                        secondaryCTA: secondaryCTAIcon
                            ? {
                                icon: secondaryCTAIcon as any,
                                ariaLabel: 'Secondary action',
                            }
                            : rest.secondaryCTA,
                        position: 'top-right',
                    })
                }
                style={{
                    padding: '10px 16px',
                    borderRadius: 8,
                    border: '1px solid #ddd',
                    cursor: 'pointer',
                }}
            >
                Trigger toast
            </button>
            <button
                type="button"
                onClick={() =>
                    nsToast({
                        ...rest,
                        secondaryCTA: secondaryCTAIcon
                            ? {
                                icon: secondaryCTAIcon as any,
                                ariaLabel: 'Secondary action',
                            }
                            : rest.secondaryCTA,
                        position: 'bottom-center',
                    })
                }
                style={{
                    padding: '10px 16px',
                    borderRadius: 8,
                    border: '1px solid #ddd',
                    cursor: 'pointer',
                }}
            >
                Trigger centered toast
            </button>
        </div>
    );
};
Trigger.args = {
    ...baseArgs,
    type: 'rich',
    color: 'success',
    title: 'Earn ₹500 on each referral',
    subtitle: 'Invite friends and earn ₹500 on each successful referral',
    showCTA: true,
    ctaText: 'Copy link',
    primaryCTAIcon: 'copy',
    showSecondaryCTA: true,
    secondaryCTAIcon: 'arrow-right',
} as PlaygroundArgs;
Trigger.parameters = {
    docs: {
        description: {
            story:
                'Click the buttons to fire the configured toast through `nsToast` (the Sonner-backed adapter). Adjust controls to test how it actually renders in production.',
        },
    },
};

// =====================================================================
// Simple variant gallery
// =====================================================================

export const SimpleNeutral = Template.bind({});
SimpleNeutral.args = { ...baseArgs };

export const SimpleSuccess = Template.bind({});
SimpleSuccess.args = { ...baseArgs, color: 'success', title: 'Saved!' };

export const SimpleError = Template.bind({});
SimpleError.args = {
    ...baseArgs,
    color: 'error',
    title: 'Something went wrong',
    showCTA: true,
    ctaText: 'Retry',
};

export const SimpleWarning = Template.bind({});
SimpleWarning.args = {
    ...baseArgs,
    color: 'warning',
    title: 'Heads up — payment due tomorrow',
};

export const SimpleBrand = Template.bind({});
SimpleBrand.args = {
    ...baseArgs,
    color: 'brand',
    title: 'New feature available',
    showCTA: true,
    ctaText: 'Learn more',
};

export const SimpleTertiaryEmphasis = Template.bind({});
SimpleTertiaryEmphasis.args = {
    ...baseArgs,
    variant: 'tertiary',
    color: 'error',
    title: 'Critical error',
    showCTA: true,
    ctaText: 'Fix now',
};

export const SimpleNarrowViewport = Template.bind({});
SimpleNarrowViewport.args = {
    ...baseArgs,
    color: 'success',
    title: 'Upload complete',
    style: { maxWidth: '336px' },
};

// =====================================================================
// Rich variant gallery
// =====================================================================

export const RichDefault = Template.bind({});
RichDefault.args = {
    ...baseArgs,
    type: 'rich',
    color: 'success',
};
RichDefault.parameters = {
    docs: {
        description: {
            story:
                'Bare-minimum rich call. Every slot is filled with sensible defaults — flip controls to remove what you don\'t want.',
        },
    },
};

export const RichReferral = Template.bind({});
RichReferral.args = {
    ...baseArgs,
    type: 'rich',
    color: 'warning',
    variant: 'secondary',
    title: 'Earn ₹500 on each referral',
    subtitle:
        'Invite friends and earn ₹500 on each successful referral, paid to your wallet',
    image: referralImage,
    showCTA: true,
    ctaText: 'Copy referral link',
    primaryCTAIcon: 'copy',
    showSecondaryCTA: true,
    secondaryCTA: { icon: 'info-circle', ariaLabel: 'More info' },
};

export const RichTruncatedSubtitle = Template.bind({});
RichTruncatedSubtitle.args = {
    ...baseArgs,
    type: 'rich',
    color: 'brand',
    title: 'Heads up',
    subtitle:
        'This is an intentionally very long subtitle that should be clipped with an ellipsis once it runs out of horizontal room inside the rich card.',
    showCTA: true,
    ctaText: 'Open',
};

export const RichWithoutCTAs = Template.bind({});
RichWithoutCTAs.args = {
    ...baseArgs,
    type: 'rich',
    color: 'neutral',
    title: 'Title only',
    subtitle: 'No CTAs, no close button — purely informational.',
    showCTA: false,
    showSecondaryCTA: false,
    showCloseIcon: false,
};

export const RichWithoutSubtitle = Template.bind({});
RichWithoutSubtitle.args = {
    ...baseArgs,
    type: 'rich',
    color: 'success',
    title: 'Profile updated successfully',
    subtitle: null as any,
    showCTA: true,
    ctaText: 'View profile',
};

export const RichTertiaryEmphasis = Template.bind({});
RichTertiaryEmphasis.args = {
    ...baseArgs,
    type: 'rich',
    variant: 'tertiary',
    color: 'brand',
    title: 'Welcome to grauity',
    subtitle: 'A tertiary-emphasis solid card for hero-level moments.',
    showCTA: true,
    ctaText: 'Get started',
};

export const RichNarrowViewport = Template.bind({});
RichNarrowViewport.args = {
    ...baseArgs,
    type: 'rich',
    color: 'success',
    title: 'Saved',
    subtitle: 'Your changes were saved successfully.',
    showCTA: true,
    ctaText: 'View',
    style: { maxWidth: '336px' },
};
