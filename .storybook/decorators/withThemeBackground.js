import React from 'react';
import styled, { css } from 'styled-components';

const StyledThemeBackgroundContainer = styled.div(({ theme, left, fill }) => {
    return css`
        position: static;
        top: 0;
        left: ${left || fill ? 0 : '50vw'};
        border-right: ${left ? '1px solid #202020' : 'none'};
        right: ${left ? '50%' : 0};
        width: ${fill ? '100%' : '50%'};
        bottom: 0;
        background: var(--bg-subtle-primary-default, #ffffff);
    `;
});

/**
 * This is a decorator which wraps the stories with a container
 * with background color based on the theme.
 */
const withThemeBackground = (Story, context) => {
    return (
        <StyledThemeBackgroundContainer fill>
            <Story />
        </StyledThemeBackgroundContainer>
    );
};

export default withThemeBackground;
