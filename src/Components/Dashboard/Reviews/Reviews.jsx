import React, { useState } from "react";
import "./ReviewPage.css"; // Make sure this file is correctly referenced

const Reviews = () => {
  const [filter, setFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      user: "John Doe",
      date: "2024-07-20",
      content: "Great service!",
      recent: true,
      rating: 5, // 5-star rating
    },
    {
      id: 2,
      user: "Jane Smith",
      date: "2024-07-18",
      content: "Very satisfied!",
      recent: false,
      rating: 4, // 4-star rating
    },
    {
      id: 3,
      user: "Alex Johnson",
      date: "2024-07-15",
      content: "Good experience.",
      recent: false,
      rating: 3, // 3-star rating
    },
    {
      id: 4,
      user: "Maria Garcia",
      date: "2024-07-19",
      content: "Will come back again.",
      recent: true,
      rating: 5, // 5-star rating
    },
    // Add more reviews as needed
  ];

  const filteredReviews =
    filter === "recent" ? reviews.filter((review) => review.recent) : reviews;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-star ${index < rating ? "fas" : "far"}`}
      ></i>
    ));
  };

  return (
    <div className="review-page">
      <div className="header">
        <div className="header-left">
          <h2>Reviews</h2>
          <div className="tabs">
            <span
              className={`tab ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              ALL
            </span>
            <span
              className={`tab ${filter === "recent" ? "active" : ""}`}
              onClick={() => setFilter("recent")}
            >
              RECENT
            </span>
          </div>
        </div>
      </div>
      <div className="reviews-list">
        {filteredReviews.map((review) => (
          <div key={review.id} className="review">
            <p>
              <strong>{review.user}</strong>{" "}
              <span className="date">{review.date}</span>
            </p>
            <div className="rating">{renderStars(review.rating)}</div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
