import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import "./Sharenow.css";

const Sharenow = ({ onClose, title, description, image }) => {
  const currentUrl = window.location.href;

  const shareMessage = `${title}\n${description}\n${currentUrl}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="180px" />
        <meta property="og:image:height" content="110px" />
        <meta property="og:image:alt" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:url" content={currentUrl} />
      </Helmet>
      <div className="sharenow-overlay" onClick={onClose}>
        <div className="sharenowmain" onClick={(e) => e.stopPropagation()}>
          <button className="closesharebutton" onClick={onClose}>
            x
          </button>
          <div className="sharenowmainheader">
            <h3>Share it</h3>
            <hr />
          </div>
          <div className="sharelogos">
            <p>{description}</p>
            {image && (
              <img image={image} alt={title} className="sharemodalimg" />
            )}
            <div className="forshareicons">
              <EmailShareButton
                url={currentUrl}
                subject={title}
                body={shareMessage}
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
              <FacebookShareButton url={currentUrl} quote={shareMessage}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={currentUrl} title={shareMessage}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton
                url={currentUrl}
                summary={description}
                source={currentUrl}
                title={title}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <TelegramShareButton url={currentUrl} title={title}>
                <TelegramIcon size={32} round />
              </TelegramShareButton>
              <WhatsappShareButton url={currentUrl} title={title}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Sharenow.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

Sharenow.defaultProps = {
  image: "src/Assets/otherImage/firefox-cycles-franchise-_8.jpg",
};

export default Sharenow;
