import React from 'react';

import { DROPDOWN_MENU_MAX_HEIGHT } from '../../DropdownMenu/constants';

/**
 * Calculates the layout: position, height and other styles for a Combobox menu (DropdownMenu)
 * based on the position of the trigger element, and the space available in the viewport.
 *
 * @param triggerRef - A ref to the HTMLDivElement or HTMLButtonElement that triggers the dropdown menu.
 * @param maximumMenuHeight - The maximum height of the dropdown menu, defaults to '500px'.
 * @returns An object containing the position object, height and styles for the dropdown menu.
 */
export function calculateDropdownMenuLayoutForCombobox(
    triggerRef: React.RefObject<HTMLButtonElement | HTMLDivElement>,
    maximumMenuHeight: number = DROPDOWN_MENU_MAX_HEIGHT
) {
    const triggerRect = triggerRef.current?.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (!triggerRect) {
        return {
            position: { top: 0, left: 0 },
            maxHeight: maximumMenuHeight,
            style: {},
        };
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
