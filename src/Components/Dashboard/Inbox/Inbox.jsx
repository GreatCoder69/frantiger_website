import React, { useState } from "react";
import "./Inbox.css";
import ChatWindow from "./ChatWindow";
import PersonDetails from "./PersonDetails";
import RecentChats from "./RecentChats";
import Pagination from "./Pagination";

const Inbox = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const chatsPerPage = 10; // Adjusted to 10 messages per page

  const chats = [
    {
      id: 1,
      name: "Mahesh",
      message: "Hi, I Have Been Sent Couple Of Mail...",
      timestamp: "September 6, 2018",
    },
    {
      id: 2,
      name: "Kishore Kumar",
      message: "Bangalore...",
      timestamp: "September 12, 2018",
    },
    {
      id: 3,
      name: "Karthik",
      message:
        "I Want To Open Franchise In Bangalore fffffffff ffffffffffff ffffffffff ffffffffff fffff fffff...",
      timestamp: "September 14, 2018",
    },
    {
      id: 4,
      name: "Subhankar Bose",
      message: "15 Lakh Old Madras Road...",
      timestamp: "September 16, 2018",
    },
    {
      id: 5,
      name: "Chandrashekar",
      message: "New BEL Road Bengaluru...",
      timestamp: "September 24, 2018",
    },
    {
      id: 6,
      name: "Harsha Vardhan",
      message: "Vijayapura, Devanahalli Tq, Bangalore...",
      timestamp: "September 28, 2018",
    },
    {
      id: 7,
      name: "Mahesh",
      message: "Hi, I Have Been Sent Couple Of Mail...",
      timestamp: "September 6, 2018",
    },
    {
      id: 8,
      name: "Kishore Kumar",
      message: "Bangalore...",
      timestamp: "September 12, 2018",
    },
    {
      id: 9,
      name: "Karthik",
      message:
        "I Want To Open Franchise In Bangalore fffffffff ffffffffffff ffffffffff ffffffffff fffff fffff...",
      timestamp: "September 14, 2018",
    },
    {
      id: 10,
      name: "Subhankar Bose",
      message: "15 Lakh Old Madras Road...",
      timestamp: "September 16, 2018",
    },
    {
      id: 11,
      name: "Chandrashekar",
      message: "New BEL Road Bengaluru...",
      timestamp: "September 24, 2018",
    },
    {
      id: 12,
      name: "Harsha Vardhan",
      message: "Vijayapura, Devanahalli Tq, Bangalore...",
      timestamp: "September 28, 2018",
    },
    // Add more dummy data as needed
  ].reverse(); // Reverse the array to show latest messages on top

  const indexOfLastChat = currentPage * chatsPerPage;
  const indexOfFirstChat = indexOfLastChat - chatsPerPage;
  const currentChats = chats.slice(indexOfFirstChat, indexOfLastChat);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="inbox-container">
      <div className="recent-chats">
        <RecentChats chats={currentChats} setCurrentChat={setCurrentChat} />
        <Pagination
          chatsPerPage={chatsPerPage}
          totalChats={chats.length}
          paginate={paginate}
        />
      </div>
      <div className="chat-window">
        {currentChat ? (
          <ChatWindow chat={currentChat} />
        ) : (
          <p>Select a chat to view messages</p>
        )}
      </div>
      <div className="person-details">
        {currentChat ? (
          <PersonDetails chat={currentChat} />
        ) : (
          <p>Select a chat to view details</p>
        )}
      </div>
    </div>
  );
};

export default Inbox;
