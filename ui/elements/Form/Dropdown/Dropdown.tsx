/* eslint-disable indent */
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import DropdownMenu, { BaseItemOptionProps } from '../../DropdownMenu';
import { DROPDOWN_MENU_MAX_HEIGHT } from '../../DropdownMenu/constants';
import { getSelectedValuesForDropdownType } from '../../DropdownMenu/utils';
import Overlay from '../../Overlay';
import DropdownTrigger from './DropdownTrigger';
import { DropdownProps } from './types';
import { calculateDropdownMenuPosition } from './utils';

const Dropdown = (props: DropdownProps) => {
    const {
        menuProps,
        multiple = false,
        items = [],
        value = null,
        onChange = () => {},
        onClose = () => {},
        showActionButtons = false,
    } = props;

    let width;
    let fullWidth;

    if (menuProps) {
        ({ width, fullWidth } = menuProps);
    } else {
        width = '300px';
        fullWidth = true;
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropdownMenuHeight, setDropdownMenuHeight] = useState(
        DROPDOWN_MENU_MAX_HEIGHT
    );
    const [selectedOptions, setSelectedOptions] = useState<
        BaseItemOptionProps | BaseItemOptionProps[]
    >(getSelectedValuesForDropdownType(multiple, value));

    const triggerRef = useRef<HTMLButtonElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);

    const handleDropdownMenuClose = (
        values: BaseItemOptionProps | BaseItemOptionProps[]
    ) => {
        setIsOpen(false);
        if (Array.isArray(values) && !multiple) {
            onClose(values[0] ?? null);
        } else {
            onClose(values);
        }
        triggerRef?.current?.focus();
    };

    useEffect(() => {
        setSelectedOptions(getSelectedValuesForDropdownType(multiple, value));
    }, [value, items, multiple]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const updateMenuHeight = () => {
            if (!dropdownMenuRef.current) {
                return;
            }
            setDropdownMenuHeight(dropdownMenuRef.current.clientHeight);
        };

        updateMenuHeight();

        let resizeObserver: ResizeObserver | null = null;
        if (dropdownMenuRef.current && typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(() => {
                updateMenuHeight();
            });
            resizeObserver.observe(dropdownMenuRef.current);
        }

        window.addEventListener('resize', updateMenuHeight);

        return () => {
            window.removeEventListener('resize', updateMenuHeight);
            resizeObserver?.disconnect();
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            <DropdownTrigger
                {...props}
                ref={triggerRef}
                onTriggerClick={() => {
                    setIsOpen(!isOpen);
                }}
                selectedValues={selectedOptions}
                multiple={multiple}
            />
            {isOpen && (
                <Overlay
                    position={calculateDropdownMenuPosition(
                        triggerRef,
                        dropdownMenuHeight
                    )}
                    shouldFocusOnFirstElement
                    shouldDisableScroll={isOpen}
                    onOverlayClick={() => {
                        handleDropdownMenuClose(selectedOptions);
                    }}
                >
                    <DropdownMenu
                        {...props}
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
                            if (!multiple || showActionButtons) {
                                handleDropdownMenuClose(values);
                            }
                        }}
                    />
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default Dropdown;
