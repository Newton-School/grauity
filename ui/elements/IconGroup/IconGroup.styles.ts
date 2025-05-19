import styled from 'styled-components';

export const StyledIconGroup = styled.div<{
    horizontal: boolean;
    spacing: string;
}>`
  display: flex;
  flex-direction: \${props => (props.horizontal ? 'row' : 'column')};
  gap: \${props => props.spacing};
  align-items: center;
`;
