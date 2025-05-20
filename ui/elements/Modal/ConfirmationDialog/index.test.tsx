import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import ConfirmationDialog, { ConfirmationDialogProps } from '.';

describe('ConfirmationDialog', () => {
    const defaultProps: ConfirmationDialogProps = {
        isOpen: false,
        onConfirm: jest.fn(),
        onCancel: jest.fn(),
        title: 'Modal title',
        description: 'Modal description',
        confirmText: 'Modal confirmText',
        cancelText: 'Modal cancelText',
    };

    it('renders the confirmation dialog title, description and buttons', async () => {
        render(<ConfirmationDialog {...defaultProps} isOpen />);
        await waitFor(()=>{
            expect(screen.getByText('Modal title')).toBeInTheDocument();
            expect(screen.getByText('Modal description')).toBeInTheDocument();
            expect(screen.getByText('Modal confirmText')).toBeInTheDocument();
            expect(screen.getByText('Modal cancelText')).toBeInTheDocument();
        });
    });

    it('calls onConfirm when confirm button is clicked', async () => {
        render(<ConfirmationDialog {...defaultProps} isOpen />);
        fireEvent.click(screen.getByText('Modal confirmText'));
        await waitFor(()=>{
            expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);
        });
    });

    it('calls onCancel when cancel button is clicked', async () => {
        render(<ConfirmationDialog {...defaultProps} isOpen />);
        fireEvent.click(screen.getByText('Modal cancelText'));
        await waitFor(()=>{
            expect(defaultProps.onCancel).toHaveBeenCalledTimes(1);
        });
    });

    it('renders the close button when showCloseButton is not falsy', async () => {
        render(<ConfirmationDialog {...defaultProps} showCloseButton isOpen />);
        await waitFor(()=>{
            expect(screen.getByTestId('testid-iconbutton')).toBeInTheDocument();
        });
    });

    it('does not render the close button when showCloseButton is false', async () => {
        render(
            <ConfirmationDialog
                {...defaultProps}
                showCloseButton={false}
                isOpen
            />
        );
        await waitFor(()=>{
            expect(
                screen.queryByTestId('testid-iconbutton')).not.toBeInTheDocument();
        }); 
    });

    it('calls onCancel when close button is present and clicked', async () => {
        const onCancelFn = jest.fn();
        render(
            <ConfirmationDialog
                {...defaultProps}
                showCloseButton
                onCancel={onCancelFn}
                isOpen
            />
        );
        fireEvent.click(screen.getByTestId('testid-iconbutton'));
        await waitFor(()=>{
            expect(onCancelFn).toHaveBeenCalledTimes(1);
        });
    });

    it('calls onCancel when hideOnClickAway is true and Escape button is pressed', async () => {
        const onCancelFn = jest.fn();
        render(
            <ConfirmationDialog
                {...defaultProps}
                hideOnClickAway
                onCancel={onCancelFn}
                isOpen
            />
        );
        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
        await waitFor(()=>{
            expect(onCancelFn).toHaveBeenCalledTimes(1);
        });
    });

    it('does not call onCancel when hideOnClickAway is false and Escape button is pressed', async () => {
        const onCancelFn = jest.fn();
        render(
            <ConfirmationDialog
                {...defaultProps}
                hideOnClickAway={false}
                onCancel={onCancelFn}
                isOpen
            />
        );
        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
        await waitFor(()=>{
            expect(onCancelFn).toHaveBeenCalledTimes(0);
        });
    });

    it('calls onCancel when hideOnClickAway is true and clicked outside the modal', async () => {
        const onCancelFn = jest.fn();
        render(
            <ConfirmationDialog
                {...defaultProps}
                hideOnClickAway
                onCancel={onCancelFn}
                isOpen
            />
        );
        fireEvent.click(screen.getByTestId('testid-modalwrapper'));
        await waitFor(()=>{
            expect(onCancelFn).toHaveBeenCalledTimes(1);
        });
    });

    it('does not call onCancel when hideOnClickAway is false and clicked outside the modal', async () => {
        const onCancelFn = jest.fn();
        render(
            <ConfirmationDialog
                {...defaultProps}
                hideOnClickAway={false}
                onCancel={onCancelFn}
                isOpen
            />
        );
        fireEvent.click(screen.getByTestId('testid-modalwrapper'));
        await waitFor(()=>{
            expect(onCancelFn).toHaveBeenCalledTimes(0);
        });
    });
});
