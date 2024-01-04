import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/Button";
import { url } from "../../store/slices/api";

type TProps = {
  cartItems: object[];
};

export const CheckoutButton = ({ cartItems }: TProps) => {
  // const user = useSelector((state) => state.auth);

  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, { cartItems })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
    // console.log(cartItems);
  };

  return (
    <>
      <Button className="py-6" onClick={() => handleCheckout()}>
        Go to Checkout
        <FaArrowRightLong className="ml-3 text-[1rem]" />
      </Button>
    </>
  );
};

// export default checkoutButton;
