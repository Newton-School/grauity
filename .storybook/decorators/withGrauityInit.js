import React from 'react';

import { GrauityInit } from '../../ui';

/**
 * This decorator is used to wrap the Storybook stories with GrauityInit
 */
const withGrauityInit = (Story, context) => {
    return (
        <GrauityInit fontSize={'16px'} multiplier={1}>
            <Story />
        </GrauityInit>
    );
};

export default withGrauityInit;
