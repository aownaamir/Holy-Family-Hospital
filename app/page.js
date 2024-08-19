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
import Back from "./components/Back";

export default function Home() {
  return (
    <div className="bg-white">
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
      {/* <Back /> */}
    </div>
  );
}
