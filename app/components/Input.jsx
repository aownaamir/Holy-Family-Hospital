import React from "react";

const Input = ({ type, label, placeholder }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className="w-[420px] border border-slate-500 rounded-md px-3 py-2"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
