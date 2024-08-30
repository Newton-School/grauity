import PropTypes from 'prop-types';
import React from 'react';

import { StyledButtonGroup } from './ButtonGroup.styles';
import { ButtonGroupProps } from './types';

const ButtonGroup = ({children}: ButtonGroupProps) => (
    <StyledButtonGroup>
        {children}
    </StyledButtonGroup>
);

ButtonGroup.defaultProps = {
    children: null,
} as ButtonGroupProps;

ButtonGroup.propTypes = {
    children: PropTypes.any,
};

export default ButtonGroup;
