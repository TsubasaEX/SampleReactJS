import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounterOne from './components/ClickCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DateFetching from './components/DateFetching';

function App() {
  return (
    <div className="App">
      <DateFetching/>
    </div>
  );
}

export default App;
