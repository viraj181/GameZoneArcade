"use client";
import React from "react";
import Countdown from "react-countdown";

export const Timer = () => {
  const currentTime = new Date();
  const oneHourFromNow = new Date(
    currentTime.getTime() + 5 * 24 * 1000 * 60 * 60
  ); // 1 hour from now
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <>
        <div className="grid md:flex justify-center items-center gap-5">
          <div className="flex gap-5">
            <div className="relative">
              <div className="bg-[--bggrey] z-[2] relative text-[--blue] text-sm font-semibold p-1 h-24 w-32 uppercase border-8 border-[--darkblue]">
                <div className="grid justify-center items-center w-full h-full">
                  <p className="text-[34px] font-black text-[--darkblue] text-center">
                    {days}
                  </p>
                  <p className="text-[20px] font-black text-[--darkblue] ">
                    days
                  </p>
                </div>
              </div>
              <div className=" h-24 w-32 bg-[--darkblue] absolute right-2 top-2"></div>
            </div>
            <span className="text-[--white] text-[64px] font-black">:</span>
            <div className="relative">
              <div className="bg-[--bggrey] z-[2] relative text-[--blue] text-sm font-semibold p-1 h-24 w-32 uppercase border-8 border-[--darkblue]">
                <div className="grid justify-center items-center w-full h-full">
                  <p className="text-[34px] font-black text-[--darkblue] text-center">
                    {hours}
                  </p>
                  <p className="text-[20px] font-black text-[--darkblue] ">
                    hours
                  </p>
                </div>
              </div>
              <div className=" h-24 w-32 bg-[--darkblue] absolute right-2 top-2"></div>
            </div>
          </div>
          <span className="text-[--white] text-[64px] font-black hidden md:block">
            :
          </span>
          <div className="flex gap-5">
            <div className="relative">
              <div className="bg-[--bggrey] z-[2] relative text-[--blue] text-sm font-semibold p-1 h-24 w-32 uppercase border-8 border-[--darkblue]">
                <div className="grid justify-center items-center w-full h-full">
                  <p className="text-[34px] font-black text-[--darkblue] text-center">
                    {minutes}
                  </p>
                  <p className="text-[20px] font-black text-[--darkblue] ">
                    minutes
                  </p>
                </div>
              </div>
              <div className=" h-24 w-32 bg-[--darkblue] absolute right-2 top-2"></div>
            </div>
            <span className="text-[--white] text-[64px] font-black">:</span>
            <div className="relative">
              <div className="bg-[--bggrey] z-[2] relative text-[--blue] text-sm font-semibold p-1 h-24 w-32 uppercase border-8 border-[--darkblue]">
                <div className="grid justify-center items-center w-full h-full">
                  <p className="text-[34px] font-black text-[--darkblue] text-center">
                    {seconds}
                  </p>
                  <p className="text-[20px] font-black text-[--darkblue] ">
                    seconds
                  </p>
                </div>
              </div>
              <div className=" h-24 w-32 bg-[--darkblue] absolute right-2 top-2"></div>
            </div>
          </div>
        </div>
        <br />
      </>
    );
  };
  return (
    <>
      <div className=" md:py-10">
        <Countdown date={oneHourFromNow} renderer={renderer} />
      </div>
      <div className="flex justify-center items-center pb-10">
        <div className="px-3 relative">
          <button className="bg-[--bggrey] z-[2] relative text-[--placeholder] text-sm font-semibold p-1  w-48 uppercase border-4 border-[--darkblue]">
            <p className="py-1">Start Soon...</p>
          </button>
          <div className=" h-10 w-48 bg-[--darkblue] absolute left-1 top-2"></div>
        </div>
      </div>
    </>
  );
};
