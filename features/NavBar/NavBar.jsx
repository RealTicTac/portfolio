import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Contact from "../Contact/Contact";
import ContactIcon from "../Contact/ContactIcon";

const NavBar = () => {
  const [nav, setNav] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else setShadow(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/logo.png" alt="logo" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Главная
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Обо мне
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Умения</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Проекты
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Связаться со мной
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300 transition-all"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/logo.png"
                width="87"
                height="35"
                alt="logo"
              />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Время творить великие дела
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Главная</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Обо мне</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Умения</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Проекты</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Связаться</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Я в интернете
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
      </div>
    </div>
  );
};

export default NavBar;
