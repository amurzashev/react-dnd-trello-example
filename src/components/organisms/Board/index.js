import styled from '@emotion/styled';

export default styled.section`
  display: flex;
  flex-direction: row;
  padding: 12px;
  width: fit-content;
  min-width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.bg};
`;