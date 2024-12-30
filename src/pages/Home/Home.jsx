import React from "react";
import Banner from "./Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import CallUs from "./CallUs/CallUs";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
import UrbanFeast from "./UrbanFeast/UrbanFeast";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Urban Feast | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <UrbanFeast></UrbanFeast>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
