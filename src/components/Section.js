import styled from 'styled-components';

const Section = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background-color: ${props => props.theme.background};
  color: ${props => props.theme.main};
  border-left: 15px solid ${props => props.theme.background};
`;

export default Section;
