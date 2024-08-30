import styled, { css } from 'styled-components';

import { TYPOGRAPHY_VARIANTS_ENUM } from './constants';
import { StyledTypographyInterface } from './types';

export const StyledTypography = styled.p.attrs(
    (props: StyledTypographyInterface) => ({
        as: props.as || 'p',
    })
)<StyledTypographyInterface>`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-primary, #16191d);

    ${({ variant }) => {
        switch (variant) {
            case TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H40: {
                return css`
                    font-size: var(--font-size-40px, 40px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H36: {
                return css`
                    font-size: var(--font-size-36px, 36px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H28: {
                return css`
                    font-size: var(--font-size-28px, 28px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H24: {
                return css`
                    font-size: var(--font-size-24px, 24px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H20: {
                return css`
                    font-size: var(--font-size-20px, 20px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                    letter-spacing: 0.25px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_H16: {
                return css`
                    font-size: var(--font-size-16px, 16px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                    letter-spacing: 0.25px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY1: {
                return css`
                    font-size: var(--font-size-18px, 18px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 160%;
                    letter-spacing: 0.1px;
                    /* paragraph-spacing: 12px; */
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY2: {
                return css`
                    font-size: var(--font-size-16px, 16px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 160%;
                    letter-spacing: 0.1px;
                    /* paragraph-spacing: 12px; */
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY3: {
                return css`
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 160%;
                    letter-spacing: 0.1px;
                    /* paragraph-spacing: 12px; */
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_BODY4: {
                return css`
                    font-size: var(--font-size-12px, 12px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 160%;
                    letter-spacing: 0.1px;
                    /* paragraph-spacing: 12px; */
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_LABEL: {
                return css`
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                    letter-spacing: 0.5px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_LABEL2: {
                return css`
                    font-size: var(--font-size-12px, 12px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                    letter-spacing: 0.4px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_SEMIBOLD_CALLOUT: {
                return css`
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                    letter-spacing: 0.15px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY1: {
                return css`
                    font-size: var(--font-size-18px, 18px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 160%;
                    letter-spacing: 0.1px;
                    /* paragraph-spacing: 12px; */
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY2: {
                return css`
                    font-size: var(--font-size-16px, 16px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 160%;
                    letter-spacing: 0.1px;
                    /* paragraph-spacing: 12px; */
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY3: {
                return css`
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 160%;
                    letter-spacing: 0.1px;
                    /* paragraph-spacing: 12px; */
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_BODY4: {
                return css`
                    font-size: var(--font-size-12px, 12px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 160%;
                    letter-spacing: 0.1px;
                    /* paragraph-spacing: 12px; */
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL: {
                return css`
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 120%;
                    letter-spacing: 0.5px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_LABEL2: {
                return css`
                    font-size: var(--font-size-12px, 12px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 120%;
                    letter-spacing: 0.4px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_CALLOUT: {
                return css`
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 120%;
                    letter-spacing: 0.15px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.PARAGRAPH_MEDIUM_CODE: {
                return css`
                    font-family: var(--font-family-code, 'Fira Code');
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 16px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_OVERLINE1: {
                return css`
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-650, 650);
                    line-height: 120%;
                    letter-spacing: 1.6px;
                    text-transform: uppercase;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.HEADING_SEMIBOLD_OVERLINE2: {
                return css`
                    font-size: var(--font-size-11px, 11px);
                    font-weight: var(--font-weight-650, 650);
                    line-height: 120%;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.ACTION_SEMIBOLD_PRIMARY: {
                return css`
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 160%;
                    letter-spacing: 0.4px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.ACTION_SEMIBOLD_LINK: {
                return css`
                    font-size: var(--font-size-14px, 14px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                    letter-spacing: 2px;
                    text-decoration: underline;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.BLOG_SEMIBOLD_TITLE: {
                return css`
                    font-size: var(--font-size-48px, 48px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                    letter-spacing: 0.4px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.BLOG_MEDIUM_REGULAR: {
                return css`
                    font-size: var(--font-size-18px, 18px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 32px;
                    letter-spacing: 0.2px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.BLOG_MEDIUM_BOLD: {
                return css`
                    font-size: var(--font-size-18px, 18px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 32px;
                    letter-spacing: 0.2px;
                `;
            }
            case TYPOGRAPHY_VARIANTS_ENUM.BLOG_MEDIUM_ITALIC: {
                return css`
                    font-size: var(--font-size-18px, 18px);
                    font-weight: var(--font-weight-medium, 500);
                    line-height: 32px;
                    letter-spacing: 0.2px;
                    font-style: italic;
                `;
            }
            default: {
                return css`
                    font-size: var(--font-size-40px, 40px);
                    font-weight: var(--font-weight-semibold, 600);
                    line-height: 120%;
                `;
            }
        }
    }}

    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ textTransform }) =>
        textTransform && `text-transform: ${textTransform};`}
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
    ${({ color }) => color && `color: ${color};`};
`;

export default StyledTypography;
