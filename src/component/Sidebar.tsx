import React, { startTransition, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

function Sidebar({
  isOpen,
  setShowMenu,
}: {
  isOpen: boolean;
  setShowMenu: any;
}) {
  const scrollToElement = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[11]">
        <div
          className={`w-[60%] bg-[--lightblue] absolute top-0 bottom-0 inset-y-0 p-4  transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all duration-200 ease-in-out`}
        >
          <div
            className="absolute top-[0px] right-[0px] bg-[--darkblue] w-[30px] h-[30px] flex  justify-center items-center lg:hidden"
            onClick={() => startTransition(() => setShowMenu(false))}
          >
            <RxCross2 className="text-[--white] text-font18" />
          </div>
          <div className="capitalize grid gap-5 pt-5">
            <p
              className="[text-shadow:_-2px_2px_0_rgb(78_0_174_/_100%)] hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => {
                scrollToElement("home"), setShowMenu(false);
              }}
            >
              home
            </p>
            <p
              className="[text-shadow:_-2px_2px_0_rgb(78_0_174_/_100%)] hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => {
                scrollToElement("features"), setShowMenu(false);
              }}
            >
              Features
            </p>
            <p
              className="[text-shadow:_-2px_2px_0_rgb(78_0_174_/_100%)] hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => {
                scrollToElement("about"), setShowMenu(false);
              }}
            >
              about
            </p>
            <p
              className="[text-shadow:_-2px_2px_0_rgb(78_0_174_/_100%)] hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => {
                scrollToElement("team"), setShowMenu(false);
              }}
            >
              team
            </p>
            <p
              className="[text-shadow:_-2px_2px_0_rgb(78_0_174_/_100%)] hover:text-[--pink] text-white text-base font-bold flex justify-center items-center"
              onClick={() => {
                scrollToElement("partners"), setShowMenu(false);
              }}
            >
              partners
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
