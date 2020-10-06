import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import './ChatIconBtn.css';

function ChatIconBtn() {
  return (
    <div className="icon-btn">
      <BsFillChatDotsFill className="icon" size={36} />
    </div>
  )
}

export default ChatIconBtn
