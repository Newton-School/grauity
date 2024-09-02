import * as React from 'react';
import styled from 'styled-components';

/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {object} props A ReactElement props object
 * @returns {string|function} A ReactElement type
 */

function getElementTypeFromProps(props: {
    as: React.ElementType;
    href?: string;
}) {
    // ----------------------------------------
    // user defined "as" element type

    if (props.as) {
        return styled(props.as)``;
    }

    // ----------------------------------------
    // infer anchor links

    if (props.href) {
        return styled('a')``;
    }

    // ----------------------------------------
    // use defaultProp or 'div'

    return styled('div')``;
}

export default getElementTypeFromProps;
