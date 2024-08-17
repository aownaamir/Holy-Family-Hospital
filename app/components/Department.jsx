"use client";
import { departments } from "@/data/data";
import Dept from "./Dept";
import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

// import Brain from "@/public/brain.svg";
const Department = () => {
  const [currDept, setCurrDept] = useState(0);
  const dept = departments[currDept];
  return (
    <div id="department" className="mt-[80px]">
      <SectionHeader title="Our Departments">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <div className="px-3 lg:px-10 h-[165px] flex gap-4  justify-center items-center w-[95vw] overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden">
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
      <div className="px-3 lg:px-10 flex flex-col md:flex-row">
        <div className="w-full md:w-[50%]">
          <Image src={dept.img} alt="dept" />
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start gap-5">
          <h1 className="w-full md:w-[95%] text-left text-2xl md:text-4xl font-semibold">
            Welcome to our <span className="text-mehron-100">{dept.name}</span>
          </h1>
          <p className="w-full md:w-[95%] text-left text-xl font-medium">
            {dept.description}
          </p>
          <p className="w-full md:w-[95%] text-left">{dept.details}</p>
          <button className="w-32 h-12 text-white bg-mehron-100 rounded-lg font-semibold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Department;
