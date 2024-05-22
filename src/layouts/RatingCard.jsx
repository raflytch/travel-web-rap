// RatingCard.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const RatingCard = ({ img, title, name }) => {
  return (
    <div className="bg-slate-100 flex flex-col items-center justify-center w-full h-fit md:w-2/3 lg:w-1/4 lg:h-[300px] mx-2 md:mx-0 lg:mx-0 rounded-lg shadow-lg shadow-slate-200 hover:bg-slate-200 hover:transition duration-500">
      <div className="w-full flex flex-col items-center justify-center flex-wrap">
        <div className="w-full flex flex-row items-center justify-between py-5 px-5 gap-3">
          <div className="flex flex-row gap-3 items-center">
            <img
              src={img}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <p>{name}</p>
          </div>
          <div className="flex flex-row gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="text-justify mx-10 my-8">{title}</p>
      </div>
    </div>
  );
};

export default RatingCard;
