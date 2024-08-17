import { testimonials } from "@/data/data";
import Image from "next/image";
import React from "react";
import ReviewCard from "./ReviewCard";
import SectionHeader from "./SectionHeader";

const Testimonials = () => {
  return (
    <div className="mt-[80px]">
      <SectionHeader title="What people say?">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <div className=" px-3 pt-10 py-14 lg:px-10 custom-scrollbar w-full md:w-[1150px] m-auto h-full gap-5 md:gap-8 flex  whitespace-nowrap  items-center justify-center overflow-x-scroll overflow-y-hidden scroll-m-2">
        {testimonials.map((item, i) => (
          <ReviewCard key={i} item={item} ind={i} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
