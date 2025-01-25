import React from "react";
import Details from "../Featured/Details/Details";
import Bottom from "../Featured/Bottom/Bottom";
import Info from "../Featured/Info/Info";
import { useLocation } from "react-router-dom";

const Footer = () => {
  let { pathname } = useLocation();
  let isHome = pathname == "/";

  return (
    <section 
    // style={{ height: "100%" }}
    // className="scroll-snap"
     >
      <div className="scroll-snap">
        <Details />
      </div>
      <div className="scroll-snap">
        <Bottom />
      </div>
        <div className="scroll-snap">
          <Info />
        </div>
    </section>
  );
};

export default Footer;
