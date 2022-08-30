import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Время творить великие дела
          </p>
          <h1 className="py-4 text-gray-700">
            Приветствую, я <span className="text-[#5651e5]">Раис</span>
          </h1>
          <h1 className="py-2 text-gray-700">Frond-end разработчик</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Я frond-end разработчик, нацеленный на разработку эффективных
            Web-приложений.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-ppointer hover:scale-125 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-ppointer hover:scale-125 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-ppointer hover:scale-125 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
