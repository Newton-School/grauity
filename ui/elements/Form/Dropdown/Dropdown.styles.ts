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

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        flex: 1;
    }
`;

export const StyledCustomTrigger = styled.div`
    height: fit-content;
    width: fit-content;
`;
