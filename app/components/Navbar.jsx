"use client";

import { useState } from "react";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="sticky top-0 flex flex-col bg-mehron-100 z-20">
      <div className="overflow-hidden w-full flex flex-col justify-center items-stretch ">
        <div className="flex justify-between px-3 lg:px-10 py-5">
          <div className="flex justify-center items-center gap-2">
            <h1 className="text-white">Holy Family Hospital</h1>
          </div>
          <div
            className="w-7 h-7 lg:hidden"
            onClick={() => setOpened((pV) => !pV)}
          >
            <div className="border-2 border-white my-1"></div>
            <div className="border-2 border-white my-1"></div>
            <div className="border-2 border-white my-1"></div>
          </div>

          <div className="hidden lg:flex w-auto  flex-col lg:flex-row justify-center items-center gap-10">
            {[
              "Home",
              "About",
              "Departments",
              "Doctors",
              "Gallery",
              "Contact",
            ].map((item, i) => (
              <div
                key={i}
                className=" flex justify-center items-center border-b-2 border-white pb-1"
              >
                <a href={`#${item.toLocaleLowerCase()}`}>
                  <p className="text-sm text-slate-50">{item}</p>
                </a>
              </div>
            ))}
          </div>

          {opened ? (
            <div className="w-full  flex flex-col absolute top-[4.2rem] left-0 bg-mehron-100 justify-center items-left gap-5 pt-3 pl-7">
              {[
                "Home",
                "About",
                "Departments",
                "Doctors",
                "Gallery",
                "Contact",
              ].map((item, i) => (
                <a key={i} href={`#${item.toLocaleLowerCase()}`}>
                  <div key={i} className="text-left">
                    <p className=" text-sm text-white mb-4">{item}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
