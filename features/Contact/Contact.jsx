import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactIcon from "./ContactIcon";
import FormInput from "./FormInput";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя не может быть короче двух символов" })
    .max(15, { message: "Максимальная длина имени 15 символов" }),
  phoneNumber: z
    .string()
    .max(15, { message: "Введите корректный номер телефона" })
    .regex(phoneRegExp, { message: "Введите корректный номер телефона" }),
  email: z
    .string()
    .email({ message: "Неверный формат электронной почты" })
    .min(6, { message: "Email не может быть короче 6 символов" })
    .max(30, { message: "Максимальная длина Email 30 символов" }),
  subject: z
    .string()
    .min(4, { message: "Тема не может быть короче 4 символов" })
    .max(30, { message: "Тема не может быть длиннее 30 символов" }),
  message: z
    .string()
    .min(10, { message: "Минимальная длина сообщения 10 символов" }),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="w-full dark:bg-dark dark:text-light" id="contact">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-primary">
          Связаться
        </p>
        <h2 className="py-4">Для связи</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-600 rounded-xl p-4">
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-600 rounded-xl lg:p-4">
            <div className="py-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <FormInput
                    type="input"
                    label="Имя"
                    name="name"
                    errors={errors}
                    register={register}
                  />
                  <FormInput
                    type="input"
                    label="Номер телефона"
                    name="phoneNumber"
                    errors={errors}
                    register={register}
                  />
                </div>
                <FormInput
                  type="input"
                  label="Email"
                  name="email"
                  errors={errors}
                  register={register}
                />
                <FormInput
                  type="input"
                  label="Тема"
                  name="subject"
                  errors={errors}
                  register={register}
                />
                <FormInput
                  type="textarea"
                  label="Сообщение"
                  name="message"
                  rows="5"
                  errors={errors}
                  register={register}
                />
                <button className="w-full p-4 text-gray-300 dark:text-light mt-4 shadow-none dark:from-purple-500 dark:to-purple-700">
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
              <HiOutlineChevronDoubleUp className="text-primary" size={30} />
            </ContactIcon>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
