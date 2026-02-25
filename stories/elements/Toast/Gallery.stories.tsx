import React from 'react';
import Toast from 'ui/elements/Toast';

export default {
    title: 'Elements/Toast/Gallery',
    component: Toast,
    parameters: {
        docs: {
            description: {
                story: 'Gallery showcasing all Toast variants across different devices, variant levels, and colors.',
            },
        },
    },
};

const toastColors = ['warning', 'brand', 'neutral', 'success', 'error'] as const;
const variantLevels = ['low', 'medium', 'high'] as const;
const devices = ['desktop', 'mobile'] as const;

export const AllVariants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
        <h2>Toast Gallery - All Variants</h2>
        
        {devices.map(device => (
            <div key={device} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ textTransform: 'capitalize', marginBottom: '8px' }}>{device} Device</h3>
                
                {variantLevels.map(variant => (
                    <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ 
                            textTransform: 'capitalize', 
                            margin: '8px 0 4px 0',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#666'
                        }}>
                            {variant} Variant
                        </h4>
                        
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: device === 'mobile' ? 'column' : 'row',
                            flexWrap: 'wrap',
                            gap: '12px' 
                        }}>
                            {toastColors.map(color => (
                                <Toast
                                    key={`${device}-${variant}-${color}`}
                                    device={device}
                                    variant={variant}
                                    color={color}
                                    title={`${color.charAt(0).toUpperCase() + color.slice(1)} toast`}
                                    showLeftIcon={true}
                                    showCloseIcon={true}
                                    style={{ 
                                        maxWidth: device === 'mobile' ? '336px' : '440px',
                                        flex: device === 'desktop' ? '0 0 auto' : 'none'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
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
                            showCTA={true}
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

export const PositioningExamples = () => (
    <div style={{ position: 'relative', height: '400px', padding: '20px', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ margin: '0 0 20px 0' }}>Toast Positioning Examples (using style prop)</h2>
        
        {/* Top Right */}
        <Toast
            color="success"
            title="Top Right"
            style={{ position: 'absolute', top: '60px', right: '20px', maxWidth: '440px' }}
        />
        
        {/* Top Left */}
        <Toast
            color="brand"
            title="Top Left"
            style={{ position: 'absolute', top: '60px', left: '20px', maxWidth: '440px' }}
        />
        
        {/* Bottom Right */}
        <Toast
            color="warning"
            title="Bottom Right"
            style={{ position: 'absolute', bottom: '20px', right: '20px', maxWidth: '440px' }}
        />
        
        {/* Bottom Left */}
        <Toast
            color="error"
            title="Bottom Left"
            style={{ position: 'absolute', bottom: '20px', left: '20px', maxWidth: '440px' }}
        />
        
        {/* Center */}
        <Toast
            color="neutral"
            variant="high"
            title="Centered"
            style={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                maxWidth: '440px',
                transform: 'translate(-50%, -50%)'
            }}
        />
    </div>
);