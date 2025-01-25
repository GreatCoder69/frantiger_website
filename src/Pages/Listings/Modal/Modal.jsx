// Modal.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import shareicon from "../../../Assets/otherImage/shareicon.png";
import franshot from "../../../Assets/otherImage/franshot.png";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Modal = (props) => {
  const navigate = useNavigate();

  const goToListnow = () => {
    navigate("/listnow");
  };

  const handleNextRight = () => {
    props.setCurrentIndex((prevIndex) => (prevIndex + 1) % props.content.length);
  };

  const handlePrevBack = () => {
    props.setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + props.content.length) % props.content.length
    );
  };

  return (
    <div className="modal-overlay" onClick={props.onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={props.onClose}>x</button>
        <div className="modal-content-left">
          <div className="Modeltitle">
            <p>
              {props.content[props.currentIndex].title}
              {props.content[props.currentIndex].price}
            </p>
          </div>
        </div>
        <div className="Modelpara">
          <p>{props.content[props.currentIndex].description}</p>
        </div>
        <div className="modal-content-right">
          <h1 className="Modelheader">{props.content[props.currentIndex].title}</h1>
          <img
            src={props.content[props.currentIndex].image}
            alt="Avatar"
            className="modal-img"
          />
        </div>
        <div className="modelbuttons">
          <button className="Mbutton" onClick={goToListnow}>
            Know more...
          </button>
          <button
            className="Mbutton"
            onClick={() => props.onShare(props.currentIndex)}
          >
            Share
            <span className="shareicon">
              <img
                src={shareicon}
                alt=""
                style={{ width: "1.6rem", height: "1.6rem" }}
              />
            </span>
          </button>
        </div>
        <div className="franshot">
          <img
            src={franshot}
            alt=""
            style={{ width: "11rem", height: "5.1rem" }}
          />
        </div>
        <div className="ModalMaincontainer">
          <button className="LeftmButton" onClick={handlePrevBack}>
            <NavigateBeforeIcon sx={{ fontSize: 55 }} />
          </button>
          <button className="RightmButton" onClick={handleNextRight}>
            <NavigateNextIcon sx={{ fontSize: 55 }} />
          </button>
          <div className="pb">Previous</div>
          <div className="nb">Next</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
