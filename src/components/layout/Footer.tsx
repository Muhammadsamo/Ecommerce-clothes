import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Logo } from "../Logo";
import { Heading } from "../typography/Heading";
import { Input } from "../ui/Input";
import { TfiEmail } from "react-icons/tfi";
import { Button } from "../ui/Button";
import { SHLink } from "../ui/SHLink";
export const Footer = () => {
  const footerNavMenus = [
    {
      heading: "Company",
      links: [
        {
          name: "About",
          href: "/",
        },
        {
          name: "Features",
          href: "/",
        },
        {
          name: "Works",
          href: "/",
        },
        {
          name: "Career",
          href: "/",
        },
      ],
    },
    {
      heading: "Help",
      links: [
        {
          name: "Customer Support",
          href: "/",
        },
        {
          name: "Delivery Details",
          href: "/",
        },
        {
          name: "Terms & Conditions",
          href: "/",
        },
        {
          name: "Privacy Policy",
          href: "/",
        },
      ],
    },
    {
      heading: "FAQ",
      links: [
        {
          name: "Account",
          href: "/",
        },
        {
          name: "Manage Deliveries",
          href: "/",
        },
        {
          name: "Orders",
          href: "/",
        },
        {
          name: "Payments",
          href: "/",
        },
      ],
    },
    {
      heading: "Resources",
      links: [
        {
          name: "Free eBooks",
          href: "/",
        },
        {
          name: "Development Tutorial",
          href: "/",
        },
        {
          name: "How to - Blog",
          href: "/",
        },
        {
          name: "Youtube Playlist",
          href: "/",
        },
      ],
    },
  ];
  return (
    <footer className="bg-[#F0F0F0] min-h-[31.25rem] mt-[10.625rem]">
      <div className="container px-4 sm:px-[6.25rem] max-w-[90rem] mx-auto relative">
        <div className="bg-black rounded-[1.25rem] absolute -top-[5.625rem] min-h-[11.25rem] xl:w-[1240px] max-w-[77.5rem] flex flex-col lg:flex-row gap-y-4 items-center justify-between px-16 py-9">
          <Heading
            level={2}
            className="font-Monserrat text-[2rem] md:text-[2.5rem] font-black text-white max-w-[34.375rem]"
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
              <Button className="py-[1.5rem] px-[4.375rem] min-w-[350px] bg-white text-black hover:opacity-90 font-bold">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 sm:px-[6.25rem] max-w-[90rem] mx-auto relative flex justify-between flex-wrap gap-y-8 pt-[22rem]  min-[23.6875rem]:pt-[19rem] lg:pt-[8.75rem]">
        <div className="basis-[100%] lg:basis-auto lg:max-w-[250px]">
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
        {footerNavMenus.map((nav) => {
          return (
            <div key={nav.heading} className="flex flex-col gap-4 lg:gap-6 basis-[50%] lg:basis-auto text-sm sm:text-base">
              <Heading
                level={3}
                className="font-semibold leading-[1.125rem] tracking-[.1875rem] uppercase text-sm sm:text-base"
              >
                {nav.heading}
              </Heading>
              {nav.links.map((link) => {
                return (
                  <span className="leading-[1.1875rem] text-[#00000099] underline-offset-4 decoration-slate-600 hover:underline transition-all ">
                    <SHLink to={link.href}>{link.name}</SHLink>
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};
