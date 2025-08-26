import React from 'react';

interface ColorRendererProps {
    color?: string;
    size?: 'small' | 'medium' | 'large';
}

const ColorRendererSizes = {
    small: '26px',
    medium: '36px',
    large: '48px',
};

export const ColorRenderer = ({
    color = 'var(--color-primary, #0073e6)',
    size = 'medium',
}: ColorRendererProps) => (
    <div
        style={{
            width: ColorRendererSizes[size],
            height: ColorRendererSizes[size],
            minWidth: ColorRendererSizes[size],
            minHeight: ColorRendererSizes[size],
            backgroundColor: `${color}`,
            border: '1px solid var(--border-subtle-primary-default, #e1e5ea)',
            borderRadius: 'var(--corner-radius-4px, 4px)',
            boxSizing: 'border-box',
        }}
    />
);
