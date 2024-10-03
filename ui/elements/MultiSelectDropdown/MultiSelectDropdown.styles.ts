import styled, { css } from 'styled-components';

import { StyledDivProps } from '../../../common/types';
import Button from '../Button';
import {
    StyledDropdownHeaderProps,
    StyledDropdownItemTextProps,
    StyledDropdownListItemProps,
    StyledDropdownSearchInputProps,
    StyledDropdownWrapperProps,
} from './types';

export const StyledDropdownWrapper = styled.div<StyledDropdownWrapperProps>`
    font-family: var(--font-family, 'Mona Sans');
    height: 100%;
    width: 100%;
    position: relative;
    max-width: 200px;
`;

export const StyledDropdownHeader = styled.div<StyledDropdownHeaderProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: var(--spacing-12px, 12px);
    gap: var(--spacing-8px, 8px);
    background: var(--bg-primary, #ffffff);
    border: 1px solid var(--border-neutral, #e1e5ea);
    border-radius: var(--corner-radius-8px, 8px);
    cursor: pointer;
    outline: none;
`;

export const StyledDropdownHeaderTitle = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    line-height: var(--spacing-14px, 14px);
    text-align: left;
    color: var(--text-brand, #0673f9);
    overflow: hidden;
`;

export const StyledDropdownContainer = styled.div<StyledDivProps>`
    box-sizing: border-box;
    position: absolute;
    top: calc(100% + var(--spacing-4px, 4px));
    width: 100%;
    max-height: 300px;
    padding: var(--spacing-8px, 8px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-4px, 4px);
    align-self: stretch;
    border-radius: var(--corner-radius-12px, 12px);
    border: var(--spacing-1px, 1px) solid var(--border-neutral, #e1e5ea);
    background: var(--bg-primary, #fff);
    box-shadow: var(--spacing-2px, 2px) var(--spacing-4px, 4px)
        var(--spacing-8px, 8px) var(--spacing-0px, 0px) rgba(0, 0, 0, 0.06);
`;

export const StyledDropdownList = styled.div`
    width: 100%;
    overflow-y: auto;
`;

export const StyledDropdownListItem = styled.div<StyledDropdownListItemProps>`
    width: 100%;
    outline: none;
    display: flex;
    align-items: center;
    align-self: stretch;
    padding: var(--spacing-8px, 8px) var(--spacing-4px, 4px);
    gap: var(--spacing-8px, 8px);
    cursor: pointer;

    &:hover {
        background: var(--bg-secondary, #f6f7f9);
    }
`;

export const StyledDropdownItemCheckbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledDropdownItemText = styled.div<StyledDropdownItemTextProps>`
    color: var(--text-primary, #16191d);
    font-size: var(--spacing-14px, 14px);
    font-weight: 500;

    ${({ $selected }) =>
        $selected &&
        css`
            color: var(--text-brand, #0673f9);
        `}
`;

export const StyledDropdownSearchContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: var(--spacing-36px, 36px);
    padding: var(--spacing-12px, 12px);
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: var(--spacing-8px, 8px);
    border-radius: var(--corner-radius-8px, 8px);
    border: var(--spacing-1px, 1px) solid var(--border-neutral, #e1e5ea);
    background: var(--bg-primary, #ffffff);
`;

export const StyledDropdownSearchInput = styled.input<StyledDropdownSearchInputProps>`
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: none;
    background: var(--bg-primary, #ffffff);
    color: var(--text-primary, #16191d);
    font-size: var(--spacing-14px, 14px);
    font-style: normal;
    font-weight: 500;
`;

export const StyledApplyButton = styled(Button)`
    width: 100%;
    outline: none;
`;
