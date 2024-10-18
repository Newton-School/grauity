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
