import React from "react";
import { Routes, Route } from "react-router-dom";
import { ImageProvider } from "../Components/AdminDashBoard/ImageContext";
// import { AdminDashboard } from "../Components/AdminDashBoard/AdminDashboard";
import AdminDashboard from "../Components/AdminDashBoard/AdminDashboard";
import { UserDashboard } from "../Components/UserDashboard/UserDashboard";
import Profile from "../Components/Profile/Profile";

const DashboardRoutes = () => (
  <ImageProvider>
    <Routes>
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="user" element={<UserDashboard />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </ImageProvider>
);

export default DashboardRoutes;
