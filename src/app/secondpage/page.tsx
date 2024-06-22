import Image from "next/image";
import React from "react";
import text1 from "@/component/image/1.svg";
import text2 from "@/component/image/2.svg";
import text3 from "@/component/image/3.svg";
import text4 from "@/component/image/4.svg";
const featurearray = [
  { img: text1, lable: "Launch", bg: "bg-[--pink]" },
  { img: text2, lable: "Invest", bg: "bg-[--lightblue]" },
  { img: text3, lable: "Trade", bg: "bg-[--yellow]" },
  { img: text4, lable: "Automate", bg: "bg-[--placeholder]" },
];

function SecondPage() {
  return (
    <div id="features" className="bg-[url('/img/featuresimage.svg')] py-24">
      <div className="flex justify-center items-center">
        <div className="text-4xl md:text-5xl font-black text-[--white] w-[360px] md:w-[500px] h-16 md:h-20  capitalize relative text-borderpink  mb-1">
          <p className="[text-shadow:_-5px_5px_0_rgb(255_72_100_/_100%)] flex justify-center items-center w-[360px] md:w-[500px] h-16 md:h-20">
            features
          </p>
          <span
            className="flex justify-center items-center capitalize w-[360px] md:w-[500px] h-16 md:h-20"
            // aria-hidden="true"
          >
            features
          </span>
          <div className="absolute z-[-1] top-0 right-[10px] md:left-0 bg-[--darkblue] transform -rotate-2 w-[340px] md:w-[500px] h-16 md:h-20"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:flex justify-center items-center gap-5 pt-20">
        {featurearray?.map((item: any, index: number) => (
          <>
            <div className="relative flex justify-center items-center">
              <div
                className={`${item.bg} z-[2] relative text-[--blue] text-sm font-semibold p-1 h-36 w-56 uppercase border-8 border-[--darkblue]`}
              >
                <div className="grid gap-5 px-5 py-2">
                  <Image
                    src={item.img}
                    alt=" "
                    width={100}
                    height={100}
                    className="w-14 h-14"
                  />
                  <p className="text-[20px] font-black text-[--white] ">
                    {item.lable}
                  </p>
                </div>
              </div>
              <div className=" h-36 w-56 bg-[--darkblue] absolute right-2 md:right-[86px] lg:right-2 top-2 flex justify-center items-center"></div>
            </div>
          </>
        ))}
        {/* <div className="relative">
          <div className="bg-[--bggrey] z-[2] relative text-[--blue] text-sm font-semibold p-1 h-36 w-56 uppercase border-8 border-[--darkblue]">
            <div className="grid gap-5 px-5 py-2">
              <Image
                src={text1}
                alt=" "
                width={100}
                height={100}
                className="w-14 h-14"
              />
              <p className="text-[20px] font-black text-[--darkblue] ">
                minutes
              </p>
            </div>
          </div>
          <div className=" h-36 w-56 bg-[--darkblue] absolute right-2 top-2"></div>
        </div>
        <div className="relative">
          <div className="bg-[--bggrey] z-[2] relative text-[--blue] text-sm font-semibold p-1 h-36 w-56 uppercase border-8 border-[--darkblue]">
            <div className="grid justify-center items-center w-full h-full">
              <p className="text-[34px] font-black text-[--darkblue] text-center">
                minutes
              </p>
              <p className="text-[20px] font-black text-[--darkblue] ">
                minutes
              </p>
            </div>
          </div>
          <div className=" h-36 w-56 bg-[--darkblue] absolute right-2 top-2"></div>
        </div>
        <div className="relative">
          <div className="bg-[--bggrey] z-[2] relative text-[--blue] text-sm font-semibold p-1 h-36 w-56 uppercase border-8 border-[--darkblue]">
            <div className="grid justify-center items-center w-full h-full">
              <p className="text-[34px] font-black text-[--darkblue] text-center">
                minutes
              </p>
              <p className="text-[20px] font-black text-[--darkblue] ">
                minutes
              </p>
            </div>
          </div>
          <div className=" h-36 w-56 bg-[--darkblue] absolute right-2 top-2"></div>
        </div>
        <div className="relative">
          <div className="bg-[--bggrey] z-[2] relative text-[--blue] text-sm font-semibold p-1 h-36 w-56 uppercase border-8 border-[--darkblue]">
            <div className="grid justify-center items-center w-full h-full">
              <p className="text-[34px] font-black text-[--darkblue] text-center">
                minutes
              </p>
              <p className="text-[20px] font-black text-[--darkblue] ">
                minutes
              </p>
            </div>
          </div>
          <div className=" h-36 w-56 bg-[--darkblue] absolute right-2 top-2"></div>
        </div> */}
      </div>
    </div>
  );
}

export default SecondPage;
