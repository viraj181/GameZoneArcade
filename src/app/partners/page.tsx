import Image from "next/image";
import React from "react";
import text1 from "@/component/image/team1.svg";
import text2 from "@/component/image/partner1.svg";
import text3 from "@/component/image/whyarcade3.svg";
import text4 from "@/component/image/whyarcade4.svg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
const whyarcade = [
  { img: text2 },
  { img: text2 },
  { img: text2 },
  { img: text2 },
  { img: text2 },
  { img: text2 },
];

function Partners() {
  return (
    <div
      id="partners"
      className="bg-[url('/img/partners.svg')]  bg-no-repeat bg-cover"
    >
      <div className=" py-16 lg:px-48 mx-auto container justify-center items-center">
        <div className="flex justify-center lg:justify-start items-center">
          <div className=" w-[360px] md:w-[400px] h-16 md:h-20  capitalize flex justify-center items-center gap-5 relative text-borderpink  mb-1">
            <div className="text-4xl md:text-5xl font-black text-[--white]  h-16 md:h-20  capitalize relative text-borderpurple  mb-1">
              <p className="[text-shadow:_-6px_6px_0_rgb(78_0_174_/_100%)] flex justify-center items-center  h-16 md:h-20">
                Partners
              </p>
              <span className="flex justify-center items-center capitalize  h-16 md:h-20">
                Partners
              </span>
            </div>
            <div className="absolute z-[-1] top-0 md:right-[0px] md:left-0 bg-[--yellow] transform -rotate-2 w-[340px] md:w-[400px] h-16 md:h-20"></div>
          </div>
        </div>
        <div className="grid  w-full justify-center md:justify-center lg:justify-start gap-10 pt-10 md:grid-cols-2 lg:grid-cols-3  px-10 lg:px-0 ">
          {whyarcade?.map((item: any, index: number) => (
            <>
              <div className="relative flex justify-center items-center">
                <div
                  className={`bg-[--grey]  z-[2] relative text-[--blue] text-sm  p-1 w-full h-full  uppercase border-8 border-[--darkblue]`}
                >
                  <div className=" px-10 py-5 text-[--darkblue] ">
                    <Image
                      src={item.img}
                      alt=" "
                      width={100}
                      height={100}
                      className="w-full h-[100px]"
                    />
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

export default Partners;
