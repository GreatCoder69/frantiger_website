import React from "react";

const PersonDetails = ({ chat }) => {
  return (
    <div className="person-details-content">
      <div className="person-header">
        <img src="path_to_default_image" alt="User avatar" />
        <div>
          <h3 className="chat-name">{chat.name}</h3>
          <p>Unregistered User</p>
        </div>
      </div>
      <div className="person-info">
        <p>
          <strong>Listing:</strong> SETH M.R. JAIPURIA SCHOOLS FRANCHISE
        </p>
        <p>
          <strong>Email:</strong> example@example.com
        </p>
        <p>
          <strong>Phone:</strong> 1234567890
        </p>
      </div>
    </div>
  );
};

export default PersonDetails;
