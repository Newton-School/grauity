import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Carousel from './Carousel';

const DummyItem = ({ children }: { children: React.ReactNode }) => (
    <div style={{ width: '200px' }}>{children}</div>
);

describe('Carousel Component', () => {
    // Rendering
    it('should render the component', () => {
        render(<Carousel title="Test Carousel" />);
        const title = screen.getByText('Test Carousel');
        expect(title).toBeInTheDocument();
    });

    // Title Node
    it('should render the title node', () => {
        render(<Carousel title={<h1>Test Carousel</h1>} />);
        const title = screen.getByText('Test Carousel');
        expect(title).toBeInTheDocument();
    });

    // Icons
    it('should render the icons', () => {
        render(<Carousel leftIcon="chevron-left" rightIcon="chevron-right" />);
        const leftIcon = screen.getByLabelText('chevron-left');
        const rightIcon = screen.getByLabelText('chevron-right');
        expect(leftIcon).toBeInTheDocument();
        expect(rightIcon).toBeInTheDocument();
    });

    // Items
    it('should render the items', () => {
        render(
            <Carousel
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

    // Less items
    it('should hide the icons when there are less items and hideIconsOnLessItems is true', () => {
        render(
            <div style={{ width: '500px' }}>
                <Carousel
                    items={[
                        <DummyItem>Item 1</DummyItem>,
                        <DummyItem>Item 2</DummyItem>,
                    ]}
                    hideIconsOnLessItems
                />
            </div>
        );
        const leftIcon = screen.queryByLabelText('chevron-left');
        const rightIcon = screen.queryByLabelText('chevron-right');
        expect(leftIcon).not.toBeInTheDocument();
        expect(rightIcon).not.toBeInTheDocument();
    });
});
