import styled, { css } from 'styled-components';

import { StyledLabelProps } from '../../../common/types';

export const StyledLabel = styled.label<StyledLabelProps>`
    color: var(--text-secondary, #5b6271);
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.048px;
    ${({ isRequired }) =>
        isRequired &&
        css`
            ::after {
                content: '*';
                color: var(--text-error, #d22d3a);
                padding-left: 4px;
            }
        `}
`;

export const StyledHelpMessage = styled.div`
    color: var(--text-secondary, #5b6271);
    display: flex;
    gap: 4px;
    align-items: center;
`;

export const StyledHelpMessageText = styled.span`
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
