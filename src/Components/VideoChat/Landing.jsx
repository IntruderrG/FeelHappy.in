import { useEffect, useRef, useState } from "react";
import { Room } from "./Room";

export const LandingVedio = () => {
  const [name, setName] = useState("");
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const videoRef = useRef(null);
  const [joined, setJoined] = useState(false);

  const getCam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      const audioTrack = stream.getAudioTracks()[0];
      const videoTrack = stream.getVideoTracks()[0];
      setLocalAudioTrack(audioTrack);
      setLocalVideoTrack(videoTrack);
      if (videoRef.current) {
        videoRef.current.srcObject = new MediaStream([videoTrack]);
        videoRef.current.play();
      }
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  useEffect(() => {
    getCam();
    return () => {
      if (localAudioTrack) localAudioTrack.stop();
      if (localVideoTrack) localVideoTrack.stop();
    };
  }, []);

  if (!joined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold">Conversation Topics</h1>
            <p className="text-xl text-purple-200 mt-2">
              Enhance your fluency with real-time discussions!
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Video preview and join form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
              <div className="mb-6 rounded-xl overflow-hidden bg-black aspect-video">
                <video
                  autoPlay
                  ref={videoRef}
                  muted
                  className="w-full h-full object-cover"
                ></video>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  onClick={() => name.trim() && setJoined(true)}
                  disabled={!name.trim()}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all delay-100 ${
                    name.trim()
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-500 cursor-not-allowed"
                  } cursor-pointer hover:scale-105 active:scale-95`}
                >
                  Join Conversation
                </button>
              </div>
            </div>

            {/* Right side - Features and user avatars */}
            <div className="space-y-8">
              <div className="flex space-x-6">
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-purple-400 flex items-center justify-center text-2xl font-bold mb-3">
                      DU
                    </div>
                    <span className="font-medium">DummyUser01</span>
                  </div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-pink-400 flex items-center justify-center text-2xl font-bold mb-3">
                      DU
                    </div>
                    <span className="font-medium">DummyUser02</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <h2 className="text-2xl font-semibold mb-4">
                  Improve Your Skills
                </h2>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    Improve your speech and pronunciation
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    Gain confidence in conversations
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    Track your progress effortlessly
                  </li>
                </ul>
              </div>

              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-xl transition-all flex items-center justify-between">
                <span className="font-semibold">New Topic</span>
                <span className="text-2xl">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Room
      name={name}
      localAudioTrack={localAudioTrack}
      localVideoTrack={localVideoTrack}
    />
  );
};
