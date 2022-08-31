import React from "react";
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactIcon from "./ContactIcon";
import FormInput from "./FormInput";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Связаться
        </p>
        <h2 className="py-4">Для связи</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="contact me"
                />
              </div>
              <div className="">
                <h2 className="py-2">Раис</h2>
                <p>Front-end разработчик</p>
                <p className="py-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita, natus!
                </p>
              </div>
              <div className="uppercase pt-8">Свяжитесь со мной</div>
              <div className="flex items-center justify-between py-4">
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="py-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <FormInput type="input" label="Имя" />
                  <FormInput type="input" label="Номер телефона" />
                </div>
                <FormInput type="input" label="Email" />
                <FormInput type="input" label="Тема" />
                <FormInput type="textarea" label="Сообщение" rows="5" />
                <button className="w-full p-4 text-gray-300 mt-4">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="p-12 flex justify-center">
        <Link href="/">
          <a>
            <ContactIcon>
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </ContactIcon>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
