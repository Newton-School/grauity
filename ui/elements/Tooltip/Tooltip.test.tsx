import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Tooltip, { TooltipProps } from '.';

describe('Tooltip Component', () => {
    const defaultProps: TooltipProps = {
        content: 'This is a tooltip',
        placement: 'top',
        fixedPositioning: false,
        hidden: false,
        hideArrow: false,
        children: <button type="button">Hover over me!</button>,
    };

    it('renders the tooltip content on hover', () => {
        render(
            <Tooltip {...defaultProps}>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        fireEvent.mouseEnter(screen.getByRole('button'));
        expect(
            screen.getByText(defaultProps.content as string)
        ).toBeInTheDocument();
    });

    it('hides the tooltip content on mouse leave', () => {
        render(
            <Tooltip {...defaultProps}>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        fireEvent.mouseEnter(screen.getByRole('button'));
        fireEvent.mouseLeave(screen.getByRole('button'));
        expect(
            screen.queryByText(defaultProps.content as string)
        ).not.toBeInTheDocument();
    });

    it('does not render the tooltip content when hidden is true', () => {
        render(
            <Tooltip {...defaultProps} hidden>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        fireEvent.mouseEnter(screen.getByRole('button'));
        expect(
            screen.queryByText(defaultProps.content as string)
        ).not.toBeInTheDocument();
    });

    it('renders the tooltip arrow by default', () => {
        render(
            <Tooltip {...defaultProps}>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        fireEvent.mouseEnter(screen.getByRole('button'));
        expect(screen.getByTestId('testid-tooltip-arrow')).toBeInTheDocument();
    });

    it('does not render the tooltip arrow when hideArrow is true', () => {
        render(
            <Tooltip {...defaultProps} hideArrow>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        fireEvent.mouseEnter(screen.getByRole('button'));
        expect(
            screen.queryByTestId('testid-tooltip-arrow')
        ).not.toBeInTheDocument();
    });

    it('renders the tooltip content by default when defaultOpen is true', () => {
        render(
            <Tooltip {...defaultProps} defaultOpen>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        expect(
            screen.getByText(defaultProps.content as string)
        ).toBeInTheDocument();
    });

    it('hides the tooltip content when defaultOpen is true and user hovers away from the button', () => {
        render(
            <Tooltip {...defaultProps} defaultOpen>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        fireEvent.mouseEnter(screen.getByRole('button'));
        fireEvent.mouseLeave(screen.getByRole('button'));
        expect(
            screen.queryByText(defaultProps.content as string)
        ).not.toBeInTheDocument();
    });

    it('closes the tooltip when clicked outside', () => {
        render(
            <Tooltip {...defaultProps}>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        fireEvent.mouseEnter(screen.getByRole('button'));
        fireEvent.click(document);
        expect(
            screen.queryByText(defaultProps.content as string)
        ).not.toBeInTheDocument();
    });

    it('renders the tooltip content when isOpen is true', () => {
        render(
            <Tooltip {...defaultProps} isOpen>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        expect(
            screen.getByText(defaultProps.content as string)
        ).toBeInTheDocument();
    });

    it('does not render the tooltip content when isOpen is false', () => {
        render(
            <Tooltip {...defaultProps} isOpen={false}>
                <button type="button">Hover over me!</button>
            </Tooltip>
        );
        expect(
            screen.queryByText(defaultProps.content as string)
        ).not.toBeInTheDocument();
    });
});
