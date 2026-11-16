/* eslint-disable indent */
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { useIsomorphicLayoutEffect } from '../../../../hooks';
import DropdownMenu, { BaseItemOptionProps } from '../../DropdownMenu';
import {
    DROPDOWN_MENU_DEFAULT_WIDTH,
    DROPDOWN_MENU_MAX_HEIGHT,
} from '../../DropdownMenu/constants';
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
        width = `${DROPDOWN_MENU_DEFAULT_WIDTH}px`;
        fullWidth = true;
    }

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropdownMenuSize, setDropdownMenuSize] = useState({
        height: DROPDOWN_MENU_MAX_HEIGHT,
        width: DROPDOWN_MENU_DEFAULT_WIDTH,
    });
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

    useIsomorphicLayoutEffect(() => {
        if (!isOpen || !dropdownMenuRef.current) {
            return;
        }
        // offset*, not client*, so the menu's border counts toward the space
        // it occupies and the clamp keeps the full box on screen.
        const { offsetHeight, offsetWidth } = dropdownMenuRef.current;
        setDropdownMenuSize((previous) =>
            previous.height === offsetHeight && previous.width === offsetWidth
                ? previous
                : { height: offsetHeight, width: offsetWidth }
        );
    }, [isOpen]);

    return (
        <AnimatePresence>
            <DropdownTrigger
                {...props}
                key="dropdown-trigger"
                ref={triggerRef}
                onTriggerClick={() => {
                    setIsOpen(!isOpen);
                }}
                selectedValues={selectedOptions}
                multiple={multiple}
            />
            {isOpen && (
                <Overlay
                    key="dropdown-menu-overlay"
                    position={calculateDropdownMenuPosition(
                        triggerRef,
                        dropdownMenuSize.height,
                        dropdownMenuSize.width
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
