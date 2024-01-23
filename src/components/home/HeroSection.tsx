import { Heading } from "../typography/Heading";
import { Button } from "../ui/Button";
import { SHLink } from "../ui/SHLink";
import { HeroInfo } from "./HeroInfo";

interface IProps {
  heroTitle: string;
}

export const HeroSection = ({ heroTitle }: IProps) => {
  return (
    <div className="bg-hero-image bg-cover h-[41.4375rem] flex items-center px-[6.25rem]">
      <div className="flex flex-col justify-center w-full mx-auto max-w-[90rem]">
        <div className="max-w-[37.625rem]">
          <Heading
            level={1}
            className="text-[4rem] leading-[64px] font-black text-black font-Monserrat uppercase mb-[2rem]"
          >
            {heroTitle}
          </Heading>
          <p className="text-[#00000099] text-base leading-[22px] mb-[2rem]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <SHLink to="/products">
            <Button className="py-[26px] px-[70px] hover:bg-transparent hover:text-black border-black border">
              Shop Now
            </Button>
          </SHLink>
        </div>
        <div className="flex mt-10 items-center gap-16">
          <HeroInfo title="200+" desc="International Brands" />
          <HeroInfo title="2,000+" desc="High-Quality Products" />
          <HeroInfo title="30,000+" desc="Happy Customers" />
        </div>
      </div>
    </div>
  );
};
