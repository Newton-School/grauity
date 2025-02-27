/* eslint-disable indent */
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import DropdownMenu, { BaseItemOptionProps } from '../../DropdownMenu';
import { DROPDOWN_MENU_MAX_HEIGHT } from '../../DropdownMenu/constants';
import Overlay from '../../Overlay';
import DropdownTrigger from './DropdownTrigger';
import { DropdownProps } from './types';
import { calculateDropdownMenuPosition } from './utils';

const Dropdown = (props: DropdownProps) => {
    const { width = '100%', multiple = false, onChange = () => {} } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropdownMenuHeight, setDropdownMenuHeight] = useState(
        DROPDOWN_MENU_MAX_HEIGHT
    );
    const [selectedValues, setSelectedValues] = useState<BaseItemOptionProps[]>(
        []
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
                selectedValues={selectedValues}
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
                            setSelectedValues(values);
                            onChange(values);
                            setIsOpen(false);
                        }}
                    />
                </Overlay>
            )}
        </AnimatePresence>
    );
};

export default Dropdown;
