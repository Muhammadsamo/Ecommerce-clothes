import { Rating, Star } from "@smastrom/react-rating";
import { Heading } from "./typography/Heading";

interface IProps {
  id?: number;
  rating: number;
  userName: string;
  userReview: string;
  verified: boolean;
}

export const Review = ({ rating, userName, userReview, verified }: IProps) => {
  return (
    <div className="py-7 px-8 rounded-[20px] bg-white min-w-[25rem] h-[15rem] border border-[#0000001A]">
      <Rating
        className="mb-4"
        style={{ maxWidth: "7.5rem" }}
        value={rating}
        readOnly
        itemStyles={{
          itemStrokeWidth: 0,
          activeFillColor: "#FFC633",
          itemShapes: Star,
        }}
      />
      <div className="flex gap-1 items-center mb-3">
        <Heading level={4} className="font-bold text-xl">
          {userName}
        </Heading>
        {verified && <img src="/svgs/greentickmark.svg" alt="" />}
      </div>
      <p className="text-base leading-[22px] text-[#00000099]">{userReview}</p>
    </div>
  );
};
