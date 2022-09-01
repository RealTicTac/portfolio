import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsLightbulb, BsMoon } from "react-icons/bs";

import ContactIcon from "../Contact/ContactIcon";
import { ThemeContext } from "pages/_app";
import useDarkmode from "hooks/useDarkmode";

const bgColor = "#ecf0f3";
const linkColor = "#1f2937";

const NavBar = () => {
  const [nav, setNav] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);
  const [isProject, setIsProject] = React.useState(false);
  const router = useRouter();
  const [isDarkTheme, setTheme] = useContext(ThemeContext);

  React.useEffect(() => {
    if (router.asPath.match(/\/\w+/)) {
      setIsProject(true);
    } else {
      setIsProject(false);
    }
  }, [router]);

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

  const handleDarkmode = () => {
    localStorage.setItem("theme", `${!isDarkTheme ? "dark" : "light"}`);
    setTheme((theme) => !theme);
  };
  return (
    <div
      className={`${
        shadow && !isDarkTheme
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20  z-[100]"
      } ${isProject ? "bg-transparent" : "bg-light dark:bg-dark"}`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/logo.png" alt="logo" width="125" height="50" />
        <div className="flex items-center">
          <ul
            className={`hidden 2md:flex ${
              isProject || isDarkTheme
                ? "text-light dark:text-light"
                : "text-dark"
            }`}
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Главная
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Обо мне
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Умения</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Проекты
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Связаться со мной
              </li>
            </Link>
          </ul>
          <div className="2md:hidden dark:text-light" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
          <div
            className="hidden 2md:block rounded-full bg-light dark:bg-dark text-dark dark:text-light border border-gray-300 ml-2 p-2"
            onClick={handleDarkmode}
          >
            {isDarkTheme ? <BsLightbulb /> : <BsMoon />}
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "2md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300 "
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-light dark:bg-dark p-10 ease-in duration-500"
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
                className="shadow-lg shadow-gray-400 ml-auto rounded-full bg-light dark:bg-dark text-dark dark:text-light dark:border dark:border-light p-3"
                onClick={handleDarkmode}
              >
                {false ? <BsLightbulb /> : <BsMoon />}
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-light dark:border dark:border-light"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-light">
                Время творить великие дела
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col dark:text-light">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm" onClick={handleNav}>
                  Главная
                </li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm" onClick={handleNav}>
                  Обо мне
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm" onClick={handleNav}>
                  Умения
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm" onClick={handleNav}>
                  Проекты
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm" onClick={handleNav}>
                  Связаться
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-primary">
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
