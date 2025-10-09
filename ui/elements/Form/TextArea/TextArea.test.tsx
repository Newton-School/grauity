import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import TextArea from './TextArea';

describe('TextArea Component', () => {
    const defaultProps = {
        name: 'test-textarea',
        label: 'Test Label',
        value: '',
        placeholder: 'Enter text here...',
        onChange: jest.fn(),
        onClick: jest.fn(),
        onBlur: jest.fn(),
    };

    test('renders the TextArea component with label and placeholder', () => {
        render(<TextArea {...defaultProps} />);
        expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText('Enter text here...')
        ).toBeInTheDocument();
    });

    test('calls onChange when text is entered', () => {
        render(<TextArea {...defaultProps} />);
        const textarea = screen.getByRole('textbox');
        fireEvent.change(textarea, { target: { value: 'Hello' } });

        expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
        expect(defaultProps.onChange).toHaveBeenCalledWith(expect.any(Object));
    });

    test('disables the TextArea when isDisabled is true', () => {
        render(<TextArea {...defaultProps} isDisabled />);
        const textarea = screen.getByRole('textbox');

        expect(textarea).toBeDisabled();
    });

    test('renders HelpMessage with current length and max length', () => {
        const propsWithMaxLength = {
            ...defaultProps,
            value: 'Hello',
            maxLength: 10,
            helpMessage: 'Max length 10 characters.',
        };

        render(<TextArea {...propsWithMaxLength} />);
        expect(
            screen.getByText('Max length 10 characters.')
        ).toBeInTheDocument();
        expect(screen.getByText(/5\/10/)).toBeInTheDocument();
    });

    test('renders error message when provided', () => {
        const propsWithValidation = {
            ...defaultProps,
            errorMessage: 'Too many characters!',
        };

        render(<TextArea {...propsWithValidation} />);

        expect(screen.getByText('Too many characters!')).toBeInTheDocument();
    });

    test('triggers onClick when the TextArea is clicked', () => {
        render(<TextArea {...defaultProps} />);
        const textarea = screen.getByRole('textbox');

        fireEvent.click(textarea);

        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    test('applies readOnly when readOnly prop is true', () => {
        render(<TextArea {...defaultProps} isReadOnly />);
        const textarea = screen.getByRole('textbox');

        expect(textarea).toHaveAttribute('readonly');
    });

    test('sets autoFocus on the TextArea', () => {
        render(<TextArea {...defaultProps} autoFocus />);
        const textarea = screen.getByRole('textbox');

        expect(document.activeElement).toBe(textarea);
    });
});
