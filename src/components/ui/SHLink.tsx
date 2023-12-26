import { NavLink, LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";
interface ILinkProps extends LinkProps {
  href: string;
}

export const SHLink = ({ className, href, ...rest }: ILinkProps) => {
  
  if (
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel")
  ) {
    return <a {...rest} href={href} target="_blank" rel="noreferrer" />;
  }
  return (
    <NavLink
      className={({ isActive }) => {
        return twMerge("", className, isActive ? "" : "");
      }}
      {...rest}
      to={href}
    />
  );
};
