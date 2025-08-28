import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import ThemeScope from './index';

const MyThemedComponent = ({ id }: { id: string }) => {
    const StyledDiv = styled.div`
        ${(props) =>
        `background-color: ${
            props.theme.scopedTheme === 'dark' ? 'black' : 'white'
        }`}
    `;
    return (
        <StyledDiv data-testid={`styled-div-${id}`}>
            Hello, world {id}!
        </StyledDiv>
    );
};

describe('ThemeScope', () => {
    it('renders with default theme (light) when no props provided', () => {
        render(
            <ThemeScope data-testid="theme-scope">
                <div>Content</div>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toBeInTheDocument();
        expect(themeScope).toHaveClass('grauity-theme-light');
        expect(themeScope.tagName).toBe('DIV'); // default element
    });

    it('applies light theme when applyTheme is set to light', () => {
        render(
            <ThemeScope applyTheme="light" data-testid="theme-scope">
                <div>Content</div>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toHaveClass('grauity-theme-light');
    });

    it('applies dark theme when applyTheme is set to dark', () => {
        render(
            <ThemeScope applyTheme="dark" data-testid="theme-scope">
                <div>Content</div>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toHaveClass('grauity-theme-dark');
    });

    it('inverts theme from parent context (light to dark)', () => {
        render(
            <ThemeScope applyTheme="light">
                <ThemeScope invert data-testid="theme-scope">
                    <div>Content</div>
                </ThemeScope>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toHaveClass('grauity-theme-dark');
    });

    it('inverts theme from parent context (dark to light)', () => {
        render(
            <ThemeScope applyTheme="dark">
                <ThemeScope invert data-testid="theme-scope">
                    <div>Content</div>
                </ThemeScope>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toHaveClass('grauity-theme-light');
    });

    it('applyTheme prop takes precedence over invert', () => {
        render(
            <ThemeScope applyTheme="light">
                <ThemeScope invert applyTheme="light" data-testid="theme-scope">
                    <div>Content</div>
                </ThemeScope>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toHaveClass('grauity-theme-light');
    });

    it('renders as custom element when "as" prop is provided', () => {
        render(
            <ThemeScope as="section" data-testid="theme-scope">
                <div>Content</div>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope.tagName).toBe('SECTION');
    });

    it('forwards all props to the rendered element', () => {
        render(
            <ThemeScope
                as="div"
                data-testid="theme-scope"
                aria-label="Theme container"
                id="my-theme-scope"
            >
                <div>Content</div>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toHaveAttribute('aria-label', 'Theme container');
        expect(themeScope).toHaveAttribute('id', 'my-theme-scope');
    });

    it('merges prop className with theme className', () => {
        render(
            <ThemeScope
                applyTheme="dark"
                data-testid="theme-scope"
                className="custom-class"
            >
                <div>Content</div>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toHaveClass('custom-class');
        expect(themeScope).toHaveClass('grauity-theme-dark');
    });

    it('renders children correctly', () => {
        render(
            <ThemeScope>
                <div data-testid="child">Child content</div>
                <span data-testid="child-2">Another child</span>
            </ThemeScope>
        );

        expect(screen.getByTestId('child')).toBeInTheDocument();
        expect(screen.getByTestId('child-2')).toBeInTheDocument();
        expect(screen.getByTestId('child')).toHaveTextContent('Child content');
        expect(screen.getByTestId('child-2')).toHaveTextContent(
            'Another child'
        );
    });

    it('provides scopedTheme prop to styled-components context\'s theme', () => {
        render(
            <ThemeScope applyTheme="dark">
                <MyThemedComponent id="1" />
                <ThemeScope invert>
                    <MyThemedComponent id="2" />
                </ThemeScope>
            </ThemeScope>
        );

        const styledDiv1 = screen.getByTestId('styled-div-1');
        const styledDiv2 = screen.getByTestId('styled-div-2');

        expect(styledDiv1).toHaveStyle('background-color: black');
        expect(styledDiv2).toHaveStyle('background-color: white');
    });

    it('nested ThemeScope components work correctly', () => {
        render(
            <ThemeScope
                applyTheme="light"
                data-testid="outer-scope"
            >
                <ThemeScope
                    applyTheme="dark"
                    data-testid="inner-scope"
                >
                    <div>Nested content</div>
                </ThemeScope>
            </ThemeScope>
        );

        const outerScope = screen.getByTestId('outer-scope');
        const innerScope = screen.getByTestId('inner-scope');

        expect(outerScope).toHaveClass('grauity-theme-light');
        expect(innerScope).toHaveClass('grauity-theme-dark');
    });

    it('nested ThemeScope with invert works correctly', () => {
        render(
            <ThemeScope
                applyTheme="light"
                data-testid="outer-scope"
            >
                <ThemeScope
                    invert
                    data-testid="inner-scope"
                >
                    <div>Nested content</div>
                </ThemeScope>
            </ThemeScope>
        );

        const outerScope = screen.getByTestId('outer-scope');
        const innerScope = screen.getByTestId('inner-scope');

        expect(outerScope).toHaveClass('grauity-theme-light');
        expect(innerScope).toHaveClass('grauity-theme-dark');
    });

    it('inherits theme from parent when no props provided', () => {
        render(
            <ThemeScope applyTheme="dark">
                <ThemeScope data-testid="theme-scope">
                    <div>Content</div>
                </ThemeScope>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toHaveClass('grauity-theme-dark');
    });

    it('works with custom React component as root element', () => {
        const CustomComponent = ({
            children,
            className,
            ...props
        }: {
            children: React.ReactNode;
            className?: string;
            'data-testid'?: string;
        }) => (
            <div className={`custom-component ${className || ''}`} {...props}>
                {children}
            </div>
        );

        render(
            <ThemeScope
                as={CustomComponent}
                applyTheme="dark"
                data-testid="custom-component"
            >
                <div>Content</div>
            </ThemeScope>
        );

        const component = screen.getByTestId('custom-component');
        expect(component).toHaveClass('custom-component');
        expect(component).toHaveClass('grauity-theme-dark');
    });

    it('handles multiple levels of nesting with mixed props', () => {
        render(
            <ThemeScope
                applyTheme="light"
                data-testid="level-1"
            >
                <ThemeScope
                    invert
                    data-testid="level-2"
                >
                    <ThemeScope
                        invert
                        data-testid="level-3"
                    >
                        <ThemeScope
                            applyTheme="light"
                            data-testid="level-4"
                        >
                            <div>Deep nested content</div>
                        </ThemeScope>
                    </ThemeScope>
                </ThemeScope>
            </ThemeScope>
        );

        expect(screen.getByTestId('level-1')).toHaveClass(
            'grauity-theme-light'
        );
        expect(screen.getByTestId('level-2')).toHaveClass('grauity-theme-dark');
        expect(screen.getByTestId('level-3')).toHaveClass(
            'grauity-theme-light'
        );
        expect(screen.getByTestId('level-4')).toHaveClass(
            'grauity-theme-light'
        );
    });

    it('preserves provided className(s)', () => {
        render(
            <ThemeScope
                applyTheme="light"
                data-testid="theme-scope"
                className="class-a class-b"
            >
                <div>Content</div>
            </ThemeScope>
        );

        const themeScope = screen.getByTestId('theme-scope');
        expect(themeScope).toHaveClass('class-a');
        expect(themeScope).toHaveClass('class-b');
        expect(themeScope).toHaveClass('grauity-theme-light');
    });
});
