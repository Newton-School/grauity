import React from 'react';
import { MonthlyCalendar, MonthlyCalendarProps } from 'ui/elements/Calendar';

import withRemovePadding from '../../../decorators/withRemovePadding';

export default {
    title: 'Elements/Calendar/MonthlyCalendar',
    component: MonthlyCalendar,
    decorators: [withRemovePadding],
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

const Template = (args: MonthlyCalendarProps) => <MonthlyCalendar {...args} />;

export const Component = Template.bind({});

const defaultArgs: MonthlyCalendarProps = {};

Component.args = {
    ...defaultArgs,
};
