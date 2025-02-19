import React from 'react';
import { LabelProps, NSLabel } from 'ui/index';

import withRemovePadding from '../../../decorators/withRemovePadding';

export default {
    title: 'Elements/Form/Label',
    component: NSLabel,
    decorators: [withRemovePadding],
};

const Template = (args: LabelProps) => <NSLabel {...args} />;

const defaultArgs: LabelProps = {
    name: 'sample-input',
    color: 'primary',
    isRequired: false,
    children: 'Sample Label',
    isDisabled: false,
    className: '',
};

export const Component = Template.bind({});

Component.args = {
    ...defaultArgs,
};

export const Required = Template.bind({});

Required.args = {
    ...defaultArgs,
    isRequired: true,
    children: 'Required Label',
};

export const Secondary = Template.bind({});

Secondary.args = {
    ...defaultArgs,
    color: 'secondary',
    children: 'Secondary Label'
};
