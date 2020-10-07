import React from 'react';
import './App.css';

import ChatContainer from './components/Chat/ChatContainer';
import ChatIconBtn from './components/ChatIconBtn';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <ChatContainer />
      <ChatIconBtn />
    </>
  );
}

export default App;
