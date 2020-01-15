import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
// method 1 - regular css - globally scoped
import './appStyles.css'
// method 3 - css module - locally scoped
import styles from './appStyles.module.css'
import { Button } from './components/Button';
import ButtonWrapper from './components/ButtonWrapper';
import styled from 'styled-components'
import Link from './components/Link'
import GlobalStyles from './global-styles'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import RenCounter from './components/RenCounter';

const CustomLink = styled(Link)`
  color : red
`

function App() {
  return (
    <div className="App">
  
      {/* method 1 - use render props */}
      <RenCounter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>} />
      <RenCounter render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>} />

      {/* <User render={(isLoggedIn)=> isLoggedIn ? 'Vishwas':'Guest'}/> */}

      {/* method 2 - use children props */}
      {/* <RenCounter>
      {
          (count,incrementCount)=>(
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )
      }
      </RenCounter>
      <RenCounter>
      {
          (count,incrementCount)=>(
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )
      }
      </RenCounter> */}
    </div >
  );
}

export default App;
