import styled from 'styled-components';

import { StyledDivProps } from '../../../common/types';
import { StyledTooltipProps } from './types';

export const StyledTooltipWrapper = styled.div<StyledTooltipProps>`
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--z-index-tooltip);
    display: flex;
    padding: ${({ padding }) => padding || '12px'};
    border-radius: 8px;
    color: var(--bg-tertiary, #23282f);
    box-shadow: 0px 1px 4px 0px rgba(51, 51, 51, 0.12);
    background: var(--text-primary, #fff);
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.048px;
    font-family: var(--font-family);
`;

export const StyledTooltipArrow = styled.div<StyledDivProps>`
    position: absolute;
    background: var(--text-primary, #fff);
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    border-radius: 2px;
    z-index: -1;
`;
