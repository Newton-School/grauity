/* eslint-disable indent */
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import DropdownMenu, {
    BaseItemOptionProps,
    BaseItemType,
} from '../../DropdownMenu';
import { DROPDOWN_MENU_MAX_HEIGHT } from '../../DropdownMenu/constants';
import { getSelectedValuesForDropdownType } from '../../DropdownMenu/utils';
import Overlay from '../../Overlay';
import DropdownTrigger from './DropdownTrigger';
import { DropdownProps } from './types';
import { calculateDropdownMenuPosition } from './utils';

const Dropdown = (props: DropdownProps) => {
    const {
        width = '100%',
        multiple = false,
        items = [],
        value = null,
        onChange = () => {},
        onClose = () => {},
    } = props;

    const selectedValues = getSelectedValuesForDropdownType(multiple, value);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropdownMenuHeight, setDropdownMenuHeight] = useState(
        DROPDOWN_MENU_MAX_HEIGHT
    );
    const [selectedOptions, setSelectedOptions] = useState<
        BaseItemOptionProps | BaseItemOptionProps[]
    >(
        items.filter(
            (item) =>
                item.type === BaseItemType.OPTION &&
                selectedValues.includes(item.value)
        ) as BaseItemOptionProps[]
    );

    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && dropdownMenuRef.current) {
            setDropdownMenuHeight(dropdownMenuRef.current.clientHeight);
        }
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
                        setIsOpen(false);
                        onClose(selectedOptions);
                    }}
                >
                    <DropdownMenu
                        {...props}
                        width={
                            width === '100%'
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
                            setIsOpen(false);
                            onClose(values);
                        }}
                    />
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default Dropdown;
