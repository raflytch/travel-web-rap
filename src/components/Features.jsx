import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import img2 from "../assets/img/dest3.jpg";

const Features = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });

  return (
    <div
      className=" min-h-screen flex flex-col lg:flex-row items-center md:mx-32 mx-5 gap-14"
      data-aos="fade-right"
    >
      <div className=" w-full lg:w-2/4 flex flex-col justify-center">
        <div className=" space-y-4">
          <h1 className=" text-3xl font-bold text-center md:text-start leading-tight">
            Siapkan diri Anda untuk bertualang, siapkan diri Anda untuk
            merasakan pengalaman baru!
          </h1>
          <p>
            Nikmati Pengalaman Liburan Terbaik dengan TravelWithRaf! Kami
            berkomitmen untuk menyusun destinasi paling baru dan luar biasa dari
            seluruh dunia, menjamin Anda selalu mendapatkan pengalaman
            perjalanan yang tak tertandingi.
          </p>
        </div>

        <div className="w-full lg:w-4/5 mt-10 lg:ml-14">
          <img
            className=" rounded-xl shadow-lg hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:transition hover:duration-500"
            src={img2}
            alt="img"
          />
        </div>
      </div>
      <div className=" w-full lg:w-2/4 space-y-10">
        <div className=" flex flex-row gap-6 items-center">
          <div className=" flex flex-row items-center w-24">
            <MdMiscellaneousServices
              size={66}
              className="text-darkBackground cursor-pointer hover:text-brightColor hover:transition hover:duration-500"
            />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">Pelayanan yang ramah</h1>
            <p className=" text-[#898888]">
              Kami berkomitmen untuk memberikan layanan yang sangat baik dan
              bersahabat demi kepuasan pelanggan kami.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-6 items-center">
          <div className=" flex flex-row items-center w-24">
            <FaUserFriends
              size={66}
              className="text-darkBackground cursor-pointer hover:text-brightColor hover:transition hover:duration-500"
            />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">
              Pengalaman yang tak terlupakan
            </h1>
            <p className=" text-[#898888]">
              Kami akan menciptakan pengalaman yang luar biasa dan tak
              terlupakan bagi pelanggan kami.
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-6 items-center">
          <div className="flex flex-row items-center w-24">
            <FaWallet
              size={66}
              className="text-darkBackground cursor-pointer hover:text-brightColor hover:transition hover:duration-500"
            />
          </div>
          <div className=" space-y-3">
            <h1 className=" font-semibold text-xl">Harga terjangkau</h1>
            <p className=" text-[#898888]">
              Kami akan menawarkan harga yang sangat kompetitif dan terjangkau
              untuk pelanggan kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
