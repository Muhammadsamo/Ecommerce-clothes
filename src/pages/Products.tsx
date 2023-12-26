import { Right } from "@/components/shop/Right";
import { Left } from "@/components/shop/Left";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export const Products = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="max-w-[90rem] mx-auto px-[6.25rem]">
      <div>
        <nav className="flex items-center h-[4.375rem] gap-2">
          <ul className="flex items-center gap-3">
            <li>Home</li>
            <FaChevronRight />
            <li>Casual</li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-5">
        <Left handleCategoryChange={setCategory} />
        <Right category={category} />
      </div>
    </div>
  );
};
