import React, { useState, useRef } from 'react';
import './ChatSend.css';
import { BiSend, BiSmile } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import {
  sendMessage
} from '../../store/actions/messageActions';

// file with socket configuration
import socket from '../../sockets-config';

function ChatSend() {

  const dispatch = useDispatch();
  const textareaRef = useRef(null);
  const [message, setMessage] = useState('');

  // sending message to telegram bot
  const messageHandler = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  }

  const socketSendingTelegram = () => {
    socket.emit('messages', {
      message: message,
      isThisMessageSendByClient: true,
    });
  }

  return (
    <>
      <div className="chat-container_send">
        <textarea ref={textareaRef} value={message} placeholder="Type a message..." onChange={messageHandler} />
        <div className="chat-container_send-buttons">
          <button><BiSmile color="#3e55d2" size={20} /></button>
          <button disabled={message === '' ? true : false} onClick={() => {
            if (message !== '') {
              dispatch(sendMessage(message, true)); // call action for adding new message
              socketSendingTelegram(); // call socket action ('messages') for sending message to telegram bot
              setMessage(''); // clearing message and textarea
              textareaRef.current.focus(); // scrolling to bottom chat body to see latest messages
            }
          }}><BiSend color={message === '' ? "#777" : "#3e55d2"} size={20} /></button>
        </div>
      </div>
    </>
  )
}

export default ChatSend;
