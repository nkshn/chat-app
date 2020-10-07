import React from 'react';
import './ChatSend.css';
import { BiSend, BiSmile } from 'react-icons/bi';

function ChatSend() {
  return (
    <>
      <div className="chat-container_send">
        <textarea placeholder="Type a message..." />
        <div className="chat-container_send-buttons">
          <button><BiSmile color="#3e55d2" size={20} /></button>
          <button><BiSend color="#3e55d2" size={20} /></button>
        </div>
      </div>
    </>
  )
}

export default ChatSend;
