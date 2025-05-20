import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Button from '../Button';
import BottomSheet from './BottomSheet';
import { BottomSheetProps } from './types';

const TestBottomSheet = (props: BottomSheetProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>
            <BottomSheet
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                {...props}
            >
                <div>BottomSheet Content</div>
            </BottomSheet>
        </div>
    );
};

describe('BottomSheet Component', () => {
    // Rendering
    it('does not render initially', async () => {
        render(<TestBottomSheet />);
        await waitFor(()=>{
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        });
    });

    it('renders on pressing the button', async () => {
        render(<TestBottomSheet />);
        fireEvent.click(screen.getByText('Open BottomSheet'));
        await waitFor(()=>{
            expect(screen.getByRole('dialog')).toBeInTheDocument();
        });
    });
});
