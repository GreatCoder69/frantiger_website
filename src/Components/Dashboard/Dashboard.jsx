import React, { useState } from "react";
import "./Dashboard.css";
import DashboardDate from "./DashboardDate";
import tempicon from "../../../src/Assets/images/SocialMediaIcons/liveChat.png";

const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const data = {
    topBanner: [
      { type: "info", message: "Did you know you can generate 10x leads!" },
      {
        type: "alert",
        message: "Publish your Listings today and get new customers!",
      },
    ],
    metrics: {
      userViews: { number: 189067, description: "In All Times" },
      customerLeads: { number: 4112, description: "In All Times" },
      customerReviews: { number: 110, description: "In All Times" },
    },
    recentActivities: [
      {
        icon: tempicon,
        description:
          "Someone clicked on your phone number at Monginis franchise for Retail & Manufacturing",
        date: "June 25, 2024, 9:26 am",
      },
      {
        icon: "path/to/icon2.png",
        description:
          "Someone clicked on your phone number at Shiprocket franchise for service providers",
        date: "June 21, 2024, 6:51 pm",
      },
      {
        icon: "path/to/icon3.png",
        description:
          "Someone clicked on your phone number at Some other franchise",
        date: "June 18, 2024, 4:20 pm",
      },
    ],
    ratingAlerts: [
      {
        message: "Skylarkoverseas left a 3.0-star rating.",
        date: "Posted 1204 days ago",
      },
      {
        message: "Manjunatha. N left a 3.0-star rating.",
        date: "Posted 1207 days ago",
      },
      {
        message: "Babul Roy left a 1.0-star rating.",
        date: "Posted 1208 days ago",
      },
    ],
  };

  const renderAnalytics = () => {
    if (!selectedCard) {
      return <div className="placeholder">Select a metric to view analytics.</div>;
    }

    return (
      <div className="analytics-content">
        <h2>{`Analytics for ${selectedCard.replace(/([A-Z])/g, " $1").trim()}`}</h2>
        <div className="analytics-chart">
          {/* Placeholder for charts/graphs */}
          <div className="chart">Chart Placeholder for {selectedCard}</div>
        </div>
        <div className="analytics-details">
          <h3>Detailed Insights</h3>
          <p>Here you can provide detailed data, statistics, and visualizations for {selectedCard}.</p>
          {/* Add more detailed components like tables, graphs, etc. */}
        </div>
      </div>
    );
  };

  return (
    <div className="details-container">
      <div className="top-banner">
        {data.topBanner.map((item, index) => (
          <div key={index} className={`${item.type}-banner`}>
            <span>{item.message}</span>
            <button className="close-btn">×</button>
          </div>
        ))}
      </div>
      <div>
        <DashboardDate />
      </div>

      <div className="metrics-section">
        <div
          className={`metric-card ${selectedCard === "userViews" ? "active" : ""}`}
          onClick={() => setSelectedCard("userViews")}
        >
          <div className="metric-number">{data.metrics.userViews.number}</div>
          <div className="metric-label">User Views</div>
          <div className="metric-description">
            {data.metrics.userViews.description}
          </div>
        </div>
        <div
          className={`metric-card metric-cardCL ${selectedCard === "customerLeads" ? "active" : ""}`}
          onClick={() => setSelectedCard("customerLeads")}
        >
          <div className="metric-number">
            {data.metrics.customerLeads.number}
          </div>
          <div className="metric-label">Customer Leads</div>
          <div className="metric-description">
            {data.metrics.customerLeads.description}
          </div>
        </div>
        <div
          className={`metric-card metric-cardCR ${selectedCard === "customerReviews" ? "active" : ""}`}
          onClick={() => setSelectedCard("customerReviews")}
        >
          <div className="metric-number">
            {data.metrics.customerReviews.number}
          </div>
          <div className="metric-label">Customer Reviews</div>
          <div className="metric-description">
            {data.metrics.customerReviews.description}
          </div>
        </div>
      </div>

      <div className="analytics-section">
        {renderAnalytics()}
      </div>

      <div className="activities-section">
        <div className="recent-activities">
          <h3>Recent Activities</h3>
          {data.recentActivities.map((activity, index) => (
            <div key={index} className="activity">
              <img
                src={activity.icon}
                alt="Activity Icon"
                className="activity-icon"
              />
              <div className="activity-content">
                <p>{activity.description}</p>
                <span className="activity-date">{activity.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rating-alerts">
          <h3>Rating Alerts</h3>
          {data.ratingAlerts.map((alert, index) => (
            <div key={index} className="alert">
              <span>{alert.message}</span>
              <span className="alert-date">{alert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
