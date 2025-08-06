import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

import { StyledTabList, StyledTabListIndicator } from './index.styles';
import { TabListProps } from './types';

function TabList(props: TabListProps) {
    const {
        children = null,
        activeIndex = 0,
        onChange = () => {},
        variant = 'border',
        className = '',
        ariaLabel = 'Tab list',
        size = 'medium',
    } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabs = React.Children.toArray(children);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const count = tabs.length;

        if (e.key === 'ArrowRight') {
            onChange((activeIndex + 1) % count);
        } else if (e.key === 'ArrowLeft') {
            onChange((activeIndex - 1 + count) % count);
        }
    };

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
            tabIndex={0}
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
                            tabIndex: index === activeIndex ? 0 : -1,
                        }
                    );
                }
                return child;
            })}
            {variant === 'border' && (
                <StyledTabListIndicator
                    className="tab-indicator"
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
