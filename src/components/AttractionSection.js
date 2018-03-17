import React from 'react';
import { RangeBottomLabel as Range } from './FlatRange';
import { red } from '../themes';
import { ThemeProvider } from 'styled-components';
import Section from './Section';
import { StoreConsumer } from '../context/Store';
import { Column } from './Grid.js';

// noinspection JSUnusedLocalSymbols
export default props => (
  <StoreConsumer>
    {({ state, setState }) => (
      <ThemeProvider theme={red}>
        <Section>
          <Column>
            <p>Sexually attracted to</p>
            <Range
              value={state.sexualAttraction.m}
              onChange={e =>
                setState({
                  ...state,
                  sexualAttraction: {
                    ...state.sexualAttraction,
                    m: e.target.value
                  }
                })
              }
              label="Men / Males / Masculinity"
            />
            <Range
              value={state.sexualAttraction.f}
              onChange={e =>
                setState({
                  ...state,
                  sexualAttraction: {
                    ...state.sexualAttraction,
                    f: e.target.value
                  }
                })
              }
              label="Women / Females / Femininity"
            />
            <p>Romantically attracted to</p>
            <Range
              value={state.romanticAttraction.m}
              onChange={e =>
                setState({
                  ...state,
                  romanticAttraction: {
                    ...state.romanticAttraction,
                    m: e.target.value
                  }
                })
              }
              label="Men / Males / Masculinity"
            />
            <Range
              value={state.romanticAttraction.f}
              onChange={e =>
                setState({
                  ...state,
                  romanticAttraction: {
                    ...state.romanticAttraction,
                    f: e.target.value
                  }
                })
              }
              label="Women / Females / Femininity"
            />
          </Column>
        </Section>
      </ThemeProvider>
    )}
  </StoreConsumer>
);
