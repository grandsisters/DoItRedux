import React from 'react';
import logo from './logo.png';
import nenene from './nenene.png';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={nenene} className="App-logo" alt="logo" />
        <Counter />
        <img src={logo} width={'200px'} alt="logo" />
      </header>
    </div>
  );
}

export default App;
