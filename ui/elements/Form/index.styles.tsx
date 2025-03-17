import styled, { css } from 'styled-components';

import { StyledLabelProps } from '../../../common/types';
import { GenericMessageProps } from './types';

export const StyledLabel = styled.label<StyledLabelProps>`
    margin: 0;
    padding: 0;
    color: var(--text-secondary, #5b6271);
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.048px;
    font-family: var(--font-family);

    ${({ isRequired }) =>
        isRequired &&
        css`
            &::after {
                content: '*';
                color: var(--text-error, #d22d3a);
                padding-left: 4px;
            }
        `}

    ${({ color }) => {
        return css`
            color: var(--text-emphasis-${color}-default);
        `;
    }}

    ${({ isDisabled }) =>
        isDisabled &&
        css`
            color: var(--text-emphasis-primary-disabled, #8c95a6);
            cursor: not-allowed;
        `};
`;

export const StyledHelpMessage = styled.div`
    color: var(--text-secondary, #5b6271);
    display: flex;
    gap: 4px;
    align-items: center;
`;

export const StyledHelpMessageText = styled.span<GenericMessageProps>`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.048px;
`;

export const StyledHelpMessageMaxCharacters = styled(StyledHelpMessageText)`
    margin-left: auto;
`;

export const StyledErrorMessage = styled(StyledHelpMessage)`
    color: var(--text-error, #d22d3a);
`;

export const StyledErrorMessageText = styled(StyledHelpMessageText)``;

export const StyledSuccessMessage = styled(StyledHelpMessage)`
    color: var(--text-emphasis-success-default, #007a51); ;
`;

export const StyledSuccessMessageText = styled(StyledHelpMessageText)``;
