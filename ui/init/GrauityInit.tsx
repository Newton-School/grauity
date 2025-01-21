import * as React from 'react';
import styled from 'styled-components';

export interface GrauityInitProps {
    /**
     * An element type to render as (string or function).
     * */
    as?: any;

    /**
     * The font size to be applied on this element and so will act as standard for the `ems` of all grauity components.
     * */
    fontSize?: string;

    /**
     * The multiplier is multiplied will all the `ems` of the grauity components.
     * */
    multiplier?: number;

    /**
     * Additional classes to be added to the component
     * */
    className?: string;

    /**
     * The children to be rendered inside this component.
     * */
    children?: React.ReactNode;

    /**
     * Additional styles to be added to the component
     * */
    style?: React.CSSProperties;
}

/**
 * This component is used to initialize the Grauity library. Ideally, it should be the root component of your application.
 * But nonetheless all the grauity components should be the children of this component.
 * */
function GrauityInit({
    as = 'div',
    fontSize = '16px',
    multiplier = 1,
    className = 'grauity-init',
    style = {},
    children = null,
}: GrauityInitProps) {
    const ElementType: React.ElementType = styled.div.attrs(() => ({
        as: as || 'div',
    }))<GrauityInitProps>``;

    return (
        <ElementType
            className={className}
            style={{
                ...style,
                fontSize,
                '--multiplier': multiplier,
            }}
        >
            {children}
        </ElementType>
    );
}

export default GrauityInit;
