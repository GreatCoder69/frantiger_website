import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Breadcrumbs from "./Components/Breadcrumbs";
import Homepage from "./Pages/Homepage";
import NavbarHome from "./Components/homepage/NavbarHome/NavbarHome";
import Technology from "./Pages/Listings/Technology/Technology";
import PageWithSidebar from "./Components/sampleInnerPage/PageWithSidebar";
import PageWithoutSidebar from "./Components/sampleInnerPage/PageWithoutSidebar";
import Navbar from "./Components/Navbar/Navbar";
import ContactUs from "./Components/ContactUs/ContactUs";
import Blog from "./Components/Blog/Blog";
import BlogsCategory from "./Components/Blog/BlogsCategory";
import Footer from "./Components/homepage/Footer/Footer";
import Education from "./Pages/Listings/Education/Education";
import Food from "./Pages/Listings/Food/Food";
import Health from "./Pages/Listings/Health/Health";
import Service from "./Pages/Listings/Service/Service";
import Retail from "./Pages/Listings/Retail/Retail";
import Logistics from "./Pages/Listings/Logistics/Logistics";
import Listnow from "../src/Pages/Listings/Listnow/Listnow";
import DownloadPopUp from "./Components/DownloadPopUp/DownloadPopUp";
import { AdminDashboard } from "./Components/AdminDashBoard/AdminDashboard";
import { UserDashboard } from "./Components/UserDashboard/UserDashboard";
import Profile from "./Components/Profile/Profile";
import Planpage from "./Pages/planpage/Planpage";
import { ImageContext } from "./Components/AdminDashBoard/ImageContext";
import DashboardRoutes from "./Components/DashboardRoutes";

const ScrollToTopOnMount = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const CommonComponents = () => {
  const location = useLocation();
  const isDashboardRoute =
    location.pathname.includes("/DashboardUI/admin") ||
    location.pathname.includes("/DashboardUI/user") ||
    location.pathname.includes("DashboardUI/profile");

  if (isDashboardRoute) return null;

  return (
    <>
      <NavbarHome />
      <Navbar />
      <ContactUs />
      <Breadcrumbs />
    </>
  );
};

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppContent = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.includes("/DashboardUI");

  return (
    <>
      <ScrollToTopOnMount />
      <CommonComponents />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogsCategory />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/education" element={<Education />} />
          <Route path="/food" element={<Food />} />
          <Route path="/health" element={<Health />} />
          <Route path="/services" element={<Service />} />
          <Route path="/retail" element={<Retail />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/pagewithsidebar" element={<PageWithSidebar />} />
          <Route path="/listnow" element={<Listnow />} />
          <Route path="/pagewithoutsidebar" element={<PageWithoutSidebar />} />
          <Route path="/planpage" element={<Planpage />} />
          <Route
            path="/DashboardUI/*"
            element={
              <PrivateRoute>
                <Routes>
                  <Route path="/*" element={<DashboardRoutes />} />
                </Routes>
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      {!isDashboardRoute && <Footer />}
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
