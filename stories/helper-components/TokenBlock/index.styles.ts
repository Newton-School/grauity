/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const StyledHideOnPrintWrapper = styled.div`
    @media print {
        display: none;
    }
`;

export const StyledTokenBlock = styled.div<any>`
    display: flex;
    padding: var(--spacing-8px, 8px) var(--spacing-12px, 12px);
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: var(--corner-radius-8px, 8px);
    border: 1px solid var(--border, #e1e5ea);
    background: ${({ $background }) =>
        $background || 'var(--bg-tertiary, #edeff3)'};
    color: var(--text-primary, #16191d) !important;
    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;
    font-size: var(--font-size-14px, 14px) !important;
    font-weight: var(--font-weight-semibold, 600) !important;
    line-height: 120%;
    width: fit-content;
    position: relative;
    overflow: hidden;

    ${({ $interactive }) =>
        $interactive &&
        css`
            cursor: pointer;
        `}
`;

export const StyledTokenBlockCopiedContainer = styled.div<any>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: var(--bg-tertiary, #edeff3);
    color: var(--text-primary, #16191d) !important;
    font-family: var(--font-family-code, 'Fira Code', 'monospace') !important;
    font-size: var(--font-size-14px, 14px) !important;
    font-weight: var(--font-weight-semibold, 600) !important;
    line-height: 120%;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: -1;

    ${({ $copied }) =>
        $copied &&
        css`
            z-index: 1;
            opacity: 1;
        `}
`;
