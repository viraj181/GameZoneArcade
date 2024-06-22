import React from "react";
import { Timer } from "./Timer";
const FirstPage = () => {
  return (
    <div
      id="home"
      className="bg-[url('/img/homeBackground.svg')] bg-no-repeat bg-cover pt-10 lg:pt-16"
    >
      <div className=" flex justify-center items-center pt-[61px]">
        <div className="text-4xl md:text-5xl font-black text-[--white] w-[360px] md:w-[500px] h-16 md:h-20  uppercase relative text-borderpurple  mb-1">
          <p className="[text-shadow:_-6px_6px_0_rgb(78_0_174_/_100%)] flex justify-center items-center w-[360px] md:w-[500px] h-16 md:h-20">
            Insert Coin
          </p>
          <span
            className="flex justify-center items-center uppercase w-[360px] md:w-[500px] h-16 md:h-20"
            // aria-hidden="true"
          >
            Insert Coin
          </span>
          <div className="absolute z-[-1] top-0 right-[10px] md:left-0 bg-[--yellow] transform -rotate-2 w-[340px] md:w-[500px] h-16 md:h-20"></div>
        </div>
      </div>

      <div className=" flex justify-center items-center ">
        <div className="text-3xl font-black text-[--white] w-[500px] text-center h-20  uppercase relative text-borderpink mb-1">
          <p className=" lg:px-20 py-3 [text-shadow:_0px_6px_5px_rgb(255_72_100_/_100%)]">
            for Endless Opportunities
          </p>
          <span className=" h-20 lg:px-20 py-3 uppercase" aria-hidden="true">
            for Endless Opportunities
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        <p className="font-normal text-base text-[--grey]">
          Invest in the Metaverse Starting at $10
        </p>
      </div>
      <Timer />
    </div>
  );
};

export default FirstPage;
