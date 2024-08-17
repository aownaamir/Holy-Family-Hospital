import React from "react";
import Crutches from "../svgs/Crutches";
import Xray from "../svgs/Xray";
import Pulmonary from "../svgs/Pulmonary";
import Cardiology from "../svgs/Cardiology";
import Dental from "../svgs/Dental";
import Brain from "../svgs/Brain";
import Triangle from "../svgs/Triangle";

const Dept = ({ item, currDept, onClick, identity }) => {
  if (item.name === "Crutches")
    return (
      <div
        onClick={onClick}
        className={`ml-[595px] md:ml-[260px] lg:ml-0 min-w-[145px] h-28 md:w-[170px] md:h-28 relative flex flex-col justify-center items-center rounded-md ${
          currDept === identity ? "bg-crutches-900" : "bg-crutches-100"
        } 
        }`}
      >
        <div>
          <Crutches
            size={50}
            color={currDept === identity ? "white" : "#0cb8b6"}
          />
        </div>
        <h2>{item.name}</h2>
        <div
          className={`absolute -bottom-5 ${
            currDept === identity ? "block" : "hidden"
          }`}
        >
          <Triangle size={25} color="#0cb8b6" />
        </div>
      </div>
    );
  else if (item.name === "X-ray")
    return (
      <div
        onClick={onClick}
        className={`min-w-[145px] h-28 md:w-[170px] md:h-28 relative flex flex-col justify-center items-center rounded-md ${
          currDept === identity ? "bg-xray-900" : "bg-xray-100"
        } `}
      >
        <div>
          <Xray size={50} color={currDept === identity ? "white" : "#e6492d"} />
        </div>
        <h2>{item.name}</h2>
        <div
          className={`absolute -bottom-5 ${
            currDept === identity ? "block" : "hidden"
          }`}
        >
          <Triangle size={25} color="#e6492d" />
        </div>
      </div>
    );
  else if (item.name === "Pulmonary")
    return (
      <div
        onClick={onClick}
        className={`min-w-[145px] h-28 md:w-[170px] md:h-28 relative flex flex-col justify-center items-center rounded-md ${
          currDept === identity ? "bg-pulmonary-900" : "bg-pulmonary-100"
        }`}
      >
        <div>
          <Pulmonary
            size={50}
            color={currDept === identity ? "white" : "#37af47"}
          />
        </div>
        <h2>{item.name}</h2>
        <div
          className={`absolute -bottom-5 ${
            currDept === identity ? "block" : "hidden"
          }`}
        >
          <Triangle size={25} color="#37af47" />
        </div>
      </div>
    );
  else if (item.name === "Cardiology")
    return (
      <div
        onClick={onClick}
        className={`min-w-[145px] h-28 md:w-[170px] md:h-28 relative flex flex-col justify-center items-center rounded-md ${
          currDept === identity ? "bg-cardiology-900" : "bg-cardiology-100"
        } `}
      >
        <div>
          <Cardiology
            size={50}
            color={currDept === identity ? "white" : "#1665d8"}
          />
        </div>
        <h2>{item.name}</h2>
        <div
          className={`absolute -bottom-5 ${
            currDept === identity ? "block" : "hidden"
          }`}
        >
          <Triangle size={25} color="#1665d8" />
        </div>
      </div>
    );
  else if (item.name === "Dental Care")
    return (
      <div
        onClick={onClick}
        className={`min-w-[145px] h-28 md:w-[170px] md:h-28 relative flex flex-col justify-center items-center rounded-md ${
          currDept === identity ? "bg-dental-900" : "bg-dental-100"
        } `}
      >
        <div>
          <Dental
            size={50}
            color={currDept === identity ? "white" : "#f6ab2f"}
          />
        </div>
        <h2>{item.name}</h2>
        <div
          className={`absolute -bottom-5 ${
            currDept === identity ? "block" : "hidden"
          }`}
        >
          <Triangle size={25} color="#f6ab2f" />
        </div>
      </div>
    );
  else if (item.name === "Neurology")
    return (
      <div
        onClick={onClick}
        className={`min-w-[145px] h-28 md:w-[170px] md:h-28 relative flex flex-col justify-center items-center rounded-md ${
          currDept === identity ? "bg-neurology-900" : "bg-neurology-100"
        } mr-[20px] lg:mr-0`}
      >
        <div>
          <Brain
            size={70}
            color={currDept === identity ? "white" : "#9ea0a5"}
          />
        </div>
        <h2>{item.name}</h2>
        <div
          className={`absolute -bottom-5 ${
            currDept === identity ? "block" : "hidden"
          }`}
        >
          <Triangle size={25} color="#9ea0a5" />
        </div>
      </div>
    );
};

export default Dept;
