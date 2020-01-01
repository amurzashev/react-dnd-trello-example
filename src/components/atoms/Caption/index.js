import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';

const getSize = props => {
  switch (props.size) {
    case 'xxs':
      return '0.7rem';
    case 'xs':
      return '0.8rem';
    case 's':
      return '0.95rem';
    case 'm':
      return '1.1rem';
    case 'l':
      return '1.4rem';
    default:
      return props.size;
  }
};

export default styled('p', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'color',
})`
  font-size: ${props => props.size ? getSize(props) : '1.1rem'};
  color: ${props => props.color ? props.theme.colors[props.color] : 'initial'};
`;
