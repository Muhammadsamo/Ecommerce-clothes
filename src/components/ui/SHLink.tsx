import { NavLink, LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";
interface ILinkProps extends LinkProps {
  href: string;
}

export const SHLink = ({ className, href, ...rest }: ILinkProps) => {
  let As = NavLink;
  if (
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel")
  ) {
    As = "a";
  }
  return (
    <As
      className={({ isActive }) => {
        return twMerge("", className, isActive ? "" : "");
      }}
      {...rest}
      to={href}
    />
  );
};
