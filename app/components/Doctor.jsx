import Image from "next/image";
import React from "react";
import MemberShape from "../svgs/MemberShape";

const Doctor = ({ item }) => {
  return (
    <div
      // style={{ transform: `translateX(160.5%)` }}
      className="w-[270px]   md:w-64 translate-x-[160.5%] md:translate-x-0 flex flex-none flex-col  border border-mehron-100 rounded-md gap-3"
    >
      <div className="container rounded-md relative overflow-hidden">
        <div className="clip p-0 opacity-0 transition-all z-10 duration-700 bg-mehron-100 rounded-md absolute top-5 right-5 flex justify-center items-center">
          🔗
        </div>
        <MemberShape classname="card absolute z-10 bottom-0 w-full opacity-0  transition-all duration-700" />
        <Image
          src={item.img}
          alt={`${item.name}`}
          className="img w-full rounded-md transition-all duration-700"
        />
      </div>
      <div className="w-full mb-3 flex flex-col  justify-center items-center">
        <h2 className="font-semibold text-mehron-100">{item.name}</h2>
        <p className="">{item.depatrment}</p>
      </div>
    </div>
  );
};

export default Doctor;
