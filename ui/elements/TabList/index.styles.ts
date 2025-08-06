import styled, { css } from 'styled-components';

import { TAB_LIST_VARIANT_STYLES_MAPPING } from './constants';
import { StyledTabListProps } from './types';

export const StyledTabList = styled.div<StyledTabListProps>`
    display: flex;

    ${({ $variant }) => css`
        ${TAB_LIST_VARIANT_STYLES_MAPPING[$variant]}
    `};
`;
