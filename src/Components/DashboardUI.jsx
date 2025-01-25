import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const DashboardUI = () => {
  const isLoggedIn = false; // This should be replaced with actual login logic

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default DashboardUI;
