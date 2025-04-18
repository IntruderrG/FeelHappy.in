import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Navbar1() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-[12vh]  w-full  flex justify-between fixed z-5 bg-white">
      <div
        className="w-2xl font-bold text-5xl flex items-center p-4 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        H A P P Y
      </div>
      <div className="w-2xl flex justify-around items-center underline text-2xl  ">
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 "
          onClick={() => {
            if (location.pathname != "/") {
              navigate("/");
            } else {
              document
                .getElementById("top")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          home
        </div>
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 "
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          dashboard
        </div>
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 "
          onClick={() => {
            if (location.pathname != "/") {
              navigate("/");
            } else {
              document
                .getElementById("exploree")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          explore
        </div>
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 "
          onClick={() => {
            navigate("/about");
          }}
        >
          about
        </div>
        <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 "
          onClick={() => navigate("/contact-us")}
        >
          help
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

export default Navbar1;
