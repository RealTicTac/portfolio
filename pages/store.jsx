import Image from "next/image";
import React from "react";

import { RiRadioButtonFill } from "react-icons/ri";

import storeProject from "public/assests/projects/fullscreen ref.png";
import Link from "next/link";

const store = () => {
  return (
    <div className="w-full dark:bg-dark dark:text-light h-[100vh] duration-700 ease-in-out transition-colors">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={storeProject}
          alt="store project"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2>eCommercy Store</h2>
          <h3>React JS / Styled / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 ">
        <div className="col-span-4">
          <p>Проект</p>
          <h2>Обзор</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            explicabo voluptatibus reprehenderit molestias dolorem repellat!
          </p>
          <button className="px-8 py-2 mt-4 mr-8 dark:shadow-none">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8 dark:shadow-none">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shagra400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="text-gray-600 dark:text-gray-400 grid grid-cols-3 md:grid-cols-1">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Назад</p>
        </Link>
      </div>
    </div>
  );
};

export default store;
