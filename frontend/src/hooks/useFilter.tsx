import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

const useFilter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  const createQueryString = useCallback(
    (name: string, value: string) => {
      if (name === "category") {
        if (!value) params.delete(name);
        else {
          params.set(name, value);
        }
      } else if (name == "color") {
        let allColors = [] as string[];

        params.getAll(name).forEach((item) => {
         
          allColors = allColors.concat(item.split(","));
        });

        const hasColor = allColors.includes(value);

        if (hasColor) {
          allColors = allColors.filter((item) => item !== value);
        } else {
          allColors.push(value);
        }
        if (!allColors.length) params.delete(name);
        else {
          const colorValues = allColors.join();
          params.set(name, colorValues);
        }

        allColors = [];
      } else if (name == "size") {
        let allSizes = [] as string[];

        params.getAll(name).forEach((item) => {
          allSizes = allSizes.concat(item.split(","));
        });

        const hasSize = allSizes.includes(value);

        // delete all sizes
        params.delete(name);

        if (hasSize) {
          allSizes = allSizes.filter((item) => item !== value);
        } else {
          allSizes.push(value);
        }
        if (!allSizes.length) params.delete(name);
        else {
          const sizeValues = allSizes.join();
          params.set(name, sizeValues);
        }
        allSizes = [];
      } else if (name == "brand") {
        let allBrands = [] as string[];

        params.getAll(name).forEach((item) => {
          allBrands = allBrands.concat(item.split(","));
        });

        const hasBrand = allBrands.includes(value);

        // delete all brands
        params.delete(name);

        if (hasBrand) {
          allBrands = allBrands.filter((item) => item !== value);
        } else {
          allBrands.push(value);
        }
        if (!allBrands.length) params.delete(name);
        else {
          const brandValues = allBrands.join();
          params.set(name, brandValues);
        }
        allBrands = [];
      } else if (name === "min-price") {
        params.set(name, value);
      } else if (name === "max-price") {
        params.set(name, value);
      } else if (name === "price") {
        if (!value) {
          params.delete("min-price");
          params.delete("max-price");
        }
      } else if (name === "sortby") {
        params.set(name, value);
      } else {
        if (!value) params.delete(name);
        else {
          params.set(name, value);
        }
      }

      return params.toString();
    },
    [searchParams]
  );

  return {
    createQueryString,
  };
};

export default useFilter;
