import styled from '@emotion/styled';

export default styled.div`
  & > div:not(:first-of-type) {
    margin-top: 10px;
  }
  padding: 8px;
  width: 320px;
  &:not(:first-of-type) {
    margin-left: 10px;
  }
`;
