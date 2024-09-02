import PropTypes from 'prop-types';
import React from 'react';

export const ColorRenderer = ({ color }) => (
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            width: '32px',
            height: '32px',
            backgroundColor: `${color}`,
            padding: '0 var(--spacing-4px)',
            fontWeight: 'var(--font-weight-medium, 500)',
            border: '1px solid var(--border, #e1e5ea)',
            borderRadius: 'var(--corner-radius-4px, 4px)',
        }}
    />
);

ColorRenderer.defaultProps = {
    color: 'var(--color-primary, #0073e6)',
};

ColorRenderer.propTypes = {
    color: PropTypes.string,
};
