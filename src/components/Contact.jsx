import React from "react";
import { useEffect } from "react";
import img from "../assets/img/dest8.jpg";
import Button from "../layouts/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });
  const backgroundColor = `bg-[#068FFF]`;
  return (
    <div
      className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10"
      data-aos="fade-up"
    >
      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <form className=" w-full lg:w-2/5 space-y-5 bg-[#F2F2F2] p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center my-4">Kontak</h1>
          <div className=" flex flex-col">
            <label htmlFor="userName">Nama Lengkap</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Masukkan Nama Lengkap Anda"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Masukkan Email Anda"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userMessage">Kritik dan Saran</label>
            <textarea
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all resize-none h-52"
              name="userMessage"
              id="userMessage"
              cols="30"
              rows="3"
              placeholder="Masukkan Kritik dan Saran"
            ></textarea>
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Kirim" backgroundColor={backgroundColor} />
          </div>
        </form>
        <div className=" flex flex-col items-center w-full lg:w-2/4 my-5">
          <img className=" rounded-lg" src={img} alt="" />
          <p className=" text-center text-sm pt-4 text-[#898888]">
            Kami sangat ingin mendengar pendapat Anda! Jika Anda memiliki
            pertanyaan, saran, atau memerlukan bantuan dengan rencana perjalanan
            Anda, jangan ragu untuk menghubungi kami. Tim kami selalu siap
            membantu Anda di setiap tahap. Cukup isi formulir di bawah ini, dan
            kami akan segera menghubungi Anda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
