import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import "@/assets/styles/global.scss";
import { Products } from "./pages/Products";
import { Signup } from "./pages/Signup";
import { ProductDetails } from "./pages/ProductDetails";
import "@smastrom/react-rating/style.css";
import { Cart } from "./pages/Cart";
import DefaultLayout from "./Layouts/DefaultLayout";
import { CheckoutSuccess } from "./pages/CheckoutSuccess";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout-success",
          element: <CheckoutSuccess />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
