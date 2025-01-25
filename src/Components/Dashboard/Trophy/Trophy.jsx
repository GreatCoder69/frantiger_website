import React from "react";
import trophyicon from "../../DashboardUImage/trophy.png";
import "./Trophy.css";

const Trophy = () => {
  return (
    <div className="Trophyxyz">
      <img
        src={trophyicon}
        alt="Trophy Icon"
        style={{ width: "200px", height: "280px", opacity: "50%" }}
      />
      <p className="TropfyPara">
        Nothing to show Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Autem quis minus incidunt magnam. Voluptatem amet ipsam inventore
      </p>
    </div>
  );
};

export default Trophy;
