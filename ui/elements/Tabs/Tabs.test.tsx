import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Tabs from './Tabs';
import { TabProps } from './types';

const defaultProps: TabProps = {
    tabItems: ['Item1', 'Item2'],
    onTabFocusChange: jest.fn(),
};

describe('Tabs Component', () => {
    it('renders without crashing', () => {
        render(<Tabs tabItems={['Item1', 'Item2']} />);
        expect(screen.getByText('Item1')).toBeInTheDocument();
        expect(screen.getByText('Item2')).toBeInTheDocument();
    });

    it('click on non active tab triggers onTabItemClick', async () => {
        render(<Tabs {...defaultProps} />);
        fireEvent.click(screen.getByText('Item2'));
        await waitFor(() => {
            expect(defaultProps.onTabFocusChange).toHaveBeenCalledWith(1);
        });
    });

    it('renders custom children', () => {
        render(<Tabs tabItems={[<h1>Text 1</h1>, <span>Text 2</span>]} />);
        expect(screen.getByText('Text 1')).toBeInTheDocument();
        expect(screen.getByText('Text 2')).toBeInTheDocument();
    });
});
