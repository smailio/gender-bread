import React from 'react';
import FlatRange from './FlatRange';

export default ({}) => (
  <div
    style={{
      // height: '100vh',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: '#8E44AD'
    }}
  >
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

      <div className="range-label">Female-ness</div>
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
        <div className="range-label">Male-ness</div>
      </div>
    </div>
  </div>
);
