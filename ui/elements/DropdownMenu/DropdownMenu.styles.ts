import styled, { css } from 'styled-components';

import { StyledDropdownMenuOptionProps } from './types';

export const StyledDropdownMenu = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 300px;
    min-height: 400px;
    max-height: 500px;
    padding: 8px 0;
    font-family: var(--font-family);
    flex-direction: column;
    align-items: flex-start;
    border-radius: var(--corner-radius-cr-4, 8px);
    border: 1px solid var(--border-subtle-primary-default, #e1e5ea);
    background: var(--bg-subtle-primary-default, #fff);
    overflow: hidden;

    * {
        box-sizing: border-box;
    }
`;

export const StyledDropdownMenuHeader = styled.div`
    box-sizing: border-box;
    padding: 6px 16px 14px 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    border-bottom: 1px solid var(--border-subtle-primary-default, #e1e5ea);
`;
export const StyledDropdownMenuHeaderTitle = styled.div`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 28px;
    letter-spacing: 0.06px;
`;
export const StyledDropdownMenuHeaderSubtext = styled.div`
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    line-height: 14px;
    letter-spacing: 0.4px;
`;

export const StyledDropdownMenuBody = styled.div`
    display: flex;
    padding: 4px 12px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    flex-grow: 1;
    overflow: auto;
    position: relative;
`;

export const StyledDropdownMenuSearchBox = styled.div`
    display: flex;
    padding: var(--spacing-sp-5, 8px) 0px var(--spacing-sp-3, 4px) 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sp-5, 8px);
    align-self: stretch;
    position: sticky;
    top: 0;
    background: var(--bg-subtle-primary-default, #fff);
`;

export const StyledDropdownMenuSubHeader = styled.div`
    display: flex;
    padding: 8px 4px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 11px;
    font-style: normal;
    font-weight: 550;
    line-height: 12px;
    letter-spacing: 2px;
`;

export const StyledDropdownMenuDivider = styled.div`
    height: 1px;
    min-height: 1px;
    margin: 8px 4px;
    align-self: stretch;
    border-radius: 8px;
    background: var(--border-subtle-primary-default, #e1e5ea);
`;

export const StyledDropdownMenuOption = styled.div<StyledDropdownMenuOptionProps>`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed !important;
            color: var(--text-emphasis-primary-disabled, #8c95a6) !important;
        `}

    &:focus-visible {
        border-radius: 8px;
        outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
    }
`;
export const StyledDropdownMenuOptionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    overflow: hidden;
`;
export const StyledDropdownMenuOptionLabel = styled.div<StyledDropdownMenuOptionProps>`
    text-align: left;
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 14px;
    font-style: normal;
    font-weight: 450;
    line-height: 22px;
    letter-spacing: 0.1px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: var(--text-emphasis-primary-disabled, #8c95a6) !important;
        `}
`;
export const StyledDropdownMenuOptionDescription = styled.div<StyledDropdownMenuOptionProps>`
    text-align: left;
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    line-height: 14px;
    letter-spacing: 0.4px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: var(--text-emphasis-primary-disabled, #8c95a6) !important;
        `}
`;

export const StyledDropdownMenuFooter = styled.div`
    padding: 14px 16px 6px 16px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-top: 1px solid var(--border-subtle-primary-default, #e1e5ea);
`;
