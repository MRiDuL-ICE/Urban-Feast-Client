import React from "react";
import Banner from "./Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import CallUs from "./CallUs/CallUs";
import ChefRecommends from "./ChefRecommends/ChefRecommends";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecommends></ChefRecommends>
    </div>
  );
};

export default Home;
