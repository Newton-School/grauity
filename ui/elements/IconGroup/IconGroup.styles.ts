import styled from 'styled-components';

interface StyledIconGroupProps {
    horizontal: boolean;
    spacing: string;
}

export const StyledIconGroup = styled.div<StyledIconGroupProps>`
  display: flex;
  flex-direction: \${props => (props.horizontal ? 'row' : 'column')};
  gap: \${props => props.spacing};
  align-items: center;
`;
