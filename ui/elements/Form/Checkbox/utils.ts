import { css } from 'styled-components';
import { grauityIconSizeName } from 'ui/core';

import { CheckboxColors, CheckboxSize } from './types';

export const getIconSize = (size: CheckboxSize): grauityIconSizeName => {
    switch (size) {
        case 'small':
            return '12';
        case 'medium':
            return '16';
        case 'large':
            return '20';
        default:
            return '20';
    }
};

export const getCheckboxStyles = ({
    color = 'brand',
    checked = false,
    indeterminate = false,
}: {
    color: CheckboxColors;
    checked: boolean;
    indeterminate: boolean;
}) => {
    return css`
        border-color: ${`var(--border-moderate-${
        color === 'brand' ? 'primary' : color
    }-default)`};

        ${checked &&
        css`
            border-color: var(--border-emphasis-${color}-default);
            background: var(--bg-emphasis-${color}-default);
            transition: border-color 150ms ease, background 150ms ease;
            padding: 3px;
        `}

        ${indeterminate &&
        css`
            border-color: var(--bg-emphasis-${color}-default);
            background: var(--bg-emphasis-${color}-default);
            color: var(--bg-emphasis-${color}-default);
            transition: border-color 150ms ease, background 150ms ease,
                color 150ms ease;
        `}

        ${!checked &&
        !indeterminate &&
        css`
            &:hover:not(:disabled):not(:active) {
                border-color: var(--border-subtle-${color}-default);
                background: var(--bg-subtle-${color}-default);
            }
        `}

        &:active:not(:disabled) {
            border-color: var(--border-moderate-${color}-default);
        }

        &:focus:not(:disabled) {
            border-color: var(--border-emphasis-${color}-default);
        }

        &:focus-visible:not(:disabled) {
            outline: none;
            box-shadow: 0 0 0 3px var(--border-subtle-${color}-default);
        }
    `;
};
