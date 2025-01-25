import React from "react";

const RecentChats = ({ chats, setCurrentChat }) => {
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id} onClick={() => setCurrentChat(chat)} className="chat-item">
          <div className="chat-name">{chat.name}</div>
          <div className="chat-message">{chat.message}</div>
          <div className="chat-timestamp">{chat.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default RecentChats;
