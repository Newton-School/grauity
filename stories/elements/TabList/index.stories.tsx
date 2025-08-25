import React from 'react';
import Tab from 'ui/elements/Tab';
import TabList, { TabListProps } from 'ui/elements/TabList';

export default {
    title: 'Elements/TabList',
    component: TabList,
};

const Template = (args: TabListProps) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleTabChange = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <TabList {...args} activeIndex={activeIndex} onChange={handleTabChange}>
            <Tab subText="1" icon="label-filled">
                Tab Title
            </Tab>
            <Tab subText="2" icon="label-filled">
                Tab Title
            </Tab>
            <Tab subText="3" icon="label-filled">
                Tab Title
            </Tab>
        </TabList>
    );
};

export const Component = Template.bind({});

Component.args = {
    variant: 'bordered',
    size: 'medium',
    className: 'my-tab-list',
    ariaLabel: 'Example Tab List',
};
