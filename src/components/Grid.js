import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Title = styled.div`
  color: ${props => props.theme.main};
  font-family: Roboto, Arial, Sans-serif, serif;
  padding: 10px 10px 10px 10px;
  font-size: 1.2em;
`;

const DesktopOnly = styled.div`
  box-sizing: border-box;

  @media (max-width: 800px) {
    display: none;
  }
`;

export { Column, Row, DesktopOnly, Title };
