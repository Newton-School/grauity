import React from 'react';

import { DROPDOWN_MENU_OFFSET_Y } from '../../DropdownMenu/constants';
import { calculateDropdownMenuPosition } from './utils';

const VIEWPORT_WIDTH = 1280;
const VIEWPORT_HEIGHT = 720;
const GAP = 20;

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
        expect(position.left).toBe(VIEWPORT_WIDTH - 280 - GAP);
        expect(position.left + 280).toBeLessThanOrEqual(VIEWPORT_WIDTH);
    });

    it('pulls the menu back in when the trigger sits near the bottom edge', () => {
        const menuHeight = 300;
        const position = calculateDropdownMenuPosition(
            triggerAt({ left: 100, bottom: 700 }),
            menuHeight,
            280
        );

        // The menu settles DROPDOWN_MENU_OFFSET_Y below the position it is
        // given, so that offset has to stay on screen too.
        expect(
            position.top + DROPDOWN_MENU_OFFSET_Y + menuHeight
        ).toBeLessThanOrEqual(VIEWPORT_HEIGHT);
    });

    // Regression: fullWidth is the default, so on a narrow viewport the menu is
    // exactly as wide as its trigger. Reserving a gap it does not need would
    // shift the menu out of alignment with the trigger it belongs to.
    it('keeps a full-width menu on a narrow viewport flush with its trigger', () => {
        setViewport(375, 812);

        const position = calculateDropdownMenuPosition(
            triggerAt({ left: 16, bottom: 200, width: 343 }),
            300,
            343
        );

        expect(position.left).toBe(16);
    });

    it('leaves a menu alone whenever it already fits', () => {
        // Right edge of the menu landing exactly on the viewport edge still
        // counts as fitting, and must not be nudged.
        const position = calculateDropdownMenuPosition(
            triggerAt({ left: VIEWPORT_WIDTH - 280, bottom: 60 }),
            300,
            280
        );

        expect(position.left).toBe(VIEWPORT_WIDTH - 280);
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
