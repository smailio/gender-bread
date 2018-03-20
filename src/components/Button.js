import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  //padding: 0.25em 1em;
  border-radius: 5px;
  height: 45px;
  width: 120px;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.background};
  background-color: white;
  cursor: pointer;
`;

export default Button;
