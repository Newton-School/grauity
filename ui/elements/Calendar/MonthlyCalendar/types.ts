import { StyledDivProps } from '../../../../common/types';

export interface MonthlyCalendarProps extends StyledDivProps {}

export interface DateCircleProps {
    date: Date;
    backgroundColor: string;
    textColor: string;
}

export interface StyledDateCircleProps {
    isActive?: boolean;
    isToday?: boolean;
}

export interface StyledDateTextProps {
    isToday?: boolean;
}
