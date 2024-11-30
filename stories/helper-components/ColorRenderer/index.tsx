import React from 'react';

interface ColorRendererProps {
    color?: string;
}

export const ColorRenderer = ({
    color = 'var(--color-primary, #0073e6)',
}: ColorRendererProps) => (
    <div
        style={{
            width: '36px',
            height: '36px',
            backgroundColor: `${color}`,
            border: '1px solid var(--border, #e1e5ea)',
            borderRadius: 'var(--corner-radius-4px, 4px)',
            boxSizing: 'border-box',
        }}
    />
);
