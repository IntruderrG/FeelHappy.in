import React from "react";
import videoicon from "../../../Images/Icons/videoblack.png";
import muteicon from "../../../Images/Icons/muteblack.png";
import time from "../../../Images/Icons/timeicon.png";
import shuffle from "../../../Images/Icons/shuffle.png";
import end from "../../../Images/Icons/callend.png";
import dummymale from "../../../Images/DummyPictures/MaleDummypic.png";
import dummyfemale from "../../../Images/DummyPictures/FemaleDummypic.png";

function VideoChat() {
  return (
    <div className="h-[90vh] flex px-7 pb-12 pt-3 justify-between items-center">
      {/* Video Chat Section */}
      <div className="h-full w-[84%] rounded-lg flex flex-col justify-between">
        {/* Video Display Area */}
        <div className="h-[88%] w-full flex justify-between gap-6">
          <div className="relative bg-[radial-gradient(circle,_white,_#1a1a1a)] h-full w-[49%] rounded-xl p-4 shadow-lg border border-[#be81e9]">
            <img
              src={dummymale}
              alt="User 1"
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute top-2 left-4 bg-[#be81e9] text-white px-3 py-1 rounded-lg text-sm font-semibold">
              DummyUser01
            </div>
          </div>
          <div className="relative bg-[radial-gradient(circle,_white,_#1a1a1a)] h-full w-[49%] rounded-xl p-4 shadow-lg border border-[#be81e9]">
            <img
              src={dummyfemale}
              alt="User 2"
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute top-2 left-4 bg-[#be81e9] text-white px-3 py-1 rounded-lg text-sm font-semibold">
              DummyUser02
            </div>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="bg-gradient-to-r from-black via-[#6d32a8] to-black h-[10%] w-full rounded-lg flex justify-between items-center px-6 shadow-xl">
          {/* Video & Mute Buttons */}
          <div className="flex gap-4">
            <button className=" cursor-pointer h-12 w-13 bg-white rounded-lg flex justify-center items-center shadow-md transition-transform duration-200 hover:scale-110">
              <img src={videoicon} alt="Video" className="h-7" />
            </button>
            <button className=" cursor-pointer h-12 w-13 bg-white rounded-lg flex justify-center items-center shadow-md transition-transform duration-200 hover:scale-110">
              <img src={muteicon} alt="Mute" className="h-7" />
            </button>
          </div>

          {/* Essential Data */}
          <div className="px-6 py-2 bg-white text-gray-800 w-170 text-lg font-semibold rounded-lg shadow-md transition-all duration-200 hover:bg-gray-200">
            Essential Data
          </div>

          {/* Other Controls */}
          <div className="flex gap-4">
            <button className=" cursor-pointer h-12 w-13 bg-white rounded-lg flex justify-center items-center shadow-md transition-transform duration-200 hover:scale-110">
              <img src={time} alt="Time" className="h-7" />
            </button>
            <button className=" cursor-pointer h-12 w-13 bg-white rounded-lg flex justify-center items-center shadow-md transition-transform duration-200 hover:scale-110">
              <img src={shuffle} alt="Shuffle" className="h-6" />
            </button>
            <button className=" cursor-pointer h-12 w-30 bg-red-600 rounded-lg flex justify-center items-center  shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95">
              <img
                src={end}
                alt="End Call"
                className="h-8 rotate-45 scale-150"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="bg-[#be81e9] h-full w-[15%] rounded-xl flex flex-col p-3 justify-between shadow-xl">
        <div className="w-full bg-white text-gray-800 h-[10%] rounded-lg flex justify-center items-center font-bold text-lg shadow-md">
          Conversation Topics
        </div>
        <div className="w-full bg-white h-[75%] rounded-lg flex justify-center items-center overflow-y-auto text-gray-700 p-3 shadow-md">
          Enhance your fluency with real-time discussions! Improve your speech,
          gain confidence, and track progress effortlessly.
        </div>
        <button className=" cursor-pointer h-[10%] w-full bg-[#6915A5] text-white text-lg font-bold rounded-lg shadow-md transition-transform duration-200 hover:scale-105">
          New Topic
        </button>
      </div>
    </div>
  );
}

export default VideoChat;
