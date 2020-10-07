import React from 'react';
import PropTypes from 'prop-types';
import './ChatMessage.css';

function ChatMessage(props) {
  return (
    <>
      {
        props.isThisMessageSendByMe === true
          ? <li className="chat-container_body-message sender-me">{props.text}</li>
          : <li className="chat-container_body-message sender-him">{props.text}</li>
      }
    </>
  )
}

ChatMessage.propTypes = {
  isThisMessageSendByMe: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChatMessage;
