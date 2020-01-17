import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';


function App() {
  return (
    <div className="App" >
      <Counter inc="10">
      </Counter>
    </div>
  );
}

export default App;
