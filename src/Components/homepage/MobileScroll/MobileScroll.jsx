import React, { useState } from "react";
import ScreenText from "./ScreenText";
import { scrollData } from "./data";
import tigerBG from "../../../Assets/images/Parallax/parallaxTiger.png";
import "./MobileScroll.scss";

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <section className="bgImage-for-parallax scroll-snap">
      <div className="mobile-scroll flex ">
        <div className="scroll-full-screen-wrapper">
          {scrollData.map((screen, i) => (
            <div className="scroll-full-screen" key={i}>
              <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
            </div>
          ))}
        </div>

        <div className="mobile-mockup-wrapper non-mobile">
          <div className="mobile-mockup ">
            <div className="mobile-mockup-screen flex absolute-center">
              <img
                src={scrollData[currentImg].mobile_img}
                className="mobile-screen-img slide-in-right "
                key={scrollData[currentImg].mobile_img}
                alt="mockup"
              />
            </div>
            <div className="tigerBG">
              <img src={tigerBG} alt="" className="tigerBG" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileScroll;
