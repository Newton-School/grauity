import React from 'react';

import { GrauityInit } from 'ui/elements/init';

function GrauityInitExample() {
    return (
        <GrauityInit multiplier={1} fontSize="16px">
            <div className="font-size-16">This is what 1em will look like.</div>
        </GrauityInit>
    );
}

export default GrauityInitExample;
