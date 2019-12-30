import styled from '@emotion/styled';

export default styled.div`
  border-radius: 3px;
  padding: 8px;
  background: ${props => props.theme.colors.cardBg};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  user-select: none;
`;
