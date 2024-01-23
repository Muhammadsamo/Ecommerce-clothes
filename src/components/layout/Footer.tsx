import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Logo } from "../Logo";
import { Heading } from "../typography/Heading";
import { Input } from "../ui/Input";
import { TfiEmail } from "react-icons/tfi";
import { Button } from "../ui/Button";
export const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] min-h-[31.25rem] mt-[10.625rem] pt-[8.75rem] ">
      <div className="container px-[6.25rem] relative flex ">
        <div className="bg-black rounded-[1.25rem] absolute -top-[120%] min-h-[11.25rem] w-full max-w-[77.5rem] flex items-center justify-between px-16 py-9">
          <Heading
            level={2}
            className="font-Monserrat text-[2.5rem] font-black text-white max-w-[34.375rem]"
          >
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </Heading>
          <div className="flex flex-col gap-4">
            <div className="bg-[#F0F0F0] relative rounded-[62px] min-w-[350px] h-[3rem] flex items-center">
              <span className="absolute left-4">
                <TfiEmail className="fill-[#00000066]" />
              </span>
              <Input
                className="bg-[#F0F0F0] rounded-[62px] min-w-[350px] h-[3rem] pl-10"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <Button
                className="py-[1.5rem] px-[4.375rem] min-w-[350px] bg-white text-black hover:opacity-90 font-bold"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-[250px]">
          <Logo />
          <p className="mt-6 text-[#00000099] text-sm">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex mt-9 gap-2">
            <span className="rounded-full p-2 bg-white border border-[#00000033] hover:-translate-y-1 transition-all cursor-pointer">
              <FaTwitter />
            </span>
            <span className="rounded-full p-2 bg-black border border-[#00000033] hover:-translate-y-1 transition-all cursor-pointer">
              <FaFacebookF className="fill-white" />
            </span>
            <span className="rounded-full p-2 bg-white border border-[#00000033] hover:-translate-y-1 transition-all cursor-pointer">
              <FaInstagram />
            </span>
            <span className="rounded-full p-2 bg-white border border-[#00000033] hover:-translate-y-1 transition-all cursor-pointer">
              <FaGithub />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
