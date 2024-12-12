import React from 'react';

import { MoreCalendarEventsProps } from './types';

function MoreCalendarEvents(props: MoreCalendarEventsProps) {
    const { text } = props;
    return <span>{text}</span>;
}

export default MoreCalendarEvents;
