import React from 'react';
import { Icon } from 'ui/elements/Icon';

import {
    StyledOverflowIndicator,
    StyledOverflowIndicatorText,
} from './MonthlyCalendar.styles';
import { OverflowIndicatorProps } from './types';

function OverflowIndicator(props: OverflowIndicatorProps) {
    const { text } = props;
    return (
        <StyledOverflowIndicator>
            <StyledOverflowIndicatorText>{text}</StyledOverflowIndicatorText>
            <Icon color="var(--text-primary)" name="arrow-right" size="16" />
        </StyledOverflowIndicator>
    );
}

export default OverflowIndicator;
