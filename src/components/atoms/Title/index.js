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

export default ({ title, bg, ...props }) => (
  <Wrap bg={bg} {...props}>
    <Caption size='xs' color='text'>
      {title}
    </Caption>
  </Wrap>
);
