import { testimonials } from "@/data/data";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ item, ind }) => {
  return (
    <div
      className={`w-[99%] md:w-[47.85%] lg:w-[31.7%] xl:w-[32.15%]
translate-x-[984.6px]  md:translate-x-[727.5px] lg:translate-x-[480px] xl:translate-x-[608px] h-[350px] py-8 px-6 rounded-md flex-none relative border border-mehron-100 flex flex-col gap-1 items-center justify-center hover:shadow-2xl transition-all duration-300  mb-3`}
    >
      <div>
        <Image
          src={item.img}
          alt={item.name}
          className="w-[70px] h-1w-[70px]"
        />
      </div>
      <h1 className="font-semibold ">{item.name}</h1>
      <p className="">{item.role}</p>
      <p className="w-full  mt-3 whitespace-normal text-center">
        {item.review}
      </p>
      <p className="commas  opacity-0 transition-all duration-700 h-20 absolute text-[100px] text-mehron-100 right-1 bottom-0 font-extrabold">
        &quot;
      </p>
    </div>
  );
};

export default ReviewCard;
