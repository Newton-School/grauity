import React from 'react';

import CalendarEvent from '../CalendarEvent/CalendarEvent';
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

    return (
        <CalendarEvent
            title={event.title || 'Event'}
            start={event.start}
            end={event.end}
        />
    );
};

export default EventRenderer;
