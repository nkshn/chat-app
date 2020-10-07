import React from 'react';
import './ChatContainer.css';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatSend from './ChatSend';

function ChatContainer() {
  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatBody />
      <ChatSend />
    </div>
  )
}

export default ChatContainer;
