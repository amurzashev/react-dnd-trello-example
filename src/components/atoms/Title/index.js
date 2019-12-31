import React from 'react';
import Caption from '../Caption';
import styled from '@emotion/styled';

const Wrap = styled.div`
  padding: 2px 4px;
  background: ${props => props.bg};
  width: fit-content;
  border-radius: 3px;
  cursor: pointer;
`;

export default ({ title, bg }) => (
  <Wrap bg={bg}>
    <Caption size='xxs' color='text'>
      {title}
    </Caption>
  </Wrap>
)
