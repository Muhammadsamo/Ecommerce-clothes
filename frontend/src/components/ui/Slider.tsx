import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { twMerge } from "tailwind-merge";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const minValue = value ? value[0] : 1;
  const maxValue = value ? value[1] : 500;
  return (
    <SliderPrimitive.Root
      value={value}
      ref={ref}
      className={twMerge(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-[#F0F0F0]">
        <SliderPrimitive.Range className="absolute h-full bg-primary bg-[#000000]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#000000]">
        <span className="absolute top-[24px] left-[-5px]">${minValue}</span>
      </SliderPrimitive.Thumb>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#000000]">
        <span className="absolute top-[24px] left-[-5px]">${maxValue}</span>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
