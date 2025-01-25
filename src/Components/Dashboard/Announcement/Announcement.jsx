import React, { useState } from "react";
import "./Announcement.css";

const Announcement = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ topic: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Announcement submitted:", formData);
    setShowForm(false);
    setFormData({ topic: "", description: "" });
  };

  return (
    <div className="announcement-container">
      <button
        className="announcement-button"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cancel" : "ADD New Announcement +"}
      </button>
      {showForm && (
        <div className="announcement-form-container">
          <form onSubmit={handleSubmit} className="announcement-form">
            <div className="form-group">
              <label htmlFor="topic">Topic</label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Submit Announcement
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Announcement;
