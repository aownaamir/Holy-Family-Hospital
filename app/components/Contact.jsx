"use client";
import React, { useState } from "react";
import Hexa2 from "../svgs/Hexa2";
import Input from "./Input";
import SectionHeader from "./SectionHeader";
import { sendContactForm } from "./../lib/api";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, subject, phone, message };
    setIsLoading(true);
    try {
      await sendContactForm(data);
      setName("");
      setEmail("");
      setSubject("");
      setPhone("");
      setMessage("");
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };
  return (
    <div id="contact" className={` relative `}>
      <div className="w-full absolute -z-10 -top-[80px] left-0 overflow-hidden">
        <Hexa2 />
      </div>
      <SectionHeader title="Stay Connect With Us">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <form action="" onSubmit={handleSubmit}>
        <div className="px-3 lg:px-10 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-7 items-start">
            <div className="flex flex-col gap-7 md:gap-5 md:flex-row justify-center items-center">
              <div className="flex flex-col gap-7 justify-center items-center">
                <Input
                  type="text"
                  label="Full Name"
                  placeholder="Ahmed"
                  value={name}
                  setter={setName}
                />
                <Input
                  type="text"
                  label="Subject"
                  placeholder="Write subject"
                  value={subject}
                  setter={setSubject}
                />
              </div>
              <div className="flex flex-col gap-7 justify-center items-center">
                <Input
                  type="text"
                  label="Email Address"
                  placeholder="example@gmail.com"
                  value={email}
                  setter={setEmail}
                />
                <Input
                  type="text"
                  label="Phone"
                  placeholder="+92 300 1234562"
                  value={phone}
                  setter={setPhone}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="">Message</label>
              <textarea
                type="text/area"
                className="w-full md:w-[720px] lg:w-[860px] border border-slate-500 rounded-md px-3 py-2"
                placeholder="Write something here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-end gap-5">
              <button
                className="w-32 h-12 text-white bg-mehron-100 rounded-lg font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
              {error && <p className="text-mehron-100">{error}</p>}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
