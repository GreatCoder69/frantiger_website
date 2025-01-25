import React, { useState } from "react";
import DownloadApp from "../Components/homepage/DownloadSection/DownloadApp";
import HeroSection from "../Components/homepage/HeroSection/HeroSection";
import MobileScroll from "../Components/homepage/MobileScroll/MobileScroll";
import Featured from "../Components/homepage/Featured/Feature/Featured";
import DownloadPopUp from "../Components/DownloadPopUp/DownloadPopUp";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="bg-black homePageContainer">
      <div className="scroll-snap">
        <HeroSection />
      </div>
      <div className="scroll-snap">
        <DownloadApp />
      </div>
      <div className="scroll-snap">
        <MobileScroll />
      </div>
      <div className="scroll-snap">
        <Featured />
      </div>
    </div>
  );
};

export default Homepage;
