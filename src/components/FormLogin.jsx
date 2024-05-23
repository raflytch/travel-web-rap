// FormLogin.jsx
import React from "react";
import Input from "../layouts/Input";
import Label from "../layouts/Label";
import Button from "../layouts/Button";

const backgroundColor = `bg-[#068FFF]`;

const FormLogin = () => {
  return (
    <form className="space-y-6 w-full mt-10 md:w-1/3 mx-auto p-5 rounded-xl">
      <div>
        <Label input="email">Email</Label>
        <Input type="email" placeholder="Enter your email" name="email" />
      </div>
      <div>
        <Label input="password">Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
        />
      </div>
      <div className="text-center mt-4 text-sm flex flex-row gap-1">
        <p>Tidak ada akun?</p>
        <a href="#" className="text-blue-500 hover:font-semibold">
          Daftar
        </a>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Button title="Login" backgroundColor={backgroundColor} />
      </div>
    </form>
  );
};

export default FormLogin;
