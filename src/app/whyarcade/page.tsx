import Image from "next/image";
import React from "react";
import text1 from "@/component/image/whyarcade1.svg";
import text2 from "@/component/image/whyarcade2.svg";
import text3 from "@/component/image/whyarcade3.svg";
import text4 from "@/component/image/whyarcade4.svg";
const whyarcade = [
  {
    img: text1,
    info: "There is no dedicated launchpad for GameFi projects that provides a first class user-experience that gamers understand.",
  },
  { img: text2, info: "There are no GameFi Vault protocols" },
  {
    img: text3,
    info: "There is no single unified interface where gamers are able to track their game assets across blockchains.",
  },
  {
    img: text4,
    info: "There are no GameFi fractionalization nor yield optimization automation protocols",
  },
];

function WhyArcade() {
  return (
    <div className="bg-[url('/img/whyarcade.svg')] bg-no-repeat bg-cover">
      <div className=" pt-16 lg:px-48 pb-10  mx-auto container justify-center items-center">
        <div className="flex justify-center lg:justify-start items-center">
          <div className=" w-[360px] md:w-[400px] h-16 md:h-20  capitalize flex justify-center items-center gap-5 relative text-borderpink  mb-1">
            <div className="text-4xl md:text-5xl font-black text-[--white]  h-16 md:h-20  capitalize relative text-borderpurple  mb-1">
              <p className="[text-shadow:_-6px_6px_0_rgb(78_0_174_/_100%)] flex justify-center items-center  h-16 md:h-20">
                Why Arcade?
              </p>
              <span
                className="flex justify-center items-center capitalize  h-16 md:h-20"
                // aria-hidden="true"
              >
                Why Arcade?
              </span>
            </div>
            <div className="absolute z-[-1] top-0 md:right-[0px] md:left-0 bg-[--lightblue] transform -rotate-2 w-[340px] md:w-[400px] h-16 md:h-20"></div>
          </div>
        </div>
        <div className="grid  w-full justify-center md:justify-center lg:justify-start gap-10 pt-10 lg:grid-cols-2  px-10 lg:px-0 ">
          {whyarcade?.map((item: any, index: number) => (
            <>
              <div className="relative flex justify-center items-center">
                <div
                  className={`bg-[--grey] z-[2] relative text-[--blue] text-sm  p-1 w-full h-full  uppercase border-8 border-[--darkblue]`}
                >
                  <div className="grid gap-5 p-[30px]">
                    <Image
                      src={item.img}
                      alt=" "
                      width={100}
                      height={100}
                      className="w-14 h-14"
                    />
                    <p className="text-[14px] font-normal text-[--darkblue] ">
                      {item.info}
                    </p>
                  </div>
                </div>
                <div className=" h-full w-full bg-[--darkblue] absolute right-2  top-2 flex justify-center items-center"></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyArcade;
