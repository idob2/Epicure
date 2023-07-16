// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import LuminaImg from "../../assets/resturantImages/Lumina.svg";
import ResturantCard from "../ResturantCard/ResturantCard";
interface PopularSwiperProps {
  resturants: { imgUrl: string; name: string }[];
}
const PopularSwiper: React.FC<PopularSwiperProps> = ({ resturants }) => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={1.5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      {resturants.map((resturant) => (
        <SwiperSlide key={resturant.imgUrl}>
          <ResturantCard
            // key={resturant.imgUrl}
            imgUrl={LuminaImg}
            name={resturant.name}
          ></ResturantCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PopularSwiper;
