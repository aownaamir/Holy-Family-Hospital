"use client";
import Department from "@/app/components/Department";
import Doctors from "@/app/components/Doctors";
import Navbar from "@/app/components/Navbar";
import Gallery from "@/app/components/Gallery";
import Contact from "@/app/components/Contact";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Appointment from "./components/Appointment";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  // const [scrolled, setScrolled] = useState("false");
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     // setScrolled(window.scrollY > 0);
  //     window.scrollY < 1000 ? setScrolled("true") : setScrolled("false");
  //     // console.log(scrollY);
  //     console.log(scrolled);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", () => setScrolled(false));
  //   };
  // }, [scrolled]);
  return (
    <div className="bg-slate-100 overflow-hidden">
      <Navbar />
      <HomePage />
      <About />
      <Department />
      <Appointment />
      <Doctors />
      <Gallery />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
