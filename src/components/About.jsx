import React, { useEffect } from "react";
import img from "../assets/img/dest6.jpg";
import Button from "../layouts/Button";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });

  const backgroundColor = `bg-white`;
  return (
    <div
      className=" min-h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 my-10 bg-darkBackground gap-10"
      data-aos="fade-right"
    >
      <div className=" w-full lg:w-2/4 space-y-5">
        <h1 className=" font-semibold text-4xl text-white leading-tight">
          Di TravelWithRaf, kami siap menghadirkan pengalaman perjalanan terbaik
          yang pernah Anda alami!
        </h1>
        <p className=" text-[#bdbdbd] pb-5">
          Liburan impian Anda menanti, dan kami siap mewujudkannya. Dengan
          layanan unggul dan perhatian terhadap setiap detail, kami memastikan
          setiap momen perjalanan Anda menjadi kenangan tak terlupakan. Dari
          destinasi eksotis hingga akomodasi mewah, kami mengurus semuanya.
          Percayakan pada TravelWithRaf untuk menghadirkan pengalaman liburan
          terbaik dalam hidup Anda.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Kontak Sekarang" backgroundColor={backgroundColor} />
        </Link>
      </div>
      <div className=" w-full lg:w-2/4">
        <img className=" rounded-2xl" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
