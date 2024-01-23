import { Link } from "react-router-dom";
import { Heading } from "../typography/Heading";

export const BrowseByStyle = () => {
  return (
    <div className="py-[75px] px-16 bg-[#F0F0F0] rounded-[2.5rem] max-w-[90rem] mx-auto">
      <Heading
        level={2}
        className="font-Monserrat text-[48px] font-black text-center mb-9"
      >
        BROWSE BY DRESS STYLE
      </Heading>
      <div className="grid grid-cols-3 grid-flow-dense auto-rows-[minmax(18.125rem,_auto)] gap-5">
        <div className="col-span-1 cursor-pointer  bg-[url(/images/image11.png)] rounded-[1.25rem] bg-no-repeat bg-cover relative">
          <Link
            to="/products"
            className="absolute top-0 left-0 bottom-0 right-0 block"
          >
            <Heading
              level={3}
              className="text-[36px] font-bold ml-9 mt-[1.5625rem]"
            >
              Casual
            </Heading>
          </Link>
        </div>
        <div className="col-span-2 cursor-pointer bg-[url(/images/image13.png)]  rounded-[1.25rem] bg-no-repeat bg-cover relative">
          <Link
            to="/products"
            className="absolute top-0 left-0 bottom-0 right-0 block"
          >
            <Heading
              level={3}
              className="text-[36px] font-bold ml-9 mt-[1.5625rem]"
            >
              Formal
            </Heading>
          </Link>
        </div>
        <div className="col-span-2 cursor-pointer bg-[url(/images/image12.png)] rounded-[1.25rem] bg-no-repeat bg-cover relative">
          <Link
            to="/products"
            className="absolute top-0 left-0 bottom-0 right-0 block"
          >
            <Heading
              level={3}
              className="text-[36px] font-bold ml-9 mt-[1.5625rem]"
            >
              Party
            </Heading>
          </Link>
        </div>
        <div className="col-span-1 cursor-pointer bg-[url(/images/image14.png)] rounded-[1.25rem] bg-no-repeat bg-cover relative">
          <Link
            to="/products"
            className="absolute top-0 left-0 bottom-0 right-0 block"
          >
            <Heading
              level={3}
              className="text-[36px] font-bold ml-9 mt-[1.5625rem]"
            >
              Gym
            </Heading>
          </Link>
        </div>
      </div>
    </div>
  );
};
