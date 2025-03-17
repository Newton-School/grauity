import { css } from 'styled-components';

import { RadioButtonColors } from './types';

export const getRadioButtonStyles = (color: RadioButtonColors = 'brand') => {
    return css`
        border-color: ${`var(--border-moderate-${
        color === 'brand' ? 'primary' : color
    }-default)`};

        &:hover:not(:disabled):not(:active):not(:checked) {
            border-color: var(--border-subtle-${color}-default);
            background: var(--bg-subtle-${color}-default);
        }

        &:checked {
            border-color: var(--border-emphasis-${color}-default);
            background: var(--bg-subtle-primary-default, #fff);
            transition: border-color 150ms ease, background 150ms ease;
            padding: 3px;
        }

        &:checked::after {
            background: var(--bg-emphasis-${color}-default);
        }

        &:active:not(:disabled) {
            border-color: var(--border-moderate-${color}-default);
        }

        &:focus {
            outline: none;
            border: 1px solid var(--border-emphasis-${color}-default);
        }

        &:focus-visible:not(:disabled) {
            outline: none;
            border: 1px solid var(--border-emphasis-${color}-default);
            box-shadow: 0 0 0 3px var(--border-subtle-${color}-default);
        }
    `;
};
