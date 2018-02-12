import React from 'react';
import styled from 'styled-components';

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
        <input
          style={{
            background: 'linear-gradient(to right, #674172 0%, #674172 100%)',
            backgroundSize: '98% 10px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          type="range"
          defaultValue="50"
        />
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
          <input
            style={{
              background: 'linear-gradient(to right, #674172 0%, #674172 100%)',
              backgroundSize: '98% 10px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            type="range"
            defaultValue="50"
          />
        </div>
        <div className="range-label">Male-ness</div>
      </div>
    </div>
  </div>
);
