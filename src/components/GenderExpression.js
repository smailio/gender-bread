import React from 'react';
import { RangeBottomLabel as Range } from './FlatRange';
import Section from './Section';
import { yellow } from '../themes';
import Button from './Button';
import { StoreConsumer } from '../context/Store';
import { Row, Column, DesktopOnly } from './Grid.js';
import { ThemeProvider } from 'styled-components';

// noinspection JSUnusedLocalSymbols
export default props => (
  <StoreConsumer>
    {({ state, setState }) => (
      <ThemeProvider theme={yellow}>
        <Section>
          <div>
            <p>Gender Identity</p>
          </div>
          <Column>
            <Range
              value={state.genderIdentity.f}
              onChange={e =>
                setState({
                  genderIdentity: {
                    ...state.genderIdentity,
                    f: e.target.value
                  }
                })
              }
              label="Woman-ness"
            />
            <Range
              value={state.genderIdentity.m}
              onChange={e =>
                setState({
                  ...state,
                  genderIdentity: {
                    ...state.genderIdentity,
                    m: e.target.value
                  }
                })
              }
              label="Man-ness"
            />
            <Row>
              <Button
                onClick={() => setState({ genderIdentity: { f: 10, m: 99 } })}
              >
                Butch
              </Button>
              <Button
                onClick={() => setState({ genderIdentity: { f: 99, m: 10 } })}
              >
                Femme
              </Button>
              <Button
                onClick={() => setState({ genderIdentity: { f: 50, m: 50 } })}
              >
                Androgynous
              </Button>
              <DesktopOnly>
                <Button
                  onClick={() => setState({ genderIdentity: { f: 35, m: 80 } })}
                >
                  Gender neutral
                </Button>
                <Button
                  onClick={() => setState({ genderIdentity: { f: 80, m: 35 } })}
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
