import React from "react";
import bg from "@/public/hfh.jpeg";

const Back = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      Back
    </div>
  );
};

export default Back;
