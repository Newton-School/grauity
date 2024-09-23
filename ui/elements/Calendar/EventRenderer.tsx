import React from 'react';

import { EventRendererProps } from './types';

const EventRenderer = ({
    event,
    eventRenderer,
}: EventRendererProps): React.ReactElement => {
    if (typeof event.render === 'function') {
        return <>{event.render(event)}</>;
    }

    if (typeof eventRenderer === 'function') {
        return <>{eventRenderer(event)}</>;
    }

    return <div>Event</div>;
};

export default EventRenderer;
