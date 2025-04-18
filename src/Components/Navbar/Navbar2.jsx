import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMessageSquare,
  FiBarChart2,
  FiFileText,
  FiPlusCircle,
} from "react-icons/fi";

function Navbar2() {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 h-16 bg-white border-b border-gray-100 flex justify-between items-center px-6 shadow-sm">
      {/* Left-aligned Brand */}
      <div
        className="font-bold text-3xl text-purple-600 cursor-pointer flex items-center  transition-all delay-100 hover:scale-105 active:scale-95  "
        onClick={() => navigate("/")}
      >
        <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          H A P P Y
        </span>
      </div>

      {/* Right-aligned Navigation */}
      <div className="flex items-center space-x-6">
        <button
          className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 cursor-pointer transition-all delay-100 hover:scale-105 active:scale-95"
          onClick={() => navigate("/dashboard")}
        >
          <FiBarChart2 className="text-xl" />
          <span className="text-sm font-medium">Dashboard</span>
        </button>

        <button
          className="flex items-center space-x-1 text-gray-600 hover:text-blue-500  cursor-pointer transition-all delay-100 hover:scale-105 active:scale-95"
          onClick={() => navigate("/report")}
        >
          <FiFileText className="text-xl" />
          <span className="text-sm font-medium">Report</span>
        </button>

        <button
          className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:shadow-md transition-all delay-100 cursor-pointer hover:scale-105 active:scale-95"
          onClick={() => navigate("/new-topic")}
        >
          <span>Drop Call</span>
        </button>

        <div
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center ml-2 
               cursor-pointer transition-all duration-200 ease-in-out 
               hover:scale-105 hover:ring-2 hover:ring-yellow-400 
               active:scale-95 focus:outline-none"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/60/000000/user--v1.png"
            alt="User"
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
