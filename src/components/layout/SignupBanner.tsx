import { SHLink } from "../ui/SHLink";

export const SignupBanner = () => {
  return (
    <div className="bg-black w-full h-[2.375rem] text-[#FFF] text-center flex items-center justify-center font-Roboto text-[.875rem] ">
      Sign up and get 20% off to your first order.
      <SHLink to="/signup" className="font-medium underline">
        Sign Up Now
      </SHLink>
    </div>
  );
};
