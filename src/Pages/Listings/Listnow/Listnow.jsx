import React, { useState } from "react";
import "./Listnow.css";
import { useCollapse } from "react-collapsed";
import listnowimg from "../../../Assets/otherImage/listnow-featured-franchis.png";
import Rstars from "../../../Assets/otherImage/star_2.png";
import vnsys from "../../../Assets/otherImage/unisys.png";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import globe from "../../../Assets/otherImage/globe.png";
import phone from "../../../Assets/otherImage/phone.png";
import whatsaap from "../../../Assets/otherImage/whatsapp.png";
import Ricon from "../../../Assets/otherImage/unisys.png";
import DQuate from "../../../Assets/otherImage/DQuote.png";
import arrowlR from "../../../Assets/otherImage/arrow-left.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Listnow = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle the state variable
  };

  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShow = (index) => {
    setCurrentIndex(index);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleNextRight = (e) => {
    e.stopPropagation(); // Prevent modal from closing
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrevBack = (e) => {
    e.stopPropagation(); // Prevent modal from closing
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };
  return (
    <div className="ListnowmainMain">
      <div className="Listnowmain">
        <div className="bgBox">
          <div className="Rcontent">
            <div className="RCimage-container">
              <img src={listnowimg} alt="listnow-items" className="RCimage" />
            </div>
            <div className="Rpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur molestias veniam dolores omnis fuga natus! Rerum fuga
              dolorem doloremque QQraesentium quas aliquam delectus quidem,
              repudiandae sunt! Dolorem ducimus temporibus recusandae.
            </div>
            <div className="listnowheading">
              <h1 style={{ fontSize: "52px" }}> ListNow Franchise -</h1>
              <h1 style={{ fontSize: "52px" }}> Online Grocery </h1>
              <h1 style={{ fontSize: "52px" }}> Supermarket </h1>
              <p style={{ fontFamily: "QuickSand-Regular", fontSize: "18px" }}>
                Apke ghar ki dukaan
              </p>
              <img src={Rstars} alt="" />
            </div>
            <div className="ListnowTittle">
              <h3>₹₹₹₹ Price Range 2 Lakh - 5Lakh</h3>
              <p style={{ fontFamily: "QuickSand-Light", fontSize: "15px" }}>
                REVIEW &nbsp;&nbsp;| &nbsp;&nbsp;SHARE &nbsp;&nbsp; |
                &nbsp;&nbsp;SAVE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="submitform">
        <div className="paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            illum dolorem laudantium, totam magnam repellat, officia aperiam
          </p>
          <h4 style={{ fontFamily: "QuickSand-Bold", fontSize: "30px" }}>
            Lorem ipsum dolor sit amet
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            illum dolorem laudantium, totam magnam repellat, officia aperiam
            voluptatibus <span className="hig hlit">delectus molestiae</span>{" "}
            vitae dignissimos tempora, harum illum dolorem laudantium, totam
            magnam repellat, officia aperiam voluptatibus delectus molestiae
            vitae dignissimos tempora, harum dignissimos tempora, harum illum
            dolorem laudantium, totam magnam repellat, officia aperiam
            voluptatibus delectus molestiae vitae dignissimos tempora, harum
          </p>
          <h4 style={{ fontFamily: "QuickSand-Bold", fontSize: "30px" }}>
            Lorem ipsum dolor sit amet
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            illum dolorem laudantium, totam magnam repellat, officia aperiam
            voluptatibus delectus molestiae vitae dignissimos tempora, harum
            praesentium alias deserunt doloremque ad eveniet sapiente odio
            cumque distinctio fugit ipsa omnis facilis explicabo, corrupti
            voluptas cum dignissimos tempora, harum illum dolorem laudantium,
            totam magnam repellat, officia aperiam voluptatibus delectus
            molestiae vitae dignissimos tempora, harum
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            praesentium alias deserunt doloremque ad eveniet sapiente odio
            cumque distinctio fugit ipsa omnis facilis explicabo,{" "}
            <span className="highlit">Highlight</span> corrupti voluptas cum
            natus, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            praesentium alias deserunt doloremque ad eveniet sapiente odio
            cumque distinctio fugit ipsa omnis facilis explicabo,{" "}
            <span className="highlit">Highlight</span> corrupti voluptas natus,
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Cupiditate illum
            dolorem laudantium, totam magnam repellat, officia aperiam
            voluptatibus delectus molestiae vitae dignissimos tempora, harum
            praesentium alias deserunt doloremque ad eveniet sapiente odio
            cumque distinctio fugit ipsa omnis facilis explicabo, corrupti
            voluptas cum dignissimos tempora, harum illum dolorem laudantium,
            totam magnam repellat, officia aperiam voluptatibus delectus
            molestiae vitae dignissimos tempora, harum
          </p>
          <div>
            <ul>
              <h4 style={{ fontFamily: "QuickSand-Bold", fontSize: "30px" }}>
                dolor sit amet consectetur adipisicing elit.
              </h4>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elitxyz
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elitxyz
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elitxyz
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elitxxyz
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elitxxyz
              </li>
            </ul>
          </div>

          <div className="formapplynw">
            <p className="hh">Apply Now!</p>
            <div className="applynw">
              <form action="">
                <div>
                  <input
                    className="forminput"
                    type="text"
                    id="first"
                    name="first"
                    placeholder="Name:"
                    required
                  />
                </div>

                <div>
                  <input
                    className="forminput"
                    type="email"
                    id="first"
                    name="first"
                    placeholder="Email:"
                    required
                  />
                </div>

                <div>
                  <input
                    className="forminput"
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Phone-number:"
                    required
                  />
                </div>
                <div>
                  <input
                    className="forminput"
                    type="text"
                    id="Location"
                    name="Location"
                    placeholder="City/Location:"
                    required
                  />
                </div>

                <div>
                  <button className="formsbutton" type="submit">
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="contactbox">
            <p>
              <img
                src={phone}
                alt=""
                style={{ width: "34px", height: "34px" }}
              />
              +919295005612
            </p>
            <hr />
            <p>
              <img
                src={whatsaap}
                alt=""
                style={{ width: "34px", height: "34px" }}
              />
              Call on Whatsapp
            </p>
            <hr />
            <p style={{ color: "#e78c1c" }}>
              <img
                src={globe}
                alt=""
                style={{ width: "34px", height: "34px" }}
              />
              http://listnow.in
            </p>
          </div>

          <div className="blankbox"></div>

          {/* /   / */}
        </div>
        <div className="relatedthings">
          <div className="relatedthingsinner">
            <h3 className="relatedthingsheading">
              Related <br /> &nbsp; &nbsp; &nbsp;&nbsp; Listings
            </h3>
            <div className="Relateimgcontainer">
              <img src={vnsys} alt="" className="Relateimg" />
            </div>
            <div className="Relateimgcontainer">
              <img src={listnowimg} alt="" className="Relateimg" />
            </div>
          </div>
          <div className="RelatedMaincontainer">
            <button className="LeftRButton" onClick={handlePrevBack}>
              <NavigateBeforeIcon sx={{ fontSize: "250px" }} />
            </button>
            <button className="RightRButton" onClick={handleNextRight}>
              <NavigateNextIcon sx={{ fontSize: "250px" }} />
            </button>
          </div>
        </div>

        <div className="askedqst">
          <h1 className="Frequently-Asked-Question">
            Frequently Asked Question
          </h1>
          <div className="askedqstinner">
            {[0, 1, 2, 3].map((index) => (
              <div className="collapsible" key={index}>
                <div className="header" onClick={() => handleOnClick(index)}>
                  <span
                    style={{
                      color: "#e78c1c",
                      paddingRight: "25px",
                      fontSize: "35px",
                    }}
                  >
                    Q
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontFamily: "QuickSand-Regular",
                    }}
                  >
                    {` Lorem ipsum dolor sit, ${index + 1}`}
                  </span>
                  <span className="icon">
                    {expandedIndex === index ? "-" : "+"}
                  </span>
                </div>
                <div
                  {...useCollapse({
                    isExpanded: expandedIndex === index,
                  }).getCollapseProps()}
                >
                  <div className="content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Illum quisquam quos magnam voluptate obcaecati itaque
                    nesciunt, alias ab ducimus dolor natus omnis rerum sunt
                    libero suscipit autem, ex doloribus deserunt. dolor natus
                    omnis rerum sunt libero suscipit autem, ex doloribus
                    deserunt
                    <p>
                      libero suscipit autem, ex doloribus deserunt. dolor natus
                      omnis rerum sunt libero suscipit autem, ex doloribus
                      deserunt
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rateusbox">
          {/* Collapse box for rating */}
          <div className="rateing-box">
            <div className="header" onClick={handleToggle}>
              <h3 className="rateusboxheading">
                <p>
                  <i class="star"></i>
                  Rate us and write a Review
                </p>

                <span className="iconcollapse">{isExpanded ? "-" : "+"}</span>
              </h3>
            </div>
            {isExpanded && (
              <>
                <hr />

                <div className="Rheadinner">
                  <div className="Browselisting">
                    <h6 className="Browselistingheader">
                      Your Rating for this listing
                    </h6>
                    <Stack spacing={1} className="starss">
                      <Rating name="size-large" defaultValue={2} size="large" />
                    </Stack>
                  </div>
                  <div className="imagbutton">
                    <p className="imagbuttonpara">select images</p>
                  </div>
                  <button className="BrowseButton">Browse</button>
                </div>

                <form action="">
                  <div>
                    <label className="headinput" htmlFor="first">
                      NAME
                    </label>
                    <br />
                    <input
                      className="rateforminput"
                      type="text"
                      id="first"
                      name="first"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div>
                    <label className="headinput" htmlFor="email">
                      EMAIL
                    </label>
                    <br />
                    <input
                      className="rateforminput"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div>
                    <label className="headinput" htmlFor="Title">
                      TITLE
                    </label>
                    <br />
                    <input
                      className="rateforminput"
                      type="Title"
                      id="Title"
                      name="Title"
                      placeholder="Example: it was aewsome experence"
                      required
                    />
                  </div>
                  <div>
                    <label className="headinput" htmlFor="REVIEW">
                      REVIEW
                    </label>
                    <br />
                    <textarea
                      className="rateforminput"
                      type="REVIEWt"
                      id="REVIEW"
                      name="REVIEW"
                      placeholder="Tip:
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Illum q..... "
                      required
                      rows="5"
                      cols="120"
                    />
                  </div>

                  <div className="rateformbutton">
                    <button className="rateformsbutton" type="submit">
                      Signup & Submit Review
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
        <div className="donereview">
          <div className="reviewcards">
            <div className="container">
              <div className="background-image">
                <h1 className="reviewcardshh">Reviews</h1>
                <div className="nav-buttons">
                  <img src={arrowlR} alt="" className="rightnavbtn" />
                  <img src={arrowlR} alt="" className="leftnavbtn" />
                </div>
              </div>
            </div>

            <div className="Reviewcardcontainer">
              <div className="Reviewcard">
                <img src={Ricon} alt="" className="rvimage" />
                <p className="rvimagepara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia error ducimus exercitationem,
                </p>
              </div>
              <div className="Reviewcard">
                <img src={Ricon} alt="" className="rvimage" />
                <p className="rvimagepara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia error ducimus exercitationem,
                </p>
              </div>
              {/* <div className="Reviewcard">
                <img src={Ricon} alt="" className="rvimage" />
                <p className="rvimagepara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia error ducimus exercitationem,
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listnow;
