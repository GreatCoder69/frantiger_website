// Technology.js
import React, { useState } from "react";
import "./Technology.css";
import Bimg from "../../../Assets/images/Listings/technology.png";
import { Card } from "react-bootstrap";
import shareicon from "../../../Assets/otherImage/shareicon.png";
import franshot from "../../../Assets/otherImage/franshot.png";
import Sharenow from "../Sharenow/Sharenow";
import Modal from "../../Listings/Modal/Modal";
import { TechnologycardsData } from "../Technology/TechnologycardsData";
import { useNavigate } from "react-router-dom";

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const Technology = () => {
  const [shareContent, setShareContent] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [showShare, setShowShare] = useState(false);
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const goToListnow = () => {
    navigate("/listnow");
  };

  const handleShow = (index) => {
    setCurrentIndex(index);
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  const toggleShare = (index) => {
    const content = TechnologycardsData[index];
    if (content) {
      setShareContent({
        title: content.title,
        description: content.description,
        image: content.image,
      });
      console.log("Share Content:", {
        title: content.title,
        description: content.description,
        image: content.image,
      });
      setShowShare(true);
    } else {
      console.error("Invalid index:", index);
    }
  };

  const cardChunks = chunkArray(TechnologycardsData, 3); // Split cardsData into chunks of 3

  return (
    <>
      <div className="TechnologyMain">
        <div className="TechnologyBgimg">
          <img src={Bimg} alt="image" />
        </div>
      </div>
      <div className="TTitle">
        <h1 className="TTitleinner">
          <span style={{ color: "#e78c1c" }}>Technology </span>
          <div className="dropdown">
            <span className="dropbtn" style={{ color: "#f1f1f1" }}>
              Listings
            </span>
            <div className="dropdown-content" id="myDropdown">
              <ul>
                <li>
                  <a href="/education">Education</a>
                </li>
                <li>
                  <a href="/food">Food</a>
                </li>
                <li>
                  <a href="/health">Health</a>
                </li>
                <li>
                  <a href="/logistics">Logistics</a>
                </li>
                <li>
                  <a href="/retail">Retail</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
              </ul>
            </div>
          </div>
        </h1>

        <div className="Filters">
          <h5>Filters</h5>
          <hr className="Filters" />
        </div>
        <div className="button-container">
          <button className="button"> Near Me </button>
          <button className="button"> Price </button>
          <button className="button"> Best Match </button>
          <button className="button"> Sort by </button>
          <button className="button center-button">+</button>
        </div>
        <div className="Filters1">
          <h5>Features</h5>
          <hr />
        </div>

        <div className="boxx">
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1">Advertising & Marketing/sales</label>
            <input type="checkbox" id="checkbox2" />
            <label htmlFor="checkbox2">Portfolio/Menu Updation</label>
            <input type="checkbox" id="checkbox3" />
            <label htmlFor="checkbox3">Legal and Finance</label>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" id="checkbox4" />
            <label htmlFor="checkbox4">Central Purchase & Operation</label>
            <input type="checkbox" id="checkbox5" />
            <label htmlFor="checkbox5">Teritiory/MasterRights</label>
            <input type="checkbox" id="checkbox6" />
            <label htmlFor="checkbox6" style={{ paddingLeft: "1.6rem" }}>
              Construction,Location & Design
            </label>
          </div>
        </div>
      </div>

      <div className="allcards">
        {cardChunks.map((chunk, chunkIndex) => (
          <div className={chunkIndex === 1 ? "Row2" : "Row1"} key={chunkIndex}>
            {chunk.map((card, index) => (
              <div
                key={index + chunkIndex * 3}
                className={chunkIndex === 1 ? "inerbig" : "iner"}
                onClick={() => handleShow(index + chunkIndex * 3)}
              >
                <Card
                  className={chunkIndex === 1 ? "centercards" : "smallcards"}
                >
                  <Card.Img src={card.image} className="card-img" />
                </Card>
                <div
                  className={
                    chunkIndex === 1
                      ? "ineroverlaycentercards"
                      : "ineroverlaysmall"
                  }
                >
                  <div className="Dtext">
                    {card.title}
                    <h1 className="htext">{card.price}</h1>
                    <p className="Stext">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {show && (
        <Modal
          content={TechnologycardsData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={handleCloseModal}
          onShare={toggleShare} // Pass the toggleShare function here
        />
      )}
      {showShare && (
        <Sharenow
          onClose={() => setShowShare(false)}
          title={shareContent.title}
          description={shareContent.description}
          src={shareContent.image}
        />
      )}
    </>
  );
};

export default Technology;
