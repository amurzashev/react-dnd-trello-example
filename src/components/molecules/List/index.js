import styled from '@emotion/styled';

export default styled.div`
  & > div:not(:first-of-type) {
    margin-top: 10px;
  }
  border: 1px solid black;
  padding: 8px;
  width: 320px;
  border-radius: 3px;
  &:not(:first-of-type) {
    margin-left: 10px;
  }
`;
