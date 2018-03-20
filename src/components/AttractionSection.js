import React from 'react';
import { RangeBottomLabel as Range } from './FlatRange';
import { red } from '../themes';
import { ThemeProvider } from 'styled-components';
import Section from './Section';
import { StoreConsumer } from '../context/Store';
import { Column, Title } from './Grid.js';

// noinspection JSUnusedLocalSymbols
export default props => (
  <StoreConsumer>
    {({ state, setState }) => (
      <ThemeProvider theme={red}>
        <Section>
          <Column>
            <Title>Sexually attracted to</Title>
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
            <Title>Romantically attracted to</Title>
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
