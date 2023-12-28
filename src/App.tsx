import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import "@/assets/styles/global.scss";
import { Products } from "./pages/Products";
import { Signup } from "./pages/Signup";
import { ProductDetails } from "./pages/ProductDetails";
import "@smastrom/react-rating/style.css";
import { Cart } from "./pages/Cart";
import DefaultLayout from "./Layouts/DefaultLayout";

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
          path: "/products/:id",
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
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
