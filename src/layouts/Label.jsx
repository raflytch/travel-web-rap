import React, { Children } from "react";

const Label = ({ input, children }) => {
  return (
    <label
      htmlFor={input}
      className="font-semibold text-lg pb-2 block text-left text-darkBackground"
    >
      {children}
    </label>
  );
};

export default Label;
