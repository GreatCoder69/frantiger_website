import React, { useState, useEffect, useRef, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../Assets/images/Logo/whitefinal.png";
import addListing from "../../../Assets/images/NavbarIcons/addlisting.png";
import search from "../../../Assets/images/NavbarIcons/search.png";
import signIn from "../../../Assets/images/NavbarIcons/signin.png";
import Dropdown from "../../Navbar/Dropdown";
import "./navbarHome.scss";
import Login from "../../Login/Login";

function NavbarHome() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (username, password) => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 700) {
      setIsScrolled(true);
      document.body.classList.add("transition-for-nav");
    } else {
      setIsScrolled(false);
      document.body.classList.remove("transition-for-nav");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let { pathname } = useLocation();
  let pathnames = pathname.split("/").filter((x) => x);
  let breadcrumbsPath = "";

  return (
    <>
      {pathnames == "" && (
        <div
          className={`headerParentContainerHome  ${
            isScrolled ? "scrolled" : ""
          }`}
        >
          <div className="headerContainerHome">
            <div className="logoDivSec">
              <Link to="/">
                <img src={logo} alt="Logo" className="img-fluid" />
              </Link>
            </div>
            <div className="d-flex pages ">
              {/* DROPDOWN */}
              {isScrolled && <Dropdown />}
              <Link to="/business" className="pageLink">
                BUSINESS
              </Link>
              <Link to="/services" className="pageLink">
                SERVICES
              </Link>
            </div>
            {isScrolled ? (
              <nav className="servicesDivAfterScrolled ">
                <Link to="" className="serviceIcons1">
                  <img src={search} alt="Search" />
                </Link>
                <Link to="" className="serviceIcons2">
                  <img src={addListing} alt="Add Listing" />
                </Link>
                <div onClick={() => setShowLogin(true)}>
                  <Link to="" className="serviceIcons3">
                    <img src={signIn} alt="Sign In" />
                  </Link>
                  {showLogin && (
                    <Login
                      onClose={() => setShowLogin(false)}
                      onLogin={handleLogin}
                    />
                  )}
                </div>
              </nav>
            ) : (
              <>
                <div className="">
                  <Link to="" className="serviceIcons1">
                    <img src={search} alt="Search" />
                  </Link>
                </div>
                <nav className="servicesDivBeforeScrolled">
                  <Link to="" className="serviceIcons2">
                    <img src={addListing} alt="Add Listing" />
                  </Link>
                  <Link to="" className="serviceIcons3">
                    <img src={signIn} alt="Sign In" />
                  </Link>
                </nav>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarHome;
