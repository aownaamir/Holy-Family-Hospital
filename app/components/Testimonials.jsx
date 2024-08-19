import { testimonials } from "@/data/data";
import React from "react";
import ReviewCard from "./ReviewCard";
import SectionHeader from "./SectionHeader";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="mt-[80px]">
      <SectionHeader title="What people say?">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <div className="px-5 md:px-6 lg:px-10 mb-7  flex flex-col gap-2">
        <div className="custom-scrollbar w-full m-auto h-full gap-5 flex  whitespace-nowrap  items-center justify-center overflow-x-scroll overflow-y-hidden scroll-m-2">
          {testimonials.map((item, i) => (
            <ReviewCard key={i} item={item} ind={i} />
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

export default Testimonials;
