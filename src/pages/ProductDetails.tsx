import Left from "@/components/productDetails/Left";
import Right from "@/components/productDetails/Right";
// import { RootState } from "../store";
// import { useDispatch, } from "react-redux";
// import { addToCart } from "@/store/slices/cartSlice";
import { useParams } from "react-router-dom";
import { productsData } from "@/data";

export const ProductDetails = () => {
  const itemId = Number(useParams().id);
  // const dispatch = useDispatch();
  const item = productsData.find((product) => product.id === itemId);
  // const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="max-w-[90rem] mx-auto px-[6.25rem] flex gap-10">
      {item && (
        <>
          <Left images={item.images} name={item.name} />
          <Right
            name={item.name}
            rating={item.rating}
            price={item.price}
            description={item.description}
            sizes={["SM", "M", "L", "XL"]}
            colors={["Brown", "Green", "Blue"]}
            quantity={1}
            // setQuantity={(payload) => {
            //   const qty =
            //     payload.type === "increment"
            //       ? item.quantity + 1
            //       : item.quantity - 1;
            //   if (qty === 0) return;

            //   return dispatch(
            //     addToCart({
            //       productId: item.id,
            //       quantity: qty,
            //       item: item,
            //     })
            //   );
            // }}
          />
        </>
      )}
    </div>
  );
};
