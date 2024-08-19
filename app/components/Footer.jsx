import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" mt-14 pt-14  flex flex-col justify-center items-center bg-mehron-100 overflow-hidden">
      <div className="px-3 lg:px-10 flex flex-col md:flex-row md:gap-4 lg:gap-10">
        <div className=" w-full md:w-[20%] h-[350px] flex flex-col justify-start items-center mb-[150px] md:mb-0">
          <div>
            <Image src={logo} alt="logo" />
          </div>

          <div className="flex gap-2">
            <div className="p-1 flex justify-center items-center rounded-sm bg-white text-mehron-100">
              <FaInstagram />
            </div>
            <div className="p-1 flex justify-center items-center rounded-sm bg-white text-mehron-100">
              <FaLinkedinIn />
            </div>
            <div className="p-1 flex justify-center items-center rounded-sm bg-white text-mehron-100">
              <FaWhatsapp />
            </div>
            <div className="p-1 flex justify-center items-center rounded-sm bg-white text-mehron-100">
              <CiFacebook />
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[20%] h-[350px] flex flex-col justify-start items-center md:items-start gap-8">
          <h2 className="text-white text-xl font-semibold border-b-[1.5px] border-white pb-2">
            Useful Links
          </h2>
          <ul className="flex flex-col gap-7 text-white">
            <li>FAQS</li>
            <li>Blog</li>
            <li>Weekly timetable</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className=" w-full md:w-[20%] h-[350px] flex flex-col justify-start items-center md:items-start gap-8">
          <h2 className="text-white text-xl font-semibold border-b-[1.5px] border-white pb-2">
            Departments
          </h2>

          <ul className="flex flex-col gap-7 text-white">
            <li>Sonology</li>
            <li>Dermatology</li>
            <li>Gastroenterology</li>
            <li>Ophthalmology</li>
          </ul>
        </div>
        <div className="w-full md:w-[20%] h-[350px] flex flex-col justify-start items-center md:items-start gap-8 text-white">
          <h2 className=" text-xl font-semibold border-b-[1.5px] border-white pb-2">
            Contacts
          </h2>
          <div className="w-[300px] md:w-[210px] lg:w-[280px] xl:w-[320px] grid grid-cols-3 xl:grid-cols-4 gap-y-7">
            <h3>Address:</h3>
            <p className="col-span-2 xl:col-span-3">
              Holy Family Rd, Block F Block E Satellite Town, Rawalpindi, Punjab
            </p>
            <h3>Email:</h3>
            <p className="col-span-2 xl:col-span-3">holyfamhos@gmail.com</p>
            <h3>Phone:</h3>
            <div className="col-span-2 xl:col-span-3">
              <p>(+92) 334 5296506</p>
              <p>0334 5296506</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-3 lg:px-10 bg-red-900 py-7 flex items-center justify-center">
        <p className="text-white text-sm">
          EMRChains pvt (ltd) {year} © All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
