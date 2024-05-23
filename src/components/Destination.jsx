import React, { useEffect } from "react";
import { destinations } from "../utils/data";
import DestinationCard from "../layouts/DestinationCard";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/img/dest1.jpg";
import img2 from "../assets/img/dest2.jpg";
import img3 from "../assets/img/dest3.jpg";
import img4 from "../assets/img/dest4.jpg";
import img5 from "../assets/img/dest5.webp";
import img6 from "../assets/img/dest6.jpg";
import img7 from "../assets/img/dest7.jpg";
import img8 from "../assets/img/dest8.jpg";
import img9 from "../assets/img/dest9.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Destination = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center md:mx-32 mx-5"
      data-aos="fade-right"
    >
      <h1 className="font-medium text-center text-4xl lg:mt-0 mt-16">
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
