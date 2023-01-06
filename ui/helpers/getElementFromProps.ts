import * as React from 'react';
import styled from 'styled-components';

/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {object} props A ReactElement props object
 * @returns {string|function} A ReactElement type
 */

function getStyledElementFunction(props: {
    as: React.ElementType;
    href?: string;
}) {
    // ----------------------------------------
    // user defined "as" element type

    if (props.as) return styled(props.as);

    // ----------------------------------------
    // infer anchor links

    if (props.href) return styled('a');

    // ----------------------------------------
    // use defaultProp or 'div'

    return styled('div');
}

/**
 * Returns an element() type based on the props of the Component.
 *
 * @param {object} props A ReactElement props object
 * @param {string} className className to pass to the element
 *
 * @returns {string|function} A ReactElement type
 */
function getElement(
    props: {
        as: React.ElementType;
        href?: string;
    },
    className: string
) {
    const styledElementFunction = getStyledElementFunction(props);

    return styledElementFunction.attrs({
        className,
    })``;
}

export { getElement, getStyledElementFunction };
