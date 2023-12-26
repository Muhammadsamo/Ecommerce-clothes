import { Product } from "@/components/Product";
import { productsData } from "@/data";
import { FaChevronDown } from "react-icons/fa";
import { Heading } from "../typography/Heading";

export const Right = ({ category }: any) => {
  const filteredProducts = productsData.filter(
    (p) => !category || p.category === category
  );
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Heading level={1} className="font-bold text-[2rem] text-[#000000]">
          Casual
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
          return <Product key={p.id} {...p} />;
        })}
      </div>
    </div>
  );
};
