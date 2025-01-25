import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./planpage.css";

const PlanPage = () => {
  return (
    <div className="mainplanpage">
      <div className="modalcenter">
        <div className="headingmainplanpage">
          <div className="headingleftend">
            <h2>Prime</h2>
            <p>Per Listing</p>
          </div>
          <div className="headingrightend">
            <h2>Free</h2>
            <p>Duration : Unlimited days</p>
          </div>
        </div>
        <hr />
        <div className="plan-details">
          <div>
            <p>
              Contact Display{" "}
              <span className="icon-check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
            <p>
              Image Gallery{" "}
              <span className="icon-check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
            <p>
              Video{" "}
              <span className="icon-check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
            <p>
              Business Tagline{" "}
              <span className="icon-check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
            <p>
              Website{" "}
              <span className="icon-check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
          </div>
          <div>
            <p>
              Social Links{" "}
              <span className="icon-check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
            <p>
              Price Range{" "}
              <span className="icon-check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
            <p>
              Deals-Offers-Discounts{" "}
              <span className="icon-check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
            <p>
              Hide Google Ads{" "}
              <span className="icon-check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
          </div>
        </div>
        <button className="Listingbutton">Get Started Now</button>
      </div>
    </div>
  );
};

export default PlanPage;
