"use client";
import Image from "next/image";
import photo from "@/public/hero-curve.png";
import bg from "@/public/hfh2.jpg";
import logo from "@/public/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const HomePage = () => {
  useGSAP(() => {
    gsap.to(".header", { opacity: 1, y: -30 });
  }, []);
  return (
    <div
      id="home"
      className={`back w-full h-screen relative flex justify-center  px-3 lg:px-10 overflow-hidden bg-cover bg-center`}
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className="absolute right-[70px] bottom-0 hidden md:block w-full h-full z-10 scale-150">
        <Image
          src={photo}
          width={"auto"}
          height={"auto"}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className=" header opacity-0  top-10 mt-20 flex flex-col gap-7 z-10">
        <div className=" flex flex-col md:flex-row gap-12 lg:gap-5 xl:gap-12 w-full m-auto items-stretch justify-center">
          <div className="">
            <div className=" flex items-center justify-center">
              <div className="bg-mehron-100 rounded-full">
                <Image
                  src={logo}
                  alt=""
                  width={"auto"}
                  height={"auto"}
                  className="w-[270px]"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 items-center md:items-start justify-center">
            <h1 className=" lg:leading-tight lg:w-[750px] font-bold text-4xl lg:text-6xl  text-white text-center md:text-left ">
              {/* text-border-black1 */}
              Caring for Rawalpindi Since 1927
            </h1>
            <p className="lg:w-[750px] text-lg text-white text-center md:text-left">
              Delivering compassionate, high-quality healthcare to our community
              for nearly a century.
            </p>
            <button className="w-36 h-12 rounded-lg shadow-xl bg-mehron-100 ">
              <a href="#appointment">
                <span className="font-semibold text-slate-50 text-border-black2 ">
                  Appointment
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
