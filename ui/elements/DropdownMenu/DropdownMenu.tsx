/* eslint-disable indent */
import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import Overlay from '../Overlay';
import DropdownMenuWithoutTrigger from './components/DropdownMenuWithoutTrigger';
import { DROPDOWN_MENU_MAX_HEIGHT } from './constants';
import { StyledTrigger } from './DropdownMenu.styles';
import { DropdownMenuProps } from './types';
import { calculateDropdownMenuPosition } from './utils';

const DropdownMenu = (props: DropdownMenuProps) => {
    const { trigger, searchable = false, width = '300px' } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dropdownMenuHeight, setDropdownMenuHeight] = useState(
        DROPDOWN_MENU_MAX_HEIGHT
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
            <StyledTrigger
                key="dropdown-menu-trigger"
                ref={triggerRef}
                onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
                role="button"
            >
                {trigger}
            </StyledTrigger>
            {trigger && isOpen && (
                <Overlay
                    position={calculateDropdownMenuPosition(
                        triggerRef,
                        dropdownMenuHeight
                    )}
                    shouldDisableScroll={isOpen}
                    onOverlayClick={() => {
                        setIsOpen(false);
                    }}
                    shouldFocusOnFirstElement={searchable}
                >
                    <DropdownMenuWithoutTrigger
                        {...props}
                        width={
                            width === '100%'
                                ? `${
                                      triggerRef.current?.getBoundingClientRect()
                                          .width
                                  }px`
                                : width
                        }
                        setIsOpen={setIsOpen}
                        dropdownMenuRef={dropdownMenuRef}
                    />
                </Overlay>
            )}
            {!trigger && (
                <DropdownMenuWithoutTrigger
                    {...props}
                    setIsOpen={setIsOpen}
                    dropdownMenuRef={dropdownMenuRef}
                />
            )}
        </AnimatePresence>
    );
};

export default DropdownMenu;
