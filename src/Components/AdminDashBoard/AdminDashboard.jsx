import React, { useContext, useState } from "react";
import "./AdminDashBoard.css";
import Dashboard from "../Dashboard/Dashboard";
import Announcement from "../Dashboard/Announcement/Announcement";
import AdsCampaingns from "../Dashboard/AdsCampaigns/AdsCampaingns";
import Coupons from "../Dashboard/Coupons/Coupons";
import Listing from "../Dashboard/Listing/Listing";
import Inbox from "../Dashboard/Inbox/Inbox";
import Invoices from "../Dashboard/Invoices/Invoices";
import Adsinvoices from "../Dashboard/AdsInvoices/Adsinvoices";
import Saved from "../Dashboard/Saved/Saved";
import Packages from "../Dashboard/Packages/Packages";
import Reviews from "../Dashboard/Reviews/Reviews";
import Trophy from "../Dashboard/Trophy/Trophy";
import ProfileSettings from "../../Assets/otherImage/menu_icon.png";
import Frantigericon from "../../Assets/images/Logo/whitefinal.png";
import slidebutton from "../../Assets/otherImage/menu_icon.png";
import dashboard from "../DashboardUImage/dashboard (1).png";
import mic from "../DashboardUImage/announcement.png";
import coupon from "../DashboardUImage/Coupons.png";
import Listings from "../DashboardUImage/listing.png";
import Inboxicon from "../DashboardUImage/mail.png";
import Invoicesicon from "../DashboardUImage/invoice.png";
import AdsInvioxes from "../DashboardUImage/ads campaigns.png";
import Savedicon from "../DashboardUImage/saved (1).png";
import Packagesicon from "../DashboardUImage/packages.png";
import Reviewsicon from "../DashboardUImage/reviews.png";
import AdsInvo from "../DashboardUImage/ads invoice.png";
import Profile from "../Profile/Profile";
import { useNavigate } from "react-router-dom";
import { ImageContext } from "../AdminDashBoard/ImageContext";

const AdminDashboard = () => {
  const { profilePicimage } = useContext(ImageContext);

  const [content, setContent] = useState("Dashboard");
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  const navigate = useNavigate();

  const handleProfileNavigate = () => {
    navigate("/");
  };

  const handleListings = () => {
    navigate("/planPage");
  };

  const handleFormTawk = () => {
    window.open(
      "https://tawk.to/chat/59afdb994854b82732fee767/default",
      "_blank"
    );
  };

  const handleNavigationClick = (item) => {
    setContent(item);
    setSelectedPage(item);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderContent = () => {
    switch (content) {
      case "Dashboard":
        return <Dashboard />;
      case "Announcement":
        return <Announcement />;
      case "Coupons":
        return <Coupons />;
      case "Listing":
        return <Listing />;
      case "Inbox":
        return <Inbox />;
      case "Invoices":
        const hasInvoicesContent = false;
        return <Invoices hasContent={hasInvoicesContent} />;
      case "AdsInvoices":
        return <Adsinvoices />;
      case "Saved":
        return <Saved />;
      case "Packages":
        return <Packages />;
      case "AdsCampaingns":
        return <AdsCampaingns />;
      case "Reviews":
        return <Reviews />;
      case "Profile":
        return <Profile />;
      default:
        return <Trophy />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className={`left-navigation ${isNavOpen ? "open" : "closed"}`}>
        <div className="header-with-button-logo">
          <div className="header-with-button">
            {isNavOpen && (
              <img
                src={Frantigericon}
                alt="Dashboardicon"
                style={{ width: "190px", height: "70px", padding: "10px" }}
              />
            )}
            <div className="toggle-button" onClick={toggleNav}>
              <img src={slidebutton} alt="Toggle" />
            </div>
          </div>
        </div>
        <ul>
          <li
            className={selectedPage === "Dashboard" ? "selected" : ""}
            onClick={() => handleNavigationClick("Dashboard")}
          >
            <img src={dashboard} alt="" />
            {isNavOpen && <div className="navi-title">Dashboard</div>}
          </li>
          <li
            className={selectedPage === "Announcement" ? "selected" : ""}
            onClick={() => handleNavigationClick("Announcement")}
          >
            <img src={mic} alt="" />
            {isNavOpen && <div className="navi-title">Announcements</div>}
          </li>
          <li
            className={selectedPage === "Coupons" ? "selected" : ""}
            onClick={() => handleNavigationClick("Coupons")}
          >
            <img src={coupon} alt="" />
            {isNavOpen && <div className="navi-title">Coupons</div>}
          </li>
          <li
            className={selectedPage === "Listing" ? "selected" : ""}
            onClick={() => handleNavigationClick("Listing")}
          >
            <img src={Listings} alt="" />
            {isNavOpen && <div className="navi-title">Listing</div>}
          </li>
          <li
            className={selectedPage === "Inbox" ? "selected" : ""}
            onClick={() => handleNavigationClick("Inbox")}
          >
            <img src={Inboxicon} alt="" />
            {isNavOpen && <div className="navi-title">Inbox</div>}
          </li>
          <li
            className={selectedPage === "Invoices" ? "selected" : ""}
            onClick={() => handleNavigationClick("Invoices")}
          >
            <img src={Invoicesicon} alt="" />
            {isNavOpen && <div className="navi-title">Invoices</div>}
          </li>
          <li
            className={selectedPage === "AdsInvoices" ? "selected" : ""}
            onClick={() => handleNavigationClick("AdsInvoices")}
          >
            <img src={AdsInvo} alt="" />
            {isNavOpen && <div className="navi-title">Ads Invoices</div>}
          </li>
          <li
            className={selectedPage === "Saved" ? "selected" : ""}
            onClick={() => handleNavigationClick("Saved")}
          >
            <img src={Savedicon} alt="" />
            {isNavOpen && <div className="navi-title">Saved</div>}
          </li>
          <li
            className={selectedPage === "Packages" ? "selected" : ""}
            onClick={() => handleNavigationClick("Packages")}
          >
            <img src={Packagesicon} alt="" />
            {isNavOpen && <div className="navi-title">Packages</div>}
          </li>
          <li
            className={selectedPage === "AdsCampaingns" ? "selected" : ""}
            onClick={() => handleNavigationClick("AdsCampaingns")}
          >
            <img src={AdsInvioxes} alt="" />
            {isNavOpen && <div className="navi-title">Ads Campaigns</div>}
          </li>
          <li
            className={selectedPage === "Reviews" ? "selected" : ""}
            onClick={() => handleNavigationClick("Reviews")}
          >
            <img src={Reviewsicon} alt="" />
            {isNavOpen && <div className="navi-title">Reviews</div>}
          </li>
        </ul>
      </div>
      <div className="main-section">
        <div className="top-navigation">
          <ul>
            <li className="profilebuttons" onClick={handleListings}>
              Add Listings
            </li>
            <li>|</li>
            <li className="profilebuttons" onClick={handleFormTawk}>
              Contact Support
            </li>
            <li>|</li>
            <li className="profilebuttons" onClick={handleProfileNavigate}>
              Frantiger
            </li>
            <li>
              <img
                src={profilePicimage}
                alt=""
                style={{ borderRadius: "50%" }}
                onClick={() => handleNavigationClick("Profile")}
              />
            </li>
            <li className="dropdown-logout-li">
              <div className="dropdown-logout">
                <img
                  src={ProfileSettings}
                  alt="Profile"
                  className="profile-settings-logout"
                />
                <div className="dropdown-content">
                  <a href="/">Log Out</a>
                  <a href="/profile">Profile</a>
                  <a href="/settings">Settings</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
