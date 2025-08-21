import React from 'react';
import Toast from 'ui/elements/Toast';

export default {
    title: 'Elements/Toast/Gallery',
    component: Toast,
    parameters: {
        docs: {
            description: {
                story: 'Gallery showcasing all Toast variants across different devices, emphasis levels, and types.',
            },
        },
    },
};

const toastTypes = ['warning', 'brand', 'neutral', 'success', 'error'] as const;
const emphasisLevels = ['low', 'medium', 'high'] as const;
const devices = ['desktop', 'mobile'] as const;

export const AllVariants = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
        <h2>Toast Gallery - All Variants</h2>
        
        {devices.map(device => (
            <div key={device} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ textTransform: 'capitalize', marginBottom: '8px' }}>{device} Device</h3>
                
                {emphasisLevels.map(emphasis => (
                    <div key={emphasis} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ 
                            textTransform: 'capitalize', 
                            margin: '8px 0 4px 0',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#666'
                        }}>
                            {emphasis} Emphasis
                        </h4>
                        
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: device === 'mobile' ? 'column' : 'row',
                            flexWrap: 'wrap',
                            gap: '12px' 
                        }}>
                            {toastTypes.map(type => (
                                <Toast
                                    key={`${device}-${emphasis}-${type}`}
                                    device={device}
                                    emphasis={emphasis}
                                    type={type}
                                    title={`${type.charAt(0).toUpperCase() + type.slice(1)} toast`}
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
            {toastTypes.map(type => (
                <div key={type} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {emphasisLevels.map(emphasis => (
                        <Toast
                            key={`${type}-${emphasis}-cta`}
                            type={type}
                            emphasis={emphasis}
                            title={`${type.charAt(0).toUpperCase() + type.slice(1)} notification`}
                            showCTA={true}
                            ctaText="Action"
                            onCTAClick={() => console.log(`${type} ${emphasis} CTA clicked`)}
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
            <h3>Default Type Icons</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {toastTypes.map(type => (
                    <Toast
                        key={`default-icon-${type}`}
                        type={type}
                        title={`${type.charAt(0).toUpperCase() + type.slice(1)} toast`}
                        style={{ maxWidth: '440px' }}
                    />
                ))}
            </div>
            
            <h3>Custom Icons</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Toast
                    type="brand"
                    leftIcon="bell"
                    title="Custom bell icon"
                    style={{ maxWidth: '440px' }}
                />
                <Toast
                    type="neutral"
                    leftIcon="download"
                    title="Download complete"
                    style={{ maxWidth: '440px' }}
                />
                <Toast
                    type="success"
                    leftIcon="upload"
                    title="Upload successful"
                    style={{ maxWidth: '440px' }}
                />
            </div>
            
            <h3>No Icon</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Toast
                    type="neutral"
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
        <h2 style={{ margin: '0 0 20px 0' }}>Toast Positioning Examples</h2>
        
        {/* Top Right */}
        <Toast
            position="absolute"
            top="60px"
            right="20px"
            type="success"
            title="Top Right"
            style={{ maxWidth: '440px' }}
        />
        
        {/* Top Left */}
        <Toast
            position="absolute"
            top="60px"
            left="20px"
            type="brand"
            title="Top Left"
            style={{ maxWidth: '440px' }}
        />
        
        {/* Bottom Right */}
        <Toast
            position="absolute"
            bottom="20px"
            right="20px"
            type="warning"
            title="Bottom Right"
            style={{ maxWidth: '440px' }}
        />
        
        {/* Bottom Left */}
        <Toast
            position="absolute"
            bottom="20px"
            left="20px"
            type="error"
            title="Bottom Left"
            style={{ maxWidth: '440px' }}
        />
        
        {/* Center */}
        <Toast
            position="absolute"
            top="50%"
            left="50%"
            type="neutral"
            emphasis="high"
            title="Centered"
            style={{ 
                maxWidth: '440px',
                transform: 'translate(-50%, -50%)'
            }}
        />
    </div>
);