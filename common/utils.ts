import React from 'react';

/**
 * Get the first scrollable parent of an element.
 * @param {HTMLElement | null} element - The element to find the scrollable parent of.
 * @returns {HTMLElement | Window} The first scrollable parent of the element.
 */
export function getScrollableParent(
    element: HTMLElement | null
): HTMLElement | Window {
    let parent = element;
    while (parent && parent !== document.body) {
        const { overflowY } = window.getComputedStyle(parent);
        if (overflowY === 'auto' || overflowY === 'scroll') {
            return parent;
        }
        parent = parent.parentElement;
    }
    return window;
}

/**
 * Handles keyboard interactions in list views by mapping specific key events
 * to corresponding callback functions.
 *
 * @param event - The keyboard event triggered by the user.
 * @param onDownKeyPress - Callback function to execute when the "ArrowDown" key
 * or "Tab" key (without Shift) is pressed.
 * @param onUpKeyPress - Callback function to execute when the "ArrowUp" key
 * or "Tab" key (with Shift) is pressed.
 * @param onSelectKeyPress - Callback function to execute when the "Enter" key
 * or the spacebar (" ") is pressed.
 * @param onEscapeKeyPress - Callback function to execute when the "Escape" key
 * is pressed.
 */
export function handleKeyboardInteractionInListViews(
    event: React.KeyboardEvent<any>,
    onDownKeyPress: () => void,
    onUpKeyPress: () => void,
    onSelectKeyPress: () => void,
    onEscapeKeyPress: () => void
) {
    if ((event.key === 'Tab' && !event.shiftKey) || event.key === 'ArrowDown') {
        event.preventDefault();
        onDownKeyPress();
    } else if (
        (event.key === 'Tab' && event.shiftKey) ||
        event.key === 'ArrowUp'
    ) {
        event.preventDefault();
        onUpKeyPress();
    } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onSelectKeyPress();
    } else if (event.key === 'Escape') {
        event.preventDefault();
        onEscapeKeyPress();
    }
}
