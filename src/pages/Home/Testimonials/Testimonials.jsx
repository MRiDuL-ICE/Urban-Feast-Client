import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { FaStar, FaStarHalf, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://urban-feast-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`star-${i}`} className="text-yellow-500 w-5 h-5" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalf key="half-star" className="text-yellow-500 w-5 h-5" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <FaStar key={`empty-star-${i}`} className="text-gray-300 w-5 h-5" />
      );
    }

    return stars;
  };

  return (
    <div className="w-11/12 mx-auto overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <SectionTitle
          heading={"TESTIMONIALS"}
          subHeading={"---What Our Clients Say---"}
        ></SectionTitle>
        <motion.div
          className="flex gap-8 px-4 w-11/12 mx-auto "
          animate={{
            x: [-1400, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[600px] shadow-xl bg-white border border-purple-100 rounded-sm p-8 relative"
            >
              <div className="flex flex-col items-center text-center mb-8">
                <div className="flex justify-center mb-4">
                  {renderStars(review.rating)}
                </div>
                <div className="text-4xl text-black mb-6">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
                  {review.details}
                </p>
                <h3 className="text-yellow-500 font-medium tracking-wide">
                  {review.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
