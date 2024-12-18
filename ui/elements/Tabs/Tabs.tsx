import React, { useEffect, useState } from 'react';

import {
    StyledTabContainer,
    StyledTabItemContainer,
    StyledTabItemText,
} from './Tabs.styles';
import { TabProps } from './types';

function Tabs(props: TabProps) {
    const { tabItems, backgroundColor, onTabFocusChange = () => {} } = props;

    const [activeTab, setActiveTab] = useState(0);

    const handleItemClick = (activeTabIndex: number) => {
        setActiveTab(activeTabIndex);
    };

    useEffect(() => {
        onTabFocusChange(activeTab);
    }, [activeTab]);

    return (
        <StyledTabContainer backgroundColor={backgroundColor}>
            <StyledTabItemContainer
                onClick={() => handleItemClick(0)}
                isActive={activeTab === 0}
            >
                {typeof tabItems[0] === 'string' ? (
                    <StyledTabItemText>{tabItems[0]}</StyledTabItemText>
                ) : (
                    tabItems[0]
                )}
            </StyledTabItemContainer>
            <StyledTabItemContainer
                onClick={() => handleItemClick(1)}
                isActive={activeTab === 1}
            >
                {typeof tabItems[1] === 'string' ? (
                    <StyledTabItemText>{tabItems[1]}</StyledTabItemText>
                ) : (
                    tabItems[1]
                )}
            </StyledTabItemContainer>
        </StyledTabContainer>
    );
}

export default Tabs;
