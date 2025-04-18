import React from "react";
import character2 from "../../../Images/3-D Characters/Character_5_Standing.png";
import character3 from "../../../Images/3-D Characters/Character_3_Standing.png";
import character4 from "../../../Images/3-D Characters/Character_1_Standing.png";
function Explore() {
  return (
    <>
      <div
        className="h-[100vh] w-full pt-[12vh] flex justify-center items-center bg-gradient-to-r from-[#e3d0ff] to-[#f7f1ff]"
        id="exploree"
      >
        <div className="h-full w-[90%] flex justify-between items-center">
          {/* Left Image Section */}
          <div className="w-[50%] h-full flex justify-center items-center overflow-hidden">
            <img
              src={character2}
              className="scale-320 translate-y-120 object-contain drop-shadow-lg"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-[50%] h-auto bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center items-start gap-6 border-l-4 border-[#be81e9]">
            <p className="text-5xl font-bold text-[#6d32a8] leading-tight">
              Think You're Good at Writing? <br /> But What About Fluency?
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Writing in a language may seem easy, but when it comes to{" "}
              <b>speaking fluently</b>, it's a whole different challenge!{" "}
              <b>Our Live Video Call Connect</b> lets you engage with fellow
              learners, helping you master fluency in a fun and interactive way.{" "}
              <b>
                Real conversations, zero hesitation—become a confident speaker
                today!
              </b>
            </p>
            <a
              href="/videochat"
              className="h-[50px] w-[190px] bg-[#be81e9] text-white font-semibold text-lg flex items-center justify-center rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#a36eda]"
            >
              Try It Now
            </a>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-[100vh] w-full pt-[12vh] flex justify-center items-center bg-white">
        <div className="h-full w-[90%] flex justify-between items-center">
          {/* Left Content Section */}
          <div className="w-[50%] h-auto bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center items-start gap-6 border-l-4 border-[#be81e9]">
            <p className="text-5xl font-bold text-[#6d32a8] leading-tight">
              No Time for Video Calls? <br /> We've Got You Covered!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Busy schedule? No worries! <b>We’ve solved this for you.</b> Now,
              you can connect with fellow learners via <b>audio chat</b>
              and improve your fluency effortlessly. Speak confidently anytime,
              anywhere—<b>no video required!</b>
            </p>
            <a
              href="/audiochat"
              className="h-[50px] w-[190px] bg-[#be81e9] text-white font-semibold text-lg flex items-center justify-center rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#a36eda]"
            >
              Try It Now
            </a>
          </div>

          {/* Right Image Section */}
          <div className="w-[50%] h-full flex justify-center items-center overflow-hidden">
            <img
              src={character3}
              className="scale-320 translate-y-120 object-contain drop-shadow-lg "
            />
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-full pt-[12vh] flex justify-center items-center bg-gradient-to-r from-[#e3d0ff] to-[#f7f1ff]">
        <div className="h-full w-[90%] flex justify-between items-center">
          {/* Left Image Section */}
          <div className="w-[50%] h-full flex justify-center items-center overflow-hidden">
            <img
              src={character4}
              className="scale-320 translate-y-120 object-contain drop-shadow-lg"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-[50%] h-auto bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center items-start gap-6 border-r-4 border-[#be81e9]">
            <p className="text-5xl font-bold text-[#6d32a8] leading-tight">
              Wait… There's More! Your Personalized Learning Dashboard Awaits
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Learning doesn’t stop at just conversations!{" "}
              <b>Our Smart Dashboard</b>
              helps you track your fluency progress, analyze strengths and
              weaknesses, and provides **personalized suggestions** to refine
              your speaking skills. With AI-powered insights, real-time
              performance metrics, and goal-setting tools, your journey to
              fluency is structured, efficient, and engaging.
              <b>Unlock new ways to learn and improve—effortlessly!</b>
            </p>
            <a
              href="/dashboard"
              className="h-[50px] w-[190px] bg-[#be81e9] text-white font-semibold text-lg flex items-center justify-center rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#a36eda]"
            >
              Explore Dashboard
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
