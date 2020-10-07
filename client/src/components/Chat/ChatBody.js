import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './ChatBody.css';
import ChatMessage from './ChatMessage';

function ChatBody() {

  const messagesEndRef = useRef(null)
  const listOfMessages = useSelector(state => state.message.messages);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [listOfMessages]);

  return (
    <>
      <div className="chat-container_body">
        <ul className="chat-container_body-messages-ul">
          {
            listOfMessages.map((item, index) => (
              <ChatMessage
                key={index}
                text={item.text}
                isThisMessageSendByClient={item.isThisMessageSendByClient} />
            ))
          }
          <div ref={messagesEndRef} />
        </ul>
      </div>
    </>
  )
}

export default ChatBody;
