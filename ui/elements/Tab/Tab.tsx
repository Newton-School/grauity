import React from 'react';

import { Icon } from '../Icon';
import {
    StyledSubtext,
    StyledTab,
    StyledTabContainer,
    StyledTabContent,
} from './Tab.styles';
import { TabProps } from './types';

function Tab(props: TabProps) {
    const {
        id = '',
        size = 'medium',
        className = '',
        style = {},
        children = null,
        subText = '',
        icon = '',
        iconSize = '20',
        iconPosition = 'left',
        variant = 'rounded',
        isActive = false,
        disabled = false,
        onClick = () => {},
    } = props;

    return (
        <StyledTab
            className={className}
            onClick={() => {
                if (!disabled) {
                    onClick(id);
                }
            }}
            $iconPosition={iconPosition}
            $size={size}
            $disabled={disabled}
            $isActive={isActive}
            style={style}
            $variant={variant}
            role="tab"
            aria-selected={isActive}
            aria-controls={`tabpanel-${id}`}
            id={`tab-${id}`}
            disabled={disabled}
        >
            {icon && <Icon name={icon} size={iconSize} color="inherit" />}
            {(children || subText) && (
                <StyledTabContainer>
                    {children && (
                        <StyledTabContent $size={size}>
                            {children}
                        </StyledTabContent>
                    )}
                    {subText &&
                        (typeof subText === 'string' ? (
                            <StyledSubtext $isActive={isActive}>
                                {subText}
                            </StyledSubtext>
                        ) : (
                            subText
                        ))}
                </StyledTabContainer>
            )}
        </StyledTab>
    );
}

export default Tab;
