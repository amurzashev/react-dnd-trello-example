import styled from '@emotion/styled';

// unsafe must find another way
export default styled.div`
  min-height: 120px;
  & > *:not(:first-of-type) {
    margin-top: 10px;
  }
`;
