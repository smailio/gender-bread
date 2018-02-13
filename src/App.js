import React, { Component } from 'react';
import AttractionSection from './components/AttractionSection';
import BiologicalSexSection from './components/BiologicalSexSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BiologicalSexSection />
        <AttractionSection />
      </div>
    );
  }
}

export default App;
