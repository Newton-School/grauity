import React, { useState } from 'react';
import Tab from 'ui/elements/Tab';

export const ExampleTab = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1');

    return (
        <div style={{ display: 'flex' }}>
            <Tab
                id="tab1"
                variant="border"
                icon="label-filled"
                isActive={activeTab === 'tab1'}
                onClick={() => setActiveTab('tab1')}
            >
                Tab1
            </Tab>
            <Tab
                id="tab2"
                variant="border"
                icon="label-filled"
                isActive={activeTab === 'tab2'}
                onClick={() => setActiveTab('tab2')}
                subText="new"
            >
                Tab2
            </Tab>
            <Tab
                id="tab3"
                variant="border"
                icon="label-filled"
                isActive={activeTab === 'tab3'}
                onClick={() => setActiveTab('tab3')}
                subText="1"
            >
                Tab3
            </Tab>
        </div>
    );
};
