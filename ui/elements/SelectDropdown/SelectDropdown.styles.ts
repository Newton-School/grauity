import styled, { css } from 'styled-components';

import { StyledDivProps } from '../../../common/types';
import Button from '../Button';
import {
    StyledDropdownSearchInputProps,
    StyledSelectDropdownItemProps,
    StyledSelectDropdownWrapperProps,
} from './types';

export const StyledSelectDropdownWrapper = styled.div<StyledSelectDropdownWrapperProps>`
    width: 100%;
    height: 100%;
    position: relative;
`;

export const StyledSelectDropdownButton = styled(Button)`
    height: 100%;
    min-height: 0;
`;

export const StyledSelectDropdownContainer = styled.div<StyledDivProps>`
    position: absolute;
    top: calc(100% + var(--spacing-4px, 4px));
    left: 0;
    width: max-content;
    min-width: 100%;
    max-width: 300px;
    max-height: 300px;
    overflow: hidden;
    padding: var(--spacing-8px, 8px);
    font-family: var(--font-family, 'Mono Sans');
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-4px, 4px);
    border-radius: var(--spacing-12px, 12px);
    border: var(--spacing-1px, 1px) solid var(--border, #e1e5ea);
    background: var(--bg-primary, #fff);
    box-shadow: var(--spacing-2px, 2px) var(--spacing-4px, 4px)
        var(--spacing-8px, 8px) var(--spacing-0px, 0px) rgba(0, 0, 0, 0.06);
`;

export const StyledSelectDropdownList = styled.div`
    width: 100%;
    overflow: auto;
`;

export const StyledSelectDropdownItem = styled.div<StyledSelectDropdownItemProps>`
    width: 100%;
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: var(--spacing-8px, 8px);
    padding: var(--spacing-8px, 8px) var(--spacing-4px, 4px);
    border-radius: var(--spacing-4px, 4px);
    color: var(--text-secondary, #5b6271);
    font-size: var(--spacing-14px, 14px);
    font-style: normal;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: var(--bg-secondary, #f6f7f9);
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: var(--text-disabled, #8c95a6);
            cursor: default;
            &:hover {
                background: var(--bg-primary, #fff);
            }
        `}
`;

export const StyledDropdownSearchContainer = styled.div`
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
    outline: none;
    border: none;
    background: var(--bg-primary, #ffffff);
    color: var(--text-primary, #16191d);
    font-size: var(--spacing-14px, 14px);
    font-style: normal;
    font-weight: 500;
`;
