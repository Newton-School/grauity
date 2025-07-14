import styled, { css } from 'styled-components';
import Button from 'ui/elements/Button';

export const StyledComboboxTriggerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-family: var(--font-family);
`;

export const StyledComboboxTrigger = styled(Button)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: auto;
    max-height: unset;
`;

export const StyledComboboxTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
`;

const comboboxTextInputStyles = css`
    font-family: var(--font-family);
    font-size: var(--font-size-fs-20, 14px);
    font-weight: var(--font-weight-fw-10, 500);
    line-height: var(--line-height-lh-50, 22px);
    letter-spacing: var(--letter-spacing-ls-30, 0.1px);
`;

export const StyledComboboxTextInput = styled.input`
    flex: 1;
    min-width: 100px;
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
    font-size: inherit;

    ${comboboxTextInputStyles}

    &::placeholder {
        color: var(--text-emphasis-primary-disabled, #8C95A6);
        ${comboboxTextInputStyles}
    }
`;
