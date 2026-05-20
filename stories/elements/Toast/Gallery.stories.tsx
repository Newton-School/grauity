import React from 'react';
import Toast from 'ui/elements/Toast';

export default {
    title: 'Elements/Toast/Gallery',
    component: Toast,
    parameters: {
        docs: {
            description: {
                story: 'Gallery showcasing all Toast variants across emphasis levels and colors.',
            },
        },
    },
};

const toastColors = ['warning', 'brand', 'neutral', 'success', 'error'] as const;
const variantLevels = ['primary', 'secondary', 'tertiary'] as const;

export const AllVariants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
        <h2>Toast Gallery - All Variants</h2>

        {variantLevels.map(variant => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{
                    textTransform: 'capitalize',
                    margin: '8px 0 4px 0',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#666',
                }}>
                    {variant} Variant
                </h3>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}>
                    {toastColors.map(color => (
                        <Toast
                            key={`${variant}-${color}`}
                            variant={variant}
                            color={color}
                            title={`${color.charAt(0).toUpperCase() + color.slice(1)} toast`}
                            showLeftIcon
                            showCloseIcon
                            style={{ maxWidth: '440px', flex: '0 0 auto' }}
                        />
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export const WithCTAVariants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
        <h2>Toast with CTA Buttons</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {toastColors.map(color => (
                <div key={color} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {variantLevels.map(variant => (
                        <Toast
                            key={`${color}-${variant}-cta`}
                            color={color}
                            variant={variant}
                            title={`${color.charAt(0).toUpperCase() + color.slice(1)} notification`}
                            showCTA
                            ctaText="Action"
                            onCTAClick={() => console.log(`${color} ${variant} CTA clicked`)}
                            style={{ maxWidth: '440px' }}
                        />
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export const IconVariants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
        <h2>Toast Icon Variants</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3>Default Color Icons</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {toastColors.map(color => (
                    <Toast
                        key={`default-icon-${color}`}
                        color={color}
                        title={`${color.charAt(0).toUpperCase() + color.slice(1)} toast`}
                        style={{ maxWidth: '440px' }}
                    />
                ))}
            </div>

            <h3>Custom Icons</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Toast
                    color="brand"
                    leftIcon="bell"
                    title="Custom bell icon"
                    style={{ maxWidth: '440px' }}
                />
                <Toast
                    color="neutral"
                    leftIcon="download"
                    title="Download complete"
                    style={{ maxWidth: '440px' }}
                />
                <Toast
                    color="success"
                    leftIcon="upload"
                    title="Upload successful"
                    style={{ maxWidth: '440px' }}
                />
            </div>

            <h3>No Icon</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Toast
                    color="neutral"
                    showLeftIcon={false}
                    title="No icon toast"
                    style={{ maxWidth: '440px' }}
                />
            </div>
        </div>
    </div>
);

const richReferralImage = (
    <div
        aria-hidden="true"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ef9d1a 0%, #d0850b 100%)',
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

export const RichVariants = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '20px',
        }}
    >
        <h2>Rich Toast Gallery</h2>

        {variantLevels.map((variant) => (
            <div
                key={variant}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
                <h3 style={{
                    textTransform: 'capitalize',
                    margin: '8px 0 4px 0',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#666',
                }}>
                    {variant} Variant
                </h3>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                    }}
                >
                    {toastColors.map((color) => (
                        <Toast
                            key={`rich-${variant}-${color}`}
                            type="rich"
                            variant={variant}
                            color={color}
                            title={`${color.charAt(0).toUpperCase() + color.slice(1)} title`}
                            subtitle="A short description that explains the action a user should take."
                            image={richReferralImage}
                            showCTA
                            ctaText="Primary CTA"
                            secondaryCTA={{
                                icon: 'info-circle',
                                ariaLabel: 'More info',
                            }}
                        />
                    ))}
                </div>
            </div>
        ))}
    </div>
);

export const PositioningExamples = () => (
    <div style={{ position: 'relative', height: '400px', padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ margin: '0 0 20px 0' }}>Toast Positioning Examples (using style prop)</h2>

        <Toast
            color="success"
            title="Top Right"
            style={{ position: 'absolute', top: '60px', right: '20px', maxWidth: '440px' }}
        />

        <Toast
            color="brand"
            title="Top Left"
            style={{ position: 'absolute', top: '60px', left: '20px', maxWidth: '440px' }}
        />

        <Toast
            color="warning"
            title="Bottom Right"
            style={{ position: 'absolute', bottom: '20px', right: '20px', maxWidth: '440px' }}
        />

        <Toast
            color="error"
            title="Bottom Left"
            style={{ position: 'absolute', bottom: '20px', left: '20px', maxWidth: '440px' }}
        />

        <Toast
            color="neutral"
            variant="tertiary"
            title="Centered"
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                maxWidth: '440px',
                transform: 'translate(-50%, -50%)',
            }}
        />
    </div>
);
