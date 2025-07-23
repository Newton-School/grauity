import React, { forwardRef } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import {
    StyledComboboxTagsContainer,
    StyledComboboxTextInput,
    StyledComboboxTrigger,
    StyledComboboxTriggerContainer,
} from './Combobox.styles';
import { ComboboxTags } from './ComboboxTags';
import { ComboboxTriggerInternalProps } from './types';

const ComboboxTrigger = forwardRef<
    HTMLDivElement,
    ComboboxTriggerInternalProps
>((props, ref) => {
    const {
        name,
        label,
        placeholder = 'Select',
        isRequired = false,
        isDisabled = false,
        helpMessage,
        errorMessage,
        color = 'brand',
        onTriggerClick = () => {},
        selectedItems = [],
        onItemDismissClick = () => {},
        inputText = '',
        onTextInputChange = () => {},
        inputRef = null,
        inputProps = {},
        isOpen,
        dropdownMenuId,
        multiple,
        tagProps = {},
    } = props;

    const hasSelectedItems = Array.isArray(selectedItems)
        ? selectedItems.length > 0
        : !!selectedItems;

    return (
        <StyledComboboxTriggerContainer>
            {label && (
                <Label
                    name={name}
                    isRequired={isRequired}
                    isDisabled={isDisabled}
                    color={color === 'brand' ? 'primary' : color}
                >
                    {label}
                </Label>
            )}
            <StyledComboboxTrigger
                ref={ref as React.Ref<HTMLDivElement>}
                onClick={() => {
                    if (!isDisabled) {
                        onTriggerClick();
                        inputRef?.current?.focus();
                    }
                }}
                $color={color}
                $isDisabled={isDisabled}
                $isFocused={isOpen}
                role="combobox"
                aria-expanded={isOpen}
                aria-controls={dropdownMenuId}
            >
                <StyledComboboxTagsContainer>
                    <ComboboxTags
                        selectedItems={selectedItems}
                        onItemDismissClick={onItemDismissClick}
                        isDisabled={isDisabled}
                        tagProps={tagProps}
                    />
                    <StyledComboboxTextInput
                        {...inputProps}
                        id={name}
                        value={inputText}
                        ref={inputRef}
                        placeholder={
                            hasSelectedItems && !multiple ? '' : placeholder
                        }
                        disabled={isDisabled}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        onChange={(e) => {
                            onTextInputChange(e.target.value);
                        }}
                        role="textbox"
                    />
                </StyledComboboxTagsContainer>
            </StyledComboboxTrigger>
            {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledComboboxTriggerContainer>
    );
});

export default ComboboxTrigger;
