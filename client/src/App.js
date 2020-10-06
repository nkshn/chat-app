import React from 'react';
import './App.css';

import ChatBody from './components/ChatBody';
import ChatIconBtn from './components/ChatIconBtn';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <ChatBody />
      <ChatIconBtn />
    </>
  );
}

export default App;
