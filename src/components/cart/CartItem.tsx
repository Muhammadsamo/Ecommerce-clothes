import { FaMinus, FaPlus } from "react-icons/fa";
import { PiTrashFill } from "react-icons/pi";
import { Heading } from "../typography/Heading";
import { Button } from "../ui/Button";
import { useState } from "react";

type IProps = {
  itemImg?: string;
  itemTitle?: string;
  itemSize?: string;
  itemColor?: string;
  itemPrice?: number;
  itemQuantity?: number;
};
const CartItem = ({
  itemImg,
  itemTitle,
  itemSize,
  itemColor,
  itemPrice,
}: 
IProps) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const handleItemQuantity = (func: string) => {
    if (func === "increment") {
      setItemQuantity(itemQuantity + 1);
    } else if (func === "decrement") {
      if (itemQuantity === 1) {
        return;
      }
      setItemQuantity(itemQuantity - 1);
    }
  };
  return (
    <div className="w-[41.6875rem] flex border-b border-[#0000001A] pb-5 ">
      <div className="w-1/4">
        <img
          src={`/images/${itemImg}`}
          alt={itemImg}
          className="h-[7.75rem] rounded-[.5411rem]"
        />
      </div>
      <div className="w-3/4 flex justify-between">
        <div className="flex flex-col">
          <Heading level={3} className="text-[1.5rem] font-bold pt-1">
            {itemTitle}
          </Heading>
          <p className="flex flex-col text-sm pt-1">
            <span>
              Size: <span className="text-[#00000099]">{itemSize}</span>
            </span>
            <span>
              Color: <span className="text-[#00000099]">{itemColor}</span>
            </span>
          </p>
          <span className="text-[1.5rem] font-bold mt-auto">${itemPrice}</span>
        </div>
        <div className="flex flex-col justify-between">
          <Button variant={"ghost"} className="px-0 self-end">
            <PiTrashFill className="fill-[#FF3333] text-[1.5rem]" />
          </Button>
          <div className="bg-[#F0F0F0] text-black text-[1.25rem] rounded-[1.5rem]">
            <Button
              onClick={() => {
                handleItemQuantity("decrement");
              }}
              variant={"ghost"}
            >
              <FaMinus />
            </Button>
            {itemQuantity}
            <Button
              onClick={() => {
                handleItemQuantity("increment");
              }}
              variant={"ghost"}
            >
              <FaPlus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
