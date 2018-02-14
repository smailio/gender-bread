import React from 'react';
import FlatRange from './FlatRange';
import styled, { ThemeProvider } from 'styled-components';
import Section from './Section';
import { purple } from '../themes';
import Button from './Button';

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
// noinspection JSUnusedLocalSymbols
export default props => (
  <ThemeProvider theme={purple}>
    <Section>
      <div>
        <p>Sexually attracted to</p>
      </div>
      <Column>
        <FlatRange />
        <div
          className="range-label"
          style={{ marginTop: -5, marginBottom: 10 }}
        >
          Female-ness
        </div>
        <Column>
          <Column>
            <FlatRange />
          </Column>
          <div
            className="range-label"
            style={{ marginTop: -5, marginBottom: 10 }}
          >
            Male-ness
          </div>
        </Column>
        <Row>
          <Button>male</Button>
          <Button>female</Button>
          <Button>intersex</Button>
          <Button>Female self ID</Button>
        </Row>
      </Column>
    </Section>
  </ThemeProvider>
);
