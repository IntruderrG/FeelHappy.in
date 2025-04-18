import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar3() {
  const navigate = useNavigate();
  return (
    <div className="h-26 m-1.5 flex justify-between">
      <div
        className="w-110 font-bold text-5xl flex items-center p-4 "
        onClick={() => {
          navigate("/");
        }}
      >
        H A P P Y
      </div>
      <div className="w-4xl flex justify-around items-center underline text-2xl">
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 "
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          dashboard
        </div>
        <div className="cursor-pointer transition-all duration-300 hover:scale-105">
          overview
        </div>
        <div className="cursor-pointer transition-all duration-300 hover:scale-105">
          achivements
        </div>
        <div className="cursor-pointer transition-all duration-300 hover:scale-105">
          practice
        </div>
        <div className="cursor-pointer transition-all duration-300 hover:scale-105">
          feedback
        </div>
        <div className="cursor-pointer transition-all duration-300 hover:scale-105">
          join
        </div>
      </div>
      <div className=" w-24 flex items-center justify-center transform-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
        <img
          src="https://img.icons8.com/ios-glyphs/60/user--v1.png"
          alt="User Icon"
        />
      </div>
    </div>
  );
}

export default Navbar3;
