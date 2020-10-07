import React from 'react';
import './ChatHeader.css';

function ChatHeader() {
  return (
    <>
      <div className="chat-container_header">
        <img width="36px" height="36px" alt="this is alt" title="this is title" src="https://randomuser.me/api/portraits/thumb/women/2.jpg" />
        <div className="chat-container_header-status-dot"></div>
        <div className="chat-container_header-text">
          <h3 className="chat-container_header-title">name surname</h3>
          <p className="chat-container_header-p">online/offline/disconnected</p>
        </div>
      </div>
    </>
  )
}

export default ChatHeader;
