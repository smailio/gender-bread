import React from 'react';
import FlatRange from './FlatRange';
import { ThemeProvider } from 'styled-components';
import Section from './Section';
import { purple } from '../themes';

// noinspection JSUnusedLocalSymbols
export default props => (
  <ThemeProvider theme={purple}>
    <Section>
      <div>
        <p>Sexually attracted to</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FlatRange />
        </div>

        <div
          className="range-label"
          style={{ marginTop: -5, marginBottom: 10 }}
        >
          Female-ness
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FlatRange />
          </div>
          <div
            className="range-label"
            style={{ marginTop: -5, marginBottom: 10 }}
          >
            Male-ness
          </div>
        </div>
      </div>
    </Section>
  </ThemeProvider>
);
