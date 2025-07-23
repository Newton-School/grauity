/* eslint-disable indent */
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useId, useRef, useState } from 'react';

import DropdownMenu, {
    BaseItemOptionProps,
    BaseItemType,
} from '../../DropdownMenu';
import { DROPDOWN_MENU_MAX_HEIGHT } from '../../DropdownMenu/constants';
import {
    defaultSearchMethod,
    getOptionsFromBaseDropdownItems,
    getSelectedValuesForDropdownType,
} from '../../DropdownMenu/utils';
import Overlay from '../../Overlay';
import { calculateDropdownMenuPosition } from '../Dropdown/utils';
import ComboboxTrigger from './ComboboxTrigger';
import { ComboboxProps } from './types';

const Combobox = (props: ComboboxProps) => {
    const {
        menuProps,
        multiple = false,
        items = [],
        value = null,
        onChange = () => {},
        onClose = () => {},
        onTextInputChange,
        applyOnOptionSelectInMultipleMode = true,
        useDefaultSearchMethod = true,
    } = props;

    let width;
    let fullWidth;

    if (menuProps) {
        ({ width, fullWidth } = menuProps);
    } else {
        width = '300px';
        fullWidth = true;
    }

    const selectedValues = getSelectedValuesForDropdownType(multiple, value);

    const id = useId();
    const dropdownMenuId = `dropdown-menu-${id}`;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [options, setOptions] = useState<BaseItemOptionProps[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [dropdownMenuHeight, setDropdownMenuHeight] = useState(
        DROPDOWN_MENU_MAX_HEIGHT
    );
    const [searchedOptions, setSearchedOptions] = useState<
        BaseItemOptionProps[] | null
    >(null);
    const [selectedOptions, setSelectedOptions] = useState<
        BaseItemOptionProps | BaseItemOptionProps[]
    >(
        multiple
            ? (items.filter(
                  (item) =>
                      item.type === BaseItemType.OPTION &&
                      selectedValues
                          .map((option) => option.value)
                          .includes(item.value)
              ) as BaseItemOptionProps[])
            : (items.find(
                  (item) =>
                      item.type === BaseItemType.OPTION &&
                      selectedValues
                          .map((option) => option.value)
                          .includes(item.value)
              ) as BaseItemOptionProps)
    );

    const triggerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);

    const handleDropdownMenuClose = (
        values: BaseItemOptionProps | BaseItemOptionProps[]
    ) => {
        setIsOpen(false);
        onClose(values);
        inputRef?.current?.focus();
    };

    const onItemDismissClick = (item: BaseItemOptionProps) => {
        if (multiple) {
            const newSelectedOptions = (
                selectedOptions as BaseItemOptionProps[]
            ).filter((opt) => opt.value !== item.value);
            setSelectedOptions(newSelectedOptions);
            onChange(newSelectedOptions);
        } else {
            setSelectedOptions([]);
            onChange(null);
        }
    };

    const handleSearchInputChange = (text: string) => {
        setInputText(text);
        if (typeof onTextInputChange === 'function') {
            onTextInputChange(text);
        } else if (useDefaultSearchMethod) {
            const filteredOptions = defaultSearchMethod(text, options);
            if (filteredOptions.length > 0 || text) {
                setSearchedOptions(filteredOptions);
            } else {
                setSearchedOptions([]);
            }
        }
    };

    const [dropdownMenuPosition, setDropdownMenuPosition] = useState(
        calculateDropdownMenuPosition(triggerRef, dropdownMenuHeight)
    );

    useEffect(() => {
        setDropdownMenuPosition(
            calculateDropdownMenuPosition(triggerRef, dropdownMenuHeight)
        );
    }, [selectedOptions, dropdownMenuHeight]);

    useEffect(() => {
        const filteredOptions = getOptionsFromBaseDropdownItems(items);
        setOptions(filteredOptions);
    }, [items]);

    useEffect(() => {
        if (isOpen && dropdownMenuRef.current) {
            setDropdownMenuHeight(dropdownMenuRef.current.clientHeight);
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            <ComboboxTrigger
                {...props}
                ref={triggerRef}
                inputRef={inputRef}
                onTriggerClick={() => {
                    setIsOpen(!isOpen);
                }}
                selectedItems={selectedOptions}
                onItemDismissClick={onItemDismissClick}
                inputText={inputText}
                onTextInputChange={(text) => {
                    setInputText(text);
                    handleSearchInputChange(text);
                    setIsOpen(true);
                }}
                isOpen={isOpen}
                dropdownMenuId={dropdownMenuId}
            />
            {isOpen && (
                <Overlay
                    position={dropdownMenuPosition}
                    shouldFocusOnFirstElement={false}
                    shouldDisableScroll={isOpen}
                    onOverlayClick={() => {
                        handleDropdownMenuClose(selectedOptions);
                    }}
                >
                    <DropdownMenu
                        {...props}
                        id={dropdownMenuId}
                        applyOnOptionSelectInMultipleMode={
                            applyOnOptionSelectInMultipleMode
                        }
                        items={
                            Array.isArray(searchedOptions)
                                ? searchedOptions
                                : items
                        }
                        searchable={false}
                        width={
                            fullWidth
                                ? `${
                                      triggerRef.current?.getBoundingClientRect()
                                          .width
                                  }px`
                                : width
                        }
                        ref={dropdownMenuRef}
                        onChange={(values) => {
                            setSelectedOptions(values);
                            onChange(values);
                            if (multiple) {
                                inputRef?.current?.focus();
                            } else {
                                handleDropdownMenuClose(values);
                            }
                            handleSearchInputChange('');
                        }}
                    />
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default Combobox;
