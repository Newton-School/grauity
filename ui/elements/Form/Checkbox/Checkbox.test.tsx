import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
    // Rendering
    it('should render the checkbox button', () => {
        render(<Checkbox name="checkbox" value={1} label="checkbox button" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
    });
    it('should render the label', () => {
        render(<Checkbox name="checkbox" value={1} label="checkbox button" />);
        const label = screen.getByText('checkbox button');
        expect(label).toBeInTheDocument();
    });
    it('should render the help message', () => {
        render(
            <Checkbox
                name="checkbox"
                value={1}
                label="checkbox button"
                helpMessage="Help message"
            />
        );
        const helpMessage = screen.getByText('Help message');
        expect(helpMessage).toBeInTheDocument();
    });
    it('should render the error message', () => {
        render(
            <Checkbox
                name="checkbox"
                value={1}
                label="checkbox button"
                errorMessage="Error message"
            />
        );
        const errorMessage = screen.getByText('Error message');
        expect(errorMessage).toBeInTheDocument();
    });

    // Functionality
    it('should call the onChange function correctly', async () => {
        const onChange = jest.fn();
        render(
            <Checkbox
                name="checkbox"
                value={1}
                label="checkbox button"
                onChange={onChange}
            />
        );
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        await waitFor(() => {
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(checkbox).toBeChecked();
        });
    });

    // Checked
    it('should be checked', () => {
        render(
            <Checkbox
                name="checkbox"
                value={1}
                label="checkbox button"
                checked
            />
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });
    it('should not be checked by default', () => {
        render(<Checkbox name="checkbox" value={1} label="Checkbox button" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
    });

    // Disabled
    it('should disable the checkbox button', () => {
        render(
            <Checkbox
                name="checkbox"
                value={1}
                label="checkbox button"
                disabled
            />
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });
    it('should not be disabled by default', () => {
        render(<Checkbox name="checkbox" value={1} label="Checkbox button" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeDisabled();
    });
});
