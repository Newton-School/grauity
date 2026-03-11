import { CHIP_VARIANTS } from 'ui/elements/Chip/constants';

import {
    CHIP_PARITY_COMPONENT_NAME_ALIASES,
    CHIP_PARITY_PARAMETERS,
    CHIP_PARITY_VARIANT_SNAPSHOTS,
} from './Gallery.stories';

describe('Chip parity metadata', () => {
    it('contains the design-to-code component name mapping', () => {
        expect(CHIP_PARITY_COMPONENT_NAME_ALIASES).toEqual(
            expect.arrayContaining(['Chip', 'System_thunder'])
        );
        expect(CHIP_PARITY_PARAMETERS.designComponentName).toBe(
            'System_thunder'
        );
    });

    it('keeps parity snapshots unique and variant-complete', () => {
        const snapshotIds = CHIP_PARITY_VARIANT_SNAPSHOTS.map(
            (snapshot) => snapshot.id
        );
        expect(new Set(snapshotIds).size).toBe(snapshotIds.length);

        const snapshotVariants = Array.from(
            new Set(
                CHIP_PARITY_VARIANT_SNAPSHOTS.map((snapshot) => snapshot.variant)
            )
        ).sort();

        expect(snapshotVariants).toEqual([...CHIP_VARIANTS].sort());
        expect(CHIP_PARITY_VARIANT_SNAPSHOTS.length).toBeGreaterThanOrEqual(
            CHIP_VARIANTS.length
        );
    });
});
