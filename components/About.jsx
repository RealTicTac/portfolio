import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5351e5]">
            Обо мне
          </p>
          <h2 className="py-4">Кто же я?</h2>
          <p className="py-2 text-gray-600">Lorem ipsum dolor sit amet.</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            molestias id voluptas assumenda reprehenderit, sed necessitatibus
            quis aliquid iste suscipit, corrupti animi. Sint quibusdam pariatur
            autem, earum sapiente laudantium neque.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            facere nobis quo quod minus eaque itaque quos! Facere esse laborum
            totam facilis alias perferendis quam voluptas, voluptate, minus
            atque earum!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            consectetur.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://img.freepik.com/free-photo/turned-on-gray-laptop-computer_400718-47.jpg?w=900&t=st=1661900773~exp=1661901373~hmac=74c56381ab791a272a24033dfc7f637d8d2c3f68d8eb47e63bb7a854ccff9f09"
            alt="coding"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
