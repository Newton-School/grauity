/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledTokenBlock = styled.div`
    display: flex;
    padding: var(--spacing-8px, 8px) var(--spacing-12px, 12px);
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: var(--corner-radius-8px, 8px);
    border: var(--spacing-1px, 1px) solid var(--border, #e1e5ea);
    background: var(--bg-tertiary, #edeff3);
    color: var(--text-primary, #16191d);
    font-family: var(--font-family-code, 'Fira Code');
    font-size: var(--font-size-14px, 14px);
    font-weight: var(--font-weight-semibold, 600);
    line-height: 120%;
    width: fit-content;
`;
