import React from 'react';
import { RangeBottomLabel as Range } from './FlatRange';
import Section from './Section';
import { blue } from '../themes';
import Button from './Button';
import { StoreConsumer } from '../context/Store';
import { Row, Column, DesktopOnly } from './Grid.js';
import { ThemeProvider } from 'styled-components';

// noinspection JSUnusedLocalSymbols
export default props => (
  <StoreConsumer>
    {({ state, setState }) => (
      <ThemeProvider theme={blue}>
        <Section>
          <div>
            <p>Gender expression</p>
          </div>
          <Column>
            <Range
              value={state.genderExpression.f}
              onChange={e =>
                setState({
                  genderExpression: {
                    ...state.genderExpression,
                    f: e.target.value
                  }
                })
              }
              label="Female-ness"
            />
            <Range
              value={state.genderExpression.m}
              onChange={e =>
                setState({
                  ...state,
                  genderExpression: {
                    ...state.genderExpression,
                    m: e.target.value
                  }
                })
              }
              label="Male-ness"
            />
            <Row>
              <Button
                onClick={() => setState({ genderExpression: { f: 10, m: 99 } })}
              >
                Butch
              </Button>
              <Button
                onClick={() => setState({ genderExpression: { f: 99, m: 10 } })}
              >
                Femme
              </Button>
              <Button
                onClick={() => setState({ genderExpression: { f: 50, m: 50 } })}
              >
                Androgynous
              </Button>
              <DesktopOnly>
                <Button
                  onClick={() =>
                    setState({ genderExpression: { f: 35, m: 80 } })
                  }
                >
                  Gender neutral
                </Button>
                <Button
                  onClick={() =>
                    setState({ genderExpression: { f: 80, m: 35 } })
                  }
                >
                  Hyper masculine
                </Button>
              </DesktopOnly>
            </Row>
          </Column>
        </Section>
      </ThemeProvider>
    )}
  </StoreConsumer>
);
