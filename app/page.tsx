import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { FlipWordsDemo } from "@/components/HeroHeader";
import { Service } from "@/components/Service";
import { AboutUs } from "@/components/AboutUs";
import { Portfolio } from "@/components/Portfolio";
import { OurClients } from "@/components/OurClients";
import { GetInTouch } from "@/components/GetInTouch";
import Contact from "@/components/Contact";
import "@/components/styles/portfolioButton.css";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <FlipWordsDemo />
      </div>
      <div className="service-section mt-[100px]">
        {/* <h1 className="text-2xl md:text-5xl font-extrabold text-black text-center">Our Services</h1> */}
        <Service />
      </div>
      <div className="mb-28">
        <h1 className="mt-[60px] mb-12 text-center font-extrabold text-3xl md:text-5xl text-[#f25f4c]">
          Portfolio
        </h1>
        <Portfolio />
      </div>
      <div>
        <AboutUs />
      </div>
      <div className="mb-4">
        <h1 className="mt-8 mb-4 text-center font-extrabold text-3xl md:text-5xl text-[#f25f4c]">
          Our Clients
        </h1>
        <OurClients />
      </div>
      <div className=" bg-slate-200 py-2">
        <h1 className="mt-8 mb-4 text-center font-extrabold text-3xl md:text-5xl text-[#f25f4c] ">
          Get in touch
        </h1>
        <GetInTouch />
      </div>
      <div className="bg-[#f25f4c] px-4 md:px-0 pb-2">
        <h1 className="pt-8 mb-4 text-center font-extrabold text-3xl md:text-5xl text-black">
          Contact Us
        </h1>
        <Contact />
      </div>
      <div >
        <Footer />
      </div>
    </>
  );
}
