import { Heading } from "./typography/Heading";
import { ProductInfo } from "@/types/general";
import { Rating, Star } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

export const Product = ({ id, image, name, rating, price }: ProductInfo) => {
  return (
    <Link to={`/product/${id}`}>
      <div>
        <div className="product-image w-[18.4375rem] h-[18.625rem] bg-[#F0EEED] rounded-[20px] flex items-center justify-center mb-[1rem]">
          <img className="rounded-[20px]" src={image} alt={name} />
        </div>
        <div className="product-details flex flex-col items-start gap-2">
          <Heading level={4} className="text-black text-[1.25rem] font-bold">
            {name}
          </Heading>
          <span className="flex text-[.875rem] font-normal ">
            <Rating
              style={{ maxWidth: "7.5rem" }}
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
      </div>
    </Link>
  );
};
