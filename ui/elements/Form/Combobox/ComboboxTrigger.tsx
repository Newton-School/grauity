import React, { forwardRef } from 'react';

import { BaseItemOptionProps } from '../../DropdownMenu';
import Tag from '../../Tag';
import { ErrorMessage } from '../ErrorMessage';
import { HelpMessage } from '../HelpMessage';
import { Label } from '../Label';
import {
    StyledComboboxTagsContainer,
    StyledComboboxTextInput,
    StyledComboboxTrigger,
    StyledComboboxTriggerContainer,
} from './Combobox.styles';
import { ComboboxTriggerInternalProps } from './types';

const ComboboxTrigger = forwardRef<
    HTMLButtonElement,
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
    } = props;

    const hasSelectedItems = Array.isArray(selectedItems)
        ? selectedItems.length > 0
        : !!selectedItems;

    const getCurrentValue = (): React.ReactNode => {
        let selectedItemsList: BaseItemOptionProps[] = [];
        if (Array.isArray(selectedItems)) {
            selectedItemsList = selectedItems;
        } else if (selectedItems) {
            selectedItemsList = [selectedItems];
        }
        return (
            <>
                {selectedItemsList.map((item: BaseItemOptionProps) => (
                    <Tag
                        onButtonClick={(
                            e: React.MouseEvent<HTMLButtonElement>
                        ) => {
                            e.stopPropagation();
                            onItemDismissClick(item);
                        }}
                        isDisabled={isDisabled}
                        key={item.value}
                    >
                        {item.label}
                    </Tag>
                ))}
            </>
        );
    };

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
                ref={ref as React.Ref<HTMLButtonElement>}
                id={name}
                name={name}
                variant="secondary"
                color={color}
                fullWidth
                onClick={() => {
                    onTriggerClick();
                    inputRef?.current?.focus();
                }}
                showAnimationOnClick={false}
                disabled={isDisabled}
            >
                <StyledComboboxTagsContainer>
                    {getCurrentValue()}
                    <StyledComboboxTextInput
                        value={inputText}
                        ref={inputRef}
                        placeholder={hasSelectedItems ? '' : placeholder}
                        onChange={(e) => {
                            onTextInputChange(e.target.value);
                        }}
                    />
                </StyledComboboxTagsContainer>
            </StyledComboboxTrigger>
            {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </StyledComboboxTriggerContainer>
    );
});

export default ComboboxTrigger;
