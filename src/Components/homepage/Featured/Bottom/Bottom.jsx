import "./bottom.css";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Bottom = () => {
  return (
    <div className="BottomMain ">
      <div className="silverline">
        <h6 className="lineContent">Lorem Ipsum</h6>
        <h6 className="lineContent">Lorem Ipsum</h6>
        <h6 className="lineContent">Lorem Ipsum</h6>
      </div>
      <br />
      <div className="Bottom">
        <div className="marquee-container">
          <div className="marquee-content">
            <ul className="navcontent">
              {Array(14)
                .fill(<li>DOWNLOAD APP</li>)
                .map((item, index) => (
                  <li key={index} className="nav-item">
                    {item}
                  </li>
                ))}
            </ul>
            <ul className="navcontent">
              {Array(14)
                .fill(<li>DOWNLOAD APP</li>)
                .map((item, index) => (
                  <li key={index} className="nav-item">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="Business">
          <h1 className="Heading">
            <span className="custom">YOUR</span> BUSINESS{" "}
            <span className="custom">,</span>
            <br />
          </h1>
          <h1 className="Heading1">
            <span className="custom">OUR</span> PRIORITY
            <span className="custom">.</span>
          </h1>
        </div>
      </div>
      <div className="Bottomtable">
        <div className="row tHeading">
          <div className="Hcell">Business verticals</div>
          <div className="Hcell">Networks</div>
          <div className="Hcell">Knowledge Base</div>
          <div className="Hcell">Policy</div>
        </div>
        <div className="row">
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
        </div>
        <div className="row">
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
        </div>
        <div className="row">
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
        </div>
        <div className="row">
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
          <div className="cell">Lorem Ipsum</div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
