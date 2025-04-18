import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import muteicon from "../../../Images/Icons/muteblack.png";
import time from "../../../Images/Icons/timeicon.png";
import shuffle from "../../../Images/Icons/shuffle.png";
import shufflewhite from "../../../Images/Icons/shufflewhite.png";
import expand from "../../../Images/Icons/expand.png";
import end from "../../../Images/Icons/callend.png";
import audiochar from "../../../Images/3-D Characters/audio model.png";
import mic from "../../../Images/3-D Characters/mic.png";

function AudioChat() {
  // const show = () => {
  //   return <div className="text-6xl">HI{popup.toString()}</div>;
  // };//Doing toString is nessesay as the canvas can only show the string or number elements

  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const handleClickPopup = () => {
    console.log("True Triggered");
    setPopup((prevState) => !prevState);
  };
  const popUpContent = () => {
    return (
      <div className="h-[95%] w-[90%] bg-[#f4dfff] rounded-lg flex flex-col items-center  p-4 shadow-[-5px_8px_5px_rgba(0,0,0,0.3),-8px_12px_10px_rgba(0,0,0,0.3)] overflow-y-scroll hide-scrollbar">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          voluptatem vel nesciunt saepe. Ex, laudantium ullam? Distinctio,
          obcaecati fugit. Necessitatibus, corporis? Numquam sapiente minus nemo
          beatae rerum provident, amet dolores. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Esse, totam? Nam voluptas excepturi
          minus, laboriosam necessitatibus iure eius iste inventore reiciendis.
          Soluta iste enim minima eos dolore doloremque repellendus
          necessitatibus! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. A eligendi ab dolore? Saepe provident fugiat deleniti amet
          veritatis quisquam, debitis ad aperiam dolorum error, tempora
          accusamus? Quas tenetur adipisci officia. Quidem tempore maxime
          eveniet voluptatem, unde ab autem vel asperiores distinctio sapiente!
          sentium laudantium dolorum, maxime unde at quibusdam optio illo
          commodi qui. Ex debitis unde sit ea, optio hic harum repellendus
          provident explicabo dignissimos molestias reiciendis totam sed quasi,
          necessitatibus rerum voluptate ut mollitia voluptates minima veritatis
          fugit aliquam odit. Architecto, voluptatem. Temporibus vel dolorem
          repellendus similique hic nemo. Corrupti molestiae rem nulla
          aspernatur ab voluptatem velit expedita minima obcaecati repudiandae
          dolores officia quae odio, saepe modi sunt perspiciatis autem
          consequuntur voluptates? Blanditiis cum commodi aut tempore ab! Autem
          esse animi architecto a distinctio quam, nemo labore aspernatur ea?
          Voluptas eligendi est, qui voluptatem nihil veniam expedita saepe
          deserunt, repellat facere aliquid! Sit totam modi molestias voluptate
          a possimus voluptatibus enim! In quaerat tempora doloremque aliquam
          molestias. Necessitatibus itaque aperiam dicta exercitationem? Nobis
          rerum, ab temporibus repudiandae sit quas a ullam eum! Consequuntur
          aspernatur aut aliquam porro tenetur doloremque consectetur explicabo
          ipsa, laudantium commodi facilis. Inventore, asperiores? Vitae, alias
          facere perferendis, illo beatae mollitia nisi aliquam necessitatibus
          quaerat nobis illum! Dolore, placeat? Recusandae, non tempora autem
          sint est maxime soluta repellendus quod, quasi in fuga dignissimos
          ducimus. Minus aliquid iusto recusandae, necessitatibus, quaerat
          molestias cumque maxime officia amet illo, nobis cupiditate
          perspiciatis! Nulla praesentium atque dicta alias veritatis obcaecati
          magnam sed dolorum odit ab labore accusamus perferendis, commodi earum
          rem facere minima, nesciunt inventore eum quos dolore amet iusto
          distinctio at! Amet! Ratione, illum ut. Maxime est pariatur numquam
          dolorum harum incidunt necessitatibus dolore! Rem similique itaque
          tempora incidunt? Iste placeat velit molestias blanditiis doloribus.
          Quod reiciendis ut culpa. Itaque, nisi tempora? Fuga libero, iste odit
          magni quam, sit reprehenderit voluptatem est consequuntur nemo tenetur
          ipsa corrupti. Dolorum, dolor, maxime iure, voluptatem obcaecati autem
          minus eligendi illo harum omnis et doloremque est? Necessitatibus
          animi perferendis blanditiis earum officia voluptatibus culpa
          consequatur cumque veritatis ipsam laboriosam voluptatem, provident
          tempora fuga! Voluptatibus, libero. Laboriosam, fugit! Minus sapiente
          deleniti soluta molestiae corporis obcaecati illum magni! Alias quae
          repellendus suscipit odit totam voluptates sapiente repudiandae nulla
          voluptatum, harum ducimus molestiae laudantium accusantium debitis
          voluptas? Vel vero eveniet maxime quisquam similique nisi. Quaerat
          dolores sapiente neque sed. Fugiat perspiciatis et laudantium sapiente
          quaerat libero, dolores porro? Culpa deleniti nostrum magnam! Expedita
          amet praesentium sequi dicta mollitia cupiditate placeat doloribus
          rerum commodi reprehenderit perferendis minima, aperiam deserunt
          quaerat? Placeat error sapiente temporibus tempora quo, ratione, vel a
          dignissimos assumenda molestiae quidem possimus, alias magni
          laudantium quam quasi iure quisquam illo fugiat? Distinctio doloribus,
          reprehenderit quas rem consequuntur recusandae? Architecto delectus
          voluptatem doloribus cum eos accusantium, id fuga iure mollitia quidem
          nisi voluptates vel hic officia esse harum rerum quam quae molestias
          quasi ab, nobis rem culpa ad! Excepturi! Dolorem voluptate, natus
          optio voluptatem eius beatae eaque quo modi doloremque provident
          nesciunt quidem at explicabo eligendi qui alias non consequuntur nam
          possimus itaque nostrum doloribus vero mollitia in? Aut. Minus
          voluptatem at modi consequuntur distinctio maiores velit vitae quod
          laudantium placeat non earum illo molestiae sapiente quisquam natus
          nihil reiciendis voluptates iure, consectetur repellendus? Officiis
          doloremque veniam atque libero! Ex, rerum recusandae soluta
          perspiciatis similique placeat illum vitae, mollitia minus libero
          facilis consequatur, repudiandae incidunt labore. Aspernatur, aliquam
          itaque suscipit culpa architecto, rerum id consequuntur sunt dolor, at
          dignissimos. Deleniti architecto fuga, possimus optio consequatur,
          odio praesentium nihil nisi fugit ex facilis sequi adipisci quia
          voluptatum aliquam, neque sapiente dignissimos! Quis necessitatibus
          eveniet, deserunt eum praesentium sit temporibus voluptatum.
          Architecto eius nam ipsum, dolores dolore quos facere necessitatibus
          dicta saepe adipisci dolor tempore consectetur odit obcaecati amet
          delectus! Tempora architecto quisquam eaque laborum odio autem
          quaerat, rem ad expedita? Est distinctio ex deserunt laudantium, dolor
          expedita earum, delectus sapiente accusamus ipsa officia corrupti
          molestias? Illum odit atque ipsum dolor possimus corrupti, eligendi
          nihil tempore pariatur praesentium, laudantium commodi aperiam.
          Explicabo, repellat accusamus eveniet neque recusandae maxime quia
          dignissimos nobis veniam cum, omnis illum. Rem saepe unde maxime
          obcaecati eius quasi perspiciatis earum impedit, libero at modi cum,
          eum illum.
        </p>
      </div>
    );
  };
  return (
    <>
      <div className="h-[100vh] w-full flex items-center justify-center fixed z-[-10] pt-20 pl-5">
        <div className="sm:w-60 sm:h-60 md:w-90 md:h-90 lg:w-110 lg:h-110 bg-gray-900 rounded-full flex items-center justify-center">
          <div className="sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-gray-950 rounded-full"></div>
        </div>
      </div>
      <div className="h-[100vh] w-full bg-transparent flex">
        <div className="h-[100vh] w-[25%]  p-1 flex flex-col">
          <div className="h-[13%] w-full  p-1 flex items-center justify-center">
            <div
              className="h-[70%] w-full  flex items-center pl-1 font-bold text-5xl cursor-pointer"
              onClick={() => navigate("/")}
            >
              H A P P Y
            </div>
          </div>
          <div className="h-[87%] w-full flex items-center justify-center pb-8">
            {popup && <>{popUpContent()}</>}
          </div>
        </div>
        <div className="h-[100vh] w-[50%]  p-1 flex flex-col justify-between relative">
          <div className="h-[85%] w-full flex items-center justify-center overflow-hidden">
            <img src={audiochar} alt="" />
          </div>
          <div className="h-[14.5%] w-full flex pt-4 justify-around  pr-4 pl-4">
            <div
              className="bg-[#872F87] h-[55%] w-[8%] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              onClick={handleClickPopup}
            >
              <img src={expand} alt="" className="scale-80" />
            </div>
            <div className="bg-[#872F87] h-[55%] w-[70%] rounded-lg flex items-center justify-center text-white text-2xl  ">
              AI Tutor is more effective than Human Tutor
            </div>
            <div className="bg-[#872F87] h-[55%] w-[8%] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
              <img src={shufflewhite} alt="" className="scale-80" />
            </div>
          </div>
          <div className="absolute h-[50%] w-[40%]  top-0 overflow-hidden">
            <img
              src={mic}
              alt=""
              className="scale-150 -translate-x-12  -translate-y-2"
            />
          </div>
        </div>
        <div className="h-[100vh] w-[25%]  p-1">
          <div className="h-[13%] w-full flex items-center justify-center p-1">
            <div className="h-[70%] w-full p-1 flex justify-between">
              <div className="w-[79%] h-full flex justify-end text-2xl space-x-5 items-center p-2">
                <a
                  href="/dashboard"
                  className="underline cursor-pointer  transition-all duration-300 hover:scale-105"
                >
                  dashboard
                </a>
                <a
                  href="/report"
                  className="underline cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  report
                </a>
              </div>
              <div className="w-[19%] h-full flex items-center justify-center">
                <img
                  src="https://img.icons8.com/ios-glyphs/60/user--v1.png"
                  alt="User Icon"
                  className=" cursor-pointer transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="h-[87%] w-full flex items-center justify-end pr-5 pb-15">
            <div className=" h-[70%] w-[25%] flex flex-col justify-around items-center">
              <div className="h-[16%] w-[76%] bg-[#f4dfff]   rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95  flex items-center justify-center">
                <img src={muteicon} alt="" className="scale-80" />
              </div>
              <div className="h-[16%] w-[76%] bg-[#f4dfff]  rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center">
                <img src={time} alt="" className="scale-80" />
              </div>
              <div className="h-[16%] w-[76%] bg-[#f4dfff]  rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center ">
                <img src={shuffle} alt="" className="scale-60" />
              </div>
              <div className="h-[16%] w-[76%] bg-red-600  rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center">
                <img src={end} alt="" className="rotate-45 scale-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AudioChat;
