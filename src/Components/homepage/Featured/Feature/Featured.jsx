import "./Featured.css";
import React, { useRef, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SSimg from "../../../../Assets/otherImage/razorpay.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import firefox from "../../../../Assets/otherImage/firefox-cycles-franchise-_8.jpg";
import BGIMG from "../../../../Assets/otherImage/unisys.png";
import stars from "../../../../Assets/images/SocialMediaIcons/fivestar.png";
import smallicon1 from "../../../../Assets/images/SocialMediaIcons/smallicon1.png";
import smallicon2 from "../../../../Assets/images/SocialMediaIcons/smallicon2.png";

function Featured() {
  const feaduredData = [
    {
      image: SSimg,
      title: "FireFox Bike Franchise 1",
      ratings: "₹55-75 Lakhs",
      details:
        "lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum ",
      link: "",
    },
    {
      title: "FireFox Bike Franchise",
      image: firefox,
      ratings: "₹55-75 Lakhs",
      details:
        "lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      link: "",
    },
    {
      title: "FireFox Bike Franchise 3",
      image: BGIMG,
      ratings: "₹55-75 Lakhs",
      details:
        "lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      link: "",
    },
    {
      title: "FireFox Bike Franchise 4",
      image: SSimg,
      ratings: "₹55-75 Lakhs",
      details:
        "lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      link: "",
    },
    {
      title: "FireFox Bike Franchise 5",
      image: SSimg,
      ratings: "₹55-75 Lakhs",
      details:
        "lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      link: "",
    },
    {
      title: "FireFox Bike Franchise 6",
      image: SSimg,
      ratings: "₹55-75 Lakhs",
      details:
        "lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      link: "",
    },
    {
      title: "FireFox Bike Franchise  7",
      image: firefox,
      ratings: "₹55-75 Lakhs",
      details:
        "lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      link: "",
    },
    {
      title: "FireFox Bike Franchise  8",
      image: SSimg,
      ratings: "₹55-75 Lakhs",
      details:
        "lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      link: "",
    },
  ];

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bgImage, setBgImage] = useState("");

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    prevArrow: <NavigateBeforeIcon />,
    nextArrow: <NavigateNextIcon />,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="fearureContent">
      <div className="featuresHead">FEATURED LISTING</div>

      <div className="vnsys position-relative ">
        <div className="featuredBGImage position-absolute">
          <img
            src={bgImage || BGIMG}
            alt="background"
            className="fullscreen-image"
          />
        </div>
        <div className="karousal-kontainer position-absolute">
          <div className="carousalinner">
            <Slider {...settings} ref={sliderRef}>
              {feaduredData.map((item, index) => (
                <div className="kontainer kard-kontainer" key={index}>
                  <div className="kard">
                    <div className="slide slide1">
                      <div className="featuredcontent">
                        <div className="kicon fa">
                          <img
                            src={item.image}
                            alt=""
                            onMouseEnter={() => setBgImage(item.image)}
                            onMouseLeave={() => setBgImage(BGIMG)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="slide slide2">
                      <div className="conten">
                        <p className="ktitle">{item.title}</p>
                        <p className="krate">{item.ratings}</p>
                        <img
                          src={stars}
                          className="starry"
                          alt="5-star rating"
                          style={{
                            position: "absolute",
                            top: "88px", // Adjust to align vertically
                            left: "150px", // Adjust for proper spacing
                            width: "auto", // Adjust as needed
                            height: "20px",
                          }}
                        />
                        <p className="kdetails">{item.details}</p>
                        <img
                          src={smallicon1}
                          className="smallicon1"
                          alt="smallicon"
                          style={{
                            position: "absolute",
                            top: "80px", // Adjust to align vertically
                            left: "10px", // Adjust for proper spacing
                            width: "auto", // Adjust as needed
                            height: "30px",
                          }}
                        />
                        <img
                          src={smallicon2}
                          className="smallicon2"
                          alt="smallicon"
                          style={{
                            position: "absolute",
                            top: "105px", // Adjust to align vertically
                            left: "18px", // Adjust for proper spacing
                            width: "auto", // Adjust as needed
                            height: "20px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="nav">
            <button className="custom-prev-arrow" onClick={handlePrev}>
              <NavigateBeforeIcon sx={{ fontSize: 60 }} />
              <span className="visually-hidden">Previous </span>
            </button>
            <button className="custom-next-arrow " onClick={handleNext}>
              <NavigateNextIcon sx={{ fontSize: 60 }} />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
