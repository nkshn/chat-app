import React from 'react';
import './ChatBody.css';
import { BiSend, BiSmile } from 'react-icons/bi';

function ChatBody() {
  return (
    <div className="chat-container">
      <div className="chat-container_header">
        <img width="36px" height="36px" alt="this is alt" title="this is title" src="https://randomuser.me/api/portraits/thumb/women/2.jpg" />
        <div className="chat-container_header-status-dot"></div>
        <div className="chat-container_header-text">
          <h3 className="chat-container_header-title">name surname</h3>
          <p className="chat-container_header-p">online/offline/disconnected</p>
        </div>
      </div>
      <div className="chat-container_body">
        <ul className="chat-container_body-messages-ul">
          <li className="chat-container_body-message sender-him">message by user 1</li>
          <li className="chat-container_body-message sender-me">das dqseq dasd  qgdsf qsdq sdagasdf dfasdf wfkdsf skfqsdkasdka kasdkadk</li>
          <li className="chat-container_body-message sender-me">das dqseq dasd  qgdsf qsdq sdagasdf dfasdf wfkdsf skfqsdkasdka kasdkadk</li>
          <li className="chat-container_body-message sender-me">message by user 1</li>
          <li className="chat-container_body-message sender-him">message</li>
          <li className="chat-container_body-message sender-him">by</li>
          <li className="chat-container_body-message sender-me">by user 1 yes</li>
          <li className="chat-container_body-message sender-me">1</li>
        </ul>
      </div>
      <div className="chat-container_send">
        <textarea placeholder="Type a message..." />
        <div className="chat-container_send-buttons">
          <button><BiSmile color="#3e55d2" size={20} /></button>
          <button><BiSend color="#3e55d2" size={20} /></button>
        </div>
      </div>
    </div>
  )
}

export default ChatBody;
