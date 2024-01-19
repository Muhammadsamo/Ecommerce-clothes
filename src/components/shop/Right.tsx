import { Product } from "@/components/Product";
import { productsData } from "@/data";
import { FaChevronDown } from "react-icons/fa";
import { Heading } from "../typography/Heading";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";

type TProps = {
  className?: string;
  category: string;
  dressStyle: string;
  colors: string[];
  sizes: string[];
  priceRange: number[];
};

export const Right = ({
  category,
  dressStyle,
  colors,
  sizes,
  priceRange,
  className,
}: TProps) => {
  const dispatch = useDispatch();
  const onAddToCart = (id: number) => {
    const product = productsData.find((prod) => prod.id === id);

    dispatch(
      addToCart({
        item: product,
        productId: id,
        inc: true,
      })
    );
  };

  const filteredProducts = productsData.filter(
    (p) =>
      (!category || p.category === category) &&
      (!dressStyle || p.dressStyle === dressStyle) &&
      (!priceRange || (priceRange[0] <= p.price && p.price <= priceRange[1])) &&
      (!colors || !colors.length || colors.includes(p.color)) &&
      (!sizes || !sizes.length || sizes.includes(p.size))
  );
  return (
    <div className={twMerge("", className)}>
      <div className="flex items-center justify-between mb-4 ">
        <Heading level={1} className="font-bold text-[2rem] text-[#000000]">
          {!dressStyle ? "All" : dressStyle}
        </Heading>
        <div className="flex items-center gap-3 text-[#00000099]">
          <span>Showing 1-10 of 100 Products</span>
          <span className="flex items-center gap-1 cursor-pointer">
            Sort by:{" "}
            <span className="text-[#000000] font-medium">Most Popular</span>{" "}
            <span className="text-[#000000]">
              <FaChevronDown />
            </span>
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.map((p) => {
          return <Product key={p.id} onAddToCart={onAddToCart} {...p} />;
        })}
      </div>
    </div>
  );
};
