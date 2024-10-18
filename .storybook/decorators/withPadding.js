import React from 'react';
import styled from 'styled-components';

const StyledPaddingContainer = styled.div`
    padding: 1rem;
`;

/**
 * This is a decorator which wraps the stories with a container
 * with padding.
 */
const withPadding = (Story, context) => {
    return (
        <StyledPaddingContainer>
            <Story />
        </StyledPaddingContainer>
    );
};

export default withPadding;
