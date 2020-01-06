import styled from '@emotion/styled';

// unsafe must find another way
export default styled.div`
  padding: 0 0 60px 0;
  & > *:not(:first-of-type) {
    margin-top: 10px;
  }
`;
