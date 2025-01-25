import { useState } from "react";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <li
        className="list-unstyled position-relative menu2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to={item.link1}>
          {item.text1}
          </Link>
        {isHovered && item.submenu1 && 
        <SubMenu items={item.submenu1} />}
      </li>
    );
  };

export default MenuItem;