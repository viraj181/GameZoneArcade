import Image from "next/image";
import React from "react";
import logo from "@/component/image/logo.svg";
function Footer() {
  return (
    <>
      <div className="lg:flex lg:justify-between grid justify-start  gap-10 p-10 lg:px-24 lg:py-28 bg-[--purple]">
        <div className="grid gap-5 lg:gap-10 juctify-center items-center ">
          <Image src={logo} alt="" width={100} height={100} />
          <p className="lg:w-[400px] text-[14px] font-normal text-[--white]">
            There is no dedicated launchpad for GameFi projects that provides a
            first class user-experience that gamers understand.
          </p>
        </div>{" "}
        <div className="grid gap-5 lg:gap-0">
          <p className="text-[--white] font-black text-[20px]">Follow Us</p>
          <p className="lg:w-[400px] text-[14px] font-normal text-[--white]">
            Facebook | Youtube | Twitter
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
