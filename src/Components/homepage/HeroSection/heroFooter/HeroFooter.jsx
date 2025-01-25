import React from "react";
import "./heroFooter.css";
import { Link } from "react-router-dom";

const HeroFooter = () => {
  return (
    <>
      {/* CONTACT DIV */}

      {/* EXPLORING CONTENT */}
      <footer className="text-white d-flex exploringContentContainer">
        <div className="EXPLORING-CONTENT">
          <h3 className="position-relative d-flex flex-column">
            EXPLORING?
            <span>Let us suggest you options...</span>
          </h3>
        </div>

        <div className="list mt-3">
          <ul className="d-flex gap-2">
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/food">Food</Link>
            </li>
            <li>
              <Link to="/health">Health</Link>
            </li>
            <li>
              <Link to="/logistics">Logistics</Link>
            </li>
            <li>
              <Link to="/retail">Retail</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default HeroFooter;
