import styled from '@emotion/styled';

// unsafe must find another way
export default styled.div`
  & > *:not(:first-child) {
    margin-top: 10px;
  }
`;
