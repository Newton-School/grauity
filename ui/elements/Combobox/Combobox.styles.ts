import styled, { css } from 'styled-components';
import Chip from '../Chip';
import { StyledComboboxProps, StyledComboboxInputProps } from './types';

export const StyledCombobox = styled.div<StyledComboboxProps>`
    width: ${({ $width }) => $width};
    position: relative;
    font-family: var(--font-family);
`;

export const StyledComboboxField = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 4px;
    border: 1px solid var(--border-neutral, #e1e5ea);
    border-radius: 8px;
    background: var(--bg-primary, #ffffff);
    cursor: text;
`;

export const StyledComboboxInput = styled.input<StyledComboboxInputProps>`
    flex: 1;
    min-width: 60px;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
    ${({ $hasChips }) =>
        $hasChips &&
        css`
            flex-basis: 100%;
        `}
`;

export const StyledChip = styled(Chip)`
    display: flex;
    align-items: center;
`;

export const StyledSelectedChipWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`;

export const StyledRemoveButton = styled.button`
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
