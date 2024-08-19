"use client";
import { doctors } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import Doctor from "./Doctor";
import SectionHeader from "./SectionHeader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const [currInd, setCurrInd] = useState(0);
  return (
    <div id="doctors" className="mt-[80px]">
      <SectionHeader title="Meet Our Specialists">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>

      <div className="px-12 md:px-6 lg:px-10 mb-7 xl:px-[5.5rem]  flex flex-col gap-2">
        <div className="custom-scrollbar w-full m-auto h-full gap-5 flex  whitespace-nowrap  items-center justify-center overflow-x-scroll overflow-y-hidden scroll-m-2">
          {doctors.map((item, ind) => (
            <Doctor key={ind} item={item} ind={ind} />
          ))}
        </div>
        <div className="w-full flex justify-between text-mehron-100 text-xl">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
