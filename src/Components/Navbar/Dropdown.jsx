import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/dropdown.scss";

const Dropdown = () => {
  const [isExploreEntered, setIsExploreEntered] = useState(false);
  const [isFranchiseEntered, setIsFranchiseEntered] = useState(false);
  const [isProjectReportEntered, setIsProjectReportEntered] = useState(false);

  const handleExploreEnter = () => setIsExploreEntered(true);
  const handleExploreLeave = () => setIsExploreEntered(false);

  const handleFranchiseEnter = () => setIsFranchiseEntered(true);
  const handleFranchiseLeave = () => setIsFranchiseEntered(false);

  const handleProjectReportEnter = () => setIsProjectReportEntered(true);
  const handleProjectReportLeave = () => setIsProjectReportEntered(false);

  return (
    <div className="dropDown">
      <ul className="list-unstyled">
        <li
          className="parent exploreNav"
          onMouseEnter={handleExploreEnter}
          onMouseLeave={handleExploreLeave}
        >
          <Link to="/explore" className="exploreLink parent">
            EXPLORE
          </Link>
          {isExploreEntered && (
            <ul className="child">
              <li
                className="parent"
                onMouseEnter={handleFranchiseEnter}
                onMouseLeave={handleFranchiseLeave}
              >
                <Link to="/">FRANCHISE</Link>
                {isFranchiseEntered && (
                  <ul className="child">
                    <li>
                      <Link to="/health">HEALTH</Link>
                    </li>
                    <li>
                      <Link to="/retail">RETAIL</Link>
                    </li>
                    <li>
                      <Link to="/food">FOOD</Link>
                    </li>
                    <li>
                      <Link to="/technology">TECHNOLOGY</Link>
                    </li>
                    <li>
                      <Link to="/education">EDUCATION</Link>
                    </li>
                    <li>
                      <Link to="/services">SERVICES</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/distribution">DISTRIBUTION</Link>
              </li>
              <li>
                <Link to="/manufacturing">MANUFACTURING</Link>
              </li>
              <li
                className="parent"
                onMouseEnter={handleProjectReportEnter}
                onMouseLeave={handleProjectReportLeave}
              >
                <Link to="/projectreport">PROJECT REPORT</Link>
                {isProjectReportEntered && (
                  <ul className="child">
                    <li>
                      <Link to="/health">HEALTH</Link>
                    </li>
                    <li>
                      <Link to="/retail">RETAIL</Link>
                    </li>
                    <li>
                      <Link to="/food">FOOD</Link>
                    </li>
                    <li>
                      <Link to="/technology">TECHNOLOGY</Link>
                    </li>
                    <li>
                      <Link to="/education">EDUCATION</Link>
                    </li>
                    <li>
                      <Link to="/services">SERVICES</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/turnkey">TURNKEY</Link>
              </li>
              <li>
               
              <Link to="/suvidhakendra">SUVIDHA KENDRA</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
