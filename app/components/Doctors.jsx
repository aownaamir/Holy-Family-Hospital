"use client";
import { doctors } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import Doctor from "./Doctor";
import SectionHeader from "./SectionHeader";

const Doctors = () => {
  const [currInd, setCurrInd] = useState(0);
  return (
    <div id="doctors" className="mt-[80px]">
      <SectionHeader title="Meet Our Specialists">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>

      <div className="px-3 py-1 lg:px-10  w-[386px] md:w-full m-auto whitespace-nowrap flex gap-7 transition-transform justify-center items-center overflow-x-scroll lg:overflow-x-hidden">
        {doctors.map((item, ind) => (
          <Doctor key={ind} item={item} ind={ind} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
