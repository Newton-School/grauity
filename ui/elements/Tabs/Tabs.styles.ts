import styled, { css } from 'styled-components';

import {
    StyledTabContainerProps,
    StyledTabItemContainerProps,
    StyledTextProps,
} from './types';

export const StyledTabContainer = styled.div<StyledTabContainerProps>`
    box-sizing: border-box;
    display: flex;
    padding: 4px;
    align-items: center;
    width: 100%;
    height: 40px;

    border-radius: 8px;
    border: 1px solid var(--border-neutral, #e1e5ea);
    background: var(--bg-secondary, #f6f7f9);
    font-family: var(--font-family, 'Mona Sans');

    ${({ $backgroundColor }) =>
        $backgroundColor &&
        css`
            background: ${$backgroundColor};
        `}
`;

export const StyledTabItemContainer = styled.div<StyledTabItemContainerProps>`
    box-sizing: border-box;
    display: flex;
    height: 100%;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    flex: 1;
    color: var(--text-primary, #fff);

    ${({ $backgroundColor }) =>
        $backgroundColor &&
        css`
            background: ${$backgroundColor};
        `}

    ${({ $color }) =>
        $color &&
        css`
            color: ${$color};
        `}

    ${({ $isActive, $focusColor, $focusBackgroundColor }) =>
        $isActive &&
        css`
            background: ${$focusBackgroundColor || 'var(--bg-primary, #fff)'};
            color: ${$focusColor || 'var(--text-brand, #0673f9)'};
        `}
`;

export const StyledTabItemText = styled.span<StyledTextProps>`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22.4px;
    letter-spacing: 0.014px;

    ${({ $color }) =>
        $color &&
        css`
            color: ${$color};
        `}
`;
