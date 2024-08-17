import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mt-14 py-2 px-3 lg:px-10 flex justify-center items-center bg-mehron-100">
      <div className="flex flex-col md:flex-row  gap-7 md:gap-0 ">
        <div className=" w-full md:w-[20%] m-auto flex flex-col justify-center items-start gap-8">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <p>
            Lorem ipsum dolor sit consectet adipisicing sed do eiusmod temp
            incididunt ut labore. Lorem Ipsum is simply dummy.
          </p>
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
        <div className=" w-full md:w-[20%] m-auto flex flex-col justify-center items-start gap-8">
          <h2 className="text-white text-xl font-semibold border-b-[1.5px] border-slate-300 pb-2">
            Useful Links
          </h2>
          <ul className="flex flex-col gap-7">
            <li>FAQS</li>
            <li>Blog</li>
            <li>Weekly timetable</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className=" w-full md:w-[20%] m-auto flex flex-col justify-center items-start gap-8">
          <h2 className="text-white text-xl font-semibold border-b-[1.5px] border-slate-300 pb-2">
            Departments
          </h2>
          <ul className="flex flex-col gap-7">
            <li>Rehabilitation</li>
            <li>Laboratory Analyses</li>
            <li>Face Lift Surgery</li>
            <li>Liposuction</li>
          </ul>
        </div>
        <div className=" w-full md:w-[20%] m-auto flex flex-col justify-center items-start gap-[23px]">
          <h2 className="text-white text-xl font-semibold border-b-[1.5px] border-slate-300 pb-2">
            Contacts
          </h2>
          <div className="flex">
            <h3 className="font-semibold test-slate-900">Address:&#160;</h3>
            <p className="">21 Street 32 Plaza ABC Islamabas Pakistan</p>
          </div>
          <div className="flex">
            <h3 className="font-semibold test-slate-900">Email: &nbsp; </h3>
            <p className="">nischinto@Gmail.Com</p>
          </div>
          <div className="flex">
            <h3 className="font-semibold test-slate-900">Phone: &nbsp; </h3>
            <div className="flex flex-col">
              <p>(+01) - 234 567 890</p>
              <p>(+01) - 345 678 901</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
