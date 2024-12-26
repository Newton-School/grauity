import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Corousel from './Corousel';

const DummyItem = ({ children }: { children: React.ReactNode }) => (
    <div style={{ width: '200px' }}>{children}</div>
);

describe('Corousel Component', () => {
    // Rendering
    it('should render the component', () => {
        render(<Corousel title="Test Corousel" />);
        const title = screen.getByText('Test Corousel');
        expect(title).toBeInTheDocument();
    });

    // Title Node
    it('should render the title node', () => {
        render(<Corousel title={<h1>Test Corousel</h1>} />);
        const title = screen.getByText('Test Corousel');
        expect(title).toBeInTheDocument();
    });

    // Icons
    it('should render the icons', () => {
        render(<Corousel leftIcon="chevron-left" rightIcon="chevron-right" />);
        const leftIcon = screen.getByLabelText('chevron-left');
        const rightIcon = screen.getByLabelText('chevron-right');
        expect(leftIcon).toBeInTheDocument();
        expect(rightIcon).toBeInTheDocument();
    });

    // Items
    it('should render the items', () => {
        render(
            <Corousel
                items={[
                    <DummyItem>Item 1</DummyItem>,
                    <DummyItem>Item 2</DummyItem>,
                    <DummyItem>Item 3</DummyItem>,
                ]}
            />
        );
        const item1 = screen.getByText('Item 1');
        const item2 = screen.getByText('Item 2');
        const item3 = screen.getByText('Item 3');
        expect(item1).toBeInTheDocument();
        expect(item2).toBeInTheDocument();
        expect(item3).toBeInTheDocument();
    });
});
