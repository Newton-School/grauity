import styled, { css } from 'styled-components';

import { StyledTypographyInterface } from './types';
import { getTypographyVariantStyles } from './utils';

export const StyledTypography = styled.p.attrs((props: any) => ({
    as: props.as || 'p',
}))<StyledTypographyInterface>`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({ $variant }) =>
        css`
            ${getTypographyVariantStyles($variant)}
        `};

    ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`}
    ${({ $textTransform }) =>
        $textTransform && `text-transform: ${$textTransform};`}
    ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize};`}
    ${({ $color }) => $color && `color: ${$color};`};
`;

export default StyledTypography;
