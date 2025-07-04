import debounce from 'lodash/debounce';
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import DropdownMenu, { BaseItemOptionProps, BaseItemType } from '../DropdownMenu';
import PopOver from '../PopOver';
import { Icon } from '../Icon';
import {
    StyledChip,
    StyledCombobox,
    StyledComboboxField,
    StyledComboboxInput,
    StyledSelectedChipWrapper,
    StyledRemoveButton,
} from './Combobox.styles';
import { ComboboxProps } from './types';

const Combobox = forwardRef<HTMLDivElement, ComboboxProps>((props, ref) => {
    const {
        options = [],
        placeholder = 'Select',
        value = [],
        onChange = () => {},
        onSearchInputChange = () => {},
        width = '250px',
        className,
        style = {},
    } = props;

    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<BaseItemOptionProps[]>(value);

    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSelected(value);
    }, [value]);

    const debouncedSearch = useCallback(
        debounce((val: string) => onSearchInputChange(val), 500),
        []
    );

    const handleSelect = (item: BaseItemOptionProps) => {
        if (selected.find((sel) => sel.value === item.value)) {
            return;
        }
        const newSelected = [...selected, item];
        setSelected(newSelected);
        onChange(newSelected);
        setInputValue('');
    };

    const handleRemove = (val: BaseItemOptionProps) => {
        const newSelected = selected.filter((s) => s.value !== val.value);
        setSelected(newSelected);
        onChange(newSelected);
    };

    const items = options.map((opt) => ({
        ...opt,
        type: BaseItemType.OPTION as const,
    }));

    return (
        <StyledCombobox ref={ref} $width={width} className={className} style={style}>
            <StyledComboboxField
                ref={triggerRef}
                onClick={() => setIsOpen(true)}
            >
                {selected.map((item) => (
                    <StyledSelectedChipWrapper key={item.value}>
                        <StyledChip variant="brand" size="small">
                            {item.label}
                        </StyledChip>
                        <StyledRemoveButton
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(item);
                            }}
                        >
                            <Icon name="close" size="12" />
                        </StyledRemoveButton>
                    </StyledSelectedChipWrapper>
                ))}
                <StyledComboboxInput
                    value={inputValue}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        debouncedSearch(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    $hasChips={selected.length > 0}
                />
            </StyledComboboxField>
            <PopOver
                isOpen={isOpen}
                triggerRef={triggerRef}
                onClose={() => setIsOpen(false)}
                disableBackgroundScroll
                shouldCloseOnOutsideClick
                width={`${triggerRef.current?.getBoundingClientRect().width}px`}
            >
                <div ref={dropdownRef}>
                    <DropdownMenu
                        width="100%"
                        items={items}
                        searchable={false}
                        multiple={false}
                        value={null}
                        onChange={(opt) => {
                            handleSelect(opt as BaseItemOptionProps);
                            setIsOpen(false);
                        }}
                    />
                </div>
            </PopOver>
        </StyledCombobox>
    );
});

export default Combobox;
