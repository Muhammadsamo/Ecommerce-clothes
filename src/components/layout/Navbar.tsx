import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Logo } from "../Logo";
import { NavMenu } from "../NavMenu";
import { Input } from "../ui/Input";
import { SHLink } from "../ui/SHLink";

export const Navbar = () => {
  return (
    <header className="h-[6rem] bg-white w-screen flex items-center justify-between max-w-[90rem] mx-auto px-[6.25rem] relative">
      <Logo />
      <NavMenu />
      <Input
        className="bg-[#F0F0F0] rounded-[62px] w-[36.0625rem] h-[3rem] mr-[2.5rem]"
        placeholder="Search for products..."
      />
      <div className="flex gap-[14px]">
        <SHLink to={"/cart"}>
          <FaShoppingCart
            size="1.4rem"
          />
        </SHLink>
        <span className="cursor-pointer">
          <FaUserCircle size="1.4rem" />
        </span>
      </div>
      <hr className="h-0 border-b border-[#0000001A] absolute w-[77.5rem] bottom-0" />
    </header>
  );
};
