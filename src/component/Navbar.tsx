"use client";
import Image from "next/image";
import React, { startTransition, useState } from "react";
import logo from "@/component/image/logo.svg";
import { VscThreeBars } from "react-icons/vsc";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToElement = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showNavbar = () => {
    setShowMenu(true);
    if (showMenu) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <>
      <div className="bg-transparent flex justify-between items-center px-5 py-3 fixed w-full z-[10] glassmorphism">
        <div className="p-2">
          <Image src={logo} alt="" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center md:gap-10">
          <div className="capitalize hidden md:flex gap-5 ">
            <p
              className="hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => scrollToElement("home")}
            >
              home
            </p>
            <p
              className="hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => {
                scrollToElement("features");
              }}
            >
              Features
            </p>
            <p
              className="hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => scrollToElement("about")}
            >
              about
            </p>
            <p
              className="hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => scrollToElement("team")}
            >
              team
            </p>
            <p
              className="hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => scrollToElement("partners")}
            >
              partners
            </p>
            <div className="px-3 relative">
              <button className="bg-[--pink] z-10 relative text-white text-sm font-semibold p-1 h-10 w-48 uppercase border-4 border-[--darkblue]">
                <p>Connect to wallet</p>
              </button>
              <div className=" h-10 w-48 bg-[--darkblue] absolute left-1 top-2"></div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <VscThreeBars
            className=" text-[--white]"
            // onClick={() => setShowMenu(!showMenu)}
            onClick={() => startTransition(showNavbar)}
          />
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden">
          <Sidebar isOpen={showMenu} setShowMenu={setShowMenu} />
        </div>
      )}
    </>
  );
};

export default Navbar;
