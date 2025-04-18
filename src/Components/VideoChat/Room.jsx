import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { io } from "socket.io-client";

const URL = "http://localhost:3000";

export const Room = ({ name, localAudioTrack, localVideoTrack }) => {
  const [searchParams] = useSearchParams();
  const [lobby, setLobby] = useState(true);
  const [socket, setSocket] = useState(null);
  const [sendingPc, setSendingPc] = useState(null);
  const [receivingPc, setReceivingPc] = useState(null);
  const [remoteMediaStream, setRemoteMediaStream] = useState(null);
  const [currentTopic, setCurrentTopic] = useState("Travel Experiences");
  const [timer, setTimer] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const remoteVideoRef = useRef(null);
  const localVideoRef = useRef(null);

  useEffect(() => {
    const newSocket = io(URL);
    setSocket(newSocket);

    newSocket.on("send-offer", async ({ roomId }) => {
      setLobby(false);
      const pc = new RTCPeerConnection();
      setSendingPc(pc);

      if (localVideoTrack) pc.addTrack(localVideoTrack);
      if (localAudioTrack) pc.addTrack(localAudioTrack);

      pc.onicecandidate = (e) => {
        if (e.candidate) {
          newSocket.emit("add-ice-candidate", {
            candidate: e.candidate,
            type: "sender",
            roomId,
          });
        }
      };

      pc.onnegotiationneeded = async () => {
        const sdp = await pc.createOffer();
        await pc.setLocalDescription(sdp);
        newSocket.emit("offer", { sdp, roomId });
      };
    });

    newSocket.on("offer", async ({ roomId, sdp: remoteSdp }) => {
      setLobby(false);
      const pc = new RTCPeerConnection();
      await pc.setRemoteDescription(remoteSdp);

      const sdp = await pc.createAnswer();
      await pc.setLocalDescription(sdp);

      const stream = new MediaStream();
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = stream;
      }
      setRemoteMediaStream(stream);
      setReceivingPc(pc);

      pc.ontrack = (e) => {
        if (e.streams && e.streams[0] && remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = e.streams[0];
        }
      };

      pc.onicecandidate = (e) => {
        if (e.candidate) {
          newSocket.emit("add-ice-candidate", {
            candidate: e.candidate,
            type: "receiver",
            roomId,
          });
        }
      };

      newSocket.emit("answer", { roomId, sdp });
    });

    return () => {
      newSocket.disconnect();
      if (sendingPc) sendingPc.close();
      if (receivingPc) receivingPc.close();
    };
  }, [name, localAudioTrack, localVideoTrack]);

  useEffect(() => {
    const interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (localVideoRef.current && localVideoTrack) {
      const stream = new MediaStream();
      stream.addTrack(localVideoTrack);
      localVideoRef.current.srcObject = stream;
    }
  }, [localVideoTrack]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Conversation Practice</h1>
          <div className="flex items-center space-x-6">
            <div className="bg-white/10 px-5 py-3 rounded-lg text-lg">
              <span className="font-mono">{formatTime(timer)}</span>
            </div>
            <div
              className={`w-4 h-4 rounded-full ${
                isSpeaking ? "bg-green-400 animate-pulse" : "bg-gray-400"
              }`}
            ></div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 rounded-full bg-purple-400 flex items-center justify-center text-4xl font-bold mb-4">
                {name.charAt(0).toUpperCase()}
              </div>
              <span className="font-medium text-2xl">{name}</span>
              <span className="text-purple-200 text-lg">You</span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-3 flex items-center justify-between">
                  Current Topic
                  <button
                    onClick={() =>
                      setCurrentTopic((prev) =>
                        prev === "Travel Experiences"
                          ? "Favorite Foods"
                          : "Travel Experiences"
                      )
                    }
                    className="ml-2 text-white/80 hover:text-white transform transition duration-150 cursor-pointer hover:scale-105 active:scale-95"
                    title="Shuffle Topic"
                  >
                    🔀
                  </button>
                </h3>
                <div className="bg-white/20 rounded-xl p-4 text-lg">
                  {currentTopic}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-3">Tips</h3>
                <ul className="space-y-3 text-base text-purple-100">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 text-lg">•</span>
                    Speak clearly and at a natural pace
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 text-lg">•</span>
                    Ask follow-up questions
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2 text-lg">•</span>
                    Try to use new vocabulary
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8 flex flex-col items-center justify-center">
            <div className="bg-black rounded-2xl overflow-hidden w-full aspect-video relative">
              {lobby && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                  <div className="text-center">
                    <div className="animate-pulse text-2xl mb-2">👋</div>
                    <p>Waiting to connect you with a partner...</p>
                  </div>
                </div>
              )}
              <video
                autoPlay
                ref={remoteVideoRef}
                className="w-full h-full object-cover"
                muted={false}
              />
            </div>

            <div className="bg-black rounded-2xl overflow-hidden w-full aspect-video relative max-w-2xl">
              <video
                autoPlay
                ref={localVideoRef}
                className="w-full h-full object-cover"
                muted
              />
              <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-lg text-base">
                You
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl space-y-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Conversation Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all text-lg cursor-pointer transform hover:scale-105 active:scale-95">
                  <span className="block text-3xl mb-2">🔄</span>
                  Change Topic
                </button>
                <button className="bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all text-lg cursor-pointer transform hover:scale-105 active:scale-95">
                  <span className="block text-3xl mb-2">📝</span>
                  Take Notes
                </button>
                <button className="bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all text-lg cursor-pointer transform hover:scale-105 active:scale-95">
                  <span className="block text-3xl mb-2">🔊</span>
                  Volume
                </button>
                <button className="bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all text-lg cursor-pointer transform hover:scale-105 active:scale-95">
                  <span className="block text-3xl mb-2">⏸️</span>
                  Pause
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4">Feedback</h3>
              <div className="bg-white/20 rounded-xl p-5 text-lg">
                <p>
                  Your speaking time: <span className="font-medium">45%</span>
                </p>
                <div className="w-full bg-gray-600 rounded-full h-3 mt-3">
                  <div
                    className="bg-purple-400 h-3 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
            </div>

            <button className="w-full bg-red-500 hover:bg-red-600 rounded-xl py-4 px-5 font-medium text-lg transition-all cursor-pointer transform hover:scale-105 active:scale-95">
              End Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
