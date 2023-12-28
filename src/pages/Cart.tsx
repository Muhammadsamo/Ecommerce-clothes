import CartItem from "@/components/cart/CartItem";
import CartOrderSummary from "@/components/cart/CartOrderSummary";
import { Heading } from "@/components/typography/Heading";

export const Cart = () => {
  return (
    <div className="max-w-[90rem] mx-auto px-[6.25rem]">
      <Heading
        level={1}
        className="my-6 font-Monserrat uppercase font-black text-[2.5rem]"
      >
        Your cart
      </Heading>
      <div className="flex justify-between gap-4">
        <div className="pt-5 px-6 border border-[#0000001A] rounded-[1.25rem] flex flex-col gap-6">
          <CartItem
            itemImg={"image7.png"}
            itemTitle="T-shirt With Tape Details"
            itemColor="Black"
            itemSize="Large"
            itemPrice={145}
          ></CartItem>
          <CartItem
            itemImg={"image9.png"}
            itemTitle="CHECKERED SHIRT"
            itemColor="Red"
            itemSize="Medium"
            itemPrice={180}
          ></CartItem>
          <CartItem
            itemImg={"image8.png"}
            itemTitle="SKINNY FIT JEANS"
            itemColor="Blue"
            itemSize="Large"
            itemPrice={240}
          ></CartItem>
        </div>
        <div className="flex-initial h-[28.625rem] py-5 px-6 border border-[#0000001A] rounded-[1.25rem]">
          <CartOrderSummary />
        </div>
      </div>
    </div>
  );
};
