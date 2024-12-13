import React from 'react';
import { MonthlyCalendar, MonthlyCalendarProps } from 'ui/elements/Calendar';

import withRemovePadding from '../../../decorators/withRemovePadding';

export default {
    title: 'Elements/Calendar/MonthlyCalendar',
    component: MonthlyCalendar,
    decorators: [
        (Story: React.ComponentType) => (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <Story />
            </div>
        ),
        withRemovePadding,
    ],
    parameters: {
        docs: {
            source: {
                code: `
                    <MonthlyCalendar/>
                `,
            },
        },
    },
};

const Template = (args: MonthlyCalendarProps<any>) => (
    <MonthlyCalendar {...args} />
);

export const Component = Template.bind({});

const defaultArgs: MonthlyCalendarProps<any> = {
    monthOffset: 0,
    events: [],
    eventRenderer: () => <div>Event</div>,
    shouldShowMonthControls: true,
    header: <h1>Header</h1>,
    onMonthChange: () => {},
    loading: true,
};

Component.args = {
    ...defaultArgs,
};
