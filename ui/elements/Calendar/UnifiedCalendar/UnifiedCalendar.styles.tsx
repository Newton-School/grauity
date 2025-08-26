import styled from 'styled-components';

import { StyledDivProps } from '../../../../common/types';

export const StyledCalendarMonthButton = styled.div<StyledDivProps>`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0px;
    gap: var(--spacing-16px, 16px);
`;

export const StyledCalendarControlsText = styled.span`
    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 16px;
    font-style: normal;
    line-height: 14.4px;
    letter-spacing: 0.1px;
`;
export const StyledCalendarMonthCalendarControl = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: 8px;
`;
export const StyledTabContainer = styled.div`
    margin-right: 8px;
`;
