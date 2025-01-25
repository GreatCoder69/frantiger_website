import React from "react";
import search from "../../../../Assets/images/NavbarIcons/search.png";
import tiger from "../../../../Assets/images/herosection/Tiger.png"
import "./heroHeader.css"
import { useGetHeroSubHeading } from "../../../../hooks/useStaticText";

const HeroHeader = () => {
  // const {data } = useGetHeroSubHeading();
  return (
    <>
      <div className="heroSection d-flex gap-5">

        <div className="text-white heroSecContent">
          <h1 className="heroHeading">
            Let's <span className="">SEARCH</span> your <br /><span className="text-carrot-orange">BUSINESS</span> interests
          </h1>
          <h3 className="mt-1 heroPara">
            Lorem ipsum dolor sit amet consectetur elit odit<br /> adipisicing . Pariatur
            dolorem quis amet dolor
            {/* {data?.data.attributes.heroSubHeading} */}
          </h3>

          {/* INPUT */}
          <div className="d-flex relative mt-4 position-relative">
            <input
              type="text"
              placeholder="Search your business industry, Brand or Interest here"
              className="inputplaceholder text-black"
            />
            <img src={search} alt="" className="position-absolute right-0 inputSearchBtn" />
          </div>
        </div>

        <div>
        <img src={tiger} alt="" className="h-auto tigerImg img-fluid" style={{ width: "42rem" }} />
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
