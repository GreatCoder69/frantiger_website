import React from "react";
import HeroFooter from "./heroFooter/HeroFooter";
import HeroHeader from "./heroHeader/heroHeader";

const HeroSection = () => {
  return (
    <section className="scroll-snap">
      <HeroHeader />
      <HeroFooter />
    </section>
  );
};

export default HeroSection;