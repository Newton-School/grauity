import React from 'react';

/**
 * Calculates the position for a dropdown menu based on the position of a trigger element.
 *
 * @param triggerRef - A reference to the HTMLDivElement that triggers the dropdown menu.
 * @param menuHeight - The height of the dropdown menu.
 * @returns An object containing the top and left positions for the dropdown menu.
 */
export function calculateDropdownMenuPosition(
    triggerRef: React.RefObject<HTMLButtonElement>,
    menuHeight: number
) {
    return {
        top: Math.min(
            triggerRef.current?.getBoundingClientRect().bottom,
            window.innerHeight - menuHeight - 20
        ),
        left: triggerRef.current?.getBoundingClientRect().left,
    };
}
