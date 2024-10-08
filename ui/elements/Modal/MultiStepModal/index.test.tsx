import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { MultiStepModalProps } from '../types';
import MultiStepModal from '.';

describe('MultiStepModal', () => {
    const defaultProps: MultiStepModalProps = {
        isOpen: true,
        modalSteps: [
            {
                banner: (
                    <img
                        src="https://via.placeholder.com/300x100"
                        alt="Banner"
                    />
                ),
                title: 'Step 1',
                description: 'Description for step 1',
                body: 'Body for step 1',
                nextButtonText: 'Next',
                showBackButton: false,
                buttonVariant: 'primary',
            },
            {
                banner: 'Banner 2',
                title: 'Step 2',
                description: 'Description for step 2',
                body: <div>Body for step 2</div>,
                nextButtonText: 'Finish',
                showBackButton: true,
                buttonVariant: 'secondary',
            },
        ],
        hideOnClickAway: false,
        blurBackground: false,
        onHide: jest.fn(),
        onFinalStep: jest.fn(),
        mobileBottomFullWidth: false,
        onStepChange: jest.fn(),
        showModalStepsPagination: true,
        modalPadding: '20px',
        modalBodyMargin: '12px 0 0 0',
        width: '500px',
        height: 'auto',
        minHeight: 'auto',
        showCloseButton: true,
    };

    it('renders the first step correctly', () => {
        render(<MultiStepModal {...defaultProps} />);
        expect(screen.getByText('Step 1')).toBeInTheDocument();
        expect(screen.getByText('Description for step 1')).toBeInTheDocument();
        expect(screen.getByAltText('Banner')).toBeInTheDocument();
    });

    it('navigates to the next step when the next button is clicked', () => {
        render(<MultiStepModal {...defaultProps} />);
        fireEvent.click(screen.getByText('Next'));
        expect(screen.getByText('Step 2')).toBeInTheDocument();
        expect(screen.getByText('Description for step 2')).toBeInTheDocument();
        expect(screen.getByText('Body for step 2')).toBeInTheDocument();
    });

    it('navigates to the previous step when the back button is clicked', () => {
        render(<MultiStepModal {...defaultProps} />);
        fireEvent.click(screen.getByText('Next'));
        fireEvent.click(screen.getByText('Back'));
        expect(screen.getByText('Step 1')).toBeInTheDocument();
        expect(screen.getByText('Description for step 1')).toBeInTheDocument();
        expect(screen.getByAltText('Banner')).toBeInTheDocument();
    });

    it('calls onStepChange when the step changes', () => {
        const onStepChange = jest.fn();
        render(<MultiStepModal {...defaultProps} onStepChange={onStepChange} />);
        fireEvent.click(screen.getByText('Next'));
        expect(onStepChange).toHaveBeenCalledTimes(1);
    });

    it('calls onFinalStep and onHide when the final step button is clicked', () => {
        const onFinalStep = jest.fn();
        const onHide = jest.fn();
        render(
            <MultiStepModal
                {...defaultProps}
                onFinalStep={onFinalStep}
                onHide={onHide}
            />
        );
        fireEvent.click(screen.getByText('Next'));
        fireEvent.click(screen.getByText('Finish'));
        expect(onFinalStep).toHaveBeenCalledTimes(1);
        expect(onHide).toHaveBeenCalledTimes(1);
    });

    it('renders the close button when stated', () => {
        render(<MultiStepModal {...defaultProps} showCloseButton />);
        expect(screen.getByTestId('testid-iconbutton')).toBeInTheDocument();
    });

    it('renders the close button and calls onHide when clicked', () => {
        const onHide = jest.fn();
        render(<MultiStepModal {...defaultProps} showCloseButton onHide={onHide} />);
        fireEvent.click(screen.getByTestId('testid-iconbutton'));
        expect(onHide).toHaveBeenCalledTimes(1);
    });

    it('does not render the close button when showCloseButton is false', () => {
        render(<MultiStepModal {...defaultProps} showCloseButton={false} />);
        expect(
            screen.queryByTestId('testid-iconbutton')
        ).not.toBeInTheDocument();
    });
});
