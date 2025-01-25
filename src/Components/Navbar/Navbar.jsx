import React, { useRef, useEffect, useState } from "react";
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../../Assets/images/Logo/whitefinal.png";
import addListing from "../../Assets/images/NavbarIcons/addlisting.png";
import search from "../../Assets/images/NavbarIcons/search.png";
import signIn from "../../Assets/images/NavbarIcons/signin.png";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./data";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import "./navbar.scss"
import Dropdown from "./Dropdown";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  let { pathname } = useLocation();
  let pathnames = pathname.split("/").filter((x) => x);
  let breadcrumbsPath = "";

  return (
    <>
      {pathnames.length > 0 && (
        <div
        className={`headerParentContainerHome scrolled`}
      >
        <div className="headerContainerHome">
          <div className="logoDivSec">
            <Link to="/">
              <img src={logo} alt="Logo" className="img-fluid" />
            </Link>
          </div>
          <div className="d-flex pages ">
            <Dropdown />
            <Link to="/business" className="pageLink">
              BUSINESS
            </Link>
            <Link to="/services" className="pageLink">
              SERVICES
            </Link>
          </div>
            <nav className="servicesDivAfterScrolled ">
              <Link to="" className="serviceIcons1">
                <img src={search} alt="Search" />
              </Link>
              <Link to="" className="serviceIcons2">
                <img src={addListing} alt="Add Listing" />
              </Link>
              <Link to="" className="serviceIcons3">
                <img src={signIn} alt="Sign In" />
              </Link>
            </nav>
        </div>
      </div>
      )}
    </>
  );
}

export default Navbar;
