import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Count from './components/Count';
import Button from './components/Button';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  );
}

export default App;
