import React from "react";
import "./Info.css";
import logoimg from "../../../../Assets/images/Logo/whitefinal.png";
import logostrtp from "../../../../Assets/images/Logo/startup.png";
import linkedinlogo from "../../../../Assets/images/SocialMediaIcons/linkedin.png";
import fblogo from "../../../../Assets/images/SocialMediaIcons/facebook.png";
import instalogo from "../../../../Assets/images/SocialMediaIcons/instagram.png";
import ytlogo from "../../../../Assets/images/SocialMediaIcons/youtube.png";

const Info = () => {
  return (
    <>
      <div className="Infomain">
        <div className="Info">
          <div className="Infocontent">
            <img src={logoimg} alt="frantigeticon" width="155" height="50" />
          </div>
          <div className="Infocontent1">
            <img src={logostrtp} alt="Startuplogo" width="340" height="60" />
          </div>
        </div>
        <div className="hr">
          <hr />
        </div>
        <div className="Infocontainer">
          <h6>
            Privacy Policy &#160; &#160; | &#160; &#160;Terms & Conditions &#160;
            &#160;|&#160; &#160; Security
          </h6>
        </div>
        <div className="downside">
          <div className="slogo">
            <span className="copyright">
              Copyrights FranTiger Business Consulting (P) Ltd. 2017- 2018
            </span>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank">
                <img src={linkedinlogo} alt="Facebook" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img src={fblogo} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src={instalogo} alt="Instagram" />
              </a>
              <a href="https://www.youtube.com" target="_blank">
                <img src={ytlogo} alt="youtube" />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
