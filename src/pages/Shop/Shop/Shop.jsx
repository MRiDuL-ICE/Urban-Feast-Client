import React, { useEffect, useState } from "react";
import Cover from "../../shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../Hooks/UseMenu";
import Tabs from "../../shared/Tabs/Tabs";
import MenuCard from "../../shared/MenuCard/MenuCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Shop.css";

const Shop = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ">${index + 1}</span>`;
    },
  };
  const [menu] = useMenu();
  const category = [...new Set(menu.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);
  const paginatedMenu = filteredMenu.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="">
      <Cover
        img={shopImg}
        heading={"OUR SHOP"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <Tabs Tabs={category} setSelectedCategory={setSelectedCategory}></Tabs>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper my-10"
        onSlideChange={(swiper) => setCurrentPage(swiper.activeIndex)}
      >
        {Array.from({ length: totalPages }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="w-10/12 mx-auto">
              <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1">
                {paginatedMenu.map((item) => (
                  <MenuCard key={item._id} item={item}></MenuCard>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Shop;
