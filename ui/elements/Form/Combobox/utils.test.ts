import React from 'react';

import { calculateDropdownMenuLayoutForCombobox } from './utils';

const VIEWPORT_WIDTH = 1280;
const VIEWPORT_HEIGHT = 720;

const triggerAt = (rect: Partial<DOMRect>) =>
    ({
        current: {
            getBoundingClientRect: () => ({
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: 0,
                height: 0,
                ...rect,
            }),
        },
    } as React.RefObject<HTMLDivElement>);

describe('calculateDropdownMenuLayoutForCombobox', () => {
    beforeEach(() => {
        window.innerWidth = VIEWPORT_WIDTH;
        window.innerHeight = VIEWPORT_HEIGHT;
    });

    it('anchors to the trigger when the menu fits on screen', () => {
        const { position } = calculateDropdownMenuLayoutForCombobox(
            triggerAt({ left: 100, top: 40, bottom: 80 }),
            500,
            280
        );

        expect(position.left).toBe(100);
    });

    it('pulls the menu back in when the trigger sits near the right edge', () => {
        const { position } = calculateDropdownMenuLayoutForCombobox(
            triggerAt({ left: 1155, top: 40, bottom: 80 }),
            500,
            280
        );

        expect(position.left).toBe(VIEWPORT_WIDTH - 280 - 20);
        expect(position.left + 280).toBeLessThanOrEqual(VIEWPORT_WIDTH);
    });

    // The menu flips above the trigger when there is more room there; that
    // branch anchors horizontally the same way and must be fitted too.
    it('fits the menu to the viewport when it opens upwards', () => {
        const { position } = calculateDropdownMenuLayoutForCombobox(
            triggerAt({ left: 1155, top: 600, bottom: 640 }),
            500,
            280
        );

        expect(position.bottom).toBeDefined();
        expect(position.left).toBe(VIEWPORT_WIDTH - 280 - 20);
    });

    // Callers that do not pass a width keep their previous placement.
    it('leaves the anchor untouched when no menu width is known', () => {
        const { position } = calculateDropdownMenuLayoutForCombobox(
            triggerAt({ left: 1155, top: 40, bottom: 80 })
        );

        expect(position.left).toBe(1155);
    });
});
