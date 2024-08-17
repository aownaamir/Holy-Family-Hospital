import React from "react";
import Hexa2 from "../svgs/Hexa2";
import Input from "./Input";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <div id="contact" className={` relative `}>
      <div className="w-full absolute -z-10 -top-[80px] left-0 overflow-hidden">
        <Hexa2 />
      </div>
      <SectionHeader title="Stay Connect With Us">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <form action="">
        <div className="px-3 lg:px-10 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-7 items-start">
            <div className="flex flex-col gap-7 md:gap-5 md:flex-row justify-center items-center">
              <div className="flex flex-col gap-7 justify-center items-center">
                <Input type="text" label="Full Name" placeholder="Ahmed" />
                <Input
                  type="text"
                  label="Subject"
                  placeholder="Write subject"
                />
              </div>
              <div className="flex flex-col gap-7 justify-center items-center">
                <Input
                  type="text"
                  label="Email Address"
                  placeholder="example@gmail.com"
                />
                <Input
                  type="text"
                  label="Phone"
                  placeholder="+92 300 1234562"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="">Message</label>
              <textarea
                type="text/area"
                className="w-full md:w-[860px] border border-slate-500 rounded-md px-3 py-2"
                placeholder="Write something here..."
              />
            </div>
            <button className="w-32 h-12 text-white bg-mehron-100 rounded-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
