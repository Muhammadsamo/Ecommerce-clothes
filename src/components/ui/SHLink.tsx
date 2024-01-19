import {
  Link as RouterLink,
  LinkProps,
  NavLink,
  NavLinkProps,
} from "react-router-dom";

type TProps =
  | ({
      as?: "Link";
    } & LinkProps)
  | ({ as?: "NavLink" } & NavLinkProps);

export const SHLink = (props: TProps) => {
  if (props.as === "Link") {
    return <RouterLink {...props} />;
  }

  return (
    <NavLink
      {...props}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-medium " : ""
      }
    />
  );
};
