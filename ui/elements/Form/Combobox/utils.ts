import React from 'react';

import { DROPDOWN_MENU_MAX_HEIGHT } from '../../DropdownMenu/constants';

/**
 * Calculates the position and height for a Combobox menu (DropdownMenu) based on the
 * position of a trigger element.
 *
 * @param triggerRef - A reference to the HTMLDivElement that triggers the dropdown menu.
 * @param menuHeight - The maximum height of the dropdown menu.
 * @returns An object containing the position object and height for the dropdown menu.
 */
export function calculateDropdownMenuPositionForCombobox(
    triggerRef: React.RefObject<HTMLButtonElement | HTMLDivElement>,
    maximumMenuHeight: number = DROPDOWN_MENU_MAX_HEIGHT
) {
    const triggerRect = triggerRef.current?.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (!triggerRect) {
        return { position: { top: 0, left: 0 }, maxHeight: maximumMenuHeight };
    }

    const spaceBelow = windowHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;

    if (spaceAbove > spaceBelow) {
        return {
            position: {
                bottom: windowHeight - triggerRect.top + 20,
                left: triggerRect.left,
            },
            maxHeight: Math.min(spaceAbove - 20, maximumMenuHeight),
            style: {
                display: 'flex',
                alignItems: 'flex-end',
            },
        };
    }

    return {
        position: {
            top: triggerRect.bottom,
            left: triggerRect.left,
        },
        maxHeight: Math.min(spaceBelow - 20, maximumMenuHeight),
        style: {},
    };
}
