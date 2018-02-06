import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{ background: '#e74c3c' }}>
        <form>
          <p>Sexually attracted to</p>
          <input type="range" defaultValue="50" />
          <input type="range" defaultValue="0" />
          <p>Romantically attracted to</p>
          <input type="range" defaultValue="0" />
          <input type="range" defaultValue="0" />
        </form>
      </div>
    );
  }
}

export default App;
