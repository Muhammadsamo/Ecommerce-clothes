import { Review } from "../Review";
import { userReviews } from "@/data";
import { Heading } from "../typography/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const ReviewSection = () => {
  return (
    <div className="mt-20 max-w-[90rem] mx-auto">
      <Heading
        level={2}
        className="uppercase text-[3rem] font-black font-Monserrat mb-10"
      >
        Our Happy Customers
      </Heading>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {userReviews.map((r) => {
          return (
            <SwiperSlide>
              <Review key={r.id} {...r} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
