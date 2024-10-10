import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import Overlay from './Overlay';

describe('Overlay Component', () => {
    it('disables body scroll when shouldDisableScroll is true', () => {
        render(
            <div style={{ height: '200vh', width: '200vw' }}>
                <Overlay shouldDisableScroll>
                    <div style={{ height: '2000px' }}>Content</div>
                    <div style={{ height: '2000px' }}>Content</div>
                    <div style={{ height: '2000px' }}>Content</div>
                </Overlay>
            </div>
        );
        expect(document.body).toHaveStyle('overflow: hidden');
    });

    it('does not disable body scroll when shouldDisableScroll is false', () => {
        render(
            <div style={{ height: '200vh', width: '200vw' }}>
                <Overlay shouldDisableScroll={false}>
                    <div style={{ height: '2000px' }}>Content</div>
                    <div style={{ height: '2000px' }}>Content</div>
                    <div style={{ height: '2000px' }}>Content</div>
                </Overlay>
            </div>
        );
        expect(document.body).not.toHaveStyle('overflow: hidden');
    });
});
