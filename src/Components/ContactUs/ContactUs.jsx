import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDownloadPopup } from "../../slices/popupSlice";
import next from "../../Assets/images/next.png";
import liveChat from "../../Assets/images/SocialMediaIcons/liveChat.png";
import quickCall from "../../Assets/images/SocialMediaIcons/quickCall.png";
import whatsapp from "../../Assets/images/SocialMediaIcons/whatsapp.png";
import email from "../../Assets/images/SocialMediaIcons/email.png";
import linkedin from "../../Assets/images/SocialMediaIcons/linkedin.png";
import facebook from "../../Assets/images/SocialMediaIcons/facebook.png";
import instagram from "../../Assets/images/SocialMediaIcons/instagram.png";
import youtube from "../../Assets/images/SocialMediaIcons/youtube.png";
import DownloadPopUp from "../DownloadPopUp/DownloadPopUp";
import "./contactUs.scss";

const ContactUs = () => {
  const [isFlipped, setIsFlipped] = useState(false); // For flipping the image
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // For showing/hiding sidebar
  const dispatch = useDispatch();
  const isDownloadPopingUp = useSelector((state) => state.popup.isDownloadOpen);

  const toggleSidebar = () => {
    setIsFlipped(!isFlipped); // Toggle flip
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  return (
    <>
      <div className="position-fixed contactContainer">
        <div className="contactInnerContainer">
          <div className="contactDiv text-center">
            <span className="spanning1 spanning">C</span>
            <span className="spanning2 spanning">O</span>
            <span className="spanning3 spanning">N</span>
            <span className="spanning4 spanning">T</span>
            <span className="spanning5 spanning">A</span>
            <span className="spanning6 spanning">C</span>
            <span className="spanning7 spanning">T</span>
            <span className="spanning8 spanning"> </span>
            <span className="spanning9 spanning">U</span>
            <span className="spanning10 spanning">S</span>
          </div>
          <button className="bg-transparent" onClick={toggleSidebar}>
            <img
              src={next}
              alt="Next"
              className={`contactImg ${isFlipped ? "flipped" : ""}`} // Conditional flip class
            />
          </button>

          {/* Sidebar */}
          {isSidebarVisible && (
            <div className="sideBarConatainer position-absolute d-flex text-black bottom-0">
              <div className="innerContainer text-black d-flex flex-column py-2 px-3 bg-white rounded-3">
                <div className="msgContainer d-flex align-items-center gap-3 p-1">
                  <button className="px-3 bg-transparent">
                    <img src={liveChat} className="rounded-circle" alt="Live Chat" />
                  </button>
                  <button className="bg-white">
                    <p className="text-start">LIVE CHAT</p>
                  </button>
                </div>

                <div className="msgContainer d-flex align-items-center gap-3 p-1">
                  <button className="px-3 bg-transparent">
                    <img src={quickCall} className="rounded-circle" alt="Quick Call" />
                  </button>
                  <button className="bg-white">
                    <p className="text-start">QUICK CALL</p>
                  </button>
                </div>

                <div className="msgContainer d-flex align-items-center gap-3 p-1">
                  <button className="px-3 bg-transparent">
                    <img src={whatsapp} className="rounded-circle" alt="WhatsApp" />
                  </button>
                  <button className="bg-white">
                    <p className="text-start">WHATSAPP</p>
                  </button>
                </div>

                <hr />
                <div className="socialIconsDiv d-flex gap-1">
                  <button className="bg-white">
                    <img src={email} alt="Email" />
                  </button>
                  <button className="bg-white">
                    <img src={linkedin} alt="LinkedIn" />
                  </button>
                  <button className="bg-white">
                    <img src={facebook} alt="Facebook" />
                  </button>
                  <button className="bg-white">
                    <img src={instagram} alt="Instagram" />
                  </button>
                  <button className="bg-white">
                    <img src={youtube} alt="YouTube" />
                  </button>
                </div>
                <hr />

                <div className="downloadBtn text-center">
                  <button
                    className="bg-black text-white"
                    onClick={() => dispatch(openDownloadPopup())}
                  >
                    <span>DOWNLOAD APP</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {isDownloadPopingUp && <DownloadPopUp />}
    </>
  );
};

export default ContactUs;
