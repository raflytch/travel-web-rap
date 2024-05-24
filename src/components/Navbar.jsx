import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const backgroundColor = `bg-white`;

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="sticky top-0 w-full z-50" data-aos="fade-down">
      <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white">
        <div className=" flex items-center">
          <ScrollLink to="/" spy={true} smooth={true} duration={500}>
            <h1 className=" font-semibold text-xl cursor-pointer">
              TravelWithRap
            </h1>
          </ScrollLink>
        </div>
        <nav className="hidden lg:flex flex-row items-center gap-6">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Beranda
          </ScrollLink>
          <ScrollLink
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Fitur
          </ScrollLink>
          <ScrollLink
            to="destination"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Destinasi
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Tentang
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Kontak
          </ScrollLink>
        </nav>

        <div className="hidden lg:flex flex-row items-center gap-4">
          <h1
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={handleNavigateToRegister}
          >
            Daftar
          </h1>
          <Button
            title="Masuk"
            backgroundColor={backgroundColor}
            onClick={handleNavigateToLogin}
          />
        </div>

        <div
          className=" lg:hidden flex items-center p-2"
          onClick={handleChange}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          Beranda
        </ScrollLink>
        <ScrollLink
          to="features"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          Fitur
        </ScrollLink>
        <ScrollLink
          to="destination"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          Destinasi
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          Tentang
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-brightColor transition-all cursor-pointer"
        >
          Kontak
        </ScrollLink>

        <div className="flex flex-col lg:hidden lg:flex-row items-center gap-4">
          <h1
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={handleNavigateToRegister}
          >
            Daftar
          </h1>
          <Button
            title="Masuk"
            backgroundColor={backgroundColor}
            onClick={handleNavigateToLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
