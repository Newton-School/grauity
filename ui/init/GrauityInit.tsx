import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export interface GrauityInitProps {
    as: React.ElementType;
    multiplier?: number;
}

function GrauityInit({ as, multiplier }: GrauityInitProps) {
    const StyledGrauityInit = styled(as).attrs({
        className: 'grauity-init',
    })`
        font-size: calc(${multiplier} * 16px);
        --multiplier: ${multiplier};
    `;

    return <StyledGrauityInit />;
}

GrauityInit.propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.elementType,

    /** A number to scale and set the ems for all the grauity components */
    multiplier: PropTypes.number,
};

GrauityInit.defaultProps = {
    as: 'div',
    multiplier: 1,
};

export default GrauityInit;
