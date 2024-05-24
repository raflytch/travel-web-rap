import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">
        Maaf ya fiturnya atau halamannya tidak ada, karena hanya sampai sini
        saja.
      </p>
      <button
        onClick={handleGoHome}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default NotFoundPage;
