import { StoryFn } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

const StyledRemovedPaddingContainer = styled.div`
    margin: -1rem;
`;

/**
 * This is a decorator which removes padding from the story.
 */
const withRemovePadding = (Story: StoryFn) => (
    <StyledRemovedPaddingContainer>
        <Story />
    </StyledRemovedPaddingContainer>
);

export default withRemovePadding;
