import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import "@/assets/styles/global.scss";
import { SignupBanner } from "./components/layout/SignupBanner";
import { Footer } from "./components/layout/Footer";
import { Products } from "./pages/Products";
import { Signup } from "./pages/Signup";
import { Navbar } from "./components/layout/Navbar";
import { ProductDetails } from "./pages/ProductDetails";
import "@smastrom/react-rating/style.css";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <SignupBanner />
        <Navbar />
        <div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
