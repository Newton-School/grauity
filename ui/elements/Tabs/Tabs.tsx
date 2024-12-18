import React, { useEffect, useState } from 'react';

import {
    StyledTabContainer,
    StyledTabItemContainer,
    StyledTabItemText,
} from './Tabs.styles';
import { TabProps } from './types';

function Tabs(props: TabProps) {
    const {
        tabItems = [],
        backgroundColor = null,
        onTabFocusChange = () => {},
        initialActiveTab = 0,
        focusBackgroundColor = null,
        focusColor = null,
        color = null,
    } = props;

    const [activeTab, setActiveTab] = useState(initialActiveTab);

    const handleItemClick = (activeTabIndex: number) => {
        setActiveTab(activeTabIndex);
        onTabFocusChange(activeTab);
    };

    useEffect(() => {
        onTabFocusChange(activeTab);
    }, [activeTab]);

    return (
        <StyledTabContainer backgroundColor={backgroundColor}>
            {tabItems?.map((item, idx) => (
                <StyledTabItemContainer
                    onClick={() => handleItemClick(idx)}
                    isActive={activeTab === idx}
                    color={color}
                    focusBackgroundColor={focusBackgroundColor}
                    focusColor={focusColor}
                >
                    {typeof item === 'string' ? (
                        <StyledTabItemText>{item}</StyledTabItemText>
                    ) : (
                        item
                    )}
                </StyledTabItemContainer>
            ))}
        </StyledTabContainer>
    );
}

export default Tabs;
