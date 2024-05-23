import React, { useEffect } from "react";
import RatingCard from "../layouts/RatingCard";
import { ratingsData } from "../utils/rating";
import Aos from "aos";
import "aos/dist/aos.css";
import ppl1 from "../assets/img/ppl1.jpg";
import ppl2 from "../assets/img/ppl2.jpg";
import ppl3 from "../assets/img/ppl3.jpg";
import ppl4 from "../assets/img/ppl4.jpg";
import ppl5 from "../assets/img/ppl5.jpg";
import ppl6 from "../assets/img/ppl6.jpg";

const images = [ppl1, ppl2, ppl3, ppl4, ppl5, ppl6];

const RatingList = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });

  return (
    <div data-aos="fade-right">
      <div>
        <h1 className="text-5xl font-bold text-center mb-10 text-darkBackground">
          Testimonial
        </h1>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 mb-10">
        {ratingsData.map((item, index) => (
          <RatingCard
            key={item.id}
            img={images[index]}
            title={item.title}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingList;
