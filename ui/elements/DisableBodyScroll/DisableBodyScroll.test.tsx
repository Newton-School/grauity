import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import DisableBodyScroll from './DisableBodyScroll';

describe('DisableBodyScroll Component', () => {
    it('disables body scroll when enabled is true', () => {
        render(
            <div style={{ height: '200vh', width: '200vw' }}>
                <DisableBodyScroll>
                    <div style={{ height: '2000px' }}>Content</div>
                    <div style={{ height: '2000px' }}>Content</div>
                    <div style={{ height: '2000px' }}>Content</div>
                </DisableBodyScroll>
            </div>
        );
        expect(document.body).toHaveStyle('overflow: hidden');
    });

    it('does not disable body scroll when enabled is false', () => {
        render(
            <div style={{ height: '200vh', width: '200vw' }}>
                <DisableBodyScroll enabled={false}>
                    <div style={{ height: '2000px' }}>Content</div>
                    <div style={{ height: '2000px' }}>Content</div>
                    <div style={{ height: '2000px' }}>Content</div>
                </DisableBodyScroll>
            </div>
        );
        expect(document.body).not.toHaveStyle('overflow: auto');
    });
});
