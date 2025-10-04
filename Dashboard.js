import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome 🎉</h1>
        <p className="mb-6">You are logged in successfully.</p>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
