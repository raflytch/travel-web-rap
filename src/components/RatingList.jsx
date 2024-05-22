import React from "react";
import { useEffect } from "react";
import RatingCard from "../layouts/RatingCard";
import { ratingsData } from "../utils/rating";
import Aos from "aos";
import "aos/dist/aos.css";

const RatingList = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });

  return (
    <div data-aos="fade-left">
      <div>
        <h1 className="text-5xl font-bold text-center mb-10 text-darkBackground">
          Testimonial
        </h1>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 mb-10">
        {ratingsData.map((item) => (
          <RatingCard
            key={item.id}
            img={item.img}
            title={item.title}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingList;
