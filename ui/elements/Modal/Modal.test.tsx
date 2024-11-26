import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Button from '../Button';
import Modal from './Modal';
import { ModalProps } from './types';

describe('Modal', () => {
    const defaultProps: ModalProps = {
        isOpen: false,
        banner: 'Modal banner',
        title: 'Modal title',
        description: 'Modal description',
        body: 'Modal body',
        action: (
            <>
                <Button variant="primary" onClick={() => {}} fullWidth>
                    Primary Button
                </Button>
                <Button variant="secondary" onClick={() => {}} fullWidth>
                    Secondary Button
                </Button>
            </>
        ),
        hideOnClickAway: true,
        blurBackground: false,
        onClose: () => {},
        mobileBottomFullWidth: false,
        modalPadding: '20px',
        modalBodyMargin: '',
        width: '500px',
        height: 'auto',
        minHeight: 'auto',
        showCloseButton: true,
    };

    it('renders the modal correctly when isOpen is true', () => {
        render(<Modal {...defaultProps} isOpen showCloseButton />);
        expect(screen.getByTestId('testid-modalwrapper')).toBeInTheDocument();
        expect(screen.getByText('Modal banner')).toBeInTheDocument();
        expect(screen.getByText('Modal title')).toBeInTheDocument();
        expect(screen.getByText('Modal description')).toBeInTheDocument();
        expect(screen.getByText('Modal body')).toBeInTheDocument();
        expect(screen.getByText('Primary Button')).toBeInTheDocument();
        expect(screen.getByText('Secondary Button')).toBeInTheDocument();
        expect(screen.getByTestId('testid-iconbutton')).toBeInTheDocument();
    });

    it('does not render the modal when isOpen is false', () => {
        render(<Modal {...defaultProps} isOpen={false} />);
        expect(
            screen.queryByTestId('testid-modalwrapper')
        ).not.toBeInTheDocument();
    });

    it('does not render the close button when showCloseButton is false', () => {
        render(<Modal {...defaultProps} isOpen showCloseButton={false} />);
        expect(
            screen.queryByTestId('testid-iconbutton')
        ).not.toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const onCloseFn = jest.fn();
        render(<Modal {...defaultProps} isOpen onClose={onCloseFn} />);
        fireEvent.click(screen.getByTestId('testid-iconbutton'));
        expect(onCloseFn).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when Escape key is pressed', () => {
        const onCloseFn = jest.fn();
        render(<Modal {...defaultProps} isOpen onClose={onCloseFn} />);
        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
        expect(onCloseFn).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when Escape key is pressed if isOpen is false', () => {
        const onCloseFn = jest.fn();
        render(<Modal {...defaultProps} isOpen={false} onClose={onCloseFn} />);
        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
        expect(onCloseFn).toHaveBeenCalledTimes(0);
    });

    it('calls onClose when clicked outside the modal', () => {
        const onCloseFn = jest.fn();
        render(<Modal {...defaultProps} isOpen onClose={onCloseFn} />);
        fireEvent.click(screen.getByTestId('testid-modalwrapper'));
        expect(onCloseFn).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when clicked inside the modal', () => {
        const onCloseFn = jest.fn();
        render(<Modal {...defaultProps} isOpen onClose={onCloseFn} />);
        fireEvent.click(screen.getByTestId('testid-modal'));
        expect(onCloseFn).toHaveBeenCalledTimes(0);
    });

    it('does not call onClose on outside click when hideOnClickAway is false', () => {
        const onCloseFn = jest.fn();
        render(
            <Modal
                {...defaultProps}
                isOpen
                onClose={onCloseFn}
                hideOnClickAway={false}
            />
        );
        fireEvent.click(screen.getByTestId('testid-modalwrapper'));
        expect(onCloseFn).toHaveBeenCalledTimes(0);
    });

    it('does not call onClose on Escape key press when hideOnClickAway is false', () => {
        const onCloseFn = jest.fn();
        render(
            <Modal
                {...defaultProps}
                isOpen
                onClose={onCloseFn}
                hideOnClickAway={false}
            />
        );
        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
        expect(onCloseFn).toHaveBeenCalledTimes(0);
    });
});
