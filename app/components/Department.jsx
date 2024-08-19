"use client";
import { departments } from "@/data/data";
import Dept from "./Dept";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import Brain from "@/public/brain.svg";
const Department = () => {
  const [currDept, setCurrDept] = useState(0);
  const dept = departments[currDept];
  return (
    <div id="departments" className="mt-[80px]">
      <SectionHeader title="Our Departments">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <div className="flex flex-col">
        <div className="w-[95%] m-auto px-3 lg:px-10 h-[165px] flex gap-4 whitespace-nowrap  justify-center items-center overflow-y-hidden overflow-x-scroll custom-scrollbar">
          {departments.map((item, i) => (
            <Dept
              identity={i}
              key={i}
              item={item}
              currDept={currDept}
              onClick={() => setCurrDept(i)}
            />
          ))}
        </div>
        <div className="w-full flex justify-between text-mehron-100 text-xl px-4 md:px-7 lg:px-10">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>
      <div className="mt-3 px-3 lg:px-10 flex flex-col md:flex-row gap-14 md:gap-0">
        <div className="w-full md:w-[50%] flex items-center justify-center">
          <div className="w-96 h-96 overflow-hidden rounded-2xl shadow-2xl flex justify-center items-center">
            <Image src={dept.img} alt="dept" className="" />
          </div>
        </div>
        {/* <div className="w-full md:w-[50%]">
          <Image src={dept.img} alt="dept" />
        </div> */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start gap-5">
          <h1 className="w-full md:w-[95%] text-left text-2xl md:text-4xl font-semibold">
            Welcome to our <span className="text-mehron-100">{dept.name}</span>
          </h1>
          <p className="w-full md:w-[95%] text-left">{dept.description}</p>
          <button className="w-32 h-12 text-white bg-mehron-100 rounded-lg font-semibold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Department;
