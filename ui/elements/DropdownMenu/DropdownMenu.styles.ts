import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import {
    ANIMATION_DURATION_IN_MILLISECONDS,
    DROPDOWN_MENU_MAX_HEIGHT,
} from './constants';
import {
    StyledDropdownMenuOptionDescriptionProps,
    StyledDropdownMenuProps,
} from './types';

export const StyledDropdownMenu = styled(motion.div)<StyledDropdownMenuProps>`
    box-sizing: border-box;
    display: flex;
    width: ${({ $width }) => $width};
    max-height: ${DROPDOWN_MENU_MAX_HEIGHT}px;
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
    gap: 4px;
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
    z-index: 1;
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

    &:focus-visible {
        border-radius: 8px;
        outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
    }
`;

export const StyledDropdownMenuDivider = styled.div`
    height: 1px;
    min-height: 1px;
    margin: 8px 4px;
    align-self: stretch;
    border-radius: 8px;
    background: var(--border-subtle-primary-default, #e1e5ea);
`;

export const StyledDropdownMenuOption = styled.button`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--text-emphasis-primary-default, #16191d);
    outline: none;
    border: none;
    background: none;
    border-radius: 4px;
    transition: outline ${ANIMATION_DURATION_IN_MILLISECONDS}ms ease-out;
    transition: background ${ANIMATION_DURATION_IN_MILLISECONDS}ms ease-out;

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            color: var(--text-emphasis-primary-disabled, #8c95a6);
        `}

    &:hover {
        background: var(--bg-subtle-primary-hover, #f6f7f9);
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        z-index: 1;
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
export const StyledDropdownMenuOptionLabel = styled.div`
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 450;
    line-height: 22px;
    letter-spacing: 0.1px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
export const StyledDropdownMenuOptionDescription = styled.div<StyledDropdownMenuOptionDescriptionProps>`
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
