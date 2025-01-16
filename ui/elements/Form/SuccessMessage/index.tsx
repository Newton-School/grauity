import React from 'react';

import { Icon } from '../../Icon';
import {
    StyledSuccessMessage,
    StyledSuccessMessageText,
} from '../index.styles';
import { SuccessMessageProps } from '../types';

export const SuccessMessage = (props: SuccessMessageProps) => {
    const { children, iconSize = '20', style } = props;

    if (!children) {
        return null;
    }

    return (
        <StyledSuccessMessage>
            <Icon
                name="exclamation-circle"
                color="currentColor"
                size={iconSize}
            />
            {children && (
                <StyledSuccessMessageText style={style}>
                    {children}
                </StyledSuccessMessageText>
            )}
        </StyledSuccessMessage>
    );
};

export { SuccessMessageProps };
