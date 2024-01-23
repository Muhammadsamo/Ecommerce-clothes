import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SignupBanner } from "@/components/layout/SignupBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Outlet, useLocation } from "react-router-dom";

const DefaultLayout = () => {
  const pathName = useLocation().pathname;
  // console.log(pathName);
  return (
    <div>
      <div className="main">
        <SignupBanner />
        <Navbar />
        <div>
          <div className="contentContainer">
            {pathName !== "/" ? (
              <div className="max-w-[90rem] mx-auto px-[6.25rem] py-4">
                <Breadcrumbs />
              </div>
            ) : null}
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
