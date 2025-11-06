import styled from 'styled-components';

import { getTextFieldStyles } from '../TextField/utils';
import { StyledOtpInputProps } from './types';

export const StyledOtpInputField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const StyledOtpContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
`;

export const StyledOtpInput = styled.input<StyledOtpInputProps>`
    display: flex;
    height: 32px;
    width: 100px;
    min-height: 32px;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-sp-5, 8px);
    border-radius: var(--corner-radius-cr-4, 8px);
    border: 1px solid var(--border-moderate-primary-default, #c9cfd9);
    background: var(--bg-subtle-primary-default, #fff);
    color: var(--text-emphasis-primary-default, #16191d);
    text-align: center;

    &::placeholder {
        color: var(--text-emphasis-primary-disabled, #8c95a6);
        opacity: 1;
    }

    &:hover {
        background: linear-gradient(
                0deg,
                var(--bg-subtle-primary-hover, #f6f7f9) 0%,
                var(--bg-subtle-primary-hover, #f6f7f9) 100%
            ),
            var(--bg-subtle-primary-default, #fff);
    }

    ${({ $color }) => getTextFieldStyles($color)}

    ${(props) =>
        props.$isOtpCorrect &&
        `
        border-color: var(--border-moderate-success-default, #50CE99);
    `}

    ${(props) =>
        props.$isOtpWrong &&
        `
        border-color: var(--border-moderate-error-default, #F8636B);
    `}

    &:disabled {
        background: linear-gradient(
                0deg,
                var(--bg-subtle-primary-hover, #f6f7f9) 0%,
                var(--bg-subtle-primary-hover, #f6f7f9) 100%
            ),
            var(--bg-subtle-primary-default, #fff);
    }
`;
