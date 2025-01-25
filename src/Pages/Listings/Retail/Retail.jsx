import React, { useState } from "react";
import "./Retail.css";
import Rimg from "../../../Assets/images/Listings/retail.png";
import Card from "react-bootstrap/Card";
import cimage from "../../../Assets/otherImage/firefox-cycles-franchise-_8.jpg";
import Listnow from "../../../Assets/otherImage/listnow-featured-franchis.png";
import razorpay from "../../../Assets/otherImage/razorpay.png";
import { useNavigate } from "react-router-dom";

import { RetailcardData } from "../Retail/RetailcardData";

const Retail = () => {
  
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

    const toggleShare = (index) => {
      const content = RetailcardData[index];
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
  };

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };
  const cardChunks = chunkArray(RetailcardData, 3); // Split cardsData into chunks of 3

  return (
    <div className="RetailMain scroll-snap">
      <div className="Retail">
        {/* Navbar */}
        <div className="Rimg ">
          <img src={Rimg} alt="image" />
        </div>
      </div>

      <div className="RTitle">
        <h1 className="RTitleinner">
          <span style={{ color: "#e78c1c" }}>Retail</span>{" "}
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
                  <a href="/technology">Technology</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
              </ul>
            </div>
          </div>
        </h1>
        <div className="Filters">
          {" "}
          <h5>Filters</h5>
          <hr className="Filters" />
        </div>
        <div className="button-container">
          <button className="button"> Near Me </button>
          <button className="button"> Price </button>
          <button className="button"> Best Match </button>
          <button className="button"> Sort by </button>
          <button className="button"> + </button>
        </div>
        <div className="Filters1">
          <h5>Features</h5>
          <hr />
        </div>

        <div className="boxx">
          <div class="checkbox-container">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Advertising & Marketing/sales</label>

            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2"> Portfolio/Menu Updation</label>

            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Legal and Finance</label>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" id="checkbox4" />
            <label for="checkbox4">Central Purchase & Operation</label>
            <input type="checkbox" id="checkbox5" />
            <label style={{ paddingLeft: ".2rem" }} for="checkbox5">
              Teritiory/MasterRights{" "}
            </label>
            <input type="checkbox" id="checkbox6" />
            <label style={{ paddingLeft: "1.7rem" }} for="checkbox6">
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
          content={FoodcardData}
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
          image={shareContent.image}
        />
      )}
    </div>
  );
};

export default Retail;
