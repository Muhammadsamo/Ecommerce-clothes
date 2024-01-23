import { Heading } from "./typography/Heading";
import { ProductInfo } from "@/types/general";
import { Rating, Star } from "@smastrom/react-rating";
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
type TProps = ProductInfo & {
  onAddToCart: (id: number) => void;
};
export const Product = ({
  onAddToCart,
  id,
  images,
  name,
  rating,
  price,
}: TProps) => {
  return (
    <Link
      className="relative hover:scale-105 hover:shadow-sm transition-all"
      to={`/product/${id}`}
    >
      <button
        className="absolute right-4 top-2 p-2 rounded-[1.5rem] hover:bg-white hover:scale-110 transition-all"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          onAddToCart(id);
        }}
      >
        <MdOutlineShoppingCart size="24px" />
      </button>
      <div className="product-image w-[295px] h-[298px] bg-[#F0EEED] rounded-[1.25rem] flex items-center justify-center mb-[16px]">
        <img className="rounded-[1.25rem] h-full w-full" src={images[0]} alt={name} />
      </div>
      <div className="product-details flex flex-col items-start gap-2">
        <Heading level={4} className="text-black text-[20px] font-bold">
          {name}
        </Heading>
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
        <span className="text-black text-2xl font-bold">${price}</span>
      </div>
    </Link>
  );
};
