import { useDispatch } from "react-redux";
import { Product } from "./Product";
import { Heading } from "./typography/Heading";
import { Button } from "./ui/Button";
import { SHLink } from "./ui/SHLink";
import { ProductInfo } from "@/types/general";
import { twMerge } from "tailwind-merge";
import { addToCart } from "@/store/slices/cartSlice";

interface IProps {
  title: string;
  link: string;
  data: ProductInfo[];
  className?: string;
}

export const FeaturedProducts = ({ title, link, data, className }: IProps) => {
  const dispatch = useDispatch();
  const onAddToCart = (id: number) => {
    const product = data.find((prod) => prod.id === id);

    dispatch(
      addToCart({
        item: product,
        productId: id,
        inc: true,
      })
    );
  };
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-between mb-16",
        className
      )}
    >
      <Heading
        level={2}
        className="font-Monserrat text-[3rem] text-black font-black mt-16 mb-[3.4375rem]"
      >
        {title}
      </Heading>
      <div className="flex gap-5 mb-9">
        {data.map((p) => {
          return <Product key={p.id} {...p} onAddToCart={onAddToCart} />;
        })}
      </div>
      <SHLink to={link} className="mb-16">
        <Button
          variant={"outline"}
          className="py-[1.625rem] px-[4.375rem] hover:bg-black hover:text-white"
        >
          View All
        </Button>
      </SHLink>
    </div>
  );
};
