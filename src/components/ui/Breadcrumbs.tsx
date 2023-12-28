import { useLocation } from "react-router-dom";

import { twMerge } from "tailwind-merge";

import { SHLink as Link } from "./SHLink";
import { FaChevronRight } from "react-icons/fa";

type IProps = {
  className?: string;
};

export const Breadcrumbs = ({ className }: IProps) => {
  const location = useLocation();
  let pathArray: string[] | { text: string; to: string }[] =
    location.pathname.split("/");

  pathArray = pathArray
    .filter((path) => Boolean(path))
    .map((path) => {
      return {
        to: `/${path}`,
        text: path,
      };
    });

  pathArray.unshift({
    to: "/",
    text: "Home",
  });
  return (
    /* bg-white/70 border border-gray-200 */
    <ul className="flex items-center py-1.5 px-5 rounded-[10px]">
      {pathArray.map((segment, i) => (
        <li
          key={segment.to}
          className={twMerge(
            "flex items-center capitalize text-sm",
            i > 0 && "ml-1",
            className
          )}
        >
          {i > 0 && (
            <span className="mr-1">
              {" "}
              <FaChevronRight />
            </span>
          )}
          <Link to={segment.to} as="NavLink" className="font-bold">
            {segment.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
