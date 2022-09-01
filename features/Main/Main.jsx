import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import ContactIcon from "../Contact/ContactIcon";

const Main = () => {
  return (
    <div
      className="w-full h-screen text-center dark:bg-dark ease-in-out duration-700 transition-colors"
      id="main"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="dark:text-light ">
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            Время творить великие дела
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-300">
            Приветствую, я <span className="text-primary">Раис</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-gray-300">
            Frond-end разработчик
          </h1>
          <p className="py-4 text-gray-600 dark:text-gray-300 max-w-[70%] m-auto">
            Я frond-end разработчик, нацеленный на разработку эффективных
            Web-приложений.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <ContactIcon>
              <FaGithub />
            </ContactIcon>
            <ContactIcon>
              <AiOutlineMail />
            </ContactIcon>
            <ContactIcon>
              <BsFillPersonLinesFill />
            </ContactIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
