import React, { forwardRef } from 'react';

import { BottomSheetProps } from './types';

const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
    (props, ref) => {
        const { isOpen = false } = props;

        if (!isOpen) {
            return null;
        }

        return <div ref={ref}>BottomSheet</div>;
    }
);

export default BottomSheet;
