import React from 'react';

import Placeholder from '../../Placeholder';
import { DAYS_IN_WEEK } from './constants';
import DateCircle from './DateCircle';
import {
    StyledMonthlyCalendarGrid,
    StyledMonthlyCalendarGridContainer,
    StyledMonthlyCalendarGridItem,
    StyledMonthlyGridItemContainer,
} from './MonthlyCalendar.styles';
import { MonthlyCalendarLoadingProps } from './types';

const SHOW_PLACEHOLDERS_AT_INDEX = new Set([2, 7, 19, 23]);

function Loading(props: MonthlyCalendarLoadingProps) {
    const { gridData } = props;
    return (
        <StyledMonthlyCalendarGridContainer>
            <StyledMonthlyGridItemContainer>
                <StyledMonthlyCalendarGrid
                    $rows={gridData.length % DAYS_IN_WEEK}
                >
                    {gridData.map((item, idx) => (
                        <StyledMonthlyCalendarGridItem>
                            <DateCircle date={item} />
                            {SHOW_PLACEHOLDERS_AT_INDEX.has(idx) ? (
                                <Placeholder />
                            ) : null}
                        </StyledMonthlyCalendarGridItem>
                    ))}
                </StyledMonthlyCalendarGrid>
            </StyledMonthlyGridItemContainer>
        </StyledMonthlyCalendarGridContainer>
    );
}

export default Loading;
