import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="lg:w-8/12 md:w-9/12 w-10/12 mx-auto my-16">
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="w-1/5">
          <img className="w-full" src={slide1} alt="" />
          <h2 className="text-4xl text-center text-[#FFFFFF] uppercase -mt-16 logo">
            Salad
          </h2>
        </SwiperSlide>
        <SwiperSlide className="w-1/5">
          <img className="w-full" src={slide2} alt="" />
          <h2 className="text-4xl text-center text-[#FFFFFF] uppercase -mt-16 logo">
            Pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide className="w-1/5">
          <img className="w-full" src={slide3} alt="" />
          <h2 className="text-4xl text-center text-[#FFFFFF] uppercase -mt-16 logo">
            Soup
          </h2>
        </SwiperSlide>
        <SwiperSlide className="w-1/5">
          <img className="w-full" src={slide4} alt="" />
          <h2 className="text-4xl text-center text-[#FFFFFF] uppercase -mt-16 logo">
            Pestry
          </h2>
        </SwiperSlide>
        <SwiperSlide className="w-1/5">
          <img className="w-full" src={slide5} alt="" />
          <h2 className="text-4xl text-center text-[#FFFFFF] uppercase -translate-y-16 logo">
            Salad
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
