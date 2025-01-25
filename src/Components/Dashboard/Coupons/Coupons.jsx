import React, { useState } from "react";
import "./Coupons.css";

const Coupons = () => {
  const [selectedTab, setSelectedTab] = useState("ALL DEALS");

  const coupons = [
    {
      deal: "Win a trip to Goa...",
      couponCode: "-",
      discount: "-",
      startDate: "Oct 19, 2018",
      endDate: "Dec 25, 2018",
      status: "INACTIVE",
    },
    {
      deal: "Get BSK franchise a...",
      couponCode: "-",
      discount: "-",
      startDate: "Oct 19, 2018",
      endDate: "Nov 04, 2018",
      status: "ACTIVE",
    },
  ];

  const filteredCoupons = coupons.filter((coupon) => {
    if (selectedTab === "ALL DEALS") return true;
    if (selectedTab === "ACTIVE" && coupon.status === "ACTIVE") return true;
    if (selectedTab === "EXPIRED" && coupon.status === "INACTIVE") return true;
    return false;
  });

  return (
    <div className="coupons-container">
      <h1>All Coupons</h1>
      <div className="coupons-header">
        <div className="tabs">
          <button
            className={`tab ${selectedTab === "ALL DEALS" ? "active" : ""}`}
            onClick={() => setSelectedTab("ALL DEALS")}
          >
            ALL DEALS
          </button>
          <button
            className={`tab ${selectedTab === "ACTIVE" ? "active" : ""}`}
            onClick={() => setSelectedTab("ACTIVE")}
          >
            ACTIVE
          </button>
          <button
            className={`tab ${selectedTab === "EXPIRED" ? "active" : ""}`}
            onClick={() => setSelectedTab("EXPIRED")}
          >
            EXPIRED
          </button>
        </div>
        <div className="controls">
          <select className="dropdown">
            <option value="content-area">Content Area</option>
            <option value="sidebar">Sidebar</option>
          </select>
          <button className="add-new-button">+ ADD NEW</button>
        </div>
      </div>
      <div className="coupons-table">
        <table>
          <thead>
            <tr>
              <th>DEAL</th>
              <th>COUPON CODE</th>
              <th>DISCOUNT</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredCoupons.map((coupon, index) => (
              <tr key={index}>
                <td>{coupon.deal}</td>
                <td>{coupon.couponCode}</td>
                <td>{coupon.discount}</td>
                <td>{coupon.startDate}</td>
                <td>{coupon.endDate}</td>
                <td className={`status ${coupon.status.toLowerCase()}`}>
                  <span className="status-indicator"></span>
                  {coupon.status}
                </td>
                <td>
                  <button className="menu-button">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coupons;
