import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
export const metadata: Metadata = {
  title: "CodelessTCR",
  description: "Codel",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <div className="relative min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-400/30 blur-[100px]" />
        <div className="absolute top-40 right-20 h-96 w-96 rounded-full bg-green-400/30 blur-[100px]" />
        <div className="absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-green-300/30 blur-[100px]" />
        
        <Hero />
        <Features />
        <AboutSectionOne />
        <AboutSectionTwo />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
