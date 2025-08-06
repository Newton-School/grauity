import React, { KeyboardEvent } from 'react';

import { StyledTabList } from './index.styles';
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

    const tabs = React.Children.toArray(children);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        const count = tabs.length;

        if (e.key === 'ArrowRight') {
            onChange((activeIndex + 1) % count);
        } else if (e.key === 'ArrowLeft') {
            onChange((activeIndex - 1 + count) % count);
        }
    };

    return (
        <StyledTabList
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
        </StyledTabList>
    );
}

export default TabList;
