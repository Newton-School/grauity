import React from 'react';
import PropTypes from 'prop-types';
import { StyledTokenBlock } from './index.styles';

const TokenBlock = ({ children }) => (
    <StyledTokenBlock>{children}</StyledTokenBlock>
);

TokenBlock.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TokenBlock;
