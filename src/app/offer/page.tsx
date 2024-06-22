import React from "react";
import { Timer } from "../firstpage/Timer";

function Offer() {
  return (
    <>
      <div className="bg-[url('/img/offerbg.svg')] bg-no-repeat bg-cover py-16 grid gap-10">
        <div className=" flex justify-center items-center  ">
          <div className="text-3xl font-black text-[--white] md:w-[700px] lg:w-[800px]  text-center uppercase relative text-borderpink mb-1">
            <p className=" lg:px-20 py-3 [text-shadow:_0px_6px_5px_rgb(255_72_100_/_100%)]">
              Excited? Want in? Participate in our IDO. Get airdrops, whitelist
              and more!
            </p>
            <span className="lg:px-20 py-3 uppercase" aria-hidden="true">
              Excited? Want in? Participate in our IDO. Get airdrops, whitelist
              and more!
            </span>
          </div>
        </div>
        <div className="">
          <Timer />
        </div>
      </div>
    </>
  );
}

export default Offer;
