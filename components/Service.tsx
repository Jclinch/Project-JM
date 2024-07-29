"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { SkillsCard } from "./services-card";

export function Skills() {
  return (
    <div className="relative w-full overflow-hidden bg-[#030303] flex flex-col items-center justify-center h-[650px] mt-[-150px]"> {/*z-[-10]*/}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center z-50 md:z-50 mt-[80px] md:mt-0 mb-[-40px] md:mb-0" >Skills</h1>

      <div className="absolute inset-0 w-full h-full bg-[#030303] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="w-full px-4 md:px-0 md:w-auto"> {/* Wrapper to apply responsive padding */}
        <div className="p-4 md:p-6 w-full md:w-auto mx-auto md:mx-0 flex justify-center md:justify-start"> {/* Adjust padding, width, and alignment for mobile */}
          <SkillsCard /> 
        </div>
      </div>
    </div>
  );
}

