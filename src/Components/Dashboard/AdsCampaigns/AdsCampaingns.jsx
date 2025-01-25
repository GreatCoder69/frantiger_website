import React from "react";
import "./AdsCampaingns.css";

const AdsCampaingns = () => {
  return (
    <div className="ads-main-content">
      <div className="ads-header">
        <div className="ads-header-left">
          <h2>All Campaigns</h2>
          <div className="tabs">
            <span className="tab ">ALL</span>
            <span className="tab">ACTIVE</span>
          </div>
        </div>
        <button className="add-new-button">+ ADD NEW</button>
      </div>
      <div className="campaigns-table">
        <table>
          <thead>
            <tr>
              <th>CAMPAIGN</th>
              <th>LISTING</th>
              <th>START DATE</th>
              <th>END DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Water Treatment And</td>
              <td>
                <a href="#dashboard">Dashboard</a>
              </td>
              <td>N/A</td>
              <td>N/A</td>
              <td className="status-active">ACTIVE</td>
            </tr>
            <tr>
              <td>Fruit Culture Franch</td>
              <td>
                <a href="#dashboard">Dashboard</a>
              </td>
              <td>N/A</td>
              <td>N/A</td>
              <td className="status-active">ACTIVE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdsCampaingns;
