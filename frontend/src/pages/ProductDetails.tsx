import Left from "@/components/productDetails/Left";
import Right from "@/components/productDetails/Right";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="max-w-[90rem] mx-auto px-[6.25rem] flex gap-10">
      <Left />
      <Right
        name="Item1"
        rating={4}
        price={250}
        description="This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
        sizes={["Small", "Medium", "Large", "Extra Large"]}
        colors={["Brown", "Green", "Blue"]}
        quantity={1}
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
      />
    </div>
  );
};
