import React from 'react';

import { Icon } from '../../Icon';
import { StyledErrorMessage, StyledErrorMessageText } from '../index.styles';
import { ErrorMessageProps } from '../types';

export const ErrorMessage = (props: ErrorMessageProps) => {
    const { children } = props;

    if (!children) {
        return null;
    }

    return (
        <StyledErrorMessage>
            <Icon name="exclamation-circle" color="currentColor" size="20" />
            {children && (
                <StyledErrorMessageText>{children}</StyledErrorMessageText>
            )}
        </StyledErrorMessage>
    );
};
