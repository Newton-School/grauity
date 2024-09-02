import PropTypes from 'prop-types';
import * as React from 'react';

import { getElementTypeFromProps } from '../helpers';

export interface GrauityInitProps {
    /**
     * An element type to render as (string or function).
     * */
    as: React.ElementType;

    /**
     * The font size to be applied on this element and so will act as standard for the `ems` of all grauity components.
     * */
    fontSize: string;

    /**
     * The multiplier is multiplied will all the `ems` of the grauity components.
     * */
    multiplier?: number;

    /**
     * The children to be rendered inside this component.
     * */
    children?: React.ReactNode;
}

/**
 * This component is used to initialize the Grauity library. Ideally, it should be the root component of your application.
 * But nonetheless all the grauity components should be the children of this component.
 * */
function GrauityInit({ as, fontSize, multiplier, children }: GrauityInitProps) {
    const ElementType = getElementTypeFromProps({ as });

    return (
        <ElementType
            className="grauity-init"
            style={{
                fontSize,
                '--multiplier': multiplier,
            }}
        >
            {children}
        </ElementType>
    );
}

GrauityInit.propTypes = {
    as: PropTypes.elementType,
    fontSize: PropTypes.string,
    multiplier: PropTypes.number,
    children: PropTypes.node,
};

GrauityInit.defaultProps = {
    as: 'div',
    fontSize: '16px',
    multiplier: 1,
    children: null,
};

export default GrauityInit;
