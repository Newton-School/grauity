import styled, { css } from 'styled-components';

import { StyledFormRowProps } from './types';


export const StyledFormRow = styled.div<StyledFormRowProps>`
    display: grid;
    grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns};
    gap: 16px;

    ${({ $column }) => $column && css`
        display: flex;
        flex-direction: column;
    `}
`;
