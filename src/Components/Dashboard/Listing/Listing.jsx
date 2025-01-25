import React, { useState } from "react";
import "./Listing.css";
import Dimage from "../../../Assets/otherImage/franshot.png";

const Listing = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const listings = [
    {
      id: 1,
      title: "OK Play toys dealership",
      category: "Distribution",
      views: "1050 Views",
      published: "September 15, 2020",
      expiry: "Unlimited",
      associatedPlan: "N/A",
      status: "Published",
      image: Dimage,
    },
    {
      id: 2,
      title: "Career Launcher franchise | Virtual Business Partner",
      category: "Education",
      views: "802 Views",
      published: "September 2, 2020",
      expiry: "Unlimited",
      associatedPlan: "N/A",
      status: "Published",
      image: "",
    },
    // Add more listings as needed
  ];

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="listing-container">
      <h2>All Listings</h2>
      <div className="tabs">
        <div
          className={`tab ${selectedTab === "all" ? "active" : ""}`}
          onClick={() => handleTabChange("all")}
        >
          All
        </div>
        <div
          className={`tab ${selectedTab === "published" ? "active" : ""}`}
          onClick={() => handleTabChange("published")}
        >
          Published
        </div>
        <div
          className={`tab ${selectedTab === "pending" ? "active" : ""}`}
          onClick={() => handleTabChange("pending")}
        >
          Pending
        </div>
        <div
          className={`tab ${selectedTab === "expired" ? "active" : ""}`}
          onClick={() => handleTabChange("expired")}
        >
          Expired
        </div>
        <div className="google-analytics">
          <span>Add Google Analytics User ID</span>
          <input type="text" placeholder="UA-XXXXXXX-X" />
          <button>Save</button>
        </div>
      </div>

      <div className="listing-tablee">
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>VIEWS</th>
              <th>PUBLISHED</th>
              <th>EXPIRY</th>
              <th>ASSOCIATED PLAN</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing.id}>
                <td>
                  <div className="listing-title">
                    {listing.image && (
                      <img src={listing.image} alt={listing.title} />
                    )}
                    <div>
                      <div>{listing.title}</div>
                      <div className="listing-category">{listing.category}</div>
                    </div>
                  </div>
                </td>
                <td>{listing.views}</td>
                <td>{listing.published}</td>
                <td>{listing.expiry}</td>
                <td>{listing.associatedPlan}</td>
                <td>
                  <div className={`status ${listing.status.toLowerCase()}`}>
                    {listing.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listing;
