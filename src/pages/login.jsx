import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormLogin from "../components/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
