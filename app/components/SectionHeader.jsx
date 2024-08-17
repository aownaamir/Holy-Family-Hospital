import React from "react";

const SectionHeader = ({ title, children }) => {
  return (
    <div className="px-3 lg:px-10 py-2 bg-mehron-100  flex flex-col gap-5 justify-center items-center mb-10 shadow-lg">
      <h1 className="font-bold text-2xl md:text-4xl text-slate-100">{title}</h1>
      {/* <div className="w-[200px] md:w-[110px] rounded-lg border-2 border-appointment-blue"></div> */}
      <p className="text-center w-[90vw] md:w-[60vw]  text-slate-100">
        {children}
      </p>
    </div>
  );
};

export default SectionHeader;
