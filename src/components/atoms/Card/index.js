import styled from '@emotion/styled';

export default styled.div`
  border-radius: 3px;
  padding: 8px;
  background: ${props => props.isDragging ? props.theme.colors.cardBgHover : props.theme.colors.cardBg};
  opacity: ${props => props.isDragging ? 0.7 : 1};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  min-height: 37px;
  user-select: none;
  transition: background 0.3s;
  &:hover{
    background: ${props => props.theme.colors.cardBgHover};
  }
`;
