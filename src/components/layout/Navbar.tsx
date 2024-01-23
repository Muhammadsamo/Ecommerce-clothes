import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Logo } from "../Logo";
import { NavMenu } from "../NavMenu";
import { Input } from "../ui/Input";
import { SHLink } from "../ui/SHLink";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const Navbar = () => {
  const cartItemsQuantity = useSelector((state: RootState) => state.cart.items.length);
  return (
    <header className="h-[6rem] bg-white flex items-center justify-between z-[999] px-[6.25rem] sticky top-0 border-b border-[#0000001A]">
      <Logo />
      <NavMenu />
      <Input
        className="bg-[#F0F0F0] rounded-[62px] w-[36.0625rem] h-[3rem] mr-[2.5rem]"
        placeholder="Search for products..."
      />
      <div className="flex gap-[14px] overflow-visible">
        <span className="relative cursor-pointer">
          <SHLink to={"/cart"}>
            <span className="absolute -right-[8px] -top-[8px] flex items-center justify-center rounded-full h-4 w-4 bg-red-500 text-white text-center z-10 text-sm font-bold">
              {cartItemsQuantity}
            </span>
            <FaShoppingCart size="1.4rem" />
          </SHLink>
        </span>
        <span className="cursor-pointer">
          <FaUserCircle size="1.4rem" />
        </span>
      </div>
      {/* <hr className="h-0 border-b border-[#0000001A] absolute w-[77.5rem] bottom-0" /> */}
    </header>
  );
};
