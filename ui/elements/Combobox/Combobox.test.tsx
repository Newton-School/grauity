import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Combobox from './Combobox';
import { BaseItemOptionProps, BaseItemType } from '../DropdownMenu';

const options: BaseItemOptionProps[] = [
    { label: 'Apple', value: 'apple', type: BaseItemType.OPTION },
    { label: 'Banana', value: 'banana', type: BaseItemType.OPTION },
];

describe('Combobox', () => {
    it('renders input', () => {
        render(<Combobox options={options} />);
        expect(screen.getByPlaceholderText('Select')).toBeInTheDocument();
    });

    it('adds chip on selecting option', () => {
        render(<Combobox options={options} />);
        const input = screen.getByPlaceholderText('Select');
        fireEvent.focus(input);
        fireEvent.click(screen.getByText('Apple'));
        expect(screen.getByText('Apple')).toBeInTheDocument();
    });

    it('removes chip on clicking remove button', () => {
        render(<Combobox options={options} value={[options[0]]} />);
        fireEvent.click(screen.getAllByRole('button')[0]);
        expect(screen.queryByText('Apple')).not.toBeInTheDocument();
    });
});
