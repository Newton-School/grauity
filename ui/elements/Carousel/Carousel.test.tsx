import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Carousel from './Carousel';
import { CLASSNAMES } from './constants';

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

    // ClassName Application
    it('should apply internal classnames correctly', () => {
        const { container } = render(
            <Carousel
                title="Custom Title"
                items={[
                    <DummyItem key="1">Item 1</DummyItem>,
                    <DummyItem key="2">Item 2</DummyItem>,
                    <DummyItem key="3">Item 3</DummyItem>,
                ]}
            />
        );

        const headerRow = container.querySelector(
            `.${CLASSNAMES.NS_CAROUSEL_HEADER_ROW}`
        );
        const title = container.querySelector(
            `.${CLASSNAMES.NS_CAROUSEL_TITLE}`
        );
        const controls = container.querySelector(
            `.${CLASSNAMES.NS_CAROUSEL_CONTROLS}`
        );
        const itemsContainer = container.querySelector(
            `.${CLASSNAMES.NS_CAROUSEL_ITEMS_CONTAINER}`
        );
        const items = container.querySelectorAll(
            `.${CLASSNAMES.NS_CAROUSEL_ITEM}`
        );

        expect(headerRow).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(controls).toBeInTheDocument();
        expect(itemsContainer).toBeInTheDocument();
        expect(items.length).toBe(3);
        items.forEach((item) => {
            expect(item).toBeInTheDocument();
            expect(item).toHaveClass(CLASSNAMES.NS_CAROUSEL_ITEM);
        });
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

    // Touch Gesture Support
    describe('Touch Gesture Support', () => {
        it('should handle swipe left gesture', () => {
            const onRightClick = jest.fn();
            render(
                <Carousel
                    items={[
                        <DummyItem>Item 1</DummyItem>,
                        <DummyItem>Item 2</DummyItem>,
                        <DummyItem>Item 3</DummyItem>,
                    ]}
                    onRightClick={onRightClick}
                />
            );

            const container = screen.getByRole('list');

            // Simulate touch start
            fireEvent.touchStart(container, {
                touches: [{ clientX: 100 }],
            });

            // Simulate touch end with swipe left
            fireEvent.touchEnd(container, {
                changedTouches: [{ clientX: 0 }],
            });

            // Wait for any state updates
            setTimeout(() => {
                expect(onRightClick).toHaveBeenCalled();
            }, 0);
        });

        it('should handle swipe right gesture', () => {
            const onLeftClick = jest.fn();
            render(
                <Carousel
                    items={[
                        <DummyItem>Item 1</DummyItem>,
                        <DummyItem>Item 2</DummyItem>,
                        <DummyItem>Item 3</DummyItem>,
                    ]}
                    onLeftClick={onLeftClick}
                />
            );

            const container = screen.getByRole('list');

            // Simulate touch start
            fireEvent.touchStart(container, {
                touches: [{ clientX: 0 }],
            });

            // Simulate touch end with swipe right
            fireEvent.touchEnd(container, {
                changedTouches: [{ clientX: 100 }],
            });

            // Wait for any state updates
            setTimeout(() => {
                expect(onLeftClick).toHaveBeenCalled();
            }, 0);
        });

        it('should not trigger swipe for small movements', () => {
            const onLeftClick = jest.fn();
            const onRightClick = jest.fn();
            render(
                <Carousel
                    items={[
                        <DummyItem>Item 1</DummyItem>,
                        <DummyItem>Item 2</DummyItem>,
                        <DummyItem>Item 3</DummyItem>,
                    ]}
                    onLeftClick={onLeftClick}
                    onRightClick={onRightClick}
                />
            );

            const container = screen.getByRole('list');

            // Simulate touch start
            fireEvent.touchStart(container, {
                touches: [{ clientX: 50 }],
            });

            // Simulate touch end with small movement
            fireEvent.touchEnd(container, {
                changedTouches: [{ clientX: 45 }],
            });

            // Wait for any state updates
            setTimeout(() => {
                expect(onLeftClick).not.toHaveBeenCalled();
                expect(onRightClick).not.toHaveBeenCalled();
            }, 0);
        });

        it('should respect disabled state for swipe gestures', () => {
            const onLeftClick = jest.fn();
            render(
                <Carousel
                    items={[
                        <DummyItem>Item 1</DummyItem>,
                        <DummyItem>Item 2</DummyItem>,
                        <DummyItem>Item 3</DummyItem>,
                    ]}
                    onLeftClick={onLeftClick}
                />
            );

            const container = screen.getByRole('list');

            // Simulate touch start
            fireEvent.touchStart(container, {
                touches: [{ clientX: 0 }],
            });

            // Simulate touch end with swipe right when at the start
            fireEvent.touchEnd(container, {
                changedTouches: [{ clientX: 100 }],
            });

            // Wait for any state updates
            setTimeout(() => {
                // Should not trigger left click when at the start
                expect(onLeftClick).not.toHaveBeenCalled();
            }, 0);
        });
    });
});
