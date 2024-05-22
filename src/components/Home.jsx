import React from "react";
import { useEffect } from "react";
import Button from "../layouts/Button";
import img from "../assets/img/heroo.jpg";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });

  const backgroundColor = `bg-brightColor`;

  return (
    <div
      className=" min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5"
      data-aos="fade-right"
    >
      <div className=" flex flex-col text-center lg:text-start gap-5">
        <h1 className=" font-semibold text-5xl leading-tight">
          Temukan Destinasi Terbaik
        </h1>
        <p>
          Dengan TravelWithRap Anda dapat merasakan pengalaman perjalanan baru
          dan tujuan wisata terbaik yang kami tawarkan
        </p>

        <div>
          <Link to="destination" spy={true} smooth={true} duration={500}>
            <Button title="Destinasi" backgroundColor={backgroundColor} />
          </Link>
        </div>
      </div>
      <div className=" mt-14 lg:mt-0 w-full lg:w-3/5">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
