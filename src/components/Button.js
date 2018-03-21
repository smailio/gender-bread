import styled from 'styled-components';

const Button = styled.button`
  font-size: 0.8em;
  margin: 0.8em;
  box-sizing: border-box;
  //padding: 0.25em 1em;
  border-radius: 5px;
  height: 30px;
  min-width: 75px;
  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.background};
  background-color: white;
  cursor: pointer;
`;

export default Button;
