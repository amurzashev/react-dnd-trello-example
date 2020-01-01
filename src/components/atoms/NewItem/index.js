import React from 'react';
import styled from '@emotion/styled';
import Card from '../Card';

const NewItem = styled(Card)`
  border: 0;
  background: ${props => props.theme.colors.bg};
  width: 100%;
  text-align: left;
  display: block;
`;

export default ({ children, ...props }) => (
  <NewItem as='button' {...props}>
    {children}
  </NewItem>
);
