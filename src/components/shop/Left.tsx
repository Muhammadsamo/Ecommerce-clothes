import { GiSettingsKnobs } from "react-icons/gi";
import { Heading } from "../typography/Heading";
import {
  filters,
  colors as colorsData,
  sizes as sizesData,
  dressStyles,
} from "@/data";
import { Label } from "@/components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Slider } from "@/components/ui/Slider";
import { Checkbox } from "../ui/Checkbox";
import { twMerge } from "tailwind-merge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";

type TFilterProps = {
  handleCategoryChange: (value: string) => void;
  handledressStyleChange: (value: string) => void;
  handleColorSelection: (value: string[]) => void;
  handleSizeSelection: (value: string[]) => void;
  handlePriceChange: (value: number[]) => void;
  colors: string[];
  sizes: string[];
  className?: string;
  priceRange?: number[];
};
export const Left = ({
  handleCategoryChange,
  handledressStyleChange,
  handleColorSelection,
  handleSizeSelection,
  handlePriceChange,
  colors,
  sizes,
  className,
  priceRange,
}: TFilterProps) => {
  return (
    <div
      className={twMerge(
        "w-[18.4375rem] rounded-[20px] border border-[#0000001A] px-6 py-5 h-fit",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between border-b border-[#0000001A] pb-5">
          <Heading
            level={2}
            className="font-bold text-[1.25rem] text-[#000000]"
          >
            Filters
          </Heading>
          <GiSettingsKnobs className="text-[1.5rem]" />
        </div>

        {/* CATEGORY FILTER */}

        <Accordion
          type="single"
          collapsible
          className="py-5 border-b border-[#0000001A]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-[1.25rem] text-[#000000]">
              Category
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-5">
                <RadioGroup
                  defaultValue="T-shirts"
                  onValueChange={handleCategoryChange}
                >
                  {filters.map((item) => {
                    return (
                      <div className="flex items-center space-x-2 justify-between py-2 text-[#00000099]">
                        <Label htmlFor={item} className="cursor-pointer w-full hover:opacity-70">
                          {item}
                        </Label>
                        <RadioGroupItem value={item} id={item} />
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* PRICE FILTER */}
      <Accordion
        type="single"
        collapsible
        className="py-5 border-b border-[#0000001A]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-[1.25rem] text-[#000000]">
            Price
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-5 px-4">
              <Slider
                defaultValue={[1, 500]}
                min={1}
                max={1000}
                step={1}
                minStepsBetweenThumbs={1}
                className="mb-8 cursor-pointer"
                onValueChange={handlePriceChange}
                value={priceRange}
              ></Slider>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* COLOR FILTER */}

      <Accordion
        type="single"
        collapsible
        className="py-5 border-b border-[#0000001A]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-[1.25rem] text-[#000000]">
            Colors
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-5 ">
              <div className="flex flex-wrap gap-[14px]">
                {colorsData.map((c) => {
                  const color = c.value;
                  return (
                    <Checkbox
                      key={c.id}
                      className={`h-[2.3125rem] w-[2.3125rem] ${color} border border-[#00000033] rounded-full cursor-pointer`}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          return handleColorSelection([
                            ...colors,
                            c.value.replace("bg-[", "").replace("]", ""),
                          ]);
                        }
                        handleColorSelection(
                          colors.filter(
                            (item) =>
                              item !==
                              c.value.replace("bg-[", "").replace("]", "")
                          )
                        );
                      }}
                    ></Checkbox>
                  );
                })}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* SIZE FILTER */}

      <Accordion
        type="single"
        collapsible
        className="py-5 border-b border-[#0000001A]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-[1.25rem] text-[#000000]">
            Size
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-5">
              <div className="flex flex-wrap gap-x-[.875rem] gap-y-[1.5rem]">
                {sizesData.map((s) => {
                  console.log(s.value);
                  return (
                    <div>
                      <Checkbox
                        id={s.value}
                        key={s.id}
                        className="hidden peer"
                        onCheckedChange={(checked) => {
                          if (checked) {
                            console.log("test");
                            return handleSizeSelection([...sizes, s.value]);
                          }
                          handleSizeSelection(
                            sizes.filter((item) => item !== s.value)
                          );
                        }}
                      ></Checkbox>
                      <Label
                        htmlFor={s.value}
                        className="peer peer-aria-checked:text-white peer-aria-checked:bg-black bg-[#F0F0F0] px-5 py-[.625rem] rounded-[3.875rem] cursor-pointer text-[#00000099] text-[.875rem] hover:bg-[black] hover:text-white"
                      >
                        {s.value}
                      </Label>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* DRESS STYLE FILTER */}

      <Accordion type="single" collapsible className="py-5">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-[1.25rem] text-[#000000]">
            Dress Style
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-5">
              <div>
                <RadioGroup
                  defaultValue="T-shirts"
                  onValueChange={handledressStyleChange}
                >
                  {dressStyles.map((style) => {
                    return (
                      <div className="flex items-center space-x-2 justify-between py-2 text-[#00000099]">
                        <Label htmlFor={style} className="cursor-pointer w-full hover:opacity-70">
                          {style}
                        </Label>
                        <RadioGroupItem value={style} id={style} />
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
              {/* <Button className="py-[26px] px-[70px] w-full flex items-center mt-6">
          Apply Filters{" "}
        </Button> */}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
