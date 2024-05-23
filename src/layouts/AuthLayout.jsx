import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AuthLayout = ({ title, children }) => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center p-5 bg-white"
      data-aos="fade-right"
    >
      <h1 className="flex justify-center items-center text-3xl font-bold text-center my-4 text-darkBackground">
        {title}
      </h1>
      <p className="text-center text-darkBackground text-sm font-medium mb-5">
        Selamat Datang, di <span className="font-bold">TravelWithRaf</span>{" "}
        mohon isikan data dirimu di bawah ini
      </p>
      {children}
    </div>
  );
};

export default AuthLayout;
