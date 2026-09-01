import React from 'react';

import { DROPDOWN_MENU_OFFSET_Y } from '../../DropdownMenu/constants';
import { clampMenuAxisToViewport } from '../../DropdownMenu/utils';

/**
 * Calculates the position for a dropdown menu based on the position of a trigger element.
 *
 * The menu is anchored under the trigger and then fitted to the viewport on both
 * axes, so a trigger near an edge cannot push the menu off screen. This matters
 * because the menu opens in a fixed overlay that disables page scroll, so
 * anything pushed out of view would otherwise be unreachable.
 *
 * A menu that already fits is not moved, so existing placements are unaffected.
 *
 * @param triggerRef - A reference to the element that triggers the dropdown menu.
 * @param menuHeight - The height of the dropdown menu.
 * @param menuWidth - The width of the dropdown menu.
 * @returns An object containing the top and left positions for the dropdown menu.
 */
export function calculateDropdownMenuPosition(
    triggerRef: React.RefObject<HTMLButtonElement | HTMLDivElement>,
    menuHeight: number,
    menuWidth: number
) {
    const triggerRect = triggerRef.current?.getBoundingClientRect();

    if (!triggerRect) {
        return { top: 0, left: 0 };
    }

    return {
        // The menu settles a little below the position it is given, so that
        // offset counts toward the space it needs.
        top: clampMenuAxisToViewport(
            triggerRect.bottom,
            menuHeight + DROPDOWN_MENU_OFFSET_Y,
            window.innerHeight
        ),
        left: clampMenuAxisToViewport(
            triggerRect.left,
            menuWidth,
            window.innerWidth
        ),
    };
}
