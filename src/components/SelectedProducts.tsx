import { Product } from "./Product";
import { Heading } from "./typography/Heading";
import { Button } from "./ui/Button";
import { SHLink } from "./ui/SHLink";
import { ProductInfo } from "@/types/general";

interface IProps {
  title: string;
  link: string;
  data: ProductInfo[];
}

export const SelectedProducts = ({ title, link, data }: IProps) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <Heading
        level={2}
        className="font-Monserrat text-[3rem] text-black font-black mt-16 mb-[3.4375rem]"
      >
        {title}
      </Heading>
      <div className="flex gap-5 mb-9">
        {data.map((p) => {
          return <Product key={p.id} {...p} />;
        })}
      </div>
      <SHLink to={link} href={link} className="mb-16">
        <Button variant={"outline"} className="py-[1.625rem] px-[4.375rem]">
          View All
        </Button>
      </SHLink>
    </div>
  );
};
