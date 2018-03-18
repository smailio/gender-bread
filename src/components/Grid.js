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

const DesktopOnly = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export { Column, Row, DesktopOnly };
