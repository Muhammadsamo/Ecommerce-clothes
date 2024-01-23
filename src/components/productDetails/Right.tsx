import { Rating, Star } from "@smastrom/react-rating";
import { Heading } from "../typography/Heading";
import { Button } from "../ui/Button";
import { FaMinus, FaPlus } from "react-icons/fa";
// import { TQuantityChange } from "../cart/CartItem";

type TProps = {
  name: string;
  rating: number;
  price: number;
  description: string;
  sizes: string[];
  colors: string[];
  quantity: number;
  // setQuantity: (payload: TQuantityChange) => void;
  // id: number;
};
const Right = ({
  name,
  rating,
  price,
  description,
  sizes,
  colors,
  quantity,
  // setQuantity,
  // id,
}: TProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Heading level={2}>{name}</Heading>
      <span className="flex text-[14px] font-normal ">
        <Rating
          style={{ maxWidth: "120px" }}
          value={rating}
          readOnly
          itemStyles={{
            itemStrokeWidth: 0,
            activeFillColor: "#FFC633",
            itemShapes: Star,
          }}
        />
        {rating}/<span className="text-[#00000099]">5</span>
      </span>
      <div>{price}</div>
      <div>{description}</div>
      <div>
        <span>select Sizes</span>
        <br />
        {sizes}
      </div>
      <div>
        <span>select colors</span>
        <br />
        {colors}
      </div>
      <div className="flex flex-col justify-between">
        <div className="bg-[#F0F0F0] text-black text-[1.25rem] rounded-[1.5rem]">
          <Button
            // onClick={setQuantity.bind(null, {
            //   type: "decrement",
            //   id,
            // })}
            variant={"ghost"}
          >
            <FaMinus />
          </Button>
          {quantity}
          <Button
            // onClick={setQuantity.bind(null, {
            //   type: "increment",
            //   id,
            // })}
            variant={"ghost"}
          >
            <FaPlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Right;
