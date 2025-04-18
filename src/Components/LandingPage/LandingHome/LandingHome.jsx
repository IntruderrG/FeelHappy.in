import React from "react";
import { useNavigate } from "react-router-dom";
import character_2 from "./Images/Characters (with shadow)/Character_2_Standing.png";
import Explore from "../../Explore/Explore";
function LandingHome() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" h-[100vh] pl-7 pt-[11vh] flex" id="top relative">
        <div className="w-3xl flex items-center">
          <div className="w-3xl flex flex-col  gap-y-20 pb-12">
            <div className="w-full">
              <p className="text-7xl">
                Still Not <span className="text-9xl">Fluent??</span>
              </p>
              <p className="text-5xl font-light text-gray-700">
                Don't worry, we are here
              </p>
            </div>
            <div className="flex justify-between pr-14 ">
              <button
                className="h-15 w-85 bg-[#be81e9] rounded-lg text-3xl font-bold drop-shadow-2xl text-white transition-all duration-300 hover:scale-105 hover:bg-purple-600 hover:shadow-[5px_7px_10px_rgba(0,0,0,0.5)] active:scale-95 cursor-pointer"
                onClick={() => navigate("/videochat")}
              >
                Video Call
              </button>
              <button
                className="h-15 w-85 bg-[#be81e9] rounded-lg text-3xl font-bold drop-shadow-2xl text-white transition-all duration-300 hover:scale-105 hover:bg-purple-600 hover:shadow-[5px_7px_10px_rgba(0,0,0,0.5)] active:scale-95 cursor-pointer"
                onClick={() => navigate("/audiochat")}
              >
                Audio Call
              </button>
            </div>
          </div>
        </div>
        <div className="w-3xl overflow-hidden">
          <img
            className="scale-400 translate-y-180 translate-x-20"
            src={character_2}
            alt=""
          />
        </div>
      </div>
      <Explore />
    </>
  );
}

export default LandingHome;
