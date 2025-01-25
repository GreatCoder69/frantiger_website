import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const Menu = ({ items }) => {
  return (
    <ul className="list-unstyled bg-white rounded-3 menuText3 position-absolute">
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.link3} className="text-black">{item.text3}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
