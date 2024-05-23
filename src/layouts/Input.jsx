import React from "react";

const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24)_0px_3px_8px] transition-all w-full bg-[#F2F2F2]"
      placeholder={placeholder}
      name={name}
      required
    />
  );
};

export default Input;
