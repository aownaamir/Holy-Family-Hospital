import React from "react";

const Input = ({ type, label, placeholder, value, setter }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="w-full md:w-[350px] lg:w-[420px] border border-slate-500 rounded-md px-3 py-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
