import React from "react";
import { useEffect } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });

  return (
    <div
      className="bg-darkBackground text-white rounded-t-lg"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">TravelWithRap</h1>
          <p className=" text-sm">
            Dengan TravelWithRap, Anda dapat menikmati pengalaman perjalanan
            yang segar dan menjelajahi destinasi wisata terbaik yang kami
            sediakan.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Destinasi</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Bali, Indonesia
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Sydney, Australia
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Istanbul, Turki
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Tentang</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Kontak
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Testimonial
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Ikuti Saya</h1>
          <nav className=" flex flex-col md:items-center gap-2">
            <a
              href="https://www.linkedin.com/in/raflyazizabdillah/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brightColor transition duration-500 cursor-pointer"
            >
              <FaLinkedin size={25} />
            </a>
            <BsInstagram
              size={25}
              className=" hover:text-brightColor transition-all cursor-pointer"
            />
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            &copy; 2024
            <span className=" text-brightColor"> Rafly Aziz Abdillah</span>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
