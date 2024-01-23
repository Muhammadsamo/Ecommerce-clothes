import { FaMinus, FaPlus } from "react-icons/fa";
import { PiTrashFill } from "react-icons/pi";
import { Heading } from "../typography/Heading";
import { Button } from "../ui/Button";

export type TQuantityChange = {
  type: "increment" | "decrement";
  id: number;
};
type TProps = {
  id: number;
  name: string;
  img?: string[];
  title?: string;
  size?: string;
  color?: string;
  price?: number;
  quantity?: number;
  setQuantity: (payload: TQuantityChange) => void;
  removeItem: (payload: number) => void;
};
const CartItem = ({
  img,
  name,
  title,
  size,
  color,
  price,
  quantity,
  id,
  setQuantity,
  removeItem
}: TProps) => {
  const itemColor = `bg-[${color}]`;
  const imgurl =  img?.[0];
  return (
    <div className="w-[41.6875rem] flex border-b border-[#0000001A] pb-5 ">
      <div className="w-1/4">
        <img src={imgurl} alt={name} className="h-[7.75rem] rounded-[.5411rem]" />
      </div>
      <div className="w-3/4 flex justify-between">
        <div className="flex flex-col">
          <Heading level={3} className="text-[1.5rem] font-bold pt-1">
            {title}
          </Heading>
          <div className="flex flex-col text-sm pt-1">
            <span>
              Size: <span className="text-[#00000099]">{size}</span>
            </span>
            <span className="flex items-center gap-1">
              Color:{" "}
              <span
                className={`text-[#00000099] ${itemColor} w-4 h-4 inline-block rounded-full`}
              ></span>
            </span>
          </div>
          <span className="text-[1.5rem] font-bold mt-auto">${price}</span>
        </div>
        <div className="flex flex-col justify-between">
          <Button
            variant={"ghost"}
            className="px-0 self-end hover:scale-y-110"
            onClick={removeItem.bind(null, id)}
          >
            <PiTrashFill className="fill-[#FF3333] text-[1.5rem]" />
          </Button>
          <div className="bg-[#F0F0F0] text-black text-[1.25rem] rounded-[1.5rem]">
            <Button
              onClick={setQuantity.bind(null, {
                type: "decrement",
                id,
              })}
              variant={"ghost"}
            >
              <FaMinus />
            </Button>
            {quantity}
            <Button
              onClick={setQuantity.bind(null, {
                type: "increment",
                id,
              })}
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
