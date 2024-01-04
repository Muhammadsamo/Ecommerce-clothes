import { Heading } from "@/components/typography/Heading";
import { SHLink } from "@/components/ui/SHLink";

const NotFound = () => {
  return (
    <>
      <Heading level={1} className="text-[2.625rem] text-center text-red-400">
        404 page not found
      </Heading>
      <Heading level={2}>
        Go back to <SHLink to={"/"}>homepage...</SHLink>
      </Heading>
    </>
  );
};

export default NotFound;
