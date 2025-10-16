import React from 'react';

import { Icon } from '../Icon';
import { TAB_VARIANT_ENUM } from './constants';
import {
    StyledSubtext,
    StyledTab,
    StyledTabContainer,
    StyledTabContent,
} from './Tab.styles';
import { TabProps } from './types';

function Tab(props: TabProps) {
    const {
        size = 'medium',
        className = '',
        style = {},
        children = null,
        subText = '',
        icon = '',
        iconSize = '20',
        iconPosition = 'left',
        variant = TAB_VARIANT_ENUM.BORDERED,
        isActive = false,
        disabled = false,
        onClick = () => {},
        tabIndex = 0,
        id = '',
        ariaControls = '',
    } = props;

    return (
        <StyledTab
            type="button"
            className={className}
            onClick={() => {
                if (!disabled) {
                    onClick();
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
            aria-controls={ariaControls}
            id={id}
            disabled={disabled}
            tabIndex={tabIndex}
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
                        (['string', 'number'].includes(typeof subText) ? (
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
