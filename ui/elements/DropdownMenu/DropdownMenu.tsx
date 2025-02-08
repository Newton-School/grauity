/* eslint-disable indent */
import { AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';

import Overlay from '../Overlay';
import DropdownMenuWithoutTrigger from './components/DropdownMenuWithoutTrigger';
import { StyledTrigger } from './DropdownMenu.styles';
import { DropdownMenuProps } from './types';

const DropdownMenu = (props: DropdownMenuProps) => {
    const { trigger, width = '300px' } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const triggerRef = useRef<HTMLDivElement>(null);

    return (
        <AnimatePresence>
            <StyledTrigger
                key="dropdown-menu-trigger"
                ref={triggerRef}
                onClick={() => setIsOpen(!isOpen)}
                role="button"
            >
                {trigger}
            </StyledTrigger>
            {trigger && isOpen && (
                <Overlay
                    position={{
                        top: triggerRef.current?.getBoundingClientRect().bottom,
                        left: triggerRef.current?.getBoundingClientRect().left,
                    }}
                    shouldDisableScroll={isOpen}
                    onOverlayClick={() => {
                        setIsOpen(false);
                    }}
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
                    />
                </Overlay>
            )}
            {!trigger && (
                <DropdownMenuWithoutTrigger {...props} setIsOpen={setIsOpen} />
            )}
        </AnimatePresence>
    );
};

export default DropdownMenu;
