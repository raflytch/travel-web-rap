import React, { useEffect } from "react";
import { destinations } from "../utils/data";
import DestinationCard from "../layouts/DestinationCard";
import Aos from "aos";
import "aos/dist/aos.css";

const images = [
  "./src/assets/img/dest1.jpg",
  "./src/assets/img/dest2.jpg",
  "./src/assets/img/dest3.jpg",
  "./src/assets/img/dest4.jpg",
  "./src/assets/img/dest5.webp",
  "./src/assets/img/dest6.jpg",
  "./src/assets/img/dest7.jpg",
  "./src/assets/img/dest8.jpg",
  "./src/assets/img/dest9.webp",
];

const Destination = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });

  return (
    <div
      className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5"
      data-aos="fade-left"
    >
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
        Destinasi Terpopuler
      </h1>

      <div className="flex flex-col lg:flex-row justify-center lg:flex-wrap gap-5 mt-14">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            img={images[index]}
            title={destination.title}
            text={destination.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Destination;
