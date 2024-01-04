import { Right } from "@/components/shop/Right";
import { Left } from "@/components/shop/Left";
import { useState } from "react";

export const Products = () => {
  const [category, setCategory] = useState("");
  const [dressStyle, setDressStyle] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([1, 500]);
  return (
    <div className="max-w-[90rem] mx-auto px-[6.25rem]">
      <div className="flex gap-5">
        <Left
          handleCategoryChange={setCategory}
          handledressStyleChange={setDressStyle}
          handleColorSelection={setColors}
          colors={colors}
          sizes={sizes}
          priceRange={priceRange}
          handleSizeSelection={setSizes}
          handlePriceChange={setPriceRange}
        />
        <Right
          category={category}
          dressStyle={dressStyle}
          colors={colors}
          sizes={sizes}
          priceRange={priceRange}
          className="min-w-[58.0625rem]"
        />
      </div>
    </div>
  );
};
