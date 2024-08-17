"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="flex flex-col sticky top-0 z-50 bg-inherit bg-mehron-100">
      <div className="h-[65px] border-slate-800 overflow-hidden  w-full   flex flex-col justify-center items-stretch ">
        <div className="flex justify-between px-3 lg:px-10 py-5">
          <div className="flex justify-center items-center gap-2">
            <Image
              src={logo}
              alt="logo"
              width={"auto"}
              height={"auto"}
              className="w-10"
            />
            <h1 className="text-slate-50">Holy Family Hospital</h1>
          </div>
          <div
            className="w-7 h-7 lg:hidden"
            onClick={() => setOpened((pV) => !pV)}
          >
            <div className="border-2 border-gray-400 my-1"></div>
            <div className="border-2 border-gray-400 my-1"></div>
            <div className="border-2 border-gray-400 my-1"></div>
          </div>

          <div className="hidden lg:flex w-auto  flex-col lg:flex-row justify-center items-center gap-2">
            {[
              "Home",
              "About",
              "Department",
              "Doctors",
              "Gallery",
              "Contact",
            ].map((item, i) => (
              <div
                key={i}
                className="w-[90px] h-10 flex justify-center items-center"
              >
                <a href={`#${item.toLocaleLowerCase()}`}>
                  <p className="text-sm active:text-appointment-blue font-semibold text-slate-50">
                    {item}
                  </p>
                </a>
              </div>
            ))}
          </div>

          {/* <div className="hidden lg:flex  bg-blue-400 shadow-lg w-[90px] h-8 justify-center items-center rounded-md ">
          <a href={`#contact`}>
            <p className="text-sm active:text-appointment-blue font-semibold">
              Contact
            </p>
          </a>
        </div> */}

          {opened ? (
            <div className="w-full  flex flex-col absolute top-[5.4rem] left-0 bg-slate-100 justify-center items-left gap-5 pt-3 pl-7">
              {[
                "Home",
                "About",
                "Department",
                "Doctors",
                "Gallery",
                "Contact",
              ].map((item, i) => (
                <a key={i} href={`#${item.toLocaleLowerCase()}`}>
                  <div key={i} className="text-left">
                    <p className=" text-sm active:text-appointment-blue font-semibold mb-4">
                      {item}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <div className="w-[90%] border border-slate-800 m-auto"></div> */}
    </div>
  );
};

export default Navbar;
