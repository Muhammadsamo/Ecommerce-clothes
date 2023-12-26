import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export const NavMenu = () => {
  return (
    <nav>
      <ul className="flex gap-[20px] mx-[2.5rem]">
        <Link to="/products/1">
          <li className="flex items-center cursor-pointer gap-1">
            <span>Shop</span>
            <FaChevronDown size="0.7rem" />
          </li>
        </Link>
        <li>
          <a href="#">On Sale</a>
        </li>
        <li>
          <a href="#">New Arrivals</a>
        </li>
        <li>
          <a href="#">Brands</a>
        </li>
      </ul>
    </nav>
  );
};
