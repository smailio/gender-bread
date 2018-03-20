import React from 'react';
import { RangeBottomLabel as Range } from './FlatRange';
import Section from './Section';
import { purple } from '../themes';
import Button from './Button';
import { StoreConsumer } from '../context/Store';
import { Row, Column, DesktopOnly, Title } from './Grid.js';
import { ThemeProvider } from 'styled-components';

// noinspection JSUnusedLocalSymbols
export default props => (
  <StoreConsumer>
    {({ state, setState }) => (
      <ThemeProvider theme={purple}>
        <Section>
          <div>
            <Title>Biological sex</Title>
          </div>
          <Column>
            <Range
              value={state.bioSex.f}
              onChange={e =>
                setState({
                  ...state,
                  bioSex: { ...state.bioSex, f: e.target.value }
                })
              }
              label="Female-ness"
            />
            <Range
              value={state.bioSex.m}
              onChange={e =>
                setState({
                  ...state,
                  bioSex: { ...state.bioSex, m: e.target.value }
                })
              }
              label="Male-ness"
            />
            <Row>
              <Button onClick={() => setState({ bioSex: { f: 10, m: 99 } })}>
                Male
              </Button>
              <Button onClick={() => setState({ bioSex: { f: 99, m: 10 } })}>
                Female
              </Button>
              <Button onClick={() => setState({ bioSex: { f: 50, m: 50 } })}>
                Intersex
              </Button>
              <DesktopOnly>
                <Button onClick={() => setState({ bioSex: { f: 35, m: 80 } })}>
                  FtM Male
                </Button>
                <Button onClick={() => setState({ bioSex: { f: 80, m: 35 } })}>
                  MtF Female
                </Button>
              </DesktopOnly>
            </Row>
          </Column>
        </Section>
      </ThemeProvider>
    )}
  </StoreConsumer>
);
