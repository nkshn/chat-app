import React, { useEffect } from 'react';
import './App.css';

import ChatContainer from './components/Chat/ChatContainer';
import ChatIconBtn from './components/ChatIconBtn';
import Nav from './components/Nav';

// file with socket configuration
import socket from './sockets-config';

function App() {

  useEffect(() => {
    socket.emit('join');

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, []);

  return (
    <>
      <Nav />
      <ChatContainer />
      <ChatIconBtn />
    </>
  );
}

export default App;
