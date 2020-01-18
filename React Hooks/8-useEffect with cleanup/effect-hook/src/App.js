import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounterOne from './components/ClickCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <MouseContainer/>
    </div>
  );
}

export default App;
