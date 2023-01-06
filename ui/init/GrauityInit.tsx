import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export interface GrauityInitProps {
    as: React.ElementType;
    multiplier?: number;
    children?: React.ReactNode;
}

function GrauityInit({ as, multiplier, children }: GrauityInitProps) {
    const StyledGrauityInit = styled(as).attrs({
        className: 'grauity-init',
    })`
        font-size: calc(${multiplier} * 16px);
        --multiplier: ${multiplier};
    `;

    return <StyledGrauityInit>{children}</StyledGrauityInit>;
}

GrauityInit.propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.elementType,

    /** A number to scale and set the ems for all the grauity components */
    multiplier: PropTypes.number,

    /** React children */
    children: PropTypes.node,
};

GrauityInit.defaultProps = {
    as: 'div',
    multiplier: 1,
    children: null,
};

export default GrauityInit;
