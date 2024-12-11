import React from 'react';
import { Icon } from 'ui/elements/Icon';

import {
    StyledHelpMessage,
    StyledHelpMessageMaxCharacters,
    StyledHelpMessageText,
} from '../index.styles';
import { HelpMessageProps } from '../types';

export const HelpMessage = (props: HelpMessageProps) => {
    const { children, currentLength, maxLength } = props;

    if (!children && !maxLength) {
        return null;
    }

    return (
        <StyledHelpMessage>
            <Icon name="exclamation-circle" color="currentColor" size="20" />
            {children && (
                <StyledHelpMessageText>{children}</StyledHelpMessageText>
            )}
            {maxLength && (
                <StyledHelpMessageMaxCharacters>
                    {currentLength || 0}/{maxLength}
                </StyledHelpMessageMaxCharacters>
            )}
        </StyledHelpMessage>
    );
};
