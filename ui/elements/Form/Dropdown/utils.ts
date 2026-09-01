import React from 'react';

import { DROPDOWN_MENU_VIEWPORT_GAP } from '../../DropdownMenu/constants';

/**
 * Keeps one axis of the dropdown menu inside the viewport.
 *
 * The anchored position is preferred, so a menu that already fits stays exactly
 * where its trigger puts it. The upper bound pulls the menu back in when the
 * trigger sits near the far edge, leaving a small gap. The lower bound is the
 * near edge itself rather than that gap: it exists only to stop a menu too large
 * for the viewport from running off the near side, and using the gap here would
 * needlessly break alignment for a trigger placed within it.
 *
 * @param anchor - The preferred position, taken from the trigger.
 * @param menuSize - The menu's size along this axis.
 * @param viewportSize - The viewport's size along this axis.
 */
function clampToViewport(
    anchor: number,
    menuSize: number,
    viewportSize: number
) {
    return Math.max(
        0,
        Math.min(anchor, viewportSize - menuSize - DROPDOWN_MENU_VIEWPORT_GAP)
    );
}

/**
 * Calculates the position for a dropdown menu based on the position of a trigger element.
 *
 * The menu is anchored under the trigger and then clamped on both axes, so a
 * trigger near an edge of the viewport cannot push the menu off screen. This
 * matters because the menu opens in a fixed overlay that disables page scroll,
 * so anything pushed out of view would otherwise be unreachable.
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
        top: clampToViewport(
            triggerRect.bottom,
            menuHeight,
            window.innerHeight
        ),
        left: clampToViewport(triggerRect.left, menuWidth, window.innerWidth),
    };
}
