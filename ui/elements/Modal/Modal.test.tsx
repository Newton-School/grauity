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
        onHide: () => {},
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

    it('calls onHide when close button is clicked', () => {
        const onHideFn = jest.fn();
        render(<Modal {...defaultProps} isOpen onHide={onHideFn} />);
        fireEvent.click(screen.getByTestId('testid-iconbutton'));
        expect(onHideFn).toHaveBeenCalledTimes(1);
    });

    it('calls onHide when Escape key is pressed', () => {
        const onHideFn = jest.fn();
        render(<Modal {...defaultProps} isOpen onHide={onHideFn} />);
        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
        expect(onHideFn).toHaveBeenCalledTimes(1);
    });

    it('does not call onHide when Escape key is pressed if isOpen is false', () => {
        const onHideFn = jest.fn();
        render(<Modal {...defaultProps} isOpen={false} onHide={onHideFn} />);
        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
        expect(onHideFn).toHaveBeenCalledTimes(0);
    });

    it('calls onHide when clicked outside the modal', () => {
        const onHideFn = jest.fn();
        render(<Modal {...defaultProps} isOpen onHide={onHideFn} />);
        fireEvent.mouseDown(document);
        expect(onHideFn).toHaveBeenCalledTimes(1);
    });

    it('does not call onHide when clicked outside the modal if isOpen is false', () => {
        const onHideFn = jest.fn();
        render(<Modal {...defaultProps} onHide={onHideFn} isOpen={false} />);
        fireEvent.mouseDown(document);
        expect(onHideFn).toHaveBeenCalledTimes(0);
    });

    it('does not call onHide when clicked inside the modal', () => {
        const onHideFn = jest.fn();
        render(<Modal {...defaultProps} isOpen onHide={onHideFn} />);
        fireEvent.click(screen.getByTestId('testid-modal'));
        expect(onHideFn).toHaveBeenCalledTimes(0);
    });

    it('does not call onHide on outside click when hideOnClickAway is false', () => {
        const onHideFn = jest.fn();
        render(
            <Modal
                {...defaultProps}
                isOpen
                onHide={onHideFn}
                hideOnClickAway={false}
            />
        );
        fireEvent.click(screen.getByTestId('testid-modalwrapper'));
        expect(onHideFn).toHaveBeenCalledTimes(0);
    });

    it('does not call onHide on Escape key press when hideOnClickAway is false', () => {
        const onHideFn = jest.fn();
        render(
            <Modal
                {...defaultProps}
                isOpen
                onHide={onHideFn}
                hideOnClickAway={false}
            />
        );
        fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
        expect(onHideFn).toHaveBeenCalledTimes(0);
    });
});
