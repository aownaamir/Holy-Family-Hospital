"use client";
import { useState } from "react";
import ImageComparison from "./ImageComparison";
import SectionHeader from "./SectionHeader";

const BeforeAfter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleDrag = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div className="mt-[80px]">
      <SectionHeader title="Before and after procedures">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <div className="px-3  w-full p-2 md:w-[653px] m-auto border border-mehron-100 shadow-lg mt-10">
        <ImageComparison />
      </div>
    </div>
  );
};

export default BeforeAfter;
