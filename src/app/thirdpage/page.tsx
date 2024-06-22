import Image from "next/image";
import React from "react";
import launch from "@/component/image/launch.svg";
import invest from "@/component/image/invest.svg";
import trade from "@/component/image/trade.svg";
import automate from "@/component/image/automate.svg";
import text1 from "@/component/image/1.svg";
import text2 from "@/component/image/2.svg";
import text3 from "@/component/image/3.svg";
import text4 from "@/component/image/4.svg";
import { GiTwirlyFlower } from "react-icons/gi";
function ThirdPage() {
  return (
    <div
      id="about"
      className="bg-[url('/img/thirdBackground.svg')] bg-no-repeat bg-cover py-10 xl:pt-32 lg:px-10 xl:px-32  mx-auto flex justify-center items-center"
    >
      <div className="grid gap-20 xl:gap-40 container justify-center items-center 2xl:pt-40">
        <div className="lg:px-20  grid lg:flex justify-center lg:justify-between items-center relative gap-20 ">
          <div className=" grid justify-center items-center lg:pr-24">
            <div className="flex justify-center items-center ">
              <div className=" w-[360px] md:w-[400px] h-16 md:h-20  capitalize flex justify-center items-center gap-5 relative text-borderpink  mb-1">
                <Image
                  src={text1}
                  alt=""
                  width={100}
                  height={100}
                  className="w-12 h-12"
                />
                <div className="text-4xl md:text-5xl font-black text-[--white]  h-16 md:h-20  capitalize relative text-borderpurple  mb-1">
                  <p className="[text-shadow:_-6px_6px_0_rgb(78_0_174_/_100%)] flex justify-center items-center  h-16 md:h-20">
                    Launch
                  </p>
                  <span
                    className="flex justify-center items-center capitalize  h-16 md:h-20"
                    // aria-hidden="true"
                  >
                    Launch
                  </span>
                </div>
                <div className="absolute z-[-1] top-0 lg:right-[0px] md:left-0 bg-[--pink] transform -rotate-2 w-[340px] md:w-[400px] h-16 md:h-20"></div>
              </div>
            </div>
            <div className="lg:pl-36 flex justify-center items-center px-3 md:px-10 lg:px-0 ">
              <div className="">
                <p className="text-start text-[--white] font-normal text-lg  pt-10 lg:pr-10 px-3 md:px-0">
                  Participate in initial Game Offerings (IGOs) of the best
                  upcoming games
                </p>
                <div className="grid  w-full justify-center lg:justify-start gap-10 pt-10 pl-3 lg:pl-0">
                  <div className="flex gap-2 lg:gap-5  ">
                    <GiTwirlyFlower className="text-[--pink] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Be an early explorer and reap the rewards of investing
                      early in land/ heroes/ gear/ mounts/ vehicles and other
                      assets
                    </p>
                  </div>
                  <div className="flex gap-2 lg:gap-5 justify-start">
                    <GiTwirlyFlower className="text-[--pink] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Be an early explorer and reap the rewards of investing
                      early in land/ heroes/ gear/ mounts/ vehicles and other
                      assets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center  min-w-[300px] ">
            <Image
              src={launch}
              alt=""
              width={100}
              height={100}
              className="min-w-[300px] relative z-[2] border-[12px] border-[--pink] [text-shadow:_-5px_5px_0_rgb(255_72_100_/_100%)]"
            />
            <div className="absolute z-[1]  bg-[--darkblue] top-4 lg:-left-4 right-12 md:right-64 lg:right-0 w-[300px] h-full lg:pr-10 pl-16 lg:pl-0"></div>
          </div>
        </div>
        <div className="lg:px-20  grid lg:flex justify-center lg:justify-between items-center relative gap-20">
          <div className="relative  min-w-[300px] flex justify-center items-center order-2 lg:order-1">
            <Image
              src={invest}
              alt=""
              width={100}
              height={100}
              className="min-w-[300px] relative z-[2] !border-[12px] !border-[--lightblue] [text-shadow:_-5px_5px_0_rgb(255_72_100_/_100%)]"
            />
            <div className="absolute z-[1]  bg-[--darkblue] top-4 lg:right-4 md:right-64  right-12 w-[300px] h-full "></div>
          </div>
          <div className=" grid justify-center items-center  order-1 lg:order-2">
            <div className="flex justify-center items-center">
              <div className=" w-[360px] md:w-[400px] h-16 md:h-20  capitalize flex justify-center items-center gap-5 relative text-borderpink  mb-1">
                <Image
                  src={text2}
                  alt=""
                  width={100}
                  height={100}
                  className="w-12 h-12"
                />
                <div className="text-4xl md:text-5xl font-black text-[--white]  h-16 md:h-20  capitalize relative text-borderpurple  mb-1">
                  <p className="[text-shadow:_-6px_6px_0_rgb(78_0_174_/_100%)] flex justify-center items-center  h-16 md:h-20">
                    Invest
                  </p>
                  <span
                    className="flex justify-center items-center capitalize  h-16 md:h-20"
                    // aria-hidden="true"
                  >
                    Invest
                  </span>
                </div>
                <div className="absolute z-[-1] top-0 md:right-[0px] md:left-0 bg-[--lightblue] transform -rotate-2 w-[340px] md:w-[400px] h-16 md:h-20"></div>
              </div>
            </div>
            <div className="lg:pl-36 flex justify-center items-center px-3 md:px-10 lg:px-0 ">
              <div className="">
                <p className="text-start text-[--white] font-normal text-lg  pt-10 lg:pr-10 px-3 md:px-0">
                  Invest in our specially curated vaults of gaming assets and
                  earn from the metaverse without the learning curve
                </p>
                <div className="grid  w-full justify-center lg:justify-start gap-10 pt-10 pl-3 lg:pl-0">
                  <div className="flex gap-2 lg:gap-5 justify-start ">
                    <GiTwirlyFlower className="text-[--lightblue] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Be an early investor in a vault and gain maximal benefit
                      from a vault strategy
                    </p>
                  </div>
                  <div className="flex gap-2 lg:gap-5 justify-start">
                    <GiTwirlyFlower className="text-[--lightblue] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      No NFT floor prices here. Invest any amount you want.
                    </p>
                  </div>
                  <div className="flex gap-2 lg:gap-5 justify-start">
                    <GiTwirlyFlower className="text-[--lightblue] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Get access to a highly liquid asset while still getting
                      the benefits of yield from game NFTs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-20  grid lg:flex justify-center lg:justify-between items-center relative gap-20 ">
          <div className=" grid justify-center items-center lg:pr-24">
            <div className="flex justify-center items-center ">
              <div className=" w-[360px] md:w-[400px] h-16 md:h-20  capitalize flex justify-center items-center gap-5 relative text-borderpink  mb-1">
                <Image
                  src={text3}
                  alt=""
                  width={100}
                  height={100}
                  className="w-12 h-12"
                />
                <div className="text-4xl md:text-5xl font-black text-[--white]  h-16 md:h-20  capitalize relative text-borderpurple  mb-1">
                  <p className="[text-shadow:_-6px_6px_0_rgb(78_0_174_/_100%)] flex justify-center items-center  h-16 md:h-20">
                    Trade
                  </p>
                  <span
                    className="flex justify-center items-center capitalize  h-16 md:h-20"
                    // aria-hidden="true"
                  >
                    Trade
                  </span>
                </div>
                <div className="absolute z-[-1] top-0 lg:right-[0px] md:left-0 bg-[--yellow] transform -rotate-2 w-[340px] md:w-[400px] h-16 md:h-20"></div>
              </div>
            </div>
            <div className="lg:pl-36 flex justify-center items-center px-3 md:px-10 lg:px-0 ">
              <div className="">
                <p className="text-start text-[--white] font-normal text-lg  pt-10 lg:pr-10 px-3 md:px-0">
                  The best trading platform for Gaming NFTs across the metaverse
                </p>
                <div className="grid  w-full justify-center lg:justify-start gap-10 pt-10 pl-3 lg:pl-0">
                  <div className="flex gap-2 lg:gap-5  ">
                    <GiTwirlyFlower className="text-[--yellow] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Trade and manage your game investments across games in 1
                      dashboard
                    </p>
                  </div>
                  <div className="flex gap-2 lg:gap-5 justify-start">
                    <GiTwirlyFlower className="text-[--yellow] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Issue buy/sell/limit/auction orders from our dashboard
                      across multiple games
                    </p>
                  </div>
                  <div className="flex gap-2 lg:gap-5 justify-start">
                    <GiTwirlyFlower className="text-[--yellow] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Get detailed analytics and get an edge in your trading
                      strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center  min-w-[300px] ">
            <Image
              src={trade}
              alt=""
              width={100}
              height={100}
              className="min-w-[300px] relative z-[2] border-[12px] border-[--yellow] [text-shadow:_-5px_5px_0_rgb(255_72_100_/_100%)]"
            />
            <div className="absolute z-[1]  bg-[--darkblue] top-4 lg:-left-4 right-12 md:right-64 lg:right-0 w-[300px] h-full lg:pr-10 pl-16 lg:pl-0"></div>
          </div>
        </div>
        <div className="lg:px-20  grid lg:flex justify-center lg:justify-between items-center relative gap-20">
          <div className="relative  min-w-[300px] flex justify-center items-center order-2 lg:order-1">
            <Image
              src={automate}
              alt=""
              width={100}
              height={100}
              className="min-w-[300px] relative z-[2] !border-[12px] !border-[--white] [text-shadow:_-5px_5px_0_rgb(255_72_100_/_100%)]"
            />
            <div className="absolute z-[1]  bg-[--darkblue] top-4 lg:right-4 md:right-64  right-12 w-[300px] h-full "></div>
          </div>
          <div className=" grid justify-center items-center  order-1 lg:order-2">
            <div className="flex justify-center items-center">
              <div className=" w-[360px] md:w-[400px] h-16 md:h-20  capitalize flex justify-center items-center gap-5 relative text-borderpink  mb-1">
                <Image
                  src={text4}
                  alt=""
                  width={100}
                  height={100}
                  className="w-12 h-12"
                />
                <div className="text-4xl md:text-5xl font-black text-[--white]  h-16 md:h-20  capitalize relative text-borderpurple  mb-1">
                  <p className="[text-shadow:_-6px_6px_0_rgb(78_0_174_/_100%)] flex justify-center items-center  h-16 md:h-20">
                    automate
                  </p>
                  <span
                    className="flex justify-center items-center capitalize  h-16 md:h-20"
                    // aria-hidden="true"
                  >
                    automate
                  </span>
                </div>
                <div className="absolute z-[-1] top-0 md:right-[0px] md:left-0 bg-[--darkblue] transform -rotate-2 w-[340px] md:w-[400px] h-16 md:h-20"></div>
              </div>
            </div>
            <div className="lg:pl-36 flex justify-center items-center px-3 md:px-10 lg:px-0 ">
              <div className="">
                <p className="text-start text-[--white] font-normal text-lg  pt-10 lg:pr-10 px-3 md:px-0">
                  10x your GameFi yield farming
                </p>
                <div className="grid  w-full justify-center lg:justify-start gap-10 pt-10 pl-3 lg:pl-0">
                  <div className="flex gap-2 lg:gap-5 justify-start ">
                    <GiTwirlyFlower className="text-[--white] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Use our composable action blocks for different game
                      contracts to maximize your farming strategy
                    </p>
                  </div>
                  <div className="flex gap-2 lg:gap-5 justify-start">
                    <GiTwirlyFlower className="text-[--white] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Automate your yield farming activities and leave nothing
                      to waste
                    </p>
                  </div>
                  <div className="flex gap-2 lg:gap-5 justify-start">
                    <GiTwirlyFlower className="text-[--white] min-w-5 h-7" />
                    <p className="text-start text-[--white] font-normal text-lg  ">
                      Not interested in coding? No problem. Post a bounty to
                      engage the community to help you create the perfect
                      farming routine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
