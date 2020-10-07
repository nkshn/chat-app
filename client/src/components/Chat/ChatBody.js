import React from 'react';
import './ChatBody.css';
import ChatMessage from './ChatMessage';

function ChatBody() {
  return (
    <>
      <div className="chat-container_body">
        <ul className="chat-container_body-messages-ul">
          <ChatMessage isThisMessageSendByMe={true} text="message by user 1" />
          <ChatMessage isThisMessageSendByMe={false} text="das dqseq dasd  qgdsf qsdq sdagasdf dfasdf wfkdsf skfqsdkasdka kasdkadk" />
          <ChatMessage isThisMessageSendByMe={true} text="das dqseq dasd  qgdsf qsdq sdagasdf dfasdf wfkdsf skfqsdkasdka kasdkadk" />
          <ChatMessage isThisMessageSendByMe={true} text="message by user 1" />
          <ChatMessage isThisMessageSendByMe={false} text="message" />
          <ChatMessage isThisMessageSendByMe={true} text="by" />
          <ChatMessage isThisMessageSendByMe={true} text="by user 1 yes" />
          <ChatMessage isThisMessageSendByMe={false} text="1" />
        </ul>
      </div>
    </>
  )
}

export default ChatBody;
