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
        className = '',
    } = props;

    const [activeTab, setActiveTab] = useState(initialActiveTab);

    const handleItemClick = (activeTabIndex: number) => {
        setActiveTab(activeTabIndex);
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
                    className={className}
                    key={typeof item === 'string' ? item : String(item) + idx}
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
