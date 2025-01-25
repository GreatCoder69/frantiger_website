import React from "react";

const DashboardDate = () => {
  const today = new Date();

  const day = today.getDate();
  const month = today.toLocaleString("en-US", { month: "long" });
  const year = today.getFullYear();

  return (
    <div className="DashboardDate">
      <h3>Date: {`${day} ${month} ${year} `}</h3>
    </div>
  );
};

export default DashboardDate;
