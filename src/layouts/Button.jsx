import React from "react";

const Button = ({ title, backgroundColor, onClick }) => {
  return (
    <div>
      <button
        className={` ${backgroundColor} text-black rounded-full px-8 py-2 font-medium hover:bg-[#19A7CE] hover:text-white transition duration-500`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
