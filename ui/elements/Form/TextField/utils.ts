import { css } from 'styled-components';

import { TextFieldColors } from './types';

export const getTextFieldStyles = (color: TextFieldColors = 'brand') => {
    return css`
        ${color !== 'brand' &&
        `border: 1px solid var(--border-emphasis-${color}-default, #d9d9d9);`}

        &:focus {
            border: 1px solid var(--border-emphasis-${color}-default, #61a8ff);
            background: var(--bg-subtle-primary-default, #fff);
            outline: 0px solid transparent;
        }

        &:focus-visible {
            border: 1px solid var(--border-emphasis-${color}-default, #61a8ff);
            outline: 2px solid var(--border-subtle-${color}-default, #61a8ff);
            background: var(--bg-subtle-primary-default, #fff);
        }

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
            -webkit-text-fill-color: var(
                --text-emphasis-primary-default,
                #1a1d24
            );
            -webkit-box-shadow: 0 0 0px 1000px
                var(--bg-subtle-${color}-default, #e5f1ff) inset;
        }
    `;
};
