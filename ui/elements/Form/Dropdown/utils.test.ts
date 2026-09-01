import React from 'react';

import { calculateDropdownMenuPosition } from './utils';

const VIEWPORT_WIDTH = 1280;
const VIEWPORT_HEIGHT = 720;

const setViewport = (width: number, height: number) => {
    window.innerWidth = width;
    window.innerHeight = height;
};

/** A trigger ref whose only job is to report a rect. */
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
    } as React.RefObject<HTMLButtonElement>);

describe('calculateDropdownMenuPosition', () => {
    beforeEach(() => {
        setViewport(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
    });

    it('anchors to the trigger when the menu fits on screen', () => {
        const position = calculateDropdownMenuPosition(
            triggerAt({ left: 100, bottom: 60 }),
            300,
            280
        );

        expect(position).toEqual({ top: 60, left: 100 });
    });

    it('pulls the menu back in when the trigger sits near the right edge', () => {
        const position = calculateDropdownMenuPosition(
            triggerAt({ left: 1155, bottom: 60 }),
            300,
            280
        );

        // Anchoring at 1155 would push the menu 155px past the viewport.
        expect(position.left).toBe(VIEWPORT_WIDTH - 280 - 20);
        expect(position.left + 280).toBeLessThanOrEqual(VIEWPORT_WIDTH);
    });

    it('pulls the menu back in when the trigger sits near the bottom edge', () => {
        const position = calculateDropdownMenuPosition(
            triggerAt({ left: 100, bottom: 700 }),
            300,
            280
        );

        expect(position.top).toBe(VIEWPORT_HEIGHT - 300 - 20);
        expect(position.top + 300).toBeLessThanOrEqual(VIEWPORT_HEIGHT);
    });

    it('keeps a trigger closer to an edge than the gap flush with the trigger', () => {
        const position = calculateDropdownMenuPosition(
            triggerAt({ left: 4, bottom: 8 }),
            300,
            280
        );

        expect(position).toEqual({ top: 8, left: 4 });
    });

    it('stays on screen when the menu is larger than the viewport', () => {
        setViewport(320, 400);

        const position = calculateDropdownMenuPosition(
            triggerAt({ left: 200, bottom: 380 }),
            500,
            360
        );

        expect(position).toEqual({ top: 0, left: 0 });
    });

    it('falls back to the origin when the trigger is not mounted', () => {
        const position = calculateDropdownMenuPosition(
            { current: null } as React.RefObject<HTMLButtonElement>,
            300,
            280
        );

        expect(position).toEqual({ top: 0, left: 0 });
    });
});
