import React, { useState } from 'react';
import Tab from 'ui/elements/Tab';

export const ExampleTab = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1');

    return (
        <div style={{ display: 'flex' }}>
            <Tab
                id="tab1"
                variant="border"
                isActive={activeTab === 'tab1'}
                onClick={(id) => setActiveTab(id)}
            >
                Tab1
            </Tab>
            <Tab
                id="tab2"
                variant="border"
                isActive={activeTab === 'tab2'}
                onClick={(id) => setActiveTab(id)}
            >
                Tab2
            </Tab>
            <Tab
                id="tab3"
                variant="border"
                isActive={activeTab === 'tab3'}
                onClick={(id) => setActiveTab(id)}
            >
                Tab3
            </Tab>
        </div>
    );
};
