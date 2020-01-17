import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounterOne from './components/ClickCounterOne';
import HookCounterOne from './components/HookCounterOne';

function App() {
  return (
    <div className="App">
      {/* <ClickCounterOne/> */}
      <HookCounterOne />
    </div>
  );
}

export default App;
