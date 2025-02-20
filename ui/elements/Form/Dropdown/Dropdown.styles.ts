import styled from 'styled-components';

import Button from '../../Button';

export const StyledDropdown = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-family: var(--font-family);
`;

export const StyledDropdownTrigger = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    outline: 1px solid var(--border-subtle-primary-default, #e1e5ea);

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
