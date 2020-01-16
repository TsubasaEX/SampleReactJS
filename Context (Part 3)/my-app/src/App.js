import React, { Fragment, Component } from 'react';
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
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

const CustomLink = styled(Link)`
  color : red
`

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Vishwas"></UserProvider> */}
      <UserProvider value={{
        name: 'Zach',
        id: '456'
      }}>
        <ComponentC />
      </UserProvider>
    </div >
  );
}

export default App;
