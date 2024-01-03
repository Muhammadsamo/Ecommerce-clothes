import CartItem from "@/components/cart/CartItem";
import CartOrderSummary from "@/components/cart/CartOrderSummary";
import { Heading } from "@/components/typography/Heading";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // console.log(cartItems, "CART ITEMS");

  return (
    <div className="max-w-[90rem] mx-auto px-[6.25rem]">
      <Heading
        level={1}
        className="my-6 font-Monserrat uppercase font-black text-[2.5rem]"
      >
        Your cart
      </Heading>
      <div className="flex justify-between gap-4">
        <div className="pt-5 px-6 min-w-[45.125rem] border border-[#0000001A] rounded-[1.25rem] flex flex-col gap-6">
          {!cartItems.length ? (
            <Heading
              level={3}
              className="font-bold text-[1.25rem] text-red-600 text-center"
            >
              Your Cart is empty!
            </Heading>
          ) : null}
          {cartItems.map((item) => (
            <CartItem
              img={item.image}
              title={item.name}
              color={item.color}
              size={item.size}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              setQuantity={(payload) => {
                const qty =
                  payload.type === "increment"
                    ? item.quantity + 1
                    : item.quantity - 1;
                if (qty === 0) return;

                return dispatch(
                  addToCart({
                    productId: item.id,
                    quantity: qty,
                    item: item,
                  })
                );
              }}
              removeItem={() => dispatch(removeFromCart(item.id))}
            />
          ))}
          {/* <CartItem
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
          ></CartItem> */}
        </div>
        <div className="flex-initial h-[28.625rem] py-5 px-6 border border-[#0000001A] rounded-[1.25rem]">
          <CartOrderSummary />
        </div>
      </div>
    </div>
  );
};
