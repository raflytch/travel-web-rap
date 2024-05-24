import React from "react";
import Input from "../layouts/Input";
import Label from "../layouts/Label";
import Button from "../layouts/Button";
import { useNavigate } from "react-router-dom";

const backgroundColor = `bg-[#19A7CE]`;

const FormRegister = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();

    navigate("/404");
  };

  return (
    <form
      onSubmit={handleRegister}
      className="space-y-6 w-full mt-10 md:w-1/3 mx-auto p-5 rounded-xl"
    >
      <div>
        <Label input="email">Email</Label>
        <Input type="email" placeholder="Masukkan email" name="email" />
      </div>
      <div>
        <Label input="password">Password</Label>
        <Input
          type="password"
          placeholder="Masukkan password"
          name="password"
        />
      </div>
      <div>
        <Label input="confirmPassword">Konfirmasi Password</Label>
        <Input
          type="password"
          placeholder="Masukkan kembali password"
          name="confirmPassword"
        />
      </div>
      <div className="text-center mt-4 text-sm flex flex-row gap-1">
        <p>Sudah ada akun?</p>
        <span
          onClick={handleNavigateToLogin}
          className="text-blue-500 hover:font-semibold hover:transition duration-500 cursor-pointer"
        >
          Masuk
        </span>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Button title="Daftar" backgroundColor={backgroundColor} />
      </div>
    </form>
  );
};

export default FormRegister;
