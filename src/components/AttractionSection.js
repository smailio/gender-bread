import React from 'react';

export default props => (
  <div
    style={{
      // height: '100vh',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: '#e74c3c'
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
        <input type="range" defaultValue="50" />
      </div>

      <div className="range-label">Men / Males / Masculinity</div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type="range" defaultValue="50" />
      </div>
      <div className="range-label">Women / Females / Femininity</div>
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
        <input type="range" defaultValue="0" />
      </div>

      <div className="range-label">Men / Males / Masculinity</div>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type="range" defaultValue="50" />
      </div>
      <div className="range-label">Women / Females / Femininity</div>
    </div>
  </div>
);