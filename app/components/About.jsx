"use client";
import SectionHeader from "./SectionHeader";
import { aboutUsCards } from "@/data/data";
import AboutUsCard from "./AboutUsCard";
import Phone from "../svgs/Phone";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function About() {
  const handleLeft = () => {
    // if (position < -238) return;
    if (positionLg < -223) return;
    setPositionLg((pV) => {
      console.log(pV - 112);
      return pV - 112;
    });
  };
  const handleRight = () => {
    if (positionLg > 223) return;
    setPositionLg((pV) => {
      console.log(pV + 112);
      return pV + 112;
    });
  };

  return (
    <div id="about" className="flex flex-col gap-8">
      <SectionHeader title="Who We Are" />
      <div className="px-3 lg:px-10 flex flex-col lg:flex-row gap-6 md:gap-12 justify-center">
        <div className="w-full md:w-[720px] flex flex-col justify-center items-start gap-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="md:w-full text-2xl text-mehron-100 font-bold md:text-left">
              About Holy Family Hospital
            </h1>
            <p className="text-center md:text-justify">
              Holy Family Hospital is a prominent government hospital located in
              Rawalpindi, Pakistan. As one of the largest healthcare facilities
              in the region, we are dedicated to delivering exceptional medical
              care to our patients with a focus on compassion and excellence.
            </p>
            <h1 className="md:w-full text-2xl text-mehron-100 font-bold md:text-left">
              Our Mission
            </h1>
            <p className="text-center md:text-justify">
              Our mission is to provide comprehensive, high-quality healthcare
              services while maintaining a patient-centered approach. We strive
              to enhance the well-being of our community through advanced
              medical practices, education, and outreach.
            </p>
            <h1 className="md:w-full text-2xl text-mehron-100 font-bold md:text-left">
              Our History
            </h1>
            <p className="text-center md:text-justify">
              The roots of Holy Family Hospital trace back to 1909 when nuns
              established St. Catherine&apos;s Hospital in Rawalpindi. The
              hospital was formally established in 1927 by the Christian Mission
              of Philadelphia and relocated to its current site in Satellite
              Town in 1946. Following the partition of India in 1948, the
              hospital continued its mission under new circumstances. In 1977,
              it was donated to the Government of Punjab, marking a new chapter
              in its history.
            </p>
            <h1 className="md:w-full text-2xl text-mehron-100 font-bold md:text-left">
              Our Commitment
            </h1>
            <p className="text-center md:text-justify">
              We are committed to providing high-quality care through our
              dedicated team of healthcare professionals. Our facility is
              supported by the generous contributions of our community,
              reflecting a collective effort to promote health and well-being.
            </p>
          </div>
        </div>
        {/* table */}
        <div className=" flex items-center justify-center">
          <div className="w-[85%]  md:w-[350px] m-auto md:m-0 border h-auto border-mehron-100 flex flex-col justify-center items-center gap-2 py-4 md:py-3">
            <h1 className=" font-bold text-xl text-mehron-100">
              Weekly Timetable
            </h1>
            <div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Monday</p>
                <p>24 Hours</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Tuesday</p>
                <p>24 Hours</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Wednesday</p>
                <p>24 Hours</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Thursday</p>
                <p>24 Hours</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Friday</p>
                <p>24 Hours</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Saturday</p>
                <p>Closed</p>
              </div>
              <div className=" flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-mehron-100">
                <p>Sunday</p>
                <p>24 Hours</p>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <p>Call Now</p>
                <div className="flex">
                  <Phone color="#8C1D1D" size="20px" />
                  &nbsp;
                  <h1 className="text-mehron-100 font-bold">
                    (+92) 334 5296506
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-6 lg:px-10 flex flex-col gap-2">
        <div className="custom-scrollbar w-full m-auto h-full gap-5 flex  whitespace-nowrap  items-center justify-center overflow-x-scroll overflow-y-hidden scroll-m-2">
          {aboutUsCards.map((item, i) => (
            <AboutUsCard key={i} item={item} />
          ))}
        </div>
        <div className="w-full flex justify-between text-mehron-100 text-xl">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default About;
