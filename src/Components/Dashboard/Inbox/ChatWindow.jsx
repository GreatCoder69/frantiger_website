import React from "react";

const ChatWindow = ({ chat }) => {
  return (
    <div className="chat-window-content">
      <div className="chat-header">
        <h3 className="chat-name">{chat.name}</h3>
        <p>{chat.timestamp}</p>
      </div>
      <div className="chat-body">
        <p>{chat.message}</p>
      </div>
      <div className="chat-reply">
        <textarea placeholder="Reply to this"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
};

export default ChatWindow;
