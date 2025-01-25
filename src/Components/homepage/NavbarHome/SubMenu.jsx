import { useState } from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const SubMenu = ({ items }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const [is]

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ul className="list-unstyled position-absolute bg-white rounded-3 menuText2">
      {items.map((item, index) => (
        <li
          key={index}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* {console.log(item.text2=="FRANCHISE")} */}
          <Link to={item.link2} className="text-black">{item.text2}</Link>
          {isHovered && item.submenu2 && <Menu items={item.submenu2} />}
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;
