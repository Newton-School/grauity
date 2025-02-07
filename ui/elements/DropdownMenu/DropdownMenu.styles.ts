import styled from 'styled-components';

export const StyledDropdownMenu = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 300px;
    min-height: 400px;
    max-height: 500px;
    padding: 8px 0;
    font-family: var(--font-family);
    flex-direction: column;
    align-items: flex-start;
    border-radius: var(--corner-radius-cr-4, 8px);
    border: 1px solid var(--border-subtle-primary-default, #e1e5ea);
    background: var(--bg-subtle-primary-default, #fff);
    overflow-x: hidden;
    overflow-y: auto;

    * {
        box-sizing: border-box;
    }
`;

export const StyledDropdownMenuHeader = styled.div`
    box-sizing: border-box;
    padding: 6px 16px 14px 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    border-bottom: 1px solid var(--border-subtle-primary-default, #e1e5ea);
`;
export const StyledDropdownMenuHeaderTitle = styled.div`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 28px;
    letter-spacing: 0.06px;
`;
export const StyledDropdownMenuHeaderSubtext = styled.div`
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    line-height: 14px;
    letter-spacing: 0.4px;
`;

export const StyledDropdownMenuBody = styled.div`
    display: flex;
    padding: 4px 12px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`;
export const StyledDropdownMenuSearchBox = styled.div`
    display: flex;
    padding: var(--spacing-sp-5, 8px) 0px var(--spacing-sp-3, 4px) 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sp-5, 8px);
    align-self: stretch;
`;
