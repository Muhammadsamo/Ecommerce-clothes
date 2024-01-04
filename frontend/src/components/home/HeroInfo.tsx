import { Heading } from "../typography/Heading";

interface IProps {
  title: string;
  desc: string;
}

export const HeroInfo = ({ title, desc }: IProps) => {
  return (
    <div>
      <Heading level={3} className="text-[40px] font-bold">
        {title}
      </Heading>
      <p className="text-base leading-[1.375rem] text-[#00000099] ">{desc}</p>
    </div>
  );
};
