import React, { useState, useRef } from 'react';
import './ChatSend.css';
import { BiSend, BiSmile } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import {
  sendMessage
} from '../../store/actions/messageActions';

function ChatSend() {

  const dispatch = useDispatch();
  const textareaRef = useRef(null);
  const [message, setMessage] = useState('');

  const messageHandler = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  }

  return (
    <>
      <div className="chat-container_send">
        <textarea ref={textareaRef} value={message} placeholder="Type a message..." onChange={messageHandler} />
        <div className="chat-container_send-buttons">
          <button><BiSmile color="#3e55d2" size={20} /></button>
          <button disabled={message === '' ? true : false} onClick={() => {
            if (message !== '') {
              dispatch(sendMessage(message, true));
              setMessage('');
              textareaRef.current.focus();
            }
          }}><BiSend color={message === '' ? "#777" : "#3e55d2"} size={20} /></button>
        </div>
      </div>
    </>
  )
}

export default ChatSend;
