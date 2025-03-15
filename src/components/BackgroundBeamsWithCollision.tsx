import React from "react";
import { BackgroundBeamsWithCollision as BBWC } from "@/components/ui/background-beams-with-collision";

export default function BackgroundBeamsWithCollision() {
  return (
    <BBWC>  
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        I&apos;m Neel Shah, a <br/>
        <div className="relative mx-auto inline-flex space-x-2 w-max">
          {/* Web */}
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span>Web</span>
          </div>
          {/* Developer */}
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span>Developer</span>
          </div>
        </div>
      </h2>
    </BBWC>
  );
}
