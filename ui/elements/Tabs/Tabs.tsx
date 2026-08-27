import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

import {
    StyledTabContainer,
    StyledTabItemContainer,
    StyledTabItemText,
} from './Tabs.styles';
import { TabsProps } from './types';

function Tabs(props: TabsProps) {
    const {
        tabItems = [],
        backgroundColor = null,
        onTabFocusChange = () => {},
        initialActiveTab = 0,
        focusBackgroundColor = null,
        focusColor = null,
        color = null,
        className = '',
        ariaLabel = 'Tab list',
    } = props;

    const [activeTab, setActiveTab] = useState(initialActiveTab);
    // The roving tab stop: exactly one tab is keyboard-tabbable at a time.
    // Seeded to the selected tab and re-synced to it on every commit, so
    // arrow keys move a focus ring while selection stays put until Enter /
    // Space / click (manual activation, mirroring NSTabList).
    const [focusedIndex, setFocusedIndex] = useState(initialActiveTab);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleItemClick = (activeTabIndex: number) => {
        setActiveTab(activeTabIndex);
    };

    // Fires on mount (with the initial tab) and on every selection change —
    // left exactly as before so consumers see identical callback timing.
    useEffect(() => {
        onTabFocusChange(activeTab);
    }, [activeTab]);

    // Realign the roving focus to the selected tab after any commit.
    useEffect(() => {
        setFocusedIndex(activeTab);
    }, [activeTab]);

    const focusTab = (index: number) => {
        const container = containerRef.current;
        if (container) {
            const tab = container.querySelectorAll('[role="tab"]')[
                index
            ] as HTMLElement;
            if (tab) {
                tab.focus();
            }
        }
    };

    // The tab that currently holds the roving stop. Clamped so an out-of-range
    // `focusedIndex` (e.g. an out-of-range `initialActiveTab`) can never leave
    // every tab untabbable — at least the first tab stays keyboard-reachable.
    const count = tabItems.length;
    const rovingIndex =
        focusedIndex >= 0 && focusedIndex < count ? focusedIndex : 0;

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (count === 0) {
            return;
        }
        let nextIndex: number | null = null;

        if (e.key === 'ArrowRight') {
            nextIndex = (rovingIndex + 1) % count;
        } else if (e.key === 'ArrowLeft') {
            nextIndex = (rovingIndex - 1 + count) % count;
        } else if (e.key === 'Home') {
            nextIndex = 0;
        } else if (e.key === 'End') {
            nextIndex = count - 1;
        } else if (e.key === ' ' || e.key === 'Enter') {
            // Manual activation: commit the focused tab. Reuses the click
            // handler so selection + onTabFocusChange fire identically.
            e.preventDefault();
            handleItemClick(rovingIndex);
            return;
        } else {
            return;
        }

        e.preventDefault();
        setFocusedIndex(nextIndex);
        focusTab(nextIndex);
    };

    return (
        <StyledTabContainer
            ref={containerRef}
            $backgroundColor={backgroundColor}
            className={className}
            role="tablist"
            aria-label={ariaLabel}
            onKeyDown={handleKeyDown}
        >
            {tabItems?.map((item, idx) => (
                <StyledTabItemContainer
                    onClick={() => handleItemClick(idx)}
                    $isActive={activeTab === idx}
                    $color={color}
                    $focusBackgroundColor={focusBackgroundColor}
                    $focusColor={focusColor}
                    key={typeof item === 'string' ? item : String(item) + idx}
                    role="tab"
                    aria-selected={activeTab === idx}
                    tabIndex={rovingIndex === idx ? 0 : -1}
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
