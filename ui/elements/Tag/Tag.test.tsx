import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Tag from './Tag';

describe('Tag Component', () => {
    // Rendering
    it('renders the tag with default props', () => {
        render(<Tag>Test Tag</Tag>);
        expect(screen.getByText('Test Tag')).toBeInTheDocument();
    });

    // Truncation
    it('applies truncation styles when shouldTruncateText is true', () => {
        render(<Tag shouldTruncateText>Long text that should be truncated</Tag>);
        const tagLabel = screen.getByText('Long text that should be truncated');

        // Title attribute is provided with complete value
        expect(tagLabel).toHaveAttribute('title', 'Long text that should be truncated');

        // CSS styles for truncation
        expect(tagLabel).toHaveStyle('text-overflow: ellipsis');
        expect(tagLabel).toHaveStyle('white-space: nowrap');
        expect(tagLabel).toHaveStyle('overflow: hidden');
    });

    it('does not apply truncation styles when shouldTruncateText is false', () => {
        render(<Tag shouldTruncateText={false}>Long text that should not be truncated</Tag>);
        const tagLabel = screen.getByText('Long text that should not be truncated');

        // CSS styles for truncation should not exist
        expect(tagLabel).not.toHaveStyle('text-overflow: ellipsis');
        expect(tagLabel).not.toHaveStyle('white-space: nowrap');
    });

    // Button Click
    it('calls onButtonClick when the button is clicked', () => {
        const handleClick = jest.fn();
        render(<Tag onButtonClick={handleClick}>Test Tag</Tag>);
        const button = screen.getByRole('button');
        button.click();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    // Disabled State
    it('disables the button when isDisabled is true', () => {
        const handleClick = jest.fn();
        render(<Tag isDisabled onButtonClick={handleClick}>Disabled Tag</Tag>);

        // Button is disabled
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        // Clicking on the button does not call handelClick
        button.click();
        expect(handleClick).not.toHaveBeenCalled();
    });
});
