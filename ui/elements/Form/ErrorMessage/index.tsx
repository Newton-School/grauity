import React from 'react';

import { Icon } from '../../Icon';
import { StyledErrorMessage, StyledErrorMessageText } from '../index.styles';
import { ErrorMessageProps } from '../types';

export const ErrorMessage = (props: ErrorMessageProps) => {
    const { children, iconSize = '20', style } = props;

    if (!children) {
        return null;
    }

    return (
        <StyledErrorMessage>
            <Icon
                name="exclamation-circle"
                color="currentColor"
                size={iconSize}
            />
            {children && (
                <StyledErrorMessageText style={style}>
                    {children}
                </StyledErrorMessageText>
            )}
        </StyledErrorMessage>
    );
};

export { ErrorMessageProps };
