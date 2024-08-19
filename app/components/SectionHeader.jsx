import React from "react";

const SectionHeader = ({ title, children }) => {
  return (
    <div className="px-3 lg:px-10 py-4 bg-mehron-100  flex flex-col gap-5 justify-center items-center mb-10 shadow-lg">
      <h1 className="font-bold text-2xl md:text-4xl text-white">{title}</h1>
    </div>
  );
};

export default SectionHeader;
