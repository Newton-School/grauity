import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

import { useClickAway } from '../../../hooks';
import { TAB_LIST_VARIANT_ENUM } from './constants';
import { StyledTabList, StyledTabListIndicator } from './index.styles';
import { TabListProps } from './types';

function TabList(props: TabListProps) {
    const {
        children = null,
        activeIndex = 0,
        onChange = () => {},
        variant = TAB_LIST_VARIANT_ENUM.BORDERED,
        className = '',
        ariaLabel = 'Tab list',
        size = 'medium',
    } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const tabs = React.Children.toArray(children);

    useClickAway(containerRef, () => {
        setFocusedIndex(-1);
    });

    const focusTab = (index: number) => {
        const container = containerRef.current;
        if (container) {
            const tabElements = container.querySelectorAll('[role="tab"]');
            const tab = tabElements[index] as HTMLElement;
            if (tab) {
                tab.focus();
            }
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const count = tabs.length;
        if (count === 0) {
            return;
        }
        const indexToUse = focusedIndex === -1 ? activeIndex : focusedIndex;
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (indexToUse + 1) % count;
            setFocusedIndex(nextIndex);
            focusTab(nextIndex);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (indexToUse - 1 + count) % count;
            setFocusedIndex(prevIndex);
            focusTab(prevIndex);
        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            onChange(indexToUse);
        } else if (e.key === 'Tab') {
            setTimeout(() => {
                setFocusedIndex(-1);
            }, 0);
        }
    };

    useEffect(() => {
        setFocusedIndex(activeIndex);
    }, [activeIndex]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const activeTab = container.querySelectorAll('[role="tab"]')[
                activeIndex
            ] as HTMLElement;
            if (activeTab) {
                setIndicatorStyle({
                    left: activeTab.offsetLeft,
                    width: activeTab.offsetWidth,
                });
            }
        }
    }, [activeIndex, children]);

    return (
        <StyledTabList
            ref={containerRef}
            role="tablist"
            className={className}
            onKeyDown={handleKeyDown}
            aria-label={ariaLabel}
            $variant={variant}
        >
            {tabs.map((child, index) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(
                        child as React.ReactElement<any>,
                        {
                            ...child.props,
                            variant,
                            size,
                            isActive: index === activeIndex,
                            onClick: () => onChange(index),
                            tabIndex: (() => {
                                if (focusedIndex >= 0) {
                                    return index === focusedIndex ? 0 : -1;
                                }
                                return index === activeIndex ? 0 : -1;
                            })(),
                        }
                    );
                }
                return child;
            })}
            {variant === TAB_LIST_VARIANT_ENUM.BORDERED && (
                <StyledTabListIndicator
                    className="ns-tab-indicator"
                    style={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                    }}
                />
            )}
        </StyledTabList>
    );
}

export default TabList;
