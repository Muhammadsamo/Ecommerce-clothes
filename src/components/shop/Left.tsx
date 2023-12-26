import { FaFilter } from "react-icons/fa";
import { Heading } from "../typography/Heading";
import { filters, colors, sizes, dressStyles } from "@/data";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Slider } from "@/components/ui/Slider";
import { Button } from "../ui/Button";
type TFilterProps = {
  handleCategoryChange: (value: string) => void;
};
export const Left = ({ handleCategoryChange }: TFilterProps) => {
  return (
    <div className="w-[18.4375rem] rounded-[20px] border border-[#0000001A] px-6 py-5 h-fit">
      <div>
        <div className="flex items-center justify-between border-b border-[#0000001A] pb-5">
          <Heading
            level={2}
            className="font-bold text-[1.25rem] text-[#000000]"
          >
            Filters
          </Heading>
          <FaFilter />
        </div>
        <div className="py-5 border-b border-[#0000001A] ">
          <RadioGroup
            defaultValue="T-shirts"
            onValueChange={handleCategoryChange}
          >
            {filters.map((item) => {
              return (
                <div className="flex items-center space-x-2 justify-between py-2 text-[#00000099]">
                  <Label htmlFor={item} className="cursor-pointer">
                    {item}
                  </Label>
                  <RadioGroupItem value={item} id={item} />
                </div>
              );
            })}
          </RadioGroup>
        </div>
      </div>
      <div className="py-5 border-b border-[#0000001A]">
        <Heading
          level={2}
          className="font-bold text-[1.25rem] text-[#000000] mb-5"
        >
          Price
        </Heading>
        <Slider
          defaultValue={[1, 500]}
          min={1}
          max={1000}
          step={1}
          minStepsBetweenThumbs={1}
          className="mb-8"
        ></Slider>
      </div>
      <div className="py-5 border-b border-[#0000001A]">
        <Heading
          level={2}
          className="font-bold text-[1.25rem] text-[#000000] mb-5"
        >
          Colors
        </Heading>
        <div className="flex flex-wrap gap-[14px]">
          {colors.map((c) => {
            const color = c.value;
            return (
              <div
                key={c.id}
                className={`h-[2.3125rem] w-[2.3125rem] ${color} border border-[#00000033] rounded-full cursor-pointer`}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="py-5 border-b border-[#0000001A]">
        <Heading
          level={2}
          className="font-bold text-[1.25rem] text-[#000000] mb-5"
        >
          Size
        </Heading>
        <div className="flex flex-wrap gap-[14px]">
          {sizes.map((s) => {
            return (
              <div
                key={s.id}
                className="bg-[#F0F0F0] px-5 py-[.625rem] rounded-[3.875rem] cursor-pointer text-[#00000099] text-[.875rem]"
              >
                {s.value}
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-5">
        <Heading
          level={2}
          className="font-bold text-[1.25rem] text-[#000000] mb-5"
        >
          Dress Style
        </Heading>
        <div>
          <RadioGroup defaultValue="T-shirts">
            {dressStyles.map((style) => {
              return (
                <div className="flex items-center space-x-2 justify-between py-2 text-[#00000099]">
                  <Label htmlFor={style.value} className="cursor-pointer">
                    {style.value}
                  </Label>
                  <RadioGroupItem value={style.value} id={style.value} />
                </div>
              );
            })}
          </RadioGroup>
        </div>
        <Button className="py-[26px] px-[70px] w-full flex items-center mt-6">
          Apply Filters{" "}
        </Button>
      </div>
    </div>
  );
};
