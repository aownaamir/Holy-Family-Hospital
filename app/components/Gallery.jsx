import { gallery } from "@/data/data";
import Image from "next/image";
import React from "react";
import SectionHeader from "./SectionHeader";

const Gallery = () => {
  return (
    <div id="gallery" className="mt-[80px]">
      <SectionHeader title="View Our Gallery">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <div className="px-3 lg:px-10 w-full flex gap-2 flex-col justify-center items-center">
        <div className="flex gap-8 flex-wrap justify-center items-center">
          {[
            "All",
            "Cardiology",
            "Neurology",
            "Urology",
            "Pulmonary",
            "Traumatology",
          ].map((item, i) => (
            <div key={i} className="font-bold text-slate-100">
              {item}
            </div>
          ))}
        </div>
        <div className="w-full border border-slate-300"></div>
      </div>
      <div className="px-3 lg:px-10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {gallery.map((item, i) => (
          <div key={i} className="relative overflow-hidden">
            <div className="zoom hover:scale-110 duration-300">
              <div className="blur w-full h-full absolute z-10  bg-black opacity-0 duration-300"></div>
              <div className="flag w-14 h-36 rounded-full  z-20 absolute right-8 top-0 bg-mehron-100 opacity-100 -translate-y-36 duration-300 transition-all ">
                <div className="h-[134px] flex flex-col justify-between items-center">
                  <div className="bg-mehron-100 w-full h-10"></div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    🔅
                  </div>
                </div>
              </div>
              <Image
                src={item}
                alt={`gallary-img-${item}`}
                className="w-full h-full z-10  cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
