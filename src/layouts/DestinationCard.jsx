import React from "react";
import Button from "../layouts/Button";

const DestinationCard = ({ img, title, text }) => {
  const backgroundColor = `bg-brightColor`;
  return (
    <div className="bg-[#F2F2F2] flex flex-col justify-between w-full h-[550px] rounded-lg  lg:w-1/4 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <img
        className=" rounded-t-lg h-64 w-full object-center lg:h-80 object-cover"
        src={img}
        alt="img"
      />

      <div className=" bg-[#F2F2F2] p-5 space-y-3 rounded-b-lg">
        <h2 className=" text-xl font-medium text-center">{title}</h2>
        <p className=" text-sm text-center">{text}</p>
        <div className=" flex flex-row justify-center">
          <Button title="Pesan Tiket" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
