import { Heading } from "../typography/Heading";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";

const CartOrderSummary = () => {
  return (
    <div className="w-[30rem] flex flex-col gap-6 ">
      <Heading level={2} className="text-[1.5rem] font-bold">
        Order Summary
      </Heading>
      <div className="flex flex-col gap-5 border-b border-[#0000001A] pb-5 text-[1.25rem]">
        <div className="flex justify-between">
          <span className="text-[#00000099]">Subtotal</span>
          <span className="font-bold">$565</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#00000099]">Discount (-20%)</span>
          <span className="text-[#F33] font-bold">-$113</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#00000099]">Delivery Fee</span>
          <span className="font-bold">$15</span>
        </div>
      </div>
      <div className="flex justify-between text-[1.25rem]">
        <span className="text-[#00000099]">Total</span>
        <span className="font-bold">$467</span>
      </div>
      <div className="flex gap-3">
        <Input
          placeholder="Add a promo code"
          className="bg-[#F0F0F0] rounded-[3.875rem] text-[#00000066]"
        />
        <Button className="px-8">Apply</Button>
      </div>
      <Button className="py-6">
        Go to Checkout
        <FaArrowRight className="ml-3 text-[1rem]" />
      </Button>
    </div>
  );
};

export default CartOrderSummary;
