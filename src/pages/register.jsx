import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormRegister from "../components/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayout title="Daftar">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
