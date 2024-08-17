import avatar from "@/public/avatar.png";
import call from "@/public/call.png";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
function About() {
  return (
    <div id="about" className="mt-[80px]">
      <SectionHeader title="Who We Are">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum the industry&apos;s standard dummy text.
      </SectionHeader>
      <div className="px-3 lg:px-10 flex flex-col md:flex-row gap-6 md:gap-12 justify-center">
        <div className="w-full md:w-[720px] flex flex-col justify-center items-start gap-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-mehron-100 font-semibold text-2xl md:text-4xl text-center md:text-left">
              A hospital is a health care institution providing patient
              treatment with specialized medical
            </h1>
            <p className=" text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut
              aliquip. Commodo consequat.
            </p>
            <p className=" text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut
              aliquip. Commodo consequat. Sed do eiusmod tempor incidid unt
              labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <div className="rounded-full">
              <Image src={avatar} alt="avatar" width={70} />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-xl text-mehron-100">David Ambrose</p>
              <p className="">Founder & Director</p>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="border py-7 md:p-4 bg-red-50">
          <div className="w-[85%] md:w-[350px] m-auto md:m-0 border border-mehron-100 flex flex-col justify-center items-center gap-2 py-4 md:py-0">
            <h1 className=" font-bold text-xl text-mehron-100">
              Weekly Timetable
            </h1>
            <div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Monday</p>
                <p>8:00am-7:00pm</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Tuesday</p>
                <p>9:00am-6:00pm</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Wednesday</p>
                <p>9:00am-6:00pm</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Thursday</p>
                <p>8:00am-7:00pm</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Friday</p>
                <p>9:00am-6:00pm</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Saturday</p>
                <p>8:00am-7:00pm</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Sunday</p>
                <p>9:00am-3:00pm</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <Image src={call} alt="call" width={30} />
              </div>
              <div className="flex flex-col ">
                <p>Call Now</p>
                <h1 className="text-mehron-100 font-bold">
                  (+01) - 234 567 890
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
