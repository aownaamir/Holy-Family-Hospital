import React from "react";

const AboutUsCard = ({ item }) => {
  return (
    <div
      className={`w-[99%] md:w-[47.85%] lg:w-[31.82%] xl:w-[32.15%] flex-none z-10  h-[300px] border-2 border-white bg-mehron-100  rounded-lg shadow-md transition-all duration-300 hover:shadow-xl flex flex-col justify-center items-center gap-3 translate-x-[1180px]  md:translate-x-[910.2px] lg:translate-x-[639px] xl:translate-x-[810.5px]`}
    >
      <div className="w-20 h-20 rounded-full flex justify-center items-center bg-white -z-10">
        <div className="w-12 z-10">
          <item.img color="#8C1D1D" size="50px" />
        </div>
      </div>
      <h1 className="font-semibold text-white">{item.title}</h1>
      <p className="w-[230px] text-white  text-center whitespace-normal">
        {item.description}
      </p>
    </div>
  );
};

export default AboutUsCard;
