import React, { Component } from 'react';
import AttractionSection from './components/AttractionSection';
import BiologicalSexSection from './components/BiologicalSexSection';
import GenderExpressionSection from './components/GenderExpression';
import GenderIdentitySection from './components/GenderIdentitySection';
import NameSection from './components/NameSection';
import './App.css';
import { StoreProvider } from './context/Store';

class App extends Component {
  render() {
    return (
      <StoreProvider>
        <div>
          <NameSection />
          <GenderIdentitySection />
          <GenderExpressionSection />
          <BiologicalSexSection />
          <AttractionSection />
        </div>
      </StoreProvider>
    );
  }
}

export default App;
