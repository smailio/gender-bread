import React from 'react';
import FlatRange from './FlatRange';
import { red } from '../themes';
import { ThemeProvider } from 'styled-components';
import Section from './Section';

// noinspection JSUnusedLocalSymbols
export default props => (
  <ThemeProvider theme={red}>
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
          Men / Males / Masculinity
        </div>
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
          Women / Females / Femininity
        </div>
      </div>
      <p>Romantically attracted to</p>
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
          Men / Males / Masculinity
        </div>
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
          Women / Females / Femininity
        </div>
      </div>
    </Section>
  </ThemeProvider>
);
