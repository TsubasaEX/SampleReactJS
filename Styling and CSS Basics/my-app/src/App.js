import React from 'react';
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

const CustomLink = styled(Link)`
  color : red
`

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={true} />
      <Button>Click Me</Button>
      <ButtonWrapper clicked={true}>Click Me</ButtonWrapper>
      <CustomLink to="https://google.com">
        <h2>Google</h2>
      </CustomLink>
      <GlobalStyles/>
    </div>
  );
}

export default App;
