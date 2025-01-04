import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import bannerImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import InfoCards from "./InfoCards/InfoCards";
import phoneIcon from "../../assets/contact/telephone-100.png";
import locationIcon from "../../assets/contact/location-100.png";
import clockIcon from "../../assets/contact/clock-500.png";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Urban Feast | Contact Us</title>
      </Helmet>
      <Cover
        img={bannerImg}
        heading={"Contact Us"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        heading={"OUR LOCATION"}
        subHeading={"---Visit Us---"}
      ></SectionTitle>
      <div className="w-10/12 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-8">
        <InfoCards
          heading={"phone"}
          subHeading={"+880 1303579271"}
          icon={phoneIcon}
        ></InfoCards>
        <InfoCards
          heading={"ADDRESS"}
          subHeading={"Rajshahi, Bangladesh"}
          icon={locationIcon}
        ></InfoCards>
        <InfoCards
          heading={"WORKING HOURS"}
          subHeading={`Mon - sun: 08:00 - 22:00`}
          icon={clockIcon}
        ></InfoCards>
      </div>
    </div>
  );
};

export default ContactUs;
