import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsLightbulb, BsMoon } from "react-icons/bs";

import ContactIcon from "../Contact/ContactIcon";

const NavBar = () => {
  const [nav, setNav] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);
  const [isProject, setIsProject] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter();

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

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDarkmode = () => {
    localStorage.setItem("theme", `${theme === "dark" ? "light" : "dark"}`);
    setTheme(localStorage.getItem("theme"));
  };

  const themeToggle = () => {
    const currentTheme = theme === systemTheme ? systemTheme : theme;
    return (
      <div
        className="hidden 2md:block rounded-full bg-light dark:bg-dark text-dark dark:text-light border border-gray-300 dark:border-gray-500 ml-2 p-2 ease-in-out duration-700 transition-colors"
        onClick={handleDarkmode}
      >
        {currentTheme === "dark" ? <BsLightbulb /> : <BsMoon />}
      </div>
    );
  };

  if (!mounted) return null;
  return (
    <div
      className={`ease-in-out duration-700 transition-colors bg-light dark:bg-dark ${
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] dark:shadow-gray-700"
          : "fixed w-full h-20  z-[100]"
      } ${isProject ? "bg-transparent transition-none" : ""}`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/logo.png" alt="logo" width="125" height="50" />
        <div className="flex items-center">
          <ul
            className={`hidden 2md:flex ${
              isProject ? "text-light" : "text-dark dark:text-light"
            }`}
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                ??????????????
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                ?????? ??????
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">????????????</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                ??????????????
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                ?????????????????? ???? ????????
              </li>
            </Link>
          </ul>
          <div className="2md:hidden dark:text-light" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
          {themeToggle()}
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-light dark:bg-dark p-10 ease-in duration-300"
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
                className="shadow-lg shadow-gray-400 ml-auto rounded-full  dark:bg-dark text-dark dark:text-light dark:border dark:border-gray-500 p-3 ease-in-out duration-700 transition-colors"
                onClick={handleDarkmode}
              >
                {theme === "dark" ? <BsLightbulb /> : <BsMoon />}
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-light dark:border dark:border-gray-500"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-light">
                ?????????? ?????????????? ?????????????? ????????
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col dark:text-light">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm" onClick={handleNav}>
                  ??????????????
                </li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm" onClick={handleNav}>
                  ?????? ??????
                </li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm" onClick={handleNav}>
                  ????????????
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm" onClick={handleNav}>
                  ??????????????
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm" onClick={handleNav}>
                  ??????????????????
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-primary">
                ?? ?? ??????????????????
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
