import styled, { css } from 'styled-components';

import {
    CHIP_FONT_SIZE_MAPPING,
    CHIP_VARIANT_STYLES_MAPPING,
} from './constants';
import { StyledChip } from './types';

export const StyledChipDiv = styled.div<StyledChip>`
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: fit-content;
    width: fit-content;
    border-radius: 4px;
    font-family: var(--font-family, 'Mona Sans');
    font-style: normal;
    font-weight: var(--font-weight-semibold, 550);
    line-height: 120%;
    letter-spacing: 0.4px;

    ${({ variant }) =>
        variant &&
        css`
            ${CHIP_VARIANT_STYLES_MAPPING[variant]};
        `}
    ${({ size }) =>
        size &&
        css`
            ${CHIP_FONT_SIZE_MAPPING[size]}
        `}
    ${({ hasBorder, borderColor }) =>
        hasBorder &&
        css`
            border: 1px solid;
            border-color: ${borderColor};
        `}
    ${({ textColor }) =>
        textColor &&
        css`
            color: ${textColor};
        `}
    ${({ backgroundColor }) =>
        backgroundColor &&
        css`
            background: ${backgroundColor};
        `}
    ${({ rounded }) =>
        rounded &&
        css`
            border-radius: 100px;
        `}
`;
