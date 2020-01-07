import styled from '@emotion/styled';

export default styled.input`
  font-size: 0.8rem;
  height: 19px;
  padding: 2px 4px;
  margin: 0;
  background: ${props => props.theme.colors.cardBg};
  color: ${props => props.theme.colors.text};
  outline: none;
  font-family: 'Roboto', sans-serif;
  border: none;
`;
